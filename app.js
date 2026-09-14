(function () {
  "use strict";

  var PACKS = window.H1_PACKS || {};
  var DAY = 86400000;

  var PERSONAS = {
    geography: { name: "Ava Byrne", year: "5th Year", subject: "geography", teacher: "Ms O'Halloran" },
    biology: { name: "Jake O'Donnell", year: "5th Year", subject: "biology", teacher: "Ms O'Halloran" }
  };

  var OR_MODEL = "deepseek/deepseek-v4.1-flash";
  var OR_URL = "https://openrouter.ai/api/v1/chat/completions";
  var TEACHER_NAME = "Ms O'Halloran";

  var currentFilter = "all";
  var lastToastedMessage = 0;
  var adviceDrafts = {};

  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }

  function esc(s) {
    return String(s === null || s === undefined ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function fmtTime(ts) {
    var d = new Date(ts);
    return d.toLocaleDateString("en-IE", { weekday: "short", day: "numeric", month: "short" }) +
      ", " + d.toLocaleTimeString("en-IE", { hour: "2-digit", minute: "2-digit" });
  }

  function fmtDate(ts) {
    return new Date(ts).toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" });
  }

  function ago(ts) {
    var mins = Math.max(0, Math.round((Date.now() - ts) / 60000));
    if (mins < 1) return "just now";
    if (mins < 60) return mins + (mins === 1 ? " min ago" : " mins ago");
    var hrs = Math.round(mins / 60);
    if (hrs < 24) return hrs === 1 ? "an hour ago" : hrs + " hours ago";
    var days = Math.round(hrs / 24);
    if (days === 1) return "yesterday";
    return days + " days ago";
  }

  function getORKey() {
    return load("h1_openrouter_key", "");
  }

  function studentKeyFor(persona) {
    return "h1_student_" + persona;
  }

  function ensureStudent(persona) {
    var key = studentKeyFor(persona);
    if (!localStorage.getItem(key)) {
      var p = PERSONAS[persona];
      var pk = PACKS[p.subject];
      save(key, {
        persona: persona,
        subject: p.subject,
        name: p.name,
        year: p.year,
        teacher: p.teacher,
        stageIndex: 0,
        done: pk.stages.map(function () { return false; }),
        stages: pk.stages.map(function () {
          return { answers: [], attempts: 0, customNext: null, lastReview: null, draft: "", history: [] };
        }),
        handRaised: false,
        handRaisedAt: null,
        messages: [],
        log: [{ at: Date.now(), event: "Project started", detail: "Stage 1: " + pk.stages[0].name }]
      });
    }
    return load(key, null);
  }

  function currentPersona() {
    return load("h1_persona", "geography");
  }

  function getStudent() {
    return ensureStudent(currentPersona());
  }

  function saveStudent(st) {
    save(studentKeyFor(st.persona), st);
  }

  function packFor(st) {
    return PACKS[st.subject] || PACKS.geography;
  }

  function fakeStudent(spec) {
    var pk = PACKS[spec.subject];
    var seed = window.H1_SEED_HISTORY && window.H1_SEED_HISTORY[spec.id] ? window.H1_SEED_HISTORY[spec.id] : [];
    var history = seed.map(function (h) {
      return { stage: h.s, question: pk.stages[h.s].questions[h.q], answer: h.a, at: Date.now() - h.d * DAY, verdict: h.v || "accepted", reason: h.reason };
    });
    history.sort(function (a, b) { return a.at - b.at; });
    var log = [];
    if (history.length) {
      log.push({ at: history[0].at - 1.5 * DAY, event: "Project started", detail: "Stage 1: " + pk.stages[0].name });
    } else {
      log.push({ at: spec.lastActivity - 0.5 * DAY, event: "Project started", detail: "Stage 1: " + pk.stages[0].name });
    }
    history.forEach(function (r) {
      log.push({
        at: r.at,
        event: r.verdict === "accepted" ? "Answer accepted" : "Submitted answer",
        detail: "Stage " + (r.stage + 1) + ": " + pk.stages[r.stage].name + (r.verdict === "accepted" ? "" : " \u2013 review asked for a revision")
      });
    });
    if (spec.handRaised) {
      log.push({ at: spec.raisedAt, event: "Hand raised", detail: "Asked for help with Stage " + (spec.stageIndex + 1) });
    }
    log.sort(function (a, b) { return a.at - b.at; });
    return {
      id: spec.id, live: false, subject: spec.subject, name: spec.name,
      stageIndex: spec.stageIndex, attempts: spec.attempts || 1, stuck: !!spec.stuck,
      handRaised: !!spec.handRaised, handRaisedAt: spec.raisedAt || null,
      lastActivity: spec.lastActivity,
      history: history,
      submissions: history.slice(-3).map(function (r) {
        return { idx: history.indexOf(r), stage: r.stage, question: r.question, excerpt: r.answer, verdict: r.verdict === "accepted" ? "proceed" : "revise", at: r.at };
      }),
      log: log
    };
  }

  function seedRoster() {
    var D = function (n) { return Date.now() - n * DAY; };
    var roster = [
      liveEntry("geography"),
      liveEntry("biology"),
      fakeStudent({ id: "callum", subject: "geography", name: "Callum Dunne", stageIndex: 0, lastActivity: D(0.3) }),
      fakeStudent({ id: "dillon", subject: "geography", name: "Dillon Murphy", stageIndex: 3, attempts: 1, handRaised: true, raisedAt: D(1.4), lastActivity: D(0.2) }),
      fakeStudent({ id: "oisin", subject: "geography", name: "Oisin Ward", stageIndex: 2, lastActivity: D(2) }),
      fakeStudent({ id: "sean", subject: "geography", name: "Sean Walsh", stageIndex: 1, lastActivity: D(10) }),
      fakeStudent({ id: "luke", subject: "geography", name: "Luke Maher", stageIndex: 2, lastActivity: D(1) }),
      fakeStudent({ id: "aoife", subject: "geography", name: "Aoife Brennan", stageIndex: 4, lastActivity: D(2.5) }),
      fakeStudent({ id: "cathal", subject: "geography", name: "Cathal Moore", stageIndex: 4, lastActivity: D(2) }),
      fakeStudent({ id: "lauren", subject: "geography", name: "Lauren Ryan", stageIndex: 3, lastActivity: D(3) }),
      fakeStudent({ id: "eoin", subject: "geography", name: "Eoin Kavanagh", stageIndex: 2, lastActivity: D(4) }),
      fakeStudent({ id: "sara", subject: "geography", name: "Sara Nolan", stageIndex: 6, lastActivity: D(1.5) }),
      fakeStudent({ id: "roisin", subject: "geography", name: "Roisin Fahy", stageIndex: 7, lastActivity: D(1.5) }),
      fakeStudent({ id: "ben", subject: "biology", name: "Ben O'Connor", stageIndex: 0, lastActivity: D(0.4) }),
      fakeStudent({ id: "eva", subject: "biology", name: "Eva Lynch", stageIndex: 1, lastActivity: D(1) }),
      fakeStudent({ id: "faye", subject: "biology", name: "Faye Kelly", stageIndex: 2, attempts: 3, stuck: true, lastActivity: D(1) }),
      fakeStudent({ id: "niamh", subject: "biology", name: "Niamh Doyle", stageIndex: 5, lastActivity: D(0.5) }),
      fakeStudent({ id: "david", subject: "biology", name: "David Farrell", stageIndex: 3, lastActivity: D(2) }),
      fakeStudent({ id: "chloe", subject: "biology", name: "Chloe Higgins", stageIndex: 4, lastActivity: D(1.5) }),
      fakeStudent({ id: "emma", subject: "biology", name: "Emma Walsh", stageIndex: 6, lastActivity: D(1) })
    ];
    save("h1_roster", roster);
    return roster;
  }
  function liveEntry(subject) {
    var p = PERSONAS[subject];
    var pk = PACKS[subject];
    var raw = localStorage.getItem("h1_student_" + subject);
    if (!raw) {
      return {
        id: "live-" + subject, live: true, subject: subject, name: p.name,
        stageIndex: 0, attempts: 0, stuck: false, handRaised: false, handRaisedAt: null,
        lastActivity: Date.now(), submissions: [], history: [],
        log: [{ at: Date.now(), event: "Project started", detail: "Not started yet in this browser" }]
      };
    }
    var st = JSON.parse(raw);
    var attempts = 0;
    st.stages.forEach(function (s) { if (s.attempts > attempts) attempts = s.attempts; });
    var history = [];
    st.stages.forEach(function (s, i) {
      var recs = (s.history && s.history.length) ? s.history : (s.answers || []).map(function (a) {
        return { question: a.question, answer: a.text, at: a.at, verdict: "accepted" };
      });
      recs.forEach(function (r) {
        history.push({ stage: i, question: r.question, answer: r.answer, at: r.at, verdict: r.verdict });
      });
    });
    history.sort(function (a, b) { return a.at - b.at; });
    var subs = history.slice(-3).map(function (r) {
      return { idx: history.indexOf(r), stage: r.stage, question: r.question, excerpt: r.answer, verdict: r.verdict === "accepted" ? "proceed" : "revise", at: r.at };
    });
    return {
      id: "live-" + subject, live: true, subject: subject, name: st.name,
      stageIndex: Math.min(st.stageIndex, pk.stages.length - 1),
      progressDone: st.done.filter(Boolean).length,
      progressTotal: st.done.length,
      attempts: attempts, stuck: attempts >= 3,
      handRaised: st.handRaised, handRaisedAt: st.handRaisedAt,
      lastActivity: st.log.length ? st.log[st.log.length - 1].at : Date.now(),
      submissions: subs,
      history: history,
      log: st.log
    };
  }

  function getRoster() {
    var raw = localStorage.getItem("h1_roster");
    var roster = raw ? load("h1_roster", []) : seedRoster();
    roster.forEach(function (s, i) {
      if (s.live) {
        roster[i] = liveEntry(s.subject);
      } else if (!s.history) {
        s.history = (s.submissions || []).map(function (r) {
          return { stage: r.stage, question: r.question, answer: r.excerpt, at: r.at, verdict: r.verdict === "proceed" ? "accepted" : "revise" };
        });
      }
    });
    save("h1_roster", roster);
    return roster;
  }

  function statusOf(s) {
    if (s.handRaised) return "raised";
    if (s.stuck || s.attempts >= 3) return "stuck";
    if (Date.now() - s.lastActivity >= 5 * DAY) return "stalled";
    return "ok";
  }

  var STATUS_TEXT = {
    ok: "On track",
    stalled: "Stalled 5+ days",
    stuck: "Stuck - failed review twice",
    raised: "Hand raised"
  };

  function stageStatus(st, i) {
    if (st.done[i]) return "done";
    if (i === st.stageIndex) return "current";
    return "locked";
  }

  function nextQuestion(st, i) {
    var stg = st.stages[i];
    if (stg.customNext) return stg.customNext;
    var qs = PACKS[st.subject].stages[i].questions;
    return qs[Math.min(stg.answers.length, qs.length - 1)];
  }

  function toast(msg) {
    var el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { el.classList.remove("show"); }, 3200);
  }

  function topbar(links, badge) {
    var live = !!getORKey();
    return '<header class="topbar"><div class="topbar-inner">' +
      '<a class="brand" href="#/">H1Done <span>Projects</span></a>' +
      "<nav>" + links.map(function (l) {
        return '<a href="' + l.href + '"' + (l.on ? ' class="on"' : "") + ">" + l.label + "</a>";
      }).join("") +
      '<a class="ai-chip' + (live ? " live" : "") + '" href="#/settings" title="AI status">' + (live ? "Live AI" : "Demo AI") + "</a>" +
      (badge ? '<span class="ro-badge">' + esc(badge) + "</span>" : "") +
      "</nav></div></header>";
  }

  function bootstrapKey() {
    var m = /[?&]key=([^&]+)/.exec(location.search || "");
    if (!m) return;
    var val = decodeURIComponent(m[1]).trim();
    if (val) {
      save("h1_openrouter_key", val);
      try { history.replaceState(null, "", location.pathname + location.hash); } catch (e) {}
      setTimeout(function () { toast("Live AI connected"); }, 400);
    }
  }

  function handFAB(st) {
    var raised = st.handRaised;
    return '<button class="handfab' + (raised ? " raised" : "") + '" data-action="toggle-hand" aria-pressed="' + raised + '">' +
      '<span class="handfab-main">' + (raised ? "Hand raised &#8211; awaiting teacher" : "Raise hand") + "</span>" +
      '<span class="handfab-sub">' + (raised ? "Tap to lower your hand" : "Ask " + esc(st.teacher) + " to look at this with you") + "</span>" +
      "</button>";
  }

  var briefBack = { href: "#/", label: "Back" };

  function briefView(subjectParam) {
    var subj = PACKS[subjectParam] ? subjectParam : PERSONAS[currentPersona()].subject;
    var pk = PACKS[subj] || PACKS.geography;
    var html = topbar([{ href: pk.brief.pdf, label: "PDF" }]);
    html += '<div class="container wide brief-wrap">';
    html += '<a class="backlink" href="' + briefBack.href + '">&#8592; ' + esc(briefBack.label) + "</a>";
    html += '<div class="banner brief-label"><h3>' + esc(pk.aacName) + " \u2013 the brief</h3>" +
      '<p class="msg-text">' + esc(pk.brief.label) + "</p></div>";
    html += '<div class="pdf-frame"><object data="' + pk.brief.pdf + '" type="application/pdf" aria-label="' + esc(pk.aacName) + ' brief PDF">' +
      '<div class="pdf-fallback"><p>PDF preview is not available on this device.</p>' +
      '<a class="btn small primary" href="' + pk.brief.pdf + '" target="_blank" rel="noopener">Open PDF in new tab</a></div>' +
      "</object></div>";
    html += '<p class="pdf-link-row"><a class="btn small ghost" href="' + pk.brief.pdf + '" target="_blank" rel="noopener">Open PDF in new tab</a></p>';
    html += '<article class="brief-doc"><header>' +
      '<p class="kicker">' + esc(pk.subject) + " \u00b7 " + esc(pk.weighting) + "</p>" +
      "<h2>" + esc(pk.brief.title) + "</h2>" +
      '<p class="brief-sub">' + esc(pk.brief.subtitle) + "</p></header>";
    pk.brief.sections.forEach(function (sec) {
      html += '<h3 class="brief-h">' + esc(sec.h) + "</h3>";
      (sec.p || []).forEach(function (t) { html += "<p>" + esc(t) + "</p>"; });
      if (sec.list) {
        html += "<ul>";
        sec.list.forEach(function (t) { html += "<li>" + esc(t) + "</li>"; });
        html += "</ul>";
      }
      (sec.sub || []).forEach(function (x) {
        html += '<h4 class="brief-subh">' + esc(x.h) + "</h4>";
        (x.p || []).forEach(function (t) { html += "<p>" + esc(t) + "</p>"; });
        if (x.list) {
          html += "<ul>";
          x.list.forEach(function (t) { html += "<li>" + esc(t) + "</li>"; });
          html += "</ul>";
        }
      });
    });
    html += '<p class="policy-note">' + esc(pk.linksPolicy) + "</p></article></div>";
    return html;
  }

  function roleChooser() {
    var html = topbar([
      { href: "#/settings", label: "Settings" }
    ]);
    html += '<div class="hero">' +
      '<p class="kicker crimson">Interactive product mock-up</p>' +
      "<h1>Your project, your words,<br><em>mentored to an H1.</em></h1>" +
      '<p class="lede">H1Done is an AI project mentor for the Irish Leaving Cert Additional Assessment Components \u2013 the 40% project. It asks the right questions, reviews your own answers, and never writes a word for you.</p>' +
      "</div>";
    html += '<div class="container"><div class="role-grid">';
    html += '<div class="card role-card"><p class="kicker crimson">Student</p>' +
      "<h2>Work through the real stages</h2>" +
      '<p style="color:var(--muted);font-size:0.9rem">Pick a demo persona. Your answers, reviews and teacher messages are saved in this browser.</p>' +
      '<div class="role-buttons">' +
      '<button class="role-btn" data-action="choose-student" data-persona="geography"><span class="who">Ava Byrne \u2013 5th Year Geography</span><span class="what">Applied Geography Project \u2013 7 stages, NCCA Dec 2025 guidelines</span></button>' +
      '<button class="role-btn" data-action="choose-student" data-persona="biology"><span class="who">Jake O\u2019Donnell \u2013 5th Year Biology</span><span class="what">Biology in Practice Investigation \u2013 6 stages, NCCA Nov 2024 guidelines</span></button>' +
      "</div></div>";
    html += '<div class="card role-card teacher"><p class="kicker">Teacher</p>' +
      "<h2>Supervise and authenticate</h2>" +
      '<p style="color:var(--muted);font-size:0.9rem">See who is stuck before they fail, answer raised hands, and review the evidence log.</p>' +
      '<div class="role-buttons">' +
      '<button class="role-btn" data-action="choose-teacher"><span class="who">Ms O\u2019Halloran \u2013 Geography &amp; Biology</span><span class="what">Class board with 8 students, hand-raised queue and authentication log</span></button>' +
      "</div></div>";
    html += "</div></div>";
    html += '<p class="footnote">Demo mock-up \u00b7 everything is stored in this browser \u00b7 open a second tab to see student and teacher updates flow between roles.</p>';
    return html;
  }

  function progressHeaderHTML(st) {
    var pk = PACKS[st.subject];
    var doneCount = st.done.filter(Boolean).length;
    var pct = Math.round((doneCount / st.done.length) * 100);
    var html = '<section class="card">' +
      '<p class="kicker">' + esc(pk.subject) + " \u00b7 " + esc(pk.weighting) + "</p>" +
      "<h2>" + esc(pk.aacName) + "</h2>" +
      '<div class="progress"><span style="width:' + pct + '%"></span></div>' +
      '<p class="progress-note">' + doneCount + " of " + st.done.length + " stages complete";
    if (doneCount < st.done.length) {
      html += " \u00b7 Current: Stage " + (st.stageIndex + 1) + " \u2013 " + esc(pk.stages[st.stageIndex].name);
    }
    html += "</p></section>";
    return html;
  }

  function stageMapHTML(st, hrefFor) {
    var pk = PACKS[st.subject];
    var html = '<ol class="stage-map">';
    pk.stages.forEach(function (s, i) {
      var status = stageStatus(st, i);
      var tagText = status === "done" ? "Done" : status === "current" ? "Current" : "Locked";
      var href = hrefFor(i);
      var inner = '<span style="min-width:0"><span class="stage-top">Stage ' + (i + 1) + " \u00b7 " + esc(s.time) + "</span>" +
        '<span class="stage-name">' + esc(s.name) + "</span>" +
        '<span class="stage-blurb">' + esc(s.blurb) + "</span></span>" +
        '<span class="tag ' + status + '">' + tagText + "</span>";
      html += "<li><span class=\"marker " + status + '"></span>';
      if (href) {
        html += '<a class="stagecard' + (status === "locked" ? " locked" : "") + '" href="' + href + '">' + inner + "</a>";
      } else {
        html += '<div class="stagecard' + (status === "locked" ? " locked" : "") + '">' + inner + "</div>";
      }
      html += "</li>";
    });
    html += "</ol>";
    return html;
  }

  function reviewCardHTML(r, opts) {
    opts = opts || {};
    var html = '<section class="card review' + (r.flagged ? " flagged" : "") + '">';
    html += '<p class="kicker">' + esc(opts.kicker || "Mentor review") +
      '<span class="source-badge ' + (r.source === "live" ? "live" : "canned") + '">' +
      (r.source === "live" ? "Live AI" : "Demo script") + "</span></p>";
    html += "<h3>What\u2019s working</h3><ul class=\"strengths\">";
    r.strengths.forEach(function (x) { html += "<li>" + esc(x) + "</li>"; });
    html += "</ul>";
    if (r.prompts && r.prompts.length) {
      html += "<h3>Before you move on</h3><ul class=\"prompts\">";
      r.prompts.forEach(function (x) { html += "<li>" + esc(x) + "</li>"; });
      html += "</ul>";
    }
    if (opts.verdictNote) {
      html += '<p class="advice-note">' + esc(opts.verdictNote) + "</p>";
    }
    if (!opts.readOnly) {
      html += '<div class="review-actions">' +
        '<button class="btn ghost" data-action="revise" data-stage="' + opts.stage + '">Revise my answer</button>' +
        '<button class="btn primary" data-action="accept" data-stage="' + opts.stage + '">' + (opts.acceptLabel || "Accept &amp; continue") + "</button>" +
        "</div>";
    }
    html += "</section>";
    return html;
  }

  function studentHome(ro) {
    ro = ro || {};
    var st = ro.st || getStudent();
    var readOnly = !!ro.readOnly;
    briefBack = readOnly ? { href: ro.backHref, label: ro.backLabel || "Back" } : { href: "#/student/home", label: "Back to stage map" };
    var pk = PACKS[st.subject];
    var doneCount = st.done.filter(Boolean).length;
    var html = readOnly ?
      topbar([{ href: ro.backHref, label: ro.backLabel || "Back to profile" }], ro.badge) :
      topbar([
        { href: "#/student/answers", label: "Your answers", on: false },
        { href: "#/settings", label: "Settings" },
        { href: "#/", label: "Switch role" }
      ]);
    html += '<div class="container">';
    if (readOnly) {
      html += '<a class="backlink" href="' + ro.backHref + '">&#8592; ' + esc(ro.backLabel || "Back to profile") + "</a>";
      html += '<div class="card tint pov-card"><p class="kicker">Read-only view</p>' +
        '<p style="font-size:0.9rem;margin:0">You are seeing <strong>' + esc(st.name) + "\u2019s</strong> project exactly as they see it \u2013 their stage map, questions, answers and reviews. No actions are available here.</p></div>";
    }
    var unread = st.messages.filter(function (m) { return !m.read; });
    if (!readOnly && unread.length) {
      var latest = unread[unread.length - 1];
      html += '<div class="banner"><h3>Advice from ' + esc(st.teacher) + "</h3>";
      unread.forEach(function (m) {
        html += '<p class="msg-text">\u201c' + esc(m.text) + "\u201d</p>" +
          '<p class="msg-time">' + fmtTime(m.at) + "</p>";
      });
      html += '<button class="btn small" data-action="mark-read">Mark as read</button></div>';
    }
    html += progressHeaderHTML(st);
    if (doneCount === st.done.length) {
      html += '<div class="done-banner"><h3>Project complete</h3>';
      if (readOnly) {
        html += '<p style="font-size:0.9rem;margin:0">Every stage is done and every answer is accepted.</p>';
      } else {
        html += '<p style="font-size:0.9rem">Every stage is done. Read your export preview under \u201cYour answers\u201d before you build the final report.</p>' +
          '<a class="btn primary small" href="#/student/answers">Open your answers</a>';
      }
      html += "</div>";
    }
    html += '<div class="queue-head"><h3>' + (readOnly ? esc(st.name) + "\u2019s stage map" : "Your stage map") + "</h3></div>";
    html += stageMapHTML(st, function (i) {
      return readOnly ? ro.profileHref + "/as-student/stage/" + i : "#/student/stage/" + i;
    });
    if (readOnly) {
      html += '<div class="settings-row"><a class="btn ghost small" href="' + ro.profileHref + '/as-student/answers">View their answers (export preview)</a>' +
        '<a class="btn ghost small" href="#/brief/' + st.subject + '">Read the brief</a></div>';
    }
    html += "</div>";
    if (!readOnly) html += handFAB(st);
    if (readOnly) {
      html += '<p class="footnote">Read-only view \u00b7 what the teacher sees of ' + esc(st.name) + "\u2019s project \u00b7 no actions available.</p>";
    } else {
      html += '<p class="footnote">Demo persona: ' + esc(st.name) + ", " + esc(st.year) + " \u00b7 mentor never writes project text \u00b7 it asks, you answer.</p>";
    }
    if (!readOnly && unread.length && latest.at > lastToastedMessage) {
      lastToastedMessage = latest.at;
      setTimeout(function () { toast("New advice from " + st.teacher); }, 250);
    }
    return html;
  }

  function answerRecordHTML(r, verdictLabel) {
    return '<div class="fa-item"><p class="q-ref">' + esc(r.question) + "</p>" +
      '<p class="a-text">' + esc(r.answer) + "</p>" +
      '<div class="fa-meta"><span class="verdict ' + (r.verdict === "accepted" ? "proceed" : "revise") + '">' +
      (r.verdict === "accepted" ? (verdictLabel || "Accepted") : "Revise") + "</span>" +
      '<span class="sub-time">' + fmtTime(r.at) + "</span></div>" +
      (r.reason ? '<p class="q-ref" style="margin:8px 0 0">Why it came back: ' + esc(r.reason) + "</p>" : "") +
      "</div>";
  }

  function studentStage(indexStr, ro) {
    ro = ro || {};
    var st = ro.st || getStudent();
    var readOnly = !!ro.readOnly;
    var pk = PACKS[st.subject];
    var i = parseInt(indexStr, 10);
    if (isNaN(i) || i < 0 || i >= pk.stages.length) return readOnly ? studentHome(ro) : studentHome();
    var s = pk.stages[i];
    var stg = st.stages[i];
    var status = stageStatus(st, i);
    var mapHref = readOnly ? ro.backHref : "#/student/home";
    var mapLabel = readOnly ? (ro.mapLabel || "Back to stage map") : "All stages";
    briefBack = { href: mapHref, label: mapLabel };
    var html = readOnly ?
      topbar([{ href: ro.backHref, label: ro.backLabel || "Back" }, { href: "#/brief/" + st.subject, label: "The brief" }], ro.badge) :
      topbar([
        { href: "#/student/home", label: "Stage map" },
        { href: "#/student/answers", label: "Your answers" },
        { href: "#/brief/" + st.subject, label: "The brief" },
        { href: "#/settings", label: "Settings" }
      ]);
    html += '<div class="container">';
    html += '<a class="backlink" href="' + mapHref + '">&#8592; ' + esc(mapLabel) + "</a>";
    if (status === "locked") {
      html += '<section class="card">';
      html += '<p class="kicker crimson">Stage ' + (i + 1) + " of " + pk.stages.length + " \u00b7 " + esc(s.time) + "</p>";
      html += "<h2>" + esc(s.name) + "</h2>";
      html += '<h3 class="q-label" style="margin-top:14px">Your next question</h3>';
      html += '<p class="q-text">' + esc(nextQuestion(st, i)) + "</p>";
      html += '<details class="promptbank"><summary>Prompt bank from the guidelines (' + s.promptQuestions.length + ")</summary><ul>";
      s.promptQuestions.forEach(function (q) { html += "<li>" + esc(q) + "</li>"; });
      html += "</ul></details>";
      html += '<div class="locked-panel"><p class="locked-title">Finish Stage ' + (i + 1) + " to unlock your answer</p>" +
        '<p>The stages run in order, exactly as the guidelines set them out. Accept stage ' + i + " and this question will be waiting for you here.</p></div>";
      html += "</section>";
      html += '<section class="card"><p class="kicker">Definition of done \u2013 Stage ' + (i + 1) + "</p><ul class=\"dod-list\">";
      s.definitionOfDone.forEach(function (d) {
        html += "<li>" + esc(d) + "</li>";
      });
      html += "</ul></section></div>";
      return html;
    }
    var records = (stg.history && stg.history.length) ? stg.history.slice() : (stg.answers || []).map(function (a) {
      return { question: a.question, answer: a.text, at: a.at, verdict: "accepted" };
    });
    if (stg.lastReview) {
      records = records.filter(function (r) { return r.at !== stg.lastReview.at; });
    }
    html += '<section class="card">';
    html += '<p class="kicker crimson">Stage ' + (i + 1) + " of " + pk.stages.length + " \u00b7 " + esc(s.time) + "</p>";
    html += "<h2>" + esc(s.name) + "</h2>";
    if (!readOnly) {
      if (status === "done") {
        html += '<p class="progress-note">This stage is complete. You are revisiting it \u2013 extra answers are kept and appear in your export.</p>';
      }
      html += '<h3 class="q-label" style="margin-top:14px">Your next question</h3>';
      html += '<p class="q-text">' + esc(nextQuestion(st, i)) + "</p>";
      html += '<details class="promptbank"><summary>Prompt bank from the guidelines (' + s.promptQuestions.length + ")</summary><ul>";
      s.promptQuestions.forEach(function (q) { html += "<li>" + esc(q) + "</li>"; });
      html += "</ul></details>";
      html += '<label class="field-label" for="answer-input">Your answer \u2013 in your own words</label>';
      html += '<textarea id="answer-input" rows="6" placeholder="The mentor never writes this for you. Write your thinking here\u2026">' + esc(stg.draft || "") + "</textarea>";
      html += '<div class="review-actions"><button class="btn primary" data-action="submit-answer" data-stage="' + i + '">Submit answer</button>' +
        '<a class="btn ghost" href="#/brief/' + st.subject + '">Read the brief</a></div>';
      html += "</section>";
      if (stg.reading) {
        html += '<section class="card reading">Your mentor is reading your answer\u2026</section>';
      } else if (stg.lastReview) {
        html += reviewCardHTML(stg.lastReview, {
          stage: i,
          acceptLabel: st.done[i] ? "Accept this answer" : "Accept &amp; continue"
        });
      }
    } else {
      html += "</section>";
      if (records.length) {
        html += '<p class="kicker crimson" style="margin:18px 0 0">Questions asked and answers given</p>';
        records.forEach(function (r) {
          html += answerRecordHTML(r);
        });
        var last = records[records.length - 1];
        html += reviewCardHTML(
          stg.lastReview || {
            strengths: cannedReview(s, stg.attempts || 1).strengths,
            prompts: cannedReview(s, stg.attempts || 1).prompts,
            flagged: false,
            source: "canned"
          },
          {
            readOnly: true,
            kicker: "Review received",
            verdictNote: last.verdict === "accepted" ? "Accepted \u2013 the mentor passed this answer against the definition of done." : "Revise \u2013 the mentor asked for another pass before accepting."
          }
        );
      } else if (stg.lastReview) {
        html += '<h3 class="q-label" style="margin-top:14px">Your next question</h3>';
        html += '<p class="q-text">' + esc(stg.lastReview.question) + "</p>";
        html += '<div class="fa-item"><p class="q-ref">' + esc(stg.lastReview.question) + "</p>" +
          '<p class="a-text">' + esc(stg.lastReview.answer) + "</p>" +
          '<div class="fa-meta"><span class="verdict revise">Revise</span>' +
          '<span class="sub-time">' + fmtTime(stg.lastReview.at) + "</span></div></div>";
        html += reviewCardHTML(stg.lastReview, { readOnly: true, kicker: "Review received", verdictNote: "Revise \u2013 the mentor asked for another pass before accepting." });
      } else {
        html += '<h3 class="q-label" style="margin-top:14px">Your next question</h3>';
        html += '<p class="q-text">' + esc(nextQuestion(st, i)) + "</p>";
        html += '<p class="empty-note">No answer submitted yet.</p>';
      }
    }
    html += '<section class="card"><p class="kicker">Definition of done \u2013 Stage ' + (i + 1) + "</p><ul class=\"dod-list\">";
    s.definitionOfDone.forEach(function (d) {
      html += '<li class="' + (st.done[i] ? "hit" : "") + '">' + esc(d) + "</li>";
    });
    html += "</ul></section>";
    html += "</div>";
    if (!readOnly) html += handFAB(st);
    return html;
  }

  function viewStateFor(s) {
    if (s.live) {
      var raw = localStorage.getItem("h1_student_" + s.subject);
      var st = raw ? JSON.parse(raw) : ensureStudent(s.subject);
      var copy = JSON.parse(JSON.stringify(st));
      copy.stages.forEach(function (g) {
        g.history = g.history || [];
        if (!g.history.length && g.answers && g.answers.length) {
          g.history = g.answers.map(function (a) {
            return { question: a.question, answer: a.text, at: a.at, verdict: "accepted" };
          });
        }
      });
      return copy;
    }
    var pk = PACKS[s.subject];
    return {
      persona: null, subject: s.subject, name: s.name, year: s.year, teacher: TEACHER_NAME,
      stageIndex: s.stageIndex,
      done: pk.stages.map(function (_, i) { return i < s.stageIndex; }),
      stages: pk.stages.map(function (_, i) {
        var recs = (s.history || []).filter(function (r) { return r.stage === i; });
        var accepted = recs.filter(function (r) { return r.verdict === "accepted"; });
        var lastRev = null;
        recs.forEach(function (r) { if (r.verdict === "revise") lastRev = r; });
        var cr = cannedReview(pk.stages[i], s.stuck ? 3 : 1);
        return {
          answers: accepted.map(function (r) { return { question: r.question, text: r.answer, at: r.at }; }),
          attempts: Math.max(recs.length, 1),
          history: recs.map(function (r) { return { question: r.question, answer: r.answer, at: r.at, verdict: r.verdict }; }),
          lastReview: (i === s.stageIndex && lastRev) ? {
            question: lastRev.question, answer: lastRev.answer, at: lastRev.at,
            strengths: cr.strengths, prompts: cr.prompts, flagged: !!s.stuck, source: "canned"
          } : null,
          reading: false, draft: ""
        };
      }),
      handRaised: s.handRaised, handRaisedAt: s.handRaisedAt,
      messages: [], log: s.log || []
    };
  }

  function povHome(id) {
    var s = findRosterStudent(id);
    if (!s) return teacherBoard();
    return studentHome({
      st: viewStateFor(s),
      readOnly: true,
      backHref: "#/teacher/student/" + id,
      backLabel: "Back to profile",
      profileHref: "#/teacher/student/" + id,
      badge: "Read-only view"
    });
  }

  function povStage(id, indexStr) {
    var s = findRosterStudent(id);
    if (!s) return teacherBoard();
    var st = viewStateFor(s);
    return studentStage(indexStr, {
      st: st,
      readOnly: true,
      backHref: "#/teacher/student/" + id + "/as-student",
      backLabel: "Back to " + s.name.split(" ")[0] + "\u2019s stage map",
      profileHref: "#/teacher/student/" + id,
      badge: "Read-only view"
    });
  }

  function povAnswers(id) {
    var s = findRosterStudent(id);
    if (!s) return teacherBoard();
    return studentAnswers({
      st: viewStateFor(s),
      readOnly: true,
      backHref: "#/teacher/student/" + id + "/as-student",
      backLabel: "Back to " + s.name.split(" ")[0] + "\u2019s stage map",
      badge: "Read-only view"
    });
  }

  function profileSubmission(id, indexStr) {
    var s = findRosterStudent(id);
    if (!s) return teacherBoard();
    var i = parseInt(indexStr, 10);
    var rec = (s.history || [])[i];
    if (!rec) return teacherProfile(id);
    var pk = PACKS[s.subject];
    var stgName = pk.stages[rec.stage] ? pk.stages[rec.stage].name : "Stage " + (rec.stage + 1);
    var html = topbar([{ href: "#/teacher/board", label: "Board" }, { href: "#/settings", label: "Settings" }, { href: "#/", label: "Switch role" }]);
    html += '<div class="container">';
    html += '<a class="backlink" href="#/teacher/student/' + esc(id) + '">&#8592; Back to ' + esc(s.name) + "</a>";
    html += '<section class="card"><p class="kicker crimson">Submission \u00b7 Stage ' + (rec.stage + 1) + " \u00b7 " + esc(stgName) + "</p>" +
      '<p class="progress-note">Full record of this exact submission \u2013 question, complete answer and review verdict.</p>' +
      '<div class="fa-item" style="margin-top:12px"><p class="q-ref">' + esc(rec.question) + "</p>" +
      '<p class="a-text">' + esc(rec.answer) + "</p>" +
      '<div class="fa-meta"><span class="verdict ' + (rec.verdict === "accepted" ? "proceed" : "revise") + '">' +
      (rec.verdict === "accepted" ? "Accepted" : "Revise") + "</span>" +
      '<span class="sub-time">' + fmtTime(rec.at) + " \u00b7 " + ago(rec.at) + "</span></div></div></section>";
    html += "</div>";
    return html;
  }

  function findRosterStudent(id) {
    return getRoster().filter(function (x) { return x.id === id; })[0] || null;
  }

  function studentAnswers(ro) {
    ro = ro || {};
    var st = ro.st || getStudent();
    var readOnly = !!ro.readOnly;
    var pk = PACKS[st.subject];
    var html = readOnly ?
      topbar([{ href: ro.backHref, label: ro.backLabel || "Back" }], ro.badge) :
      topbar([
        { href: "#/student/home", label: "Stage map" },
        { href: "#/settings", label: "Settings" },
        { href: "#/", label: "Switch role" }
      ]);
    html += '<div class="container export-headings">';
    if (readOnly) {
      html += '<a class="backlink" href="' + ro.backHref + '">&#8592; ' + esc(ro.backLabel || "Back") + "</a>";
      html += '<section class="card"><p class="kicker">Export preview \u00b7 ' + esc(pk.subject) + "</p>" +
        "<h2>" + esc(st.name) + "\u2019s answers, under the report headings</h2>" +
        '<p class="progress-note">This is their full export: verbatim answers under the SEC section headings, plus the AI-use reference they will submit. Read-only \u2013 nothing here can be changed from the teacher side.</p></section>';
    } else {
      html += '<a class="backlink" href="#/student/home">&#8592; Back to project</a>';
      html += '<section class="card"><p class="kicker">Export preview \u00b7 ' + esc(pk.subject) + "</p>" +
        "<h2>Your answers, under the report headings</h2>" +
        '<p class="progress-note">SEC reports follow a prescribed format. This preview lays your verbatim answers under the section headings so you can see the shape of your report. Nothing here is rewritten.</p>' +
        '<button class="btn small" data-action="copy-export" style="margin-top:10px">Copy page</button></section>';
    }
    pk.stages.forEach(function (s, i) {
      html += "<h3>" + esc(pk.reportHeadings[i] || s.name) + "</h3>";
      var answers = st.stages[i].answers;
      if (!answers.length) {
        html += '<p class="empty-note">Nothing recorded for this section yet.</p>';
      } else {
        answers.forEach(function (a) {
          html += '<div class="answer-block"><p class="q-ref">' + esc(a.question) + "</p>" +
            '<p class="a-text">' + esc(a.text) + "</p></div>";
        });
      }
    });
    html += '<section class="ai-ref-block"><h3>AI use reference</h3>' +
      '<p style="font-size:0.85rem;color:var(--muted);margin:2px 0 0">Auto-generated from your activity. Check it against the current SEC brief before submitting.</p>' +
      "<dl>" +
      "<dt>Tool</dt><dd>H1Done Mentor (AI review of my own draft answers, DeepSeek V4.1 Flash via OpenRouter)</dd>" +
      "<dt>Date</dt><dd>" + esc(fmtDate(Date.now())) + "</dd>" +
      "<dt>How it was used</dt><dd>At each project stage the mentor asked me prompt questions and gave feedback on answers I had written myself. It never produced text for my report; every sentence above is mine.</dd>" +
      "<dt>Chat reference</dt><dd><span class=\"placeholder\">(paste the shareable chat URL here, or the prompt used if the tool has no share link)</span></dd>" +
      "</dl>" +
      '<p class="policy-note">' + esc(pk.linksPolicy) + "</p></section>";
    html += "</div>";
    return html;
  }

  function teacherBoard() {
    var roster = getRoster();
    var html = topbar([
      { href: "#/settings", label: "Settings" },
      { href: "#/", label: "Switch role" }
    ]);
    html += '<div class="container wide">';
    html += '<p class="kicker">Teacher board \u00b7 ' + esc(TEACHER_NAME) + "</p>";
    html += "<h2>Class board</h2>";
    var counts = { all: roster.length, raised: 0, stuck: 0, stalled: 0 };
    roster.forEach(function (s) { counts[statusOf(s)]++; });
    var raised = roster.filter(function (s) { return s.handRaised; });
    if (raised.length) {
      html += '<div class="queue-head"><span class="dot raised"></span><h3>Hands raised</h3></div>';
      html += '<div class="tgrid" style="margin-bottom:18px">';
      raised.forEach(function (s) { html += teacherCard(s, true); });
      html += "</div>";
    }
    html += '<div class="chips">' + ["all", "raised", "stalled", "stuck"].map(function (f) {
      var labels = { all: "All", raised: "Raised hand", stalled: "Stalled", stuck: "Stuck" };
      return '<button class="chip' + (currentFilter === f ? " on" : "") + '" data-action="filter" data-filter="' + f + '">' +
        labels[f] + " (" + counts[f] + ")</button>";
    }).join("") + "</div>";
    html += '<div class="legend">' +
      '<span><span class="dot ok"></span>On track</span>' +
      '<span><span class="dot stalled"></span>Stalled 5+ days</span>' +
      '<span><span class="dot stuck"></span>Stuck \u2013 failed review twice</span>' +
      '<span><span class="dot raised"></span>Hand raised</span></div>';
    var shown = roster.filter(function (s) {
      return currentFilter === "all" || statusOf(s) === currentFilter;
    });
    shown.sort(function (a, b) {
      var order = { stuck: 0, stalled: 1, ok: 2 };
      var d = (order[statusOf(a)] || 2) - (order[statusOf(b)] || 2);
      return d !== 0 ? d : b.lastActivity - a.lastActivity;
    });
    html += '<div class="tgrid">';
    shown.forEach(function (s) { html += teacherCard(s, false); });
    html += "</div>";
    if (!shown.length) html += '<p class="empty-note">No students match this filter.</p>';
    html += "</div>";
    return html;
  }

  function teacherCard(s, pinned) {
    var pk = PACKS[s.subject];
    var status = statusOf(s);
    var stage = pk.stages[Math.min(s.stageIndex, pk.stages.length - 1)];
    var html = '<a class="tcard card' + (pinned ? " pinned" : "") + '" href="#/teacher/student/' + s.id + '">';
    html += '<div class="tcard-top"><span class="dot ' + status + '"></span>' +
      '<span class="status-label">' + STATUS_TEXT[status] + "</span>" +
      '<span class="subject-chip">' + (s.subject === "geography" ? "Geography" : "Biology") + "</span></div>";
    html += "<h3>" + esc(s.name) + "</h3>";
    html += '<p class="tstage">' + (s.stageIndex >= pk.stages.length ? "All stages complete \u2013 export ready" : "Stage " + (s.stageIndex + 1) + ": " + esc(stage.name)) + "</p>";
    html += '<p class="tmeta">Last active ' + ago(s.lastActivity) + "</p>";
    if (s.handRaised && s.handRaisedAt) {
      html += '<p class="traised">Hand raised ' + ago(s.handRaisedAt) + "</p>";
    }
    html += "</a>";
    return html;
  }

  function fullAnswersHTML(pk, s) {
    var history = (s.history || []).slice().sort(function (a, b) { return a.at - b.at; });
    var html = '<section class="card full-answers"><p class="kicker">Every question and answer</p>' +
      "<h3>Full answers</h3>" +
      '<p class="advice-note">Every stage in order, every question asked, the full verbatim answer and the review verdict. Nothing is summarised or shortened.</p>';
    if (!history.length) {
      html += '<p class="empty-note">No answers recorded yet.</p></section>';
      return html;
    }
    html += '<div class="fa-scroll">';
    pk.stages.forEach(function (stg, i) {
      var recs = history.filter(function (r) { return r.stage === i; });
      html += '<div class="stage-overline">Stage ' + (i + 1) + " \u00b7 " + esc(stg.name) + "</div>";
      if (!recs.length) {
        html += '<p class="empty-note">No answers in this stage yet.</p>';
      } else {
        recs.forEach(function (r) {
          html += answerRecordHTML(r);
        });
      }
    });
    html += "</div></section>";
    return html;
  }

  function teacherProfile(id) {
    var roster = getRoster();
    var s = roster.filter(function (x) { return x.id === id; })[0];
    if (!s) return teacherBoard();
    var pk = PACKS[s.subject];
    var status = statusOf(s);
    var stage = pk.stages[Math.min(s.stageIndex, pk.stages.length - 1)];
    var doneTotal = s.live && s.progressTotal ? s.progressTotal : pk.stages.length;
    var doneCount = s.live && s.progressDone !== undefined ? s.progressDone : s.stageIndex;
    var pct = Math.round((doneCount / doneTotal) * 100);
    var first = s.name.split(" ")[0];
    var html = topbar([
      { href: "#/teacher/board", label: "Board" },
      { href: "#/settings", label: "Settings" },
      { href: "#/", label: "Switch role" }
    ]);
    html += '<div class="container">';
    html += '<a class="backlink" href="#/teacher/board">&#8592; Class board</a>';
    html += '<section class="card"><div class="profile-head">' +
      '<span class="dot ' + statusOf(s) + ' profile-dot"></span>' +
      "<div><p class=\"kicker\">" + esc(pk.aacName) + " \u00b7 " + STATUS_TEXT[statusOf(s)] + "</p>" +
      "<h2>" + esc(s.name) + "</h2></div></div>" +
      '<div class="progress"><span style="width:' + pct + '%"></span></div>' +
      '<p class="progress-note">' + (s.stageIndex >= pk.stages.length ?
        "All " + pk.stages.length + " stages complete \u2013 ready for submission" :
        "Stage " + (s.stageIndex + 1) + " of " + pk.stages.length + ": " + esc(stage.name)) +
      " \u00b7 " + doneCount + " of " + doneTotal + " stages complete \u00b7 last active " + ago(s.lastActivity) + "</p>" +
      '<div class="settings-row"><a class="btn ghost small" href="#/teacher/student/' + esc(s.id) + '/as-student">View as student</a></div>' +
      '<p class="advice-note">Opens ' + esc(first) + "\u2019s stage map, questions, answers and reviews exactly as they see them \u2013 read-only, no actions.</p></section>";
    if (s.handRaised && s.handRaisedAt) {
      html += '<div class="banner"><h3>Hand raised</h3><p class="msg-text">' + esc(first) + " raised a hand " + ago(s.handRaisedAt) + ". Sending advice below will clear it.</p></div>";
    }
    html += '<section class="card"><p class="kicker">Recent submissions</p><h3 style="margin-top:2px">Last submissions</h3>' +
      '<p class="advice-note">Click any submission to open it full-view \u2013 the complete answer, verdict and timestamp.</p>';
    if (!s.submissions.length) {
      html += '<p class="empty-note">No submissions yet.</p>';
    } else {
      html += '<div class="sub-list">';
      s.submissions.slice().reverse().forEach(function (sub) {
        var stgName = pk.stages[sub.stage] ? pk.stages[sub.stage].name : "Stage " + (sub.stage + 1);
        html += '<a class="sub-item" href="#/teacher/student/' + esc(id) + "/sub/" + sub.idx + '"><p class="q-ref">Stage ' + (sub.stage + 1) + " \u00b7 " + esc(stgName) + "</p>" +
          '<p class="q-ref" style="font-weight:600;color:var(--ink)">' + esc(sub.question) + "</p>" +
          '<p class="excerpt">\u201c' + esc(sub.excerpt) + "\u201d</p>" +
          '<span class="verdict ' + sub.verdict + '">' + (sub.verdict === "proceed" ? "Passed review" : "Revise") + "</span>" +
          '<span class="sub-time">' + ago(sub.at) + "</span></a>";
      });
      html += "</div>";
    }
    html += "</section>";
    html += fullAnswersHTML(pk, s);
    html += '<section class="card advice-box"><p class="kicker">Advice box</p>' +
      "<h3>Send guidance to " + esc(first) + "</h3>" +
      '<p class="advice-note">The guidelines are clear: feedback should be general and nondirective. No editing of draft work, no model answers \u2013 H1Done holds the same line.</p>' +
      '<textarea id="advice-input" rows="4" placeholder="e.g. Your method section needs a sentence on how you will minimise bias \u2013 look back at the stage 3 checklist.">' +
      esc(adviceDrafts[id] || "") + "</textarea>" +
      '<div class="review-actions"><button class="btn primary" data-action="send-advice" data-id="' + esc(id) + '">Send to student</button>' +
      '<button class="btn ghost" data-action="suggest-feedback" data-id="' + esc(id) + '">Suggest feedback</button></div>' +
      (drafting[id] ? '<p class="advice-note">Drafting a suggestion from their last answer\u2026</p>' : "") +
      '<p class="advice-note">Suggest feedback drafts a nondirective nudge grounded in their latest answer and this stage\u2019s definition of done \u2013 you review and edit before sending.</p>' +
      (s.live ? '<p class="advice-note">This student is live in this browser \u2013 your message appears on their home screen instantly (try two tabs).</p>' : "") +
      "</section>";
    html += '<section class="card"><p class="kicker">Full prompt and answer record</p><h3>Authentication evidence</h3>';
    if (!s.log.length) {
      html += '<p class="empty-note">Nothing logged yet.</p>';
    } else {
      html += '<ol class="auth-log">';
      s.log.slice().reverse().forEach(function (e) {
        html += "<li><span class=\"when\">" + fmtTime(e.at) + "</span>" +
          '<span class="what">' + esc(e.event) + "</span>" +
          '<span class="detail">' + esc(e.detail || "") + "</span></li>";
      });
      html += "</ol>";
    }
    html += "</section></div>";
    return html;
  }

  function settingsView() {
    var key = getORKey();
    var html = topbar([
      { href: "#/", label: "Home" }
    ]);
    html += '<div class="container" style="max-width:640px">';
    html += '<a class="backlink" href="#/">&#8592; Role chooser</a>';
    html += '<section class="card"><p class="kicker">Demo AI</p><h2>Settings</h2>';
    html += '<h3 style="margin-top:14px">Live AI mentor (optional)</h3>' +
      '<p style="font-size:0.9rem;color:var(--muted)">By default the demo uses canned, scripted mentor reviews written for each stage. Paste an OpenRouter API key and submissions are instead reviewed by <strong>' + OR_MODEL + "</strong> using the product\u2019s mentor rules: ask, never write; reference the definition of done.</p>" +
      '<label class="field-label" for="orkey">OpenRouter API key</label>' +
      '<input type="password" id="orkey" placeholder="Paste your OpenRouter key here" value="' + esc(key) + '">' +
      '<div class="settings-row">' +
      '<button class="btn primary small" data-action="save-key">Save key</button>' +
      '<button class="btn small" data-action="clear-key">Remove key</button>' +
      "</div>" +
      '<p class="status-line">' + (key ?
        "Live AI reviews are <strong class=\"ok\">on</strong>. The key lives only in this browser\u2019s localStorage and is sent only to openrouter.ai." :
        "No key set \u2013 reviews use the <strong class=\"warn\">canned demo script</strong>.") + "</p>";
    html += '<h3 style="margin-top:22px">Demo data</h3>' +
      '<p style="font-size:0.9rem;color:var(--muted)">Reset every student, teacher and settings value in this browser back to the seeded demo state.</p>' +
      '<button class="btn small" data-action="reset-demo">Reset demo data</button>';
    html += "</section></div>";
    return html;
  }

  function buildExportText(st) {
    var pk = PACKS[st.subject];
    var lines = [];
    lines.push(st.name + " \u2013 " + pk.aacName + " (" + pk.subject + ", " + pk.weighting + ")");
    lines.push("");
    pk.stages.forEach(function (s, i) {
      lines.push(pk.reportHeadings[i] || s.name);
      var answers = st.stages[i].answers;
      if (!answers.length) {
        lines.push("(Nothing recorded for this section yet.)");
      } else {
        answers.forEach(function (a) {
          lines.push("Question: " + a.question);
          lines.push(a.text);
          lines.push("");
        });
      }
      lines.push("");
    });
    lines.push("AI USE REFERENCE");
    lines.push("Tool: H1Done Mentor (AI review of my own draft answers, DeepSeek V4.1 Flash via OpenRouter)");
    lines.push("Date: " + fmtDate(Date.now()));
    lines.push("How used: at each project stage the mentor asked me prompt questions and gave feedback on answers I had written myself. It never produced text for my report; every sentence is my own.");
    lines.push("Chat reference: (paste the shareable chat URL here, or the prompt used if the tool has no share link)");
    lines.push("");
    lines.push(pk.linksPolicy);
    return lines.join("\n");
  }

  function copyExport() {
    var st = getStudent();
    var text = buildExportText(st);
    function done(ok) {
      toast(ok ? "Page copied as plain text" : "Copy failed \u2013 select the text manually");
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { fallback(); });
    } else {
      fallback();
    }
    function fallback() {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand("copy");
        document.body.removeChild(ta);
        done(ok);
      } catch (e) {
        done(false);
      }
    }
  }

  function sleep(ms) {
    return new Promise(function (r) { setTimeout(r, ms); });
  }

  async function aiCall(system, user) {
    var key = getORKey();
    if (!key) return null;
    try {
      var res = await fetch(OR_URL, {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + key,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: OR_MODEL,
          messages: [
            { role: "system", content: system },
            { role: "user", content: user }
          ]
        })
      });
      if (!res.ok) return null;
      var data = await res.json();
      var text = data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : "";
      return JSON.parse(String(text).replace(/```json|```/g, "").trim());
    } catch (e) {
      return null;
    }
  }

  function mentorSystemPrompt(pack) {
    return "You are the H1Done mentor for the " + pack.aacName + " (" + pack.subject + "), the 40% Additional Assessment Component of the Irish Leaving Certificate. " +
      "Rules: you are a mentor, not a ghost writer. NEVER write project or report text, model answers or rewrites for the student. " +
      "Ask questions and give feedback only. Reference the stage's definition of done. Ask the next specific question, building on the student's previous answers rather than repeating generic prompts. " +
      "Be warm, specific and brief (max 60 words per field). " +
      'Reply ONLY with JSON of the exact shape {"verdict":"proceed" or "revise","strengths":["...","..."],"nextQuestion":"..."} where strengths quote what actually works in the student\'s answer and nextQuestion is your next question for the student.';
  }

  async function liveReview(pack, stage, question, answer, prevText) {
    var json = await aiCall(mentorSystemPrompt(pack),
      "Stage: " + stage.name +
      "\nDefinition of done: " + stage.definitionOfDone.join("; ") +
      (prevText ? "\nThe student's earlier answers in this stage (for context, build on these): " + prevText : "") +
      "\nQuestion asked: " + question +
      "\nStudent answer: " + answer +
      "\nReview this answer against the definition of done and give your next question.");
    if (!json) return null;
    var strengths = Array.isArray(json.strengths) ? json.strengths.filter(Boolean) : [];
    if (!strengths.length) return null;
    return {
      strengths: strengths.slice(0, 2),
      prompts: json.nextQuestion ? [String(json.nextQuestion)] : [],
      nextQuestion: json.nextQuestion ? String(json.nextQuestion) : null,
      verdict: json.verdict === "revise" ? "revise" : "proceed",
      source: "live"
    };
  }

  function cannedReview(stage, attempts) {
    var flagged = attempts >= 3;
    return {
      strengths: stage.demoReview.strengths.slice(0, 2),
      prompts: flagged ? [stage.demoReview.prompts[0], "Raise the hand button and ask " + PERSONAS[currentPersona()].teacher + " to look at this stage with you."] : stage.demoReview.prompts.slice(0, 2),
      nextQuestion: null,
      verdict: "proceed",
      flagged: flagged,
      source: "canned"
    };
  }

  function feedbackSystemPrompt(pk) {
    return "You are the H1Done teacher-assist for the " + pk.aacName + " (" + pk.subject + "). Draft ONE short piece of feedback (max 80 words) that the classroom teacher could send the student about their most recent answer. " +
      "NCCA AAC rules: feedback must be general and nondirective. Reference what the student actually wrote, point at the stage's definition of done, and use questions or nudges the student can act on. " +
      "NEVER provide model text, rewrites, or wording the student could paste into their report. " +
      'Reply ONLY with JSON of the exact shape {"suggestion":"..."}.';
  }

  function cannedFeedback(s, rec) {
    var stage = PACKS[s.subject].stages[rec.stage];
    var snippet = rec.answer.length > 110 ? rec.answer.slice(0, 110).trim() + "\u2026" : rec.answer;
    return "Good progress \u2013 you wrote: \u201c" + snippet + "\u201d. The definition of done for stage " + (rec.stage + 1) + " says: \u201c" +
      stage.definitionOfDone[0] + "\u201d. Which part of that do you feel least sure about yet, and how could you check it for yourself before our next class?";
  }

  var drafting = {};

  function suggestFeedback(id) {
    var s = findRosterStudent(id);
    if (!s) return;
    var rec = (s.history || []).length ? s.history[s.history.length - 1] : null;
    if (!rec) {
      toast("No answers yet from this student");
      return;
    }
    var pk = PACKS[s.subject];
    var stage = pk.stages[rec.stage];
    if (!getORKey()) {
      adviceDrafts[id] = cannedFeedback(s, rec);
      toast("Feedback drafted from their last answer \u2013 review, edit, then send");
      render();
      return;
    }
    drafting[id] = true;
    render();
    aiCall(feedbackSystemPrompt(pk),
      "Student: " + s.name +
      "\nStage " + (rec.stage + 1) + ": " + stage.name +
      "\nDefinition of done: " + stage.definitionOfDone.join("; ") +
      "\nTheir last answer, to the question \u201c" + rec.question + "\u201d: " + rec.answer +
      "\nDraft the one nondirective feedback message.").then(function (json) {
        var fallback = cannedFeedback(s, rec);
        adviceDrafts[id] = json && json.suggestion ? String(json.suggestion) : fallback;
        delete drafting[id];
        toast("Feedback drafted \u2013 review, edit, then send");
        render();
      });
  }

  function submitAnswer(stageIdx) {
    var st = getStudent();
    var ta = document.getElementById("answer-input");
    var text = ta ? ta.value.trim() : "";
    if (!text) {
      toast("Write an answer first \u2013 the mentor reviews your words, not ours");
      return;
    }
    var pk = PACKS[st.subject];
    var question = nextQuestion(st, stageIdx);
    var stg = st.stages[stageIdx];
    if (stg.lastReview) {
      stg.history.push({ question: stg.lastReview.question, answer: stg.lastReview.answer, at: stg.lastReview.at, verdict: "revise" });
    }
    stg.attempts++;
    stg.draft = "";
    stg.reading = true;
    var prevText = (stg.answers || []).slice(-2).map(function (a) { return a.text; }).join(" || ");
    st.log.push({ at: Date.now(), event: "Submitted answer", detail: "Stage " + (stageIdx + 1) + ": " + question });
    saveStudent(st);
    render();
    var minDelay = sleep(getORKey() ? 0 : 700);
    Promise.all([liveReview(pk, pk.stages[stageIdx], question, text, prevText), minDelay]).then(function (results) {
      var review = results[0] || cannedReview(pk.stages[stageIdx], stg.attempts);
      var st2 = getStudent();
      var stg2 = st2.stages[stageIdx];
      stg2.reading = false;
      stg2.lastReview = {
        question: question,
        answer: text,
        strengths: review.strengths,
        prompts: review.prompts,
        nextQuestion: review.nextQuestion,
        flagged: review.flagged,
        source: review.source,
        at: Date.now()
      };
      saveStudent(st2);
      render();
    });
  }

  function acceptAnswer(stageIdx) {
    var st = getStudent();
    var pk = PACKS[st.subject];
    var stg = st.stages[stageIdx];
    if (!stg.lastReview) return;
    var alreadyDone = st.done[stageIdx];
    stg.history.push({ question: stg.lastReview.question, answer: stg.lastReview.answer, at: stg.lastReview.at, verdict: "accepted" });
    stg.answers.push({ question: stg.lastReview.question, text: stg.lastReview.answer, at: Date.now() });
    stg.lastReview = null;
    stg.customNext = null;
    st.log.push({
      at: Date.now(),
      event: alreadyDone ? "Extra answer accepted" : "Answer accepted",
      detail: "Stage " + (stageIdx + 1) + ": " + pk.stages[stageIdx].name
    });
    if (!alreadyDone) {
      st.done[stageIdx] = true;
      var next = -1;
      for (var j = stageIdx + 1; j < st.done.length; j++) {
        if (!st.done[j]) { next = j; break; }
      }
      st.stageIndex = next === -1 ? st.done.length : next;
      if (next === -1) {
        st.log.push({ at: Date.now(), event: "Project complete", detail: "All " + pk.stages.length + " stages finished" });
      }
    }
    saveStudent(st);
    if (!alreadyDone) {
      if (st.stageIndex < st.done.length) {
        toast("Stage " + (stageIdx + 1) + " complete \u2013 next stage unlocked");
        location.hash = "#/student/stage/" + st.stageIndex;
      } else {
        toast("Project complete \u2013 all " + pk.stages.length + " stages done");
        location.hash = "#/student/home";
      }
    } else {
      toast("Extra answer saved to your export");
      location.hash = "#/student/home";
    }
    render();
  }

  function reviseAnswer(stageIdx) {
    var st = getStudent();
    var stg = st.stages[stageIdx];
    if (!stg.lastReview) return;
    stg.draft = stg.lastReview.answer;
    stg.lastReview = null;
    saveStudent(st);
    render();
  }

  function toggleHand() {
    var st = getStudent();
    st.handRaised = !st.handRaised;
    st.handRaisedAt = st.handRaised ? Date.now() : null;
    st.log.push({
      at: Date.now(),
      event: st.handRaised ? "Hand raised" : "Hand lowered",
      detail: st.handRaised ? "Asked " + st.teacher + " for help on Stage " + (st.stageIndex + 1) : ""
    });
    saveStudent(st);
    toast(st.handRaised ? "Hand raised \u2013 " + st.teacher + " will see it on their board" : "Hand lowered");
    render();
  }

  function markRead() {
    var st = getStudent();
    st.messages.forEach(function (m) { m.read = true; });
    saveStudent(st);
    render();
  }

  function sendAdvice(id) {
    var ta = document.getElementById("advice-input");
    var text = ta ? ta.value.trim() : "";
    if (!text) {
      toast("Write some guidance first");
      return;
    }
    var roster = getRoster();
    var s = null;
    roster.forEach(function (x) { if (x.id === id) s = x; });
    if (!s) return;
    adviceDrafts[id] = "";
    if (s.live) {
      var subject = s.subject;
      var raw = localStorage.getItem("h1_student_" + subject);
      if (raw) {
        var st = JSON.parse(raw);
        st.messages.push({ text: text, at: Date.now(), read: false });
        if (st.handRaised) {
          st.handRaised = false;
          st.handRaisedAt = null;
          st.log.push({ at: Date.now(), event: "Hand cleared", detail: "Teacher responded to the raised hand" });
        }
        st.log.push({ at: Date.now(), event: "Advice received", detail: "From " + s.name.split(" ")[0] + "\u2019s teacher: " + text });
        save("h1_student_" + subject, st);
      }
    }
    s.handRaised = false;
    s.handRaisedAt = null;
    s.lastActivity = Date.now();
    s.log.push({ at: Date.now(), event: "Advice sent", detail: text });
    save("h1_roster", roster);
    toast("Advice sent \u2013 " + s.name.split(" ")[0] + " will see it on their home screen");
    render();
  }

  function chooseStudent(persona) {
    save("h1_persona", persona);
    ensureStudent(persona);
    location.hash = "#/student/home";
  }

  function chooseTeacher() {
    location.hash = "#/teacher/board";
  }

  function saveKey() {
    var input = document.getElementById("orkey");
    var val = input ? input.value.trim() : "";
    if (!val) {
      toast("Paste a key first, or remove the key to stay on canned reviews");
      return;
    }
    save("h1_openrouter_key", val);
    toast("Key saved \u2013 live AI reviews are on");
    render();
  }

  function clearKey() {
    save("h1_openrouter_key", "");
    toast("Key removed \u2013 back to canned demo reviews");
    render();
  }

  function resetDemo() {
    var keys = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf("h1_") === 0) keys.push(k);
    }
    keys.forEach(function (k) { localStorage.removeItem(k); });
    currentFilter = "all";
    lastToastedMessage = 0;
    toast("Demo data reset");
    location.hash = "#/";
    render();
  }

  function render() {
    var parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    var view = parts[0] || "";
    var html;
    if (view === "student") {
      if (parts[1] === "stage" && parts[2] !== undefined) html = studentStage(parts[2]);
      else if (parts[1] === "answers") html = studentAnswers();
      else html = studentHome();
    } else if (view === "teacher") {
      if (parts[1] === "student" && parts[2]) {
        if (parts[3] === "as-student") {
          if (parts[4] === "stage" && parts[5] !== undefined) html = povStage(parts[2], parts[5]);
          else if (parts[4] === "answers") html = povAnswers(parts[2]);
          else html = povHome(parts[2]);
        } else if (parts[3] === "sub" && parts[4] !== undefined) {
          html = profileSubmission(parts[2], parts[4]);
        } else {
          html = teacherProfile(parts[2]);
        }
      } else {
        html = teacherBoard();
      }
    } else if (view === "brief") {
      html = briefView(parts[1]);
    } else if (view === "settings") {
      html = settingsView();
    } else {
      html = roleChooser();
    }
    document.getElementById("app").innerHTML = html;
    window.scrollTo(0, 0);
  }

  document.getElementById("app").addEventListener("click", function (e) {
    var t = e.target.closest("[data-action]");
    if (!t) return;
    var action = t.getAttribute("data-action");
    if (action === "choose-student") chooseStudent(t.getAttribute("data-persona"));
    else if (action === "choose-teacher") chooseTeacher();
    else if (action === "toggle-hand") toggleHand();
    else if (action === "submit-answer") submitAnswer(parseInt(t.getAttribute("data-stage"), 10));
    else if (action === "revise") reviseAnswer(parseInt(t.getAttribute("data-stage"), 10));
    else if (action === "accept") acceptAnswer(parseInt(t.getAttribute("data-stage"), 10));
    else if (action === "mark-read") markRead();
    else if (action === "copy-export") copyExport();
    else if (action === "send-advice") sendAdvice(t.getAttribute("data-id"));
    else if (action === "suggest-feedback") suggestFeedback(t.getAttribute("data-id"));
    else if (action === "save-key") saveKey();
    else if (action === "clear-key") clearKey();
    else if (action === "reset-demo") resetDemo();
    else if (action === "filter") {
      currentFilter = t.getAttribute("data-filter");
      render();
    }
  });

  document.getElementById("app").addEventListener("input", function (e) {
    if (e.target.id === "answer-input") {
      var st = getStudent();
      var parts = location.hash.split("/");
      var idx = parseInt(parts[parts.length - 1], 10);
      if (!isNaN(idx) && st.stages[idx]) {
        st.stages[idx].draft = e.target.value;
        saveStudent(st);
      }
    } else if (e.target.id === "advice-input") {
      var id = location.hash.split("/").pop();
      adviceDrafts[id] = e.target.value;
    }
  });

  window.addEventListener("hashchange", render);
  window.addEventListener("storage", function (e) {
    if (e.key && e.key.indexOf("h1_") === 0) render();
  });

  bootstrapKey();
  render();
})();
