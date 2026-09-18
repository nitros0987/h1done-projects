/* Headless checks for the talk deck: launcher, decks, notes, cleanups. */
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("/home/agent/h1done/node_modules/jsdom");

const ROOT = "/home/agent/Documents/h1done-projects/talk";
const APP = fs.readFileSync(path.join(ROOT, "app.js"), "utf8");
const HTML = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

let pass = 0, fail = 0;
const ok = (name, cond) => { if (cond) { pass++; } else { fail++; console.log("  FAIL:", name); } };

function boot(search, session) {
  const vc = new VirtualConsole();
  const dom = new JSDOM(HTML.replace(/<script[^>]*><\/script>/g, ""), {
    url: "http://localhost:8777/talk/" + (search || ""),
    pretendToBeVisual: true,
    runScripts: "outside-only",
    virtualConsole: vc,
  });
  const w = dom.window;
  // stubs the deck touches
  const published = [];
  let onMessage = null;
  w.mqtt = {
    connect() {
      const c = {
        handlers: {},
        on(ev, fn) { c.handlers[ev] = fn; if (ev === "message") onMessage = fn; },
        subscribe(t, cb) { cb && cb(); },
        publish(t, p) { published.push([t, p]); },
      };
      setTimeout(() => c.handlers.connect && c.handlers.connect(), 0);
      return c;
    },
  };
  w.fetch = () => Promise.resolve({ text: () => Promise.resolve("/* css */") });
  w.navigator.clipboard = { writeText: () => Promise.resolve() };
  const navigations = [];
  // jsdom's location is non-configurable and cannot navigate: shadow it for the app
  w.__loc = {
    origin: "http://localhost:8777",
    pathname: "/talk/",
    search: search || "",
    href: "http://localhost:8777/talk/" + (search || ""),
    replace(u) { navigations.push(u); },
  };
  Object.entries(session || {}).forEach(([k, v]) => w.sessionStorage.setItem(k, v));
  w.eval("(function(location){\n" + APP + "\n})(window.__loc)");
  return { w, d: w.document, navigations, published, msg: (o) => onMessage && onMessage("t", Buffer.from(JSON.stringify(o))) };
}

const click = (d, sel) => d.querySelector(sel).dispatchEvent(new d.defaultView.MouseEvent("click", { bubbles: true }));

console.log("— launcher —");
{
  const { d, navigations } = boot("");
  ok("gate renders", !!d.querySelector(".gate-card"));
  ok("talk chooser has both talks", d.querySelectorAll("#pick-talk .pick").length === 2);
  ok("device chooser has both roles", d.querySelectorAll("#pick-role .pick").length === 2);
  ok("study talk preselected", d.querySelector('#pick-talk .pick[data-aud="students"]').classList.contains("active"));
  ok("present preselected", d.querySelector('#pick-role .pick[data-role="presenter"]').classList.contains("active"));
  ok("passphrase field shown when not authed", !!d.querySelector("#pw"));
  ok("build stamp shown", /build 20260918a/.test(d.querySelector(".gate-build").textContent));

  // wrong passphrase
  d.querySelector("#pw").value = "wrong";
  click(d, "#gate-go");
  ok("wrong passphrase rejected", /Not the passphrase/.test(d.querySelector("#gate-err").textContent));
  ok("no navigation on wrong passphrase", navigations.length === 0);

  // pick teacher talk → wordmark follows
  click(d, '#pick-talk .pick[data-aud="teachers"]');
  ok("wordmark follows the picked talk", d.querySelector("#gate-word").textContent === "projects");
  d.querySelector("#pw").value = "Ballybunion";
  click(d, "#gate-go");
  ok("teacher choice rewrites the URL", navigations[0] === "/talk/?audience=teachers");
}
{
  const { d, navigations } = boot("");
  click(d, '#pick-role .pick[data-role="remote"]');
  d.querySelector("#pw").value = "ballybunion";
  click(d, "#gate-go");
  ok("remote choice rewrites the URL", navigations[0] === "/talk/?view=remote");
}
{
  const { d, navigations } = boot("");
  click(d, '#pick-talk .pick[data-aud="teachers"]');
  click(d, '#pick-role .pick[data-role="remote"]');
  d.querySelector("#pw").value = "ballybunion";
  click(d, "#gate-go");
  ok("teacher + phone remote lands on the teacher channel URL", navigations[0] === "/talk/?audience=teachers&view=remote");
}
{
  const { d } = boot("?audience=teachers", { "h1talk-auth": "1" });
  ok("authed re-entry skips the passphrase", !d.querySelector("#pw") || d.querySelector(".deck-stage"));
}

{
  const { w } = boot("", { "h1talk-auth": "1", "h1talk-role": "presenter", "h1talk-audience": "teachers" });
  ok("a plain link is always the student talk", w.document.title === "H1Done study — student talk");
}

