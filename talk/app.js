/* H1Done Talk — deck platform + phone remote.
   One codebase: presenter deck (default), phone remote (?view=remote).
   Teacher deck: ?audience=teachers (stubs for now). Sync: public MQTT over WSS. */

/* ================= CONFIG — edit these in one place ================= */
const CONFIG = {
  PASSWORD: "ballybunion",
  // topic channel for laptop<->phone sync (long random suffix = privacy on a public broker)
  CHANNEL_ID: "h1talk-ballybunion-2026-09-18-7f3k",
  MQTT_URL: "wss://broker.emqx.io:8084/mqtt",
  // DEMO link on slides + QR. Plain public URL — no key in the repo (paste ?key= in Settings on the venue laptop).
  DEMO_URL: "https://nitros0987.github.io/h1done-projects/",
  // Leave '' to show a fill-later placeholder. Paste the post-survey form link and the QR renders itself.
  SURVEY_URL: "",
  // Leave '' to show a fill-later placeholder (button appears once set).
  PRE_SURVEY_URL: "",
  DATA_NOTE: "Artificial Analysis · Intelligence Index v4.3 · 16 Sep 2026",
};
/* ==================================================================== */

(() => {
  "use strict";

  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

  const state = {
    view: "gate",            // gate | deck | remote
    role: "presenter",
    audience: "students",    // students | teachers
    slide: 0,
    theme: localStorage.getItem("h1talk-theme") || "light",
    mqtt: null,              // client
    connected: false,
    remoteSeen: 0,           // ts of last remote pong (presenter side)
    publishing: false,
  };

  /* ---------------- deck content ---------------- */

  const qr = (url, size) =>
    "https://quickchart.io/qr?text=" + encodeURIComponent(url) + "&size=" + (size || 600);

  const foot = (beat, clock) =>
    '<div class="slide-foot"><span class="beat">' + beat + "</span><span>" + clock +
    '</span><span>H1Done <span class="italic" style="color:var(--crimson)">study</span></span></div>';

  function slideDemo() {
    const survey = CONFIG.SURVEY_URL;
    return (
      '<p class="eyebrow">Live demo</p>' +
      '<h2>One topic. Done <span class="italic crim">with</span> you, not <span class="italic crim">for</span> you.</h2>' +
      '<div class="demo-split">' +
      '<div class="demo-copy">' +
      '<p class="sub" style="margin-bottom:1.6vh">Phones out. Scan, then pick <b>Biology → Enzymes</b>: the board, the grill of five questions, self-mark, your one-line rule — and the spacing ladder that brings you back on days 1 · 3 · 7 · 14 · 30.</p>' +
      '<div class="tools"><span class="tool-chip"><b>Scan</b> — phones out now</span>' +
      '<span class="tool-chip"><b>Watch</b> — big screen follows along</span></div>' +
      '<p class="mut" style="font-size:clamp(11px,1.8vh,15px)">No sign-up. Nothing to install. This is our system — built around the new Leaving Cert.</p>' +
      "</div>" +
      '<div class="qr-box"><img alt="QR code to the live H1Done demo" src="' + qr(CONFIG.DEMO_URL) + '">' +
      '<p class="mut" style="text-align:center;font-size:10px;margin:6px 0 0">' + CONFIG.DEMO_URL.replace("https://", "") + "</p></div>" +
      "</div>"
    );
  }

  function slideClose() {
    const survey = CONFIG.SURVEY_URL;
    return (
      '<p class="eyebrow">Before you go</p>' +
      '<div class="close-tag">&ldquo;Not every AI is the same &mdash; ask <span class="crim">what model</span>, ask <span class="crim">what settings</span>, and know <span class="crim">how I learn</span>.&rdquo;</div>' +
      '<div class="demo-split" style="margin-top:1vh">' +
      '<div class="demo-copy" style="max-width:560px">' +
      '<p class="sub" style="margin-bottom:1.4vh">One last scan: <b>the 2-minute survey</b>. Tell us what to build next — and if you want the free pilot in your school before Christmas, leave your email at the last question.</p>' +
      '<div class="cta-row" style="justify-content:flex-start">' +
      (survey
        ? '<a class="btn" href="' + survey + '" target="_blank" rel="noopener">Open the survey</a>'
        : "") +
      "</div></div>" +
      (survey
        ? '<div class="qr-box"><img alt="QR code to the finish survey" src="' + qr(survey) + '"><p class="mut" style="text-align:center;font-size:10px;margin:6px 0 0">2 minutes — really</p></div>'
        : '<div class="qr-box" style="display:flex;align-items:center;justify-content:center;min-height:150px;border:2px dashed var(--stalled);border-radius:12px"><span class="ph" style="cursor:default">QR — paste post-survey URL in CONFIG</span></div>') +
      "</div>" +
      '<p class="mut" style="font-size:clamp(10px,1.6vh,14px);margin-top:2.4vh">Talk slides + every free tool mentioned: <b>' + CONFIG.DEMO_URL.replace("https://", "") + '</b> &mdash; scan the demo QR and tap <b>Study smarter</b>.</p>'
    );
  }

  function ladderSlide() {
    const rows = [
      { lbl: "Free ChatGPT <small>the default most students use</small>", pct: 65, idx: "16", cls: "f-r" },
      { lbl: "School Copilot <small>what your school login serves</small>", pct: 82, idx: "27", cls: "f-a" },
      { lbl: "Google AI (school) <small>Gemini on your school account</small>", pct: 84, idx: "23", cls: "f-a" },
      { lbl: "ChatGPT + <b>Think</b> <small>same app, one button pressed</small>", pct: 84, idx: "84→", cls: "f-a" },
      { lbl: "GLM-5.3-Flash <small>a free-tier model — the reference point</small>", pct: 91, idx: "42", cls: "f-g" },
    ];
    return (
      '<p class="eyebrow">The same app, four different brains</p>' +
      '<h2>Not all AI is equal. <span class="italic crim">Measured, not marketed.</span></h2>' +
      '<p class="sub">PhD-level science exam (GPQA Diamond) — what each one actually scores. Number on the right: intelligence index.</p>' +
      '<div style="width:100%;max-width:980px">' +
      rows.map(r =>
        '<div class="brow"><div class="lbl">' + r.lbl + '</div>' +
        '<div class="track"><div class="fill ' + r.cls + '" style="width:' + r.pct + '%"></div></div>' +
        '<div class="val">' + r.pct + '% <small>' + r.idx + "</small></div></div>"
      ).join("") +
      "</div>" +
      '<div class="take">Same logo, same chat box &mdash; up to a <b>30-point gap</b> underneath. The intelligence is in the <b>model</b>, not the brand.</div>' +
      '<p class="mut" style="font-size:clamp(9px,1.4vh,12px);margin-top:1.4vh">Data: ' + CONFIG.DATA_NOTE + " · hallucination rates and cost per task on the handout.</p>"
    );
  }

  function slideHook() {
    return (
      '<p class="eyebrow">First — a show of hands</p>' +
      '<h2>Who studied last night? &hellip; Who <span class="italic crim">checked</span> whether it worked?</h2>' +
      '<div class="stats">' +
      '<div class="stat"><div class="big"><span class="bad">16</span> <span class="vs">vs</span> <span class="good">42</span></div><p>Intelligence index — what free ChatGPT serves you by default vs what the same money can buy. The "38" on the poster is a different, max-effort model.</p></div>' +
      '<div class="stat"><div class="big"><span class="bad">65%</span> <span class="vs">vs</span> <span class="good">91%</span></div><p>Score on a PhD-level science exam. The free default gets 1 in 3 expert questions wrong — and answers confidently.</p></div>' +
      '<div class="stat"><div class="big"><span class="bad">75%</span> <span class="vs">vs</span> <span class="good">28%</span></div><p>How often it made things up when wrong. Lower is better. Three out of four misses were invented by the free default.</p></div>' +
      '<div class="stat"><div class="big"><span class="good">$0.25</span> <span class="vs">vs</span> <span class="bad">$7.63</span></div><p>Cost per task. The expensive one is the world &num;1. The cheap one beats everything free — that is the point.</p></div>' +
      "</div>" +
      '<p class="sub" style="margin-bottom:0">Same logo. Same chat box. <b>Up to a 30-point gap</b> in what&rsquo;s underneath.</p>'
    );
  }

  const SLIDES_STUDENTS = [
    {
      beat: "Welcome", clock: "0:00", centered: true,
      notes: ["Stand tall. Let the room settle.", "Title on screen as they come in.", "Name the four numbers BEFORE this slide? No — slide 2 does it."],
      html: () =>
        '<div class="title-brand">H1Done <span>study</span></div>' +
        '<div class="title-rule"></div>' +
        '<h1>Study smarter with AI.<br>Not harder.</h1>' +
        '<p class="sub">The new Leaving Cert &middot; the 40% projects &middot; the four techniques that actually move marks.</p>' +
        '<p class="mut" style="font-size:clamp(10px,1.7vh,14px)">St Joseph&rsquo;s, Ballybunion &middot; 5th &amp; 6th Year</p>',
    },
    {
      beat: "1 · Hook", clock: "0:00–3:00",
      notes: ["Show of hands: studied last night? Checked whether it worked?", "The 16-vs-42 story: same logo, same chat box — 30-point gap underneath.", "Name the four numbers slowly: 16/42 · 65/91 · 75/28 · $0.25/$7.63.", "Do NOT explain indexes — one line each, move on."],
      html: slideHook,
    },
    {
      beat: "1 · Hook (contd)", clock: "~2:00",
      notes: ["This is the measured data behind the four numbers.", "Point at the ladder: free default 65% → school tools 82–84% → same app with THINK 84% → 91% reference.", "Line: the intelligence is in the model, not the brand.", "Seed the tagline: ask what model, ask what settings."],
      html: ladderSlide,
    },
    {
      beat: "2 · Make them care", clock: "3:00–7:00",
      notes: ["The LC quietly moved: 40% of your grade = projects done at home, with AI in the room.", "Biology project now — Engineering next year = 50%. Half your grade before you sit the paper.", "You already compete against people using AI. Use it well, or it uses you.", "Marks are moving from memory → method."],
      html: () =>
        '<p class="eyebrow">What changed while you were studying the old way</p>' +
        '<h2>Up to <span class="crim">40%</span> of your Leaving Cert is now a project &mdash; done at home.</h2>' +
        '<div class="stats" style="grid-template-columns:repeat(3,1fr)">' +
        '<div class="stat"><div class="big">40%</div><p>Biology (AAC): the investigation + report, done in your own time, with AI in every pocket.</p></div>' +
        '<div class="stat"><div class="big">50%</div><p>Engineering next year: Design &amp; Manufacture project — the biggest coursework weight in the LC.</p></div>' +
        '<div class="stat"><div class="big">2027</div><p>First examined: the new spec you are sitting. Half your grade is decided before exam day.</p></div>' +
        "</div>" +
        '<p class="sub" style="margin-bottom:0">The rules changed: the SEC allows AI for <b>research and planning</b> &mdash; never to write your words. The winners learn <b>method</b>, not memory.</p>',
    },
    {
      beat: "3 · Write your why", clock: "7:00–12:00",
      notes: ["Two columns. Silence. Pens down rule.", "Left: if I hit my points, my life looks like… Right: if I don't, it costs me…", "Then one line each: result · why · first step tonight.", "QUOTE: motivation isn't a talk — it's a sentence you wrote yourself.", "Fill your own example line in CONFIG before Friday (medicine why)."],
      html: () =>
        '<p class="eyebrow">Before any technique &mdash; 4 minutes, silence, pens down</p>' +
        '<h2>Write your own <span class="italic crim">why</span>.</h2>' +
        '<div class="why-grid">' +
        '<div class="why-col win"><h3><span class="mark">✓</span>If I hit my points&hellip;</h3><div class="why-line"></div><div class="why-line"></div><div class="why-line"></div></div>' +
        '<div class="why-col cost"><h3><span class="mark">✗</span>If I don&rsquo;t, it costs me&hellip;</h3><div class="why-line"></div><div class="why-line"></div><div class="why-line"></div></div>' +
        "</div>" +
        '<div class="why-example"><span class="lab">One line, like this (fill before Friday)</span><span class="ph-inline" id="why-example-line">My why goes here — [WHY_EXAMPLE] in CONFIG</span></div>',
    },
    {
      beat: "4 · Techniques", clock: "12:00–14:00", num: "1",
      notes: ["Active recall: close the book, write what you know. Pain = working.", "Free tools: ChatGPT free 'quiz me, one at a time' · AI Studio paste notes → questions · NotebookLM quiz from YOUR sources."],
      html: () =>
        '<div class="tech-head"><span class="tech-num">1</span><h2>Active recall &mdash; close the book</h2></div>' +
        '<p class="sub">Re-reading feels productive and isn&rsquo;t. Pulling it out of your head &mdash; that&rsquo;s the rep that sticks. If it hurts, it&rsquo;s working.</p>' +
        '<div class="tools"><span class="tool-chip"><b>ChatGPT free</b> — &ldquo;quiz me, one at a time&rdquo;</span><span class="tool-chip"><b>Google AI Studio</b> — paste notes → questions</span><span class="tool-chip"><b>NotebookLM</b> — quiz from your own sources</span></div>' +
        '<ul class="tech-steps"><li>Read a section once. Book closed.</li><li>Write everything you remember &mdash; dumps, arrows, bad handwriting all count.</li><li>Check the book. What you missed <em>is your study list</em>.</li><li>Then ask the AI to quiz you &mdash; one question at a time, out loud.</li></ul>' +
        '<div class="trap"><b>The trap</b>Asking the AI to summarise. That&rsquo;s reading with extra steps. Make it ask <em>you</em>.</div>',
    },
    {
      beat: "4 · Techniques", clock: "14:00–16:00", num: "2",
      notes: ["Spaced repetition: 5 min today beats 1 hour Sunday. Show the ladder visually if asked.", "Anki — desktop/Android free, FSRS built in.", "Proof-of-life: his own system got him through the LC grind and MRCS last week."],
      html: () =>
        '<div class="tech-head"><span class="tech-num">2</span><h2>Spaced repetition &mdash; come back before you forget</h2></div>' +
        '<p class="sub">Memory fades on a schedule. Beat the fade by reviewing right as it slips: <b>1 · 3 · 7 · 14 · 30 days</b>. Five minutes today beats an hour on Sunday.</p>' +
        '<div class="tools"><span class="tool-chip"><b>Anki</b> — free on desktop &amp; Android, scheduling built in</span></div>' +
        '<ul class="tech-steps"><li>Every wrong answer becomes one small card &mdash; one fact, your words.</li><li>The app shows it again right before you&rsquo;d forget it. Trust the intervals.</li><li>Miss it again? It comes back sooner. That&rsquo;s the system being honest.</li><li>10 minutes daily &gt; 2 hours cramming. Streak beats binge.</li></ul>' +
        '<div class="trap"><b>The trap</b>Making 400 beautiful cards in one night, then never opening them again. Cards are made <em>during</em> study, not instead of it.</div>',
    },
    {
      beat: "4 · Techniques", clock: "16:00–18:00", num: "3",
      notes: ["Feynman: teach it to the wall. If you can't say it simply, you don't have it yet.", "Free tool: ChatGPT voice mode — AI plays the confused student.", "60-second how + the trap."],
      html: () =>
        '<div class="tech-head"><span class="tech-num">3</span><h2>The Feynman test &mdash; teach it to the wall</h2></div>' +
        '<p class="sub">Explain the topic out loud in plain words, as if to a 10-year-old. Where you stall or reach for jargon &mdash; that&rsquo;s exactly where the gap is.</p>' +
        '<div class="tools"><span class="tool-chip"><b>ChatGPT free · voice</b> — explain aloud, it plays the confused student</span></div>' +
        '<ul class="tech-steps"><li>Pick one topic. Set 3 minutes on the timer.</li><li>Explain it aloud &mdash; no notes, no jargon hiding.</li><li>Stuck? <em>Good.</em> That gap is tonight&rsquo;s real study list.</li><li>Voice mode: let it ask &ldquo;why?&rdquo; and &ldquo;what does that mean?&rdquo; like a curious kid.</li></ul>' +
        '<div class="trap"><b>The trap</b>Confusing fluent reading with understanding. Reading feels like knowing. Saying it aloud doesn&rsquo;t lie.</div>',
    },
    {
      beat: "4 · Techniques", clock: "18:00–20:00", num: "4",
      notes: ["Past questions first: the exam is a genre — learn its moves.", "Free tools: paste papers + marking schemes into AI Studio/ChatGPT free → marked with scheme alignment.", "SEC framing: AI may clarify research, never write your words. Acknowledge use."],
      html: () =>
        '<div class="tech-head"><span class="tech-num">4</span><h2>Past questions first &mdash; learn the genre</h2></div>' +
        '<p class="sub">The exam is a genre with its own moves. Practise the real thing early &mdash; then use AI as your marking scheme, not your ghostwriter.</p>' +
        '<div class="tools"><span class="tool-chip"><b>Google AI Studio / ChatGPT free</b> — paste paper + scheme → get marked</span><span class="tool-chip"><b>OpenRouter :free</b> — no-login fallback</span></div>' +
        '<ul class="tech-steps"><li>Attempt a past question cold, timed, before you &ldquo;finish studying&rdquo; the topic.</li><li>Paste your answer + the marking scheme into the AI &mdash; mark it honestly.</li><li>Each miss becomes a one-line rule (next slide&rsquo;s system files those for you).</li><li>In the project: AI may organise your plan and clarify research &mdash; never write your words. The SEC requires you to say exactly how you used it.</li></ul>' +
        '<div class="trap"><b>The trap</b>Reading a model answer and nodding. Nodding is not writing. Attempt first, AI marks after.</div>',
    },
    {
      beat: "5 · Live demo", clock: "20:00–27:00",
      notes: ["Phones OUT. Scan the QR on screen.", "One student does it on the big screen if the room allows.", "Flow: scan → landing → Biology → Enzymes → board → grill of 5 → self-mark → one-line rule → spacing ladder.", "This IS the system: the techniques, webbed into a tool."],
      html: slideDemo,
    },
    {
      beat: "6 · Close", clock: "27:00–30:00",
      notes: ["Tagline slowly, word for word: not every AI is the same — ask what model, what settings, know how I learn.", "The system is ours — free pilot before Christmas via the principal.", "ASK: fill the survey — last question, leave your email.", "Thanks + hold up the handout page."],
      html: slideClose,
    },
  ];

  const SLIDES_TEACHERS = [
    {
      beat: "Teacher deck — stub", clock: "11:15",
      notes: ["Teacher deck stubs — build from the three conversations + Kevin pack."],
      html: () =>
        '<p class="eyebrow">Teacher session</p><h2>Three conversations</h2>' +
        '<div class="stub"><b>STUB —</b> 1 · Integrity (AI never writes report text; verbatim per-stage export + auto AI-use reference) · 2 · Standardisation (one scaffold, auditable, admin shrinks) · 3 · The pilot ask via the principal (free pre-Christmas, back-fill ingest, Workspace/Teams positioning).</div>',
    },
    {
      beat: "Teacher deck — stub", clock: "—",
      notes: [],
      html: () => '<p class="eyebrow">Gap</p><h2>&ldquo;They manage the assignment. We teach the process.&rdquo;</h2>' +
        '<div class="stub"><b>STUB —</b> Workspace/M365 gap: neither has stage-gating, per-stage verbatim export, AI-use logging, or a guided learning flow. Free alternatives honest list lives in Leverage §7.</div>',
    },
  ];

  const SLIDES = () => (state.audience === "teachers" ? SLIDES_TEACHERS : SLIDES_STUDENTS);

  /* ---------------- helpers ---------------- */

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._h);
    toast._h = setTimeout(() => t.classList.remove("show"), 2600);
  }

  function setTheme(t) {
    state.theme = t;
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("h1talk-theme", t);
    const b = $("#theme-btn");
    if (b) b.classList.toggle("on", t === "dark");
  }

  const pad = (n) => String(n + 1).padStart(2, "0");

  /* ---------------- gate ---------------- */

  function renderGate() {
    $("#app").innerHTML =
      '<div class="gate-wrap"><div class="gate-card">' +
      '<div class="gate-brand">H1Done <span>study</span></div>' +
      '<div class="gate-kicker">School talk · ' + (state.audience === "teachers" ? "teachers" : "students") + "</div>" +
      '<input id="pw" class="gate-input" type="password" inputmode="text" autocomplete="off" placeholder="Passphrase" aria-label="Passphrase">' +
      '<div class="gate-err" id="gate-err"></div>' +
      '<div class="gate-role">' +
      '<button class="btn ghost' + (state.role === "presenter" ? " active" : "") + '" id="role-present">Present</button>' +
      '<button class="btn ghost' + (state.role === "remote" ? " active" : "") + '" id="role-remote">Use as remote</button>' +
      "</div>" +
      '<p style="margin:18px 0 0"><button class="btn full" id="gate-go">Enter</button></p>' +
      '<div class="gate-foot">Deck + remote in one URL. The venue laptop: <b>Present</b>. Your phone: <b>Use as remote</b>.</div>' +
      "</div></div>";

    const pw = $("#pw");
    const go = () => {
      if (pw.value.trim().toLowerCase() === CONFIG.PASSWORD) {
        sessionStorage.setItem("h1talk-auth", "1");
        sessionStorage.setItem("h1talk-role", state.role);
        start();
      } else {
        $("#gate-err").textContent = "Not the passphrase — check it (it's the venue town).";
        pw.focus();
      }
    };
    $("#gate-go").addEventListener("click", go);
    $("#role-present").addEventListener("click", () => { state.role = "presenter"; $("#role-present").classList.add("active"); $("#role-remote").classList.remove("active"); });
    $("#role-remote").addEventListener("click", () => { state.role = "remote"; $("#role-remote").classList.add("active"); $("#role-present").classList.remove("active"); });
    pw.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
    pw.focus();
  }

  /* ---------------- deck (presenter) ---------------- */

  function renderDeck() {
    const slides = SLIDES();
    $("#app").innerHTML =
      '<div class="view">' +
      '<div class="deck-head">' +
      '<a class="deck-brand" href="#" id="home-brand">H1Done <span>study</span></a>' +
      '<span class="mut" style="font-size:0.75rem" id="conn-pill"></span>' +
      '<div class="head-btns">' +
      '<button class="icon-btn" id="theme-btn" title="Light / dark for the room">◑ light</button>' +
      '<button class="icon-btn" id="fs-btn" title="Full screen (f)">⛶ full</button>' +
      '<button class="icon-btn" id="print-btn" title="Save as PDF fallback (offline)">⎙ pdf</button>' +
      '<button class="icon-btn" id="remote-btn" title="Open the phone remote — shows this URL on your phone">⌁ remote</button>' +
      "</div></div>" +
      '<div class="deck-stage" id="stage">' +
      slides.map((s, i) =>
        '<section class="slide' + (s.centered ? " centered" : "") + (i === 0 ? " on" : "") + '" data-i="' + i + '">' + s.html() + foot(s.beat, s.clock) + "</section>"
      ).join("") +
      "</div></div>";

    state.slide = 0;
    setTheme(state.theme);

    $("#theme-btn").addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
    $("#fs-btn").addEventListener("click", toggleFullscreen);
    $("#print-btn").addEventListener("click", () => { toast("Print dialog: choose 'Save as PDF', margins None, background graphics ON."); setTimeout(() => window.print(), 350); });
    $("#remote-btn").addEventListener("click", showRemoteUrl);
    $("#home-brand").addEventListener("click", (e) => { e.preventDefault(); showRemoteUrl(); });

    document.addEventListener("keydown", deckKeys);
    bindSwipe($("#stage"));

    connPill();
    connectMqtt(true);
  }

  function showRemoteUrl() {
    const url = location.origin + location.pathname + "?view=remote";
    toast("On your phone: open this same URL, tap 'Use as remote':  " + url);
    try {
      navigator.clipboard.writeText(url).then(() => toast("Remote URL copied — text it to your phone: " + url), () => {});
    } catch (e) { /* toast already shown */ }
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
  }

  function deckKeys(e) {
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); go(1); }
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") { e.preventDefault(); go(-1); }
    else if (e.key === "Home") go(0, 0);
    else if (e.key === "End") go(0, SLIDES().length - 1);
    else if (e.key === "f" || e.key === "F") toggleFullscreen();
  }

  function bindSwipe(el) {
    let x0 = null, y0 = null;
    el.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    el.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
      x0 = y0 = null;
    }, { passive: true });
  }

  function go(dir, absolute) {
    const n = SLIDES().length;
    let i = typeof absolute === "number" ? absolute : state.slide + dir;
    i = Math.max(0, Math.min(n - 1, i));
    if (i === state.slide && typeof absolute !== "number") return;
    state.slide = i;
    $$("#stage .slide").forEach((s) => s.classList.toggle("on", +s.dataset.i === i));
    publishState();
  }

  function connPill() {
    const el = $("#conn-pill");
    if (!el) return;
    const remoteFresh = Date.now() - state.remoteSeen < 12000;
    el.innerHTML = state.connected
      ? (state.role === "presenter"
        ? 'sync <b style="color:var(--ok)">' + (remoteFresh ? "· remote linked ✓" : "· waiting for phone…") + "</b>"
        : 'sync <b style="color:var(--ok)">ok</b>')
      : 'sync <b style="color:var(--stalled)">offline — arrows still work</b>';
  }
  setInterval(() => { connPill(); if (state.publishing) publishState(); }, 5000);

  /* ---------------- remote (phone) ---------------- */

  function renderRemote() {
    $("#app").innerHTML =
      '<div class="remote">' +
      '<div class="remote-top"><span class="deck-brand">H1Done <span>study</span></span>' +
      '<span class="remote-status" id="r-status"><span class="dot"></span>connecting…</span></div>' +
      '<div class="remote-cards" id="r-cards"></div>' +
      '<div class="remote-taps">' +
      '<button class="btn ghost" id="r-prev" aria-label="Previous">‹</button>' +
      '<button class="btn" id="r-next">Next ›</button>' +
      "</div></div>";

    $("#r-next").addEventListener("click", () => publishCmd("+1"));
    $("#r-prev").addEventListener("click", () => publishCmd("-1"));
    bindSwipe(document.body);
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === " ") publishCmd("+1");
      if (e.key === "ArrowLeft") publishCmd("-1");
    });

    connectMqtt(false);
  }

  function renderRemoteState(msg) {
    const cards = $("#r-cards");
    if (!cards) return;
    const slides = SLIDES();
    const i = Math.max(0, Math.min(slides.length - 1, msg.slide | 0));
    const now = slides[i];
    const next = slides[i + 1];
    const items = (now.notes || []);
    cards.innerHTML =
      '<div class="remote-now"><p class="remote-card-k">Now — beat ' + pad(i) + "/" + pad(slides.length - 1) + ' <span class="remote-clock">' + (now.clock || "") + "</span></p>" +
      '<div class="rt">' + now.beat + "</div>" +
      '<ul class="remote-notes">' + items.map((n, k) => '<li class="' + (k === 0 ? "" : "dim") + '">' + n + "</li>").join("") + "</ul></div>" +
      (next
        ? '<div class="remote-next"><p class="remote-card-k">Next</p><div class="rt">' + next.beat + "</div></div>"
        : '<div class="remote-next"><p class="remote-card-k">Next</p><div class="rt">— end —</div></div>');
  }

  /* ---------------- mqtt sync ---------------- */

  let mqttReady = false;

  function connectMqtt(isPresenter) {
    if (typeof mqtt === "undefined") {
      // script blocked or offline: degrade gracefully
      state.connected = false;
      connPill();
      setTimeout(() => connectMqtt(isPresenter), 4000);
      return;
    }
    if (mqttReady) return;
    mqttReady = true;

    const topic = "h1talk/" + CONFIG.CHANNEL_ID + "/state";
    const clientId = "h1talk-" + (isPresenter ? "desk" : "phone") + "-" + Math.random().toString(16).slice(2, 8);

    try {
      const c = mqtt.connect(CONFIG.MQTT_URL, { clientId: clientId, clean: true, reconnectPeriod: 3000, connectTimeout: 6000 });
      state.mqtt = c;

      c.on("connect", () => {
        state.connected = true;
        c.subscribe(topic, () => {
          if (isPresenter) publishState();
          else publishCmd("ping");
        });
        if (!isPresenter) {
          // announce ourselves so the presenter's retained state + a fresh
          // publish both reach us even if retain was cleared
          try { c.publish(topic(), JSON.stringify({ type: "hello" })); } catch (e) {}
        }
        connPill();
      });
      c.on("reconnect", () => { state.connected = false; connPill(); });
      c.on("close", () => { state.connected = false; connPill(); });
      c.on("error", () => { state.connected = false; connPill(); });
      c.on("message", (_t, payload) => {
        let msg = null;
        try { msg = JSON.parse(payload.toString()); } catch (e) { return; }
        if (!msg || !msg.type) return;

        if (isPresenter && msg.type === "cmd") {
          if (msg.cmd === "+1") go(1);
          else if (msg.cmd === "-1") go(-1);
          else if (msg.cmd === "ping") { state.remoteSeen = Date.now(); connPill(); }
          if (msg.cmd === "+1" || msg.cmd === "-1") state.remoteSeen = Date.now();
        }
        if (!isPresenter && msg.type === "state") {
          state.slide = msg.slide | 0;
          renderRemoteState(msg);
        }
        if (isPresenter && msg.type === "hello") {
          // a phone just joined: refresh the retained state so it syncs instantly
          publishState();
        }
      });
    } catch (e) {
      state.connected = false;
      connPill();
    }
  }

  function publishState() {
    if (!state.mqtt || !state.connected || state.role === "remote") return;
    const s = SLIDES()[state.slide];
    try {
      // retain: any phone joining late instantly receives the current slide
      state.mqtt.publish(topic(), JSON.stringify({ type: "state", slide: state.slide, beat: s.beat }), { retain: true });
    } catch (e) { /* offline: keyboard still works */ }
  }

  function publishCmd(cmd) {
    if (!state.mqtt || !state.connected) { toast("Not linked yet — check the phone is on the same URL"); return; }
    try { state.mqtt.publish(topic(), JSON.stringify({ type: "cmd", cmd: cmd })); } catch (e) {}
  }

  function topic() { return "h1talk/" + CONFIG.CHANNEL_ID + "/state"; }

  /* ---------------- boot ---------------- */

  function start() {
    state.view = state.role === "remote" ? "remote" : "deck";
    if (state.view === "remote") renderRemote();
    else renderDeck();
  }

  function boot() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const params = new URLSearchParams(location.search);
    if (params.get("audience") === "teachers") state.audience = "teachers";
    if (params.get("view") === "remote") state.role = "remote";

    const authed = sessionStorage.getItem("h1talk-auth") === "1";
    if (params.get("view") === "remote") {
      if (authed) { state.role = "remote"; start(); } else renderGate();
    } else if (authed) {
      state.role = sessionStorage.getItem("h1talk-role") || "presenter";
      start();
    } else renderGate();
  }

  window.addEventListener("resize", () => { /* pure CSS scaling — nothing to do */ });
  boot();
})();