console.log("— student deck —");
{
  const { w, d } = boot("", { "h1talk-auth": "1", "h1talk-role": "presenter", "h1talk-audience": "students" });
  ok("deck renders", !!d.querySelector(".deck-stage"));
  ok("tab title names the student talk", w.document.title === "H1Done study — student talk");
  ok("title slide is the student one", /Study smarter with AI/.test(d.querySelector(".slide").textContent));
  ok("the sticky is gone", d.querySelectorAll(".todo-card").length === 0);
  ok("no fill-before-Friday leftovers", !/Fill before Friday/.test(d.body.innerHTML));
  ok("why-example line is gone", d.querySelectorAll(".why-example").length === 0 && !/WHY_EXAMPLE/.test(d.body.innerHTML));
  ok("why slide still has both columns", d.querySelectorAll(".why-col").length === 2);
  ok("switch-talk button present", !!d.querySelector("#switch-btn"));
  const close = Array.from(d.querySelectorAll(".slide")).pop();
  ok("close slide carries the survey QR", /quickchart\.io\/qr/.test(close.innerHTML));
  ok("close QR points at the post-quiz form", /1FAIpQLSeGLF6V07T47lQEOuy48l7LpZbYZ7NF46YqR1EOuN1cPFZAPQ/.test(close.innerHTML));
  ok("close slide sells the quiz, not a survey", /Open the quiz/.test(close.innerHTML) && /2-minute quiz/.test(close.textContent));
  ok("no placeholder QR left", !/paste survey URL in CONFIG/.test(d.body.innerHTML));
  ok("switch button returns to the launcher", (click(d, "#switch-btn"), !!d.querySelector(".gate-card")));
}

console.log("— teacher deck —");
{
  const { w, d } = boot("?audience=teachers", { "h1talk-auth": "1", "h1talk-role": "presenter" });
  ok("teacher deck renders", /The 40% process/.test(d.querySelector(".slide").textContent));
  ok("tab title names the teacher talk", w.document.title === "H1Done projects — teacher talk");
  ok("teacher sticky is gone", d.querySelectorAll(".todo-card").length === 0);
  ok("teacher close QR present", /quickchart\.io\/qr/.test(Array.from(d.querySelectorAll(".slide")).map(s => s.innerHTML).join("")));
  ok("teacher survey URL on the close slide", /1FAIpQLSfwg6XHJ4PA62fCXf-5-RNl0U-2OQvERIka2IkWdQm80yGigw/.test(d.body.innerHTML));
}

console.log("— presenter notes (phone remote) —");
{
  const { d, msg } = boot("?view=remote", { "h1talk-auth": "1", "h1talk-role": "remote", "h1talk-audience": "students" });
  ok("remote renders", !!d.querySelector(".remote"));
  ok("remote switch button", !!d.querySelector("#r-switch"));
  msg({ type: "state", slide: 0 });
  const n0 = d.querySelector("#r-cards").textContent;
  ok("title-slide notes carry the pre-survey", /pre-survey, 51 answers/.test(n0));
  ok("notes carry the study-hours split", /59% under 5/.test(n0));
  ok("notes carry the #1 ask", /a system that tells me what to do next' 47%/.test(n0));
  msg({ type: "state", slide: 4 });
  const n4 = d.querySelector("#r-cards").textContent;
  ok("why slide notes say the why-line is verbal", /YOUR OWN WHY-LINE IS VERBAL/.test(n4));
  ok("why slide notes carry the motivation stat", /MOTIVATION was the #1 ask for 41%/.test(n4));
  msg({ type: "state", slide: 6 });
  ok("memorise notes carry the re-reading stat", /82% said re-reading/.test(d.querySelector("#r-cards").textContent));
  msg({ type: "state", slide: 11 });
  const n9 = d.querySelector("#r-cards").textContent;
  ok("close notes describe the post-quiz", /POST-QUIZ/.test(n9) && /passphrase \(ballybunion\)/.test(n9));
}

console.log("— assets —");
{
  ok("index.html busts the js cache", /app\.js\?v=20260918a/.test(HTML));
  ok("index.html busts the css cache", /talk\.css\?v=20260918a/.test(HTML));
  ok("no-cache meta present", /http-equiv="Cache-Control"/.test(HTML));
  ok("neutral tab title in HTML", /<title>H1Done — school talk<\/title>/.test(HTML));
  const css = fs.readFileSync(path.join(ROOT, "talk.css"), "utf8");
  ok("launcher styles present", /\.gate-pick \.pick\.active/.test(css));
  ok("sticky styles removed", !/\.todo-card/.test(css));
}

console.log("\n" + pass + " passed, " + fail + " failed");
process.exit(fail ? 1 : 0);
