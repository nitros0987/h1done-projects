/* H1Done Talk — deck platform + phone remote.
   One codebase: presenter deck (default), phone remote (?view=remote).
   Teacher deck: ?audience=teachers (15 min — integrity · standardisation · pilot ask).
   Sync: public MQTT over WSS; topic is audience-segmented so remotes never collide. */

/* ================= CONFIG — edit these in one place ================= */
const CONFIG = {
  PASSWORD: "ballybunion",
  // topic channel for laptop<->phone sync (long random suffix = privacy on a public broker).
  // Bumped c9w2 when the teacher deck joined: suffix per build, audience-segmented per deck.
  CHANNEL_ID: "h1talk-ballybunion-2026-09-18-c9w2",
  MQTT_URL: "wss://broker.emqx.io:8084/mqtt",
  // The two demos, one per audience. Plain public URLs — no key in the repo
  // (paste ?key= in Settings on the venue laptop).
  // Students: the study demo (Enzymes board, grill, spacing ladder).
  STUDY_URL: "https://nitros0987.github.io/h1done-learn/",
  // Teachers: the projects demo (triage board, advice round-trip, SEC export).
  PROJECTS_URL: "https://nitros0987.github.io/h1done-projects/",
  // Leave '' to show a fill-later placeholder. Paste the post-survey form link and the QR renders itself.
  SURVEY_URL: "https://docs.google.com/forms/d/e/1FAIpQLSeGLF6V07T47lQEOuy48l7LpZbYZ7NF46YqR1EOuN1cPFZAPQ/viewform",
  // Leave '' to show a fill-later placeholder (button appears once set).
  PRE_SURVEY_URL: "https://docs.google.com/forms/d/e/1FAIpQLSdNcLKuFnutECYgD8oOGOwELsefleSlCQu7fqYuEu6-ut3h6A/viewform",
  // Teacher post-survey ('' = placeholder on the teacher close slide). QR + button render once set.
  TEACHER_SURVEY_URL: "https://docs.google.com/forms/d/e/1FAIpQLSfwg6XHJ4PA62fCXf-5-RNl0U-2OQvERIka2IkWdQm80yGigw/viewform",
  // One-page teacher briefing (Workspace/M365 gap, SEC quotes verified) — shown beside the demo link.
  TEACHER_BRIEF_URL: "https://nitros0987.github.io/h1done-projects/workspace-gap.html",
  DATA_NOTE: "Artificial Analysis · Intelligence Index v4.3 · 16 Sep 2026",
  // bump on every deploy — busts the phone/laptop cache so both ends run the same build
  BUILD: "20260918a",
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

  // one QR + its caption; two of them side by side inside .qr-duo
  const qrCard = (url, caption, alt) =>
    '<div class="qr-box"><img alt="' + alt + '" src="' + qr(url) + '">' +
    '<p class="mut" style="text-align:center;font-size:10px;margin:6px 0 0">' + caption + "</p></div>";

  // inline SVG teaching diagrams (hand-built, brand-coloured)
  const SVG = {
    // spaced repetition: the Osmosis curve he provided (retention saw-tooth vs forgetting curve)
    forget: () =>
      '<img class="diag diag-img" src="img/sr-osmosis.webp" alt="Spaced repetition: retention resets on each review, flattening out above the forgetting curve — better long-term retention. (c) Osmosis">',

    // understanding = map of known vs unknown (two balls + string), compact + clean
    gaps: () =>
      '<svg class="diag" viewBox="0 0 460 140" role="img" aria-label="Two balls, string, gap map">' +
      '<rect x="0" y="0" width="460" height="140" rx="10" fill="var(--card)"/>' +
      '<text x="230" y="24" text-anchor="middle" font-size="12" fill="var(--muted)">the map: what you know vs what you don&rsquo;t</text>' +
      '<circle cx="70" cy="72" r="26" fill="var(--ok)" opacity="0.9"/><text x="70" y="77" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">know</text>' +
      '<circle cx="390" cy="72" r="26" fill="var(--crimson)"/><text x="390" y="77" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">want</text>' +
      '<path d="M96 72 Q 230 34 364 72" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 5"/>' +
      '<circle cx="200" cy="47" r="5" fill="var(--stalled)"/><circle cx="245" cy="42" r="5" fill="var(--stalled)"/><circle cx="290" cy="49" r="5" fill="var(--stalled)"/>' +
      '<text x="230" y="112" text-anchor="middle" font-size="11" fill="var(--stalled)">● gaps found by the pre-quiz — filled before they compound</text>' +
      '<text x="40" y="130" font-size="10" fill="var(--muted)">flow: ~10% beyond your level = enjoyable</text>' +
      '<text x="420" y="130" text-anchor="end" font-size="10" fill="var(--muted)">too far above → zone out</text>' +
      "</svg>",

    // 80/20: Tomás's hand-drawn sketch (provided image)
    pareto: () =>
      '<img class="diag diag-img" src="img/pareto-8020.webp" alt="80/20 principle: many trivial tasks consume 80% of time but yield 20% of results; few vital tasks yield 80% of results">',

    // 40% donut
    donut: () =>
      '<svg class="diag" viewBox="0 0 230 150" role="img" aria-label="40 percent of the LC is coursework">' +
      '<rect x="0" y="0" width="230" height="150" rx="10" fill="var(--card)"/>' +
      '<circle cx="62" cy="75" r="42" fill="none" stroke="var(--bg-alt)" stroke-width="16"/>' +
      '<circle cx="62" cy="75" r="42" fill="none" stroke="var(--crimson)" stroke-width="16" stroke-dasharray="105.5 158.6" transform="rotate(-90 62 75)"/>' +
      '<text x="62" y="80" text-anchor="middle" font-size="16" font-weight="800" fill="var(--ink)">40%</text>' +
      '<text x="118" y="62" font-size="11" fill="var(--ink)" font-weight="600">portfolio + report,</text>' +
      '<text x="118" y="78" font-size="11" fill="var(--ink)" font-weight="600">largely your own time</text>' +
      '<text x="118" y="97" font-size="10" fill="var(--muted)">Engineering 2027: 50%</text>' +
      "</svg>",

    // ladder context window (222k)
    context: () =>
      '<svg class="diag" viewBox="0 0 460 140" role="img" aria-label="Context window fills up, then invention">' +
      '<rect x="0" y="0" width="460" height="140" rx="10" fill="var(--card)"/>' +
      '<rect x="30" y="40" width="400" height="34" rx="8" fill="var(--bg-alt)"/>' +
      '<rect x="30" y="40" width="260" height="34" rx="8" fill="var(--raised)" opacity="0.85"/>' +
      '<text x="42" y="62" font-size="11" fill="#fff" font-weight="600">your documents, the chat so far…</text>' +
      '<text x="330" y="62" font-size="11" fill="var(--muted)">~222k limit</text>' +
      '<text x="30" y="98" font-size="11" fill="var(--stalled)">full up + reasoning eats into it → after that it invents, confidently</text>' +
      '<text x="30" y="118" font-size="11" fill="var(--muted)">long project = feed sections, not the whole folder at once</text>' +
      "</svg>",
  };

  const LOGO = "img/h1d-logo.webp";
  const brandMark = (cls) => '<img class="brand-mark ' + (cls || "") + '" src="' + LOGO + '" alt="H1Done logo">';

  const foot = (beat, clock) =>
    '<div class="slide-foot"><span class="beat">' + beat + "</span><span>" + clock +
    "</span>" + brandMark("foot-mark") + "</div>";

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
      qrCard(CONFIG.STUDY_URL, CONFIG.STUDY_URL.replace("https://", ""), "QR code to the H1Done study demo") +
      "</div>"
    );
  }

  function slideClose(surveyUrl, audienceNote, cta, qrNote, second) {
    const survey = surveyUrl || "";
    const label = cta || "Open the survey";
    const note = qrNote || "2 minutes — really";
    return (
      '<p class="eyebrow">Before you go</p>' +
      '<div class="close-tag">&ldquo;Not every AI is the same &mdash; ask <span class="crim">what model</span>, ask <span class="crim">what settings</span>, and know <span class="crim">how I learn</span>.&rdquo;</div>' +
      '<div class="demo-split" style="margin-top:1vh">' +
      '<div class="demo-copy" style="max-width:560px">' +
      '<p class="sub" style="margin-bottom:1.4vh">' + audienceNote + "</p>" +
      '<div class="cta-row" style="justify-content:flex-start">' +
      (survey
        ? '<a class="btn" href="' + survey + '" target="_blank" rel="noopener">' + label + "</a>"
        : "") +
      "</div></div>" +
      '<div class="qr-duo">' +
      (survey
        ? qrCard(survey, note, "QR code to the finish survey")
        : '<div class="qr-box" style="display:flex;align-items:center;justify-content:center;min-height:150px;border:2px dashed var(--stalled);border-radius:12px"><span class="ph" style="cursor:default">QR — paste survey URL in CONFIG</span></div>') +
      (second ? qrCard(second.url, second.caption, second.alt) : "") +
      "</div>" +
      "</div>" +
      '<p class="mut" style="font-size:clamp(10px,1.6vh,14px);margin-top:2.4vh">Both stay open after tonight &mdash; study demo: <b>' + CONFIG.STUDY_URL.replace("https://", "") + '</b> &middot; the project side: <b>' + CONFIG.PROJECTS_URL.replace("https://", "") + "</b>. No sign-up, nothing to install.</p>"
    );
  }

  // student close: post-survey + pilot capture
  const slideCloseStudents = () =>
    slideClose(
      CONFIG.SURVEY_URL,
      "One last scan: <b>the 2-minute quiz</b> &mdash; six questions from tonight, and you get your score straight away. Then two lines: what should we build next &mdash; and if you want the free pilot in your school before Christmas, leave your email at the last question.",
      "Open the quiz",
      "the quiz &middot; your score straight away",
      {
        url: CONFIG.PROJECTS_URL,
        caption: "the project side &mdash; your 40%",
        alt: "QR code to the H1Done projects demo",
      }
    );

  function ladderSlide(withContext) {
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
      (withContext ? SVG.context() : "") +
      '<p class="mut" style="font-size:clamp(9px,1.4vh,12px);margin-top:1.4vh">Data: ' + CONFIG.DATA_NOTE + " · hallucination rates and cost per task on the handout.</p>"
    );
  }

  // evidence strip: the studies behind each technique
  const evidence = (refs) =>
    '<div class="evidence"><span class="lab">Evidence</span>' +
    refs.map((r) => "<span>" + r + "</span>").join('<span class="sep">·</span>') +
    "</div>";

  function slideHook() {
    return (
      '<p class="eyebrow">Quick show of hands</p>' +
      '<h2>Who here uses AI? &hellip; Who <span class="italic crim">pays</span> for it? &hellip; What do you use it for?</h2>' +
      '<p class="sub">Keep hands up for: heard of <b>Anki</b>? The <b>80/20 principle</b>? <b>Spaced repetition</b>? <b>Active recall</b>?</p>' +
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
      notes: [
        "Let the room settle. Title up as they come in.",
        "Frame it: this is about HOW to study — and a big part of that will be AI.",
        "Promise the room: free tools only tonight. Nothing to buy.",
        "<b>THE ROOM — pre-survey, 51 answers (31× 5th yr · 20× 6th yr):</b>",
        "Hours studied outside school: <b>59% under 5/wk</b> · 25% 5–10 · 16% 10–20. Nobody over 20.",
        "What they DO when they 'study': <b>re-read notes 82%</b> · past papers 49% · highlight 27% · flashcards 29% · videos 20%.",
        "AI use: tried it once or twice <b>45%</b> · weekly 39% · never 12% · daily 4%. Mostly for <b>'explaining things I don't get' (76%)</b>, projects 31%, summaries 20%.",
        "What stops them: <b>phone/distractions 37%</b> · no time 31% · <b>'I don't know how' 24%</b> · don't see the point 8%.",
        "Their #1 ask: <b>'a system that tells me what to do next' 47%</b> · <b>motivation 41%</b> · better notes 8% · someone checking my work 4%.",
        "So: the talk they asked for is METHOD + WHY. Say that early — 'I read your answers; here's what you asked for'.",
        "33% left the 'habit you'd start' box blank or 'idk' — that's the gap the close + post-quiz is for.",
      ],
      html: () =>
        '<div class="title-brand">H1Done <span>study</span></div>' +
        '<div class="title-rule"></div>' +
        '<h1>Study smarter with AI.<br>Not harder.</h1>' +
        '<p class="sub">The most efficient way to learn — understanding, memorising, applying — and where AI actually helps.</p>' +
        '<p class="mut" style="font-size:clamp(10px,1.7vh,14px)">St Joseph&rsquo;s, Ballybunion &middot; 5th &amp; 6th Year</p>',
    },
    {
      beat: "1 · Hook", clock: "0:00–3:00",
      notes: [
        "SHOW OF HANDS, keep energy up: Who uses AI? Which ones? Who PAYS for it? What for?",
        "Then the knowledge check: heard of Anki? 80/20? Spaced repetition? Active recall? (Hands tell you the room's level — adapt.)",
        "Then the four numbers, slowly: 16 vs 42 · 65% vs 91% · 75% vs 28% · $0.25 vs $7.63.",
        "Medicine link: to get INTO medicine and through it — still grilled weekly — we need the MOST efficient way to study. They try to trick you; you must apply, not just know.",
        "Pre-survey calibration: only 2 of 51 use AI daily, 45% tried it once or twice, 12% never. Expect fewer hands than you'd think — and say so if the hands don't match.",
      ],
      html: slideHook,
    },
    {
      beat: "1 · Hook (contd)", clock: "~2:30", diag: "forget",
      notes: [
        "The measured data behind the four numbers — the ladder.",
        "Point at bars: free default 65% → your school tools 82–84% → SAME app with THINK pressed 84% → 91% reference at $0.25.",
        "Line to land: the intelligence is in the MODEL, not the brand. → ask what model, what settings.",
      ],
      html: () => ladderSlide(),
    },
    {
      beat: "2 · Make them care", clock: "3:00–7:00", diag: "donut",
      notes: [
        "The LC quietly moved: up to 40% of the grade = portfolio + report, largely in your own time — with AI in every pocket.",
        "Not all at home: e.g. Geography — at least 20 hours supervised in class; the PORTFOLIO (write-up) is what's done at home, not the physical work.",
        "Biology investigation now; Engineering next year = 50% of the whole grade. Report due ~June 2027.",
        "You already compete against people using AI well. Use it well or it uses you.",
        "Marks moving from MEMORY to METHOD — and the SEC allows AI for research/planning, never your words.",
        "Pre-survey: 31% already use AI for PROJECTS — the rules on this slide are live for a third of the room right now.",
      ],
      html: () =>
        '<p class="eyebrow">What changed while you were studying the old way</p>' +
        '<h2>Up to <span class="crim">40%</span> of your Leaving Cert is now a project &mdash; largely in your own time.</h2>' +
        '<div class="side-split">' +
        '<div class="side-body">' +
        '<div class="stats stats-v" style="margin:0">' +
        '<div class="stat"><div class="big">40%</div><p>Biology (AAC): the investigation + report, largely in your own time — with AI in every pocket.</p></div>' +
        '<div class="stat"><div class="big">50%</div><p>Engineering next year: Design &amp; Manufacture — the biggest coursework weight in the LC.</p></div>' +
        '<div class="stat"><div class="big">2027</div><p>First examined: the new spec you are sitting. Half your grade decided before exam day.</p></div>' +
        "</div>" +
        '<p class="sub" style="margin:1.4vh 0 0">Not all at home &mdash; e.g. Geography: <b>at least 20 hours supervised in class</b>; the <b>portfolio</b> (the write-up) is what&rsquo;s done at home.</p>' +
        "</div>" +
        '<div class="side-media"><img class="diag-img" src="img/ai-fork.v2.webp" alt="40% of your LC: donut chart, stat cards 40/50/2027, class road to portfolio-at-home, AI for research and planning"></div>' +
        "</div>" +
        '<div class="take one-line">The SEC allows AI for <b>research and planning</b> &mdash; never to write your words. The winners learn <b>method</b>, not memory.</div>',
    },
    {
      beat: "3 · Write your why", clock: "7:00–12:00",
      notes: [
        "80/20 of THIS talk: strategy is only 20% — the other 80% is psychology. So: write your why.",
        "Be SPECIFIC: points range (top + low), course, place. Vague = useless.",
        "Top range: what would it give you? Independence? Family? The smartest course?",
        "Below the line: what would it cost you — what could you NOT give, not have, how would you feel?",
        "Then 4 min SILENCE, two columns, pens down rule. Quote: motivation isn't a talk — it's a sentence you wrote yourself.",
        "YOUR OWN WHY-LINE IS VERBAL — it is no longer on the slide. Say it out loud (medicine, the points, the place) before the 4 minutes start.",
        "Pre-survey: MOTIVATION was the #1 ask for 41% of them — this slide is aimed straight at that. Another 24% said 'I don't know how' (that's the rest of the talk).",
      ],
      html: () =>
        '<p class="eyebrow">Before any technique &mdash; the 80% that is psychology, not strategy</p>' +
        '<h2>Write your own <span class="italic crim">why</span>.</h2>' +
        '<p class="sub">Be specific: the points range (top + low), the course, the place. Then &mdash; 4 minutes, silence, pens moving:</p>' +
        '<div class="why-grid">' +
        '<div class="why-col win"><h3><span class="mark">✓</span>If I hit my points&hellip;</h3><div class="why-line"></div><div class="why-line"></div><div class="why-line"></div></div>' +
        '<div class="why-col cost"><h3><span class="mark">✗</span>If I don&rsquo;t, it costs me&hellip;</h3><div class="why-line"></div><div class="why-line"></div><div class="why-line"></div></div>' +
        "</div>",
    },
    {
      beat: "4 · Understand", clock: "12:00–15:00", diag: "gaps",
      notes: [
        "Learning = 3 processes: UNDERSTAND, MEMORISE, APPLY. Laws, not tricks — the tricks just serve them.",
        "Definition of understanding: knowing WHAT YOU KNOW vs WHAT YOU DON'T. That's the map (see the two balls).",
        "A teacher can't customise to 30 individual levels — AI can. Quiz BEFORE you read: find the gaps, fill them early, catch misconceptions before the framework sets.",
        "Flow state: taught ~10% beyond your level = enjoyable; below = boring; above = you zone out. Nothing to do with intelligence — everything to do with level.",
        "Evidence: Bloom's 2-sigma (1-to-1 tutoring ≈ 2 standard deviations better); Vygotsky's zone of proximal development; pre-questions prime learning.",
        "Pre-survey: 76% already use AI for 'explaining things I don't get' — they're at step 1 already. The upgrade is 'QUIZ me first, then teach to my level'.",
      ],
      html: () =>
        '<div class="side-split">' +
        '<div class="side-body">' +
        '<div class="tech-head"><span class="tech-num">1</span><h2>Understand &mdash; at <span class="italic crim">your</span> level</h2></div>' +
        '<p class="sub">Learning is three processes: <b>understand &rarr; memorise &rarr; apply</b>. Understanding starts with a map: <i>what you know vs what you don&rsquo;t.</i></p>' +
        '<div class="tools"><span class="tool-chip"><b>ChatGPT / AI Studio</b> — &ldquo;quiz me first, then teach to my level&rdquo;</span><span class="tool-chip"><b>NotebookLM</b> — grounded in YOUR sources</span><span class="tool-chip"><b>Voice-to-text</b> — talk your questions in (Groq, free)</span></div>' +
        '<ul class="tech-steps"><li>Quiz <em>before</em> you read &mdash; find the gaps and the misconceptions early, while they&rsquo;re cheap to fix.</li><li>Then read content built for your level: every acronym explained, every gap filled as you go.</li><li>~10% beyond your level = flow: enjoyable, fast. Too far below = boring. Too far above = you zone out. It&rsquo;s level, not intelligence.</li><li>A class of 30 gets one speed. A good AI gets <em>yours</em> &mdash; a private tutor effect, for free.</li></ul>' +
        '<div class="trap"><b>The trap</b>Passive reading and re-watching. If no question was asked, no map was drawn &mdash; you don&rsquo;t know what you don&rsquo;t know.</div>' +
        evidence(["Bloom&rsquo;s 2-sigma: 1-to-1 tutoring ≈ +2 SD", "Vygotsky: zone of proximal development", "pre-testing primes later learning (Kornell)"]) +
        "</div>" +
        '<div class="side-media"><img class="diag-img" src="img/ai-partner.v2.webp" alt="How to understand a topic: know vs want-to-know circles, gaps found by pre-quiz, quiz before you read, class of 30 vs AI private tutor free"></div>' +
        "</div>",
    },
    {
      beat: "4 · Memorise", clock: "15:00–17:30", diag: "forget",
      notes: [
        "Memorise = recall on demand. Active recall = a thousand mini-tests; spaced repetition schedules them.",
        "Walk the diagram: memory decays → recall at the thin moment lifts it → interval grows 1→3→7→14→30.",
        "Without spacing: the same card 10–40 times. With it: minutes a day. 5 min today > 1 hour Sunday.",
        "Proof-of-life: this exact system carried him through the LC grind and MRCS last week.",
        "Evidence: Ebbinghaus forgetting curve (1885); Roediger & Karpicke 2006 (testing beats re-reading, massive effect); Cepeda 2006 (spacing meta-analysis); Dunlosky 2013 (practice testing + distributed practice = top two techniques).",
        "THIS is the slide for this room: 82% said re-reading notes is what 'studying' means to them, 27% highlight — and only 29% use flashcards. Name it kindly: the most popular method is the weakest one.",
      ],
      html: () =>
        '<div class="tech-head"><span class="tech-num">2</span><h2>Memorise &mdash; like a muscle</h2></div>' +
        '<div class="side-split">' +
        '<div class="side-body">' +
        '<p class="sub">Understood &ne; memorised. Memorised = you can <b>recall it on demand</b>: active recall (a thousand mini-tests) + spacing.</p>' +
        '<div class="tools"><span class="tool-chip"><b>Anki</b> — free on desktop &amp; Android, does the scheduling for you</span></div>' +
        '<ul class="tech-steps"><li>Every fact is a question. Answering it <em>is</em> the workout &mdash; the lift, barely managed.</li><li>Memory decays on a curve. Recall right at the thin moment = strongest lift — and the next interval grows.</li><li>Anki times that moment for you: 1 · 3 · 7 · 14 · 30 days. Miss = sooner. Easy = later.</li><li>Read once with feeling, then never re-read — recall instead. 5 minutes daily beats an hour on Sunday.</li></ul>' +
        '<div class="trap"><b>The trap</b>Re-reading and highlighting — recognition, not recall. Feels easy because it <em>is</em> easy: it isn&rsquo;t learning. Don&rsquo;t binge 400 cards in one night; cards are made <em>during</em> study.</div>' +
        evidence(["Ebbinghaus forgetting curve (1885)", "Roediger &amp; Karpicke 2006: testing &gt; re-reading", "Cepeda 2006: spacing meta-analysis", "Dunlosky 2013: top-2 techniques"]) +
        "</div>" +
        '<div class="side-media">' + SVG.forget() +
        '<p class="mut" style="font-size:clamp(8px,1.3vh,11px);margin:6px 0 0;text-align:center">each review resets the fade, flattening higher &mdash; better long-term retention (Osmosis.org)</p></div>' +
        "</div>",
    },
    {
      beat: "4 · Apply", clock: "17:30–19:30", diag: "pareto",
      notes: [
        "APPLY is the exam skill: knowing ≠ applying under time pressure, multi-topic questions, examiners trying to trick you.",
        "Applying is also the only honest CHECK that you understood.",
        "80/20: past questions grouped by type — AI groups them so you do fewer, better. StudyClick for the papers.",
        "The loop closes: wrong answers → new flashcards → back into Anki → re-apply. And corrected work must RETURN (re-test in 2–4 weeks) or it evaporates.",
        "Evidence: testing effect again (retrieval practice as study); immediate feedback corrects faster (formative-assessment lit); feedback + re-test beats single marking.",
        "Pre-survey: 49% already do past papers — good. The upgrade is GROUPING by question type + AI marking against the scheme, and only 16% currently use AI for past questions.",
      ],
      html: () =>
        '<div class="tech-head"><span class="tech-num">3</span><h2>Apply &mdash; past questions first</h2></div>' +
        '<div class="side-split">' +
        '<div class="side-body">' +
        '<p class="sub">The exam doesn&rsquo;t ask &ldquo;do you know it&rdquo; &mdash; it asks &ldquo;can you <b>use</b> it, under time, with tricks&rdquo;. Applying is also the only honest <em>check</em>.</p>' +
        '<div class="tools"><span class="tool-chip"><b>Past papers grouped by type</b> — 80/20: fewer questions, better chosen (StudyClick / paper sites)</span><span class="tool-chip"><b>AI as marking scheme</b> — paste answer + scheme, get marked honestly</span><span class="tool-chip"><b>OpenRouter :free</b> — no-login fallback</span></div>' +
        '<ul class="tech-steps"><li>Attempt a past question <em>early</em> — before you feel &ldquo;ready&rdquo;. The exam is a genre; learn its moves.</li><li>Every wrong answer becomes a new flashcard — the miss feeds straight back into the memorise step.</li><li>Loop it: cards &rarr; apply &rarr; wrongs &rarr; new cards &rarr; re-apply. Full papers folded in as you go.</li><li>In the project: AI may organise your plan and clarify research &mdash; never write your words. Say exactly how you used it.</li></ul>' +
        '<div class="trap"><b>The trap</b>Nodding at a model answer. Nodding is not writing. And a corrected test you never re-sit is a lesson evaporating — put it back in the loop.</div>' +
        evidence(["retrieval practice as exam prep", "immediate feedback &gt; delayed (formative lit)", "corrections re-tested in 2–4 weeks stick"]) +
        "</div>" +
        '<div class="side-media">' + SVG.pareto() + "</div>" +
        "</div>",
    },
    {
      beat: "4 · The loop", clock: "19:30–20:00",
      notes: [
        "ONE LINE, left to right — like the ladder they just saw. Walk it: grill → read → cards → apply → wrongs.",
        "Then point at the loop-back arrow on the right: every WRONG becomes a new card and feeds straight back into CARDS → APPLY again.",
        "This is the /incremental loop that got him through the LC in 6 months and MRCS last week.",
        "Each pass the intervals grow — the loop spins slower per fact because you KNOW it better. Efficiency = fewer, better reps.",
        "AI's jobs: grill, customise, group, mark. Your job: the recall. The machine can't lift for you.",
        "Tie back to their #1 ask: 47% wanted 'a system that tells me what to do next' — this loop IS that system, and the demo is it webbed into a tool.",
      ],
      html: () =>
        '<div class="tech-head"><span class="tech-num">∞</span><h2>The loop &mdash; one line, then it spins</h2></div>' +
        '<p class="sub">Three processes, one line &mdash; and every wrong answer feeds back in. That&rsquo;s spacing compounding.</p>' +
        '<div class="side-split">' +
        '<div class="side-body">' +
        '<div class="loop-row">' +
        '<span class="loop-step">Grill<br><small>find the gaps</small></span><span class="loop-arrow">&rarr;</span>' +
        '<span class="loop-step">Read<br><small>at your level</small></span><span class="loop-arrow">&rarr;</span>' +
        '<span class="loop-step">Cards<br><small>Anki daily</small></span><span class="loop-arrow">&rarr;</span>' +
        '<span class="loop-step">Apply<br><small>past Qs</small></span><span class="loop-arrow">&rarr;</span>' +
        '<span class="loop-step loop-back">Wrongs<br><small>new cards</small></span>' +
        "</div>" +
        '<div class="loop-wrap"><svg class="loop-back-arc" viewBox="0 0 560 64" preserveAspectRatio="none" aria-hidden="true"><path d="M548 8 C 470 54, 240 58, 42 22" fill="none" stroke="var(--ok)" stroke-width="3" marker-end="url(#looparrow)"/><defs><marker id="looparrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--ok)"/></marker></defs></svg><span class="loop-back-label">every wrong &rarr; a new card &rarr; back into Cards &amp; Apply &mdash; the loop spins</span></div>' +
        '<ul class="tech-steps"><li>Every <b>wrong becomes a new card</b> &rarr; straight back into the deck &rarr; apply again. The loop spins.</li><li>Intervals grow 1 &rarr; 3 &rarr; 7 &rarr; 14 &rarr; 30 days: the loop spins slower per fact because you know it better.</li><li>AI&rsquo;s jobs: <b>grill you, customise the reading, group the questions, mark honestly</b>. Your job: the recall. The machine can&rsquo;t lift for you.</li></ul>' +
        evidence(["this exact loop carried the LC in 6 months → MRCS", "efficiency = fewer, better reps — not more hours"]) +
        "</div>" +
        '<div class="side-media"><img class="diag-img" src="img/ai-loop.v2.webp" alt="Study loop: grill, read, cards, apply, wrongs — every wrong becomes a new card, review timeline 1-3-7-14-30 days"></div>' +
        "</div>",
    },
    {
      beat: "5 · Not all AI is equal", clock: "20:00–22:00", diag: "dials",
      notes: [
        "Not every doctor is equal, not every teacher is equal — not every AI is equal. Same logo ≠ same brain.",
        "Two questions to ask ANY AI: What MODEL? What SETTINGS? (Thinking on/off is a setting that jumps 65→84 on the same app.)",
        "Context ceiling: ~222k characters — reasoning eats into it — after that it invents. Feed sections, not whole folders.",
        "Charts if asked: full index board · hallucination ladder (18% vs 96%!) · cost bars ($0.25 vs $7.63) · scatter = the attractive quadrant. Ask which one they want to see — details stay collapsed unless a question pulls.",
        "Settings: voice-to-text for input (faster than typing), OpenRouter :free for no-login access, right model = pennies.",
      ],
      html: () =>
        '<div class="tech-head"><span class="tech-num">4</span><h2>Not all AI is equal &mdash; <span class="italic crim">measured, not marketed</span></h2></div>' +
        '<p class="sub one-line">PhD-level science exam · cost per task · hallucination rate &mdash; 652 models benchmarked. <b>Same logo, 30-point gaps.</b></p>' +
        '<div class="aa-grid">' +
        '<figure class="aa-card"><img src="img/aa-index.webp" alt="Artificial Analysis Intelligence Index leaderboard" loading="lazy"><figcaption>Intelligence Index v4.3 — GLM-5.3-Flash (42) above every free &amp; school-served model</figcaption></figure>' +
        '<figure class="aa-card"><img src="img/aa-halluc.webp" alt="Hallucination rate chart" loading="lazy"><figcaption>Hallucination rate, lower is better — 28% vs 96%. When it&rsquo;s wrong, does it admit it?</figcaption></figure>' +
        '<figure class="aa-card"><img src="img/aa-cost.webp" alt="Cost per task chart" loading="lazy"><figcaption>Cost per task — $0.25 vs $7.63. Free and cheap beat the expensive defaults.</figcaption></figure>' +
        '<figure class="aa-card"><img src="img/aa-scatter.webp" alt="Intelligence vs cost scatter" loading="lazy"><figcaption>The green quadrant: intelligence per euro — GLM-5.3-Flash left of the Pareto line</figcaption></figure>' +
        "</div>" +
        '<div class="take one-line">Two questions before you trust any AI: <b>what model?</b> &mdash; <b>what settings?</b> Press Think. Know what you&rsquo;re holding.</div>',
    },
    {
      beat: "6 · Live demo", clock: "22:00–27:00",
      notes: [
        "Phones OUT. Scan the QR on screen — it goes to the STUDY demo (h1done-learn), not the projects site.",
        "One student on the big screen if the room allows: pick Biology → Enzymes.",
        "Flow: board → grill of 5 → self-mark 1–4 → one-line rule filed → spacing ladder 1·3·7·14·30 shown.",
        "This IS the loop, webbed into a tool. Teachers: this is the pilot conversation.",
        "NB the printed A4: make sure it's the h1done-learn QR for tonight — the projects QR is on the close slide instead.",
      ],
      html: slideDemo,
    },
    {
      beat: "7 · Close", clock: "27:00–30:00",
      notes: [
        "Tagline slowly, word for word: not every AI is the same — ask what model, what settings, know how I learn.",
        "The system is ours: free pilot before Christmas through the principal.",
        "ASK: scan → the 2-minute POST-QUIZ. Six questions from tonight, you get your score instantly, then two lines of feedback. Q1 is the passphrase (ballybunion) so we know who was in the room.",
        "Say it plainly: the quiz is the last rep of the night — testing yourself is the whole message, so we finish by doing it.",
        "Email at the last question = the pilot list. The open box at the end comes straight to us — questions, complaints, all of it.",
        "TWO QRs on this slide: left = the quiz, right = the PROJECT side (h1done-projects) for the 40% coursework — mention it for anyone starting their investigation.",
        "Pre-survey: a third left 'a habit you'd start' blank. Ask for ONE line, one habit, before they leave the room.",
        "Fair warning reprise: too fast? jargon? disagree? — say so. Try it for two weeks before you judge it.",
      ],
      html: slideCloseStudents,
    },
  ];

  /* -------- teacher deck builders -------- */

  // teacher demo slide: plain public URLs only — ?key= never goes in the repo
  function slideTeacherDemo() {
    return (
      '<p class="eyebrow">Live demo &mdash; teacher side</p>' +
      '<h2>The triage board, the advice loop, <span class="italic crim">the audit trail.</span></h2>' +
      '<div class="demo-split">' +
      '<div class="demo-copy">' +
      '<p class="sub" style="margin-bottom:1.2vh">I&rsquo;ll drive it on screen. What to watch for:</p>' +
      '<ul class="tech-steps"><li><b>Triage board</b> — 🟢🟠🔴🔵 set by <em>events</em>, not AI. Zero AI cost, fully explainable.</li>' +
      "<li><b>Advice round-trip</b> — I type advice to one student; it lands in their tab (second window), and the hand-raise clears.</li>" +
      '<li><b>View as student</b> — read-only, exactly what they see, no side-channels.</li>' +
      '<li><b>Complete export</b> — the student&rsquo;s <em>verbatim</em> answers under SEC headings, with the AI-use appendix already written for you.</li></ul>' +
      '<div class="tools"><span class="tool-chip"><b>Follow on your phone</b> — scan, then tap <b>Teacher</b> &rarr; the board</span></div>' +
      "</div>" +
      qrCard(CONFIG.PROJECTS_URL, CONFIG.PROJECTS_URL.replace("https://", "") + " &mdash; tap Teacher", "QR code to the H1Done projects demo") +
      "</div>"
    );
  }

  function slideTeacherBrief() {
    return (
      '<p class="eyebrow">The honest answers &mdash; yes, you can get close with what you already have</p>' +
      '<h2>Free alternatives, <span class="italic crim">and what each one still costs you.</span></h2>' +
      '<div class="stats stats-v" style="max-width:900px">' +
      '<div class="stat"><p><b>Classroom, staged</b> — one assignment per stage, own deadline. Free, works today. <i>No gating, no export, no AI-use record — same stages for every student.</i></p></div>' +
      '<div class="stat"><p><b>Forms as checkpoints</b> — timestamped audit trail. <i>Self-reported, unverified, and a form per stage per student.</i></p></div>' +
      '<div class="stat"><p><b>Docs tracker + revision history</b> — the timestamp evidence you already have. <i>Manual to review, and it shows edits, not answers.</i></p></div>' +
      '<div class="stat"><p><b>Notion free kanban</b> — per-student boards. <i>Another login, and none of it writes the SEC acknowledgment for you.</i></p></div>' +
      "</div>" +
      '<div class="take one-line">All of these cost <b>hours of assembly</b> &mdash; and none give verbatim stage evidence or an AI-use record. Full brief: <b>' + CONFIG.TEACHER_BRIEF_URL.replace("https://", "") + "</b></div>"
    );
  }

  function slideCloseTeachers() {
    return (
      '<p class="eyebrow">Before you go</p>' +
      '<div class="close-tag">&ldquo;Not every AI is the same &mdash; ask <span class="crim">what model</span>, ask <span class="crim">what settings</span>, and know <span class="crim">how I learn</span>.&rdquo;</div>' +
      '<div class="demo-split" style="margin-top:1vh">' +
      '<div class="demo-copy" style="max-width:560px">' +
      '<p class="sub" style="margin-bottom:1.4vh">One thing before you go: <b>the 2-minute teacher survey</b> — your subject, and the one thing that would make AI use work for your class. If you&rsquo;d like to talk about the project process we&rsquo;re developing, find me at the break or after.</p>' +
      '<div class="cta-row" style="justify-content:flex-start">' +
      (CONFIG.TEACHER_SURVEY_URL
        ? '<a class="btn" href="' + CONFIG.TEACHER_SURVEY_URL + '" target="_blank" rel="noopener">Open the teacher survey</a>'
        : "") +
      "</div></div>" +
      '<div class="qr-duo">' +
      (CONFIG.TEACHER_SURVEY_URL
        ? qrCard(CONFIG.TEACHER_SURVEY_URL, "the teacher survey &middot; 2 minutes", "QR code to the teacher survey")
        : '<div class="qr-box" style="display:flex;align-items:center;justify-content:center;min-height:150px;border:2px dashed var(--stalled);border-radius:12px"><span class="ph" style="cursor:default">QR — paste TEACHER_SURVEY_URL in CONFIG</span></div>') +
      qrCard(CONFIG.STUDY_URL, "the student study demo", "QR code to the H1Done study demo") +
      "</div>" +
      "</div>" +
      '<p class="mut" style="font-size:clamp(10px,1.6vh,14px);margin-top:2.4vh">One-page brief to keep: <b>' + CONFIG.TEACHER_BRIEF_URL.replace("https://", "") + "</b> &middot; the projects demo: <b>" + CONFIG.PROJECTS_URL.replace("https://", "") + "</b></p>"
    );
  }

  const SLIDES_TEACHERS = [
    {
      beat: "Welcome", clock: "0:00", centered: true,
      notes: [
        "Title up as they come in. 15 minutes, informative — not a pitch.",
        "Frame: what the SEC rules ask of you, the mechanism that answers them, how to use AI for project work.",
        "Patrick covered what AI is and the guidance — this is how the rules land on your desk, and how to use AI within them.",
        "Promise: exact SEC wording, a live demo you can test at break, and a 2-minute survey at the end.",
        "Pre-flight (was the sticky): demo tab pre-opened — teacher board + a student tab for the round-trip; printed A4 QR of the briefing in the bag; post-survey QR renders on the close slide.",
      ],
      html: () =>
        '<div class="title-brand">H1Done <span>projects</span></div>' +
        '<div class="title-rule"></div>' +
        "<h1>The 40% process,<br>for teachers.</h1>" +
        '<p class="sub">The new LC projects: what the SEC rules ask of you, the mechanism that answers them &mdash; and how to use AI for project work.</p>' +
        '<p class="mut" style="font-size:clamp(10px,1.7vh,14px)">St Joseph&rsquo;s, Ballybunion &middot; teacher session &middot; 15 min</p>',
    },
    {
      beat: "1 · The rules land on your desk", clock: "0:00–2:30", diag: "book",
      notes: [
        "Quoting EXACTLY — Coursework Rules 2025/26, Appendix 2, pages 33–36.",
        "PERMITTED (read slowly): gathering background information from credible sources · structuring coursework plans · clarifying research material.",
        "PROHIBITED: generating coursework content directly · copying OR paraphrasing AI material — and any ideas/prompts/suggestions must be explicitly acknowledged, in their own words.",
        "Acknowledgment appendix: tool name + version · developer · date · description of use · prompts where applicable · session URL. No credit for referenced AI material itself.",
        "Penalties ladder: loss of coursework marks → loss of the subject → loss of the entire examination → debarment the following year.",
        "And Form P.2: the candidate signs that it's authentic and free from unacknowledged AI assistance — before starting, they discuss AI use with you.",
      ],
      html: () =>
        '<p class="eyebrow">Coursework Rules 2025/26 &middot; Appendix 2 (pp. 33&ndash;36) &mdash; the exact wording</p>' +
        '<h2>What the SEC actually wrote about AI.</h2>' +
        '<div class="side-split">' +
        '<div class="side-body">' +
        '<div class="why-grid" style="margin:0.6vh 0 1.2vh">' +
        '<div class="why-col win"><h3><span class="mark">&#10003;</span>Permitted</h3>' +
        '<ul class="tech-steps" style="margin:0"><li>Gathering <b>background information</b> on a topic from credible sources</li><li><b>Structuring coursework plans</b></li><li><b>Clarifying research material</b></li></ul></div>' +
        '<div class="why-col cost"><h3><span class="mark">&#10007;</span>Prohibited</h3>' +
        '<ul class="tech-steps" style="margin:0"><li>Using AI to <b>generate coursework content</b> directly</li><li><b>Copying or paraphrasing</b> AI-generated material</li><li>Any AI use without the <b>explicit acknowledgment</b></li></ul></div>' +
        "</div>" +
        '<p class="sub" style="margin:0.6vh 0 1vh"><b>Acknowledgment appendix:</b> tool name + version &middot; developer &middot; date of output &middot; description of use &middot; prompts where applicable &middot; session URL. Referenced AI material earns <b>no marks itself</b>.</p>' +
        '<div class="trap"><b>Penalties ladder</b>Loss of the coursework marks &rarr; loss of the subject &rarr; loss of the entire examination &rarr; debarment the following year. And Form P.2: candidates discuss AI use with you <em>before</em> starting, then sign that the work is their own.</div>' +
        "</div>" +
        '<div class="side-media"><img class="diag-img" src="img/ai-fork.v2.webp" alt="AI fork in the road: permitted uses vs prohibited uses under the SEC Coursework Rules"></div>' +
        "</div>",
    },
    {
      beat: "2 · The hard wall = your protection", clock: "2:30–5:00",
      notes: [
        "Align with Patrick: YOUR JOB IS AUTHENTICATION, NOT DETECTION — nobody handed examiners real training.",
        "So don't detect — make the trail. The hard wall: AI NEVER writes report text. Not one sentence.",
        "Every stage, the student answers in their own words; the platform exports them VERBATIM under the SEC's own headings.",
        "The AI-use appendix writes itself: tool, version, developer, date, what it was used for, per stage. D5/D30.",
        "Land it: if a student ever can't show this trail, that's the conversation — and it's evidence, not vibes.",
        "Quote-back: 'we must make candidates aware of all the rules' + 'adequate oversight' — this is oversight made automatic.",
      ],
      html: () =>
        '<p class="eyebrow">Integrity &mdash; aligned with what you already heard today</p>' +
        '<h2><span class="italic crim">&ldquo;Your job is authentication, not detection.&rdquo;</span></h2>' +
        '<div class="side-split">' +
        '<div class="side-body">' +
        '<p class="sub" style="margin-bottom:1vh">Detection is a trap &mdash; half an A4 page of guidance is what examiners get. So we make the trail instead. The <b>hard wall</b>:</p>' +
        '<ul class="tech-steps"><li><b>AI never writes report text.</b> Not one sentence. The platform is built so it <em>cannot</em>.</li><li>Each stage: the student answers in their own words &rarr; exported <b>verbatim</b>, word for word, under the SEC&rsquo;s own stage headings.</li><li>The <b>AI-use appendix writes itself</b> — tool, version, developer, date, purpose, per stage. SEC format, ready to submit.</li><li>Every word traceable to the student &mdash; timestamped as they went, not the night before.</li></ul>' +
        '<div class="take one-line">You sign Form P.2 on <b>evidence</b> &mdash; the trail <em>is</em> the authentication.</div>' +
        "</div>" +
        '<div class="side-media"><img class="diag-img" src="img/ai-partner.v2.webp" alt="AI as partner, not ghostwriter: student answers exported verbatim with auto AI-use acknowledgment"></div>' +
        "</div>",
    },
    {
      beat: "3 · Standardisation", clock: "5:00–6:00",
      notes: [
        "One scaffold for ALL students — same stages, same SEC headings, same definitions of done.",
        "Comparable: same headings = marks and moderation are like-for-like. Auditable: verbatim trail per stage.",
        "Rules-based triage: 🟢🟠🔴🔵 from EVENTS (stages done, hand-raises, attempts) — zero AI cost, fully explainable.",
        "Anti-ChatGPT argument: ChatGPT gives 30 different students 30 different scaffolds — ours gives one, so the class stays comparable.",
        "Admin SHRINKS: the export, the appendix, the oversight trail — all generated, none of it extra sheets for you.",
      ],
      html: () =>
        '<p class="eyebrow">Standardisation &mdash; the anti-ChatGPT argument</p>' +
        '<h2>One scaffold. <span class="italic crim">Comparable and auditable.</span></h2>' +
        '<div class="side-split">' +
        '<div class="side-body">' +
        '<ul class="tech-steps"><li><b>One scaffold, whole class</b> — same stages, same SEC headings, same definitions of done. ChatGPT gives 30 students 30 different scaffolds; this gives one.</li><li><b>Comparable</b> — like-for-like headings mean marking and moderation align across the class.</li><li><b>Auditable</b> — verbatim per-stage trail, timestamps included. Nothing extra to collect.</li><li><b>Rules-based triage</b> — the 🟢🟠🔴🔵 board is set by <em>events</em>, not AI: stages done, hand-raises, attempts. Zero AI cost, fully explainable.</li></ul>' +
        '<div class="take one-line">The export, the acknowledgment, the oversight trail &mdash; <b>generated, not assembled.</b> Your admin shrinks.</div>' +
        "</div>" +
        '<div class="side-media"><img class="diag-img" src="img/ai-loop.v2.webp" alt="One project loop for the whole class: stages, checkpoint, review, export — standardised and auditable"></div>' +
        "</div>",
    },
    {
      beat: "4 · The Workspace/M365 gap", clock: "6:00–7:00",
      notes: [
        "Be honest about Classroom/Teams: they're GOOD — assignment in, grade out, rubrics, originality reports.",
        "But originality = plagiarism, not AI provenance. And the gap: no stage-by-stage gating, no per-stage verbatim export, no AI-use logging, no guided flow.",
        "THE LINE (say it, pause): They manage the assignment. We teach the process.",
        "Next slide = the honest free alternatives; QR on screen is the one-page brief — leave it up through both slides.",
        "This is the Workspace/Teams positioning: a missing layer INSIDE what you already run, not a migration.",
      ],
      html: () =>
        '<p class="eyebrow">Where Classroom and Teams stop &mdash; the honest picture</p>' +
        '<h2>&ldquo;They manage the assignment.<br><span class="italic crim">We teach the process.&rdquo;</span></h2>' +
        '<div class="stats stats-v" style="max-width:900px">' +
        '<div class="stat"><p><b>What they do well:</b> assignment in &rarr; work in &rarr; rubric &rarr; grade out. Originality reports flag copied work &mdash; against the web. That&rsquo;s plagiarism, <b>not AI provenance</b>.</p></div>' +
        '<div class="stat"><p><b>What neither has:</b> stage-by-stage gating (research &rarr; draft &rarr; revision, each with its own checkpoint) &middot; <b>per-stage verbatim export</b> for authentication &middot; <b>AI-use logging</b> &middot; a guided flow tied to the project.</p></div>' +
        "</div>" +
        '<div class="demo-split" style="margin-top:0.6vh">' +
        '<div class="demo-copy"><p class="sub" style="margin:0">One page, everything above on paper: the SEC quotes verified, the gap, the alternatives.</p></div>' +
        '<div class="qr-box"><img alt="QR code to the teacher briefing page" src="' + qr(CONFIG.TEACHER_BRIEF_URL) + '"><p class="mut" style="text-align:center;font-size:10px;margin:6px 0 0">' + CONFIG.TEACHER_BRIEF_URL.replace("https://", "") + "</p></div>" +
        "</div>",
    },
    {
      beat: "4b · The honest alternatives", clock: "7:00–7:30",
      notes: [
        "Say these OUT LOUD — it builds trust: Classroom staged, Forms checkpoints, Docs tracker, Notion kanban.",
        "Each one: free, works today, costs hours of assembly — and none give verbatim stage evidence or an AI-use record.",
        "If a teacher built one of these and it works: brilliant — what's missing is the same in every case.",
        "Keep pace: 30 seconds, then straight to the feedback rules slide.",
      ],
      html: slideTeacherBrief,
    },
    {
      beat: "5 · Feedback: individual or group?", clock: "7:30–9:00",
      notes: [
        "Say the worry out loud: you were told you can't give individualised project feedback.",
        "The actual documents (AGP guidelines, Role of the teacher, pp. 12-13): feedback must be GENERAL and NONDIRECTIVE — no model text, no answers, no draft-editing.",
        "But prompt questions are a NAMED legitimate support, and an individualised approach is EXPECTED of each student.",
        "So: individualised QUESTIONS = the teaching. Never model text or answers = the hard wall.",
        "For the group: a class-level summary at each stage checkpoint — common problems, who's stuck — for your class talk, while individual question-led prompting continues per student.",
        "AI-drafted suggestions only appear when you click to request one, and you preview before anything sends — feedback stays yours.",
        "November: the union meeting will clarify the individual-feedback rules — our interpretation adapts to the Rules.",
        "Full quotes are on the one-pager QR you just saw.",
      ],
      html: () =>
        '<p class="eyebrow">The rules on feedback &mdash; AGP guidelines, Role of the teacher (pp. 12&ndash;13)</p>' +
        '<h2>Individual or for the group? <span class="italic crim">Both &mdash; within the line.</span></h2>' +
        '<div class="side-split">' +
        '<div class="side-body">' +
        '<ul class="tech-steps"><li><b>The worry:</b> &ldquo;teachers can&rsquo;t give individualised feedback on projects.&rdquo; The documents say something more precise.</li><li><b>What feedback must be:</b> general and nondirective — no model text, no answers, no draft-editing. That line binds <em>your feedback</em>.</li><li><b>What&rsquo;s expected of you:</b> prompt questions &mdash; a named, legitimate support &mdash; and an <b>individualised approach</b> is expected of each student. Individualised <em>questions</em> are the teaching.</li><li><b>For the group:</b> a class-level summary at each stage checkpoint — common problems, who&rsquo;s stuck — for your class talk, while individual question-led prompting continues per student.</li><li><b>AI-drafted suggestions</b> only appear when you click to request one, you preview before anything sends — feedback stays yours.</li></ul>' +
        '<div class="take one-line">Individualised <b>questions</b> = the teaching. Never model text or answers = the hard wall. November&rsquo;s union meeting will clarify further &mdash; we adapt to the Rules.</div>' +
        "</div>" +
        '<div class="side-media"><img class="diag-img" src="img/ai-partner.v2.webp" alt="Feedback within the line: individualised prompt questions per student, general non-directive class feedback, never model text or answers"></div>' +
        "</div>",
    },
    {
      beat: "6 · Live demo — teacher side", clock: "9:00–13:00",
      notes: [
        "Phones OUT. Scan the demo QR now — tap Teacher → the board. Test it yourselves: triage, advice, view-as-student, export.",
        "I drive the big screen: board (colour logic = events, not AI), one student's full history, advice box → student-tab round-trip, view-as-student, the complete export.",
        "This slide STAYS UP through break and Q&A — the QR is live; the site runs fine on phones over mobile data.",
        "If wifi dies: the site runs locally too — and the print/PDF fallback has every slide.",
        "When Q&A ends: two more slides — 'not all AI is equal', then the survey."
      ],
      html: slideTeacherDemo,
    },
    {
      beat: "7 · Not all AI is equal", clock: "13:00–13:45",
      notes: [
        "Back from break/Q&A — demo QR goes down, this comes up.",
        "Patrick's 'is it accurate?' is a MODEL question: not every AI is equal — same logo, 30-point gaps.",
        "The 4 numbers, fast: 16/42 intelligence · 65%/91% PhD-exam score · 75%/28% hallucination when wrong · $0.25/$7.63 per task.",
        "This is why the triage board uses no generative AI: events, not AI. And it's the tagline's source.",
        "Do NOT dwell — the charts speak; land one line and move to the survey."
      ],
      html: () =>
        '<p class="eyebrow">After the break &mdash; the last teaching point</p>' +
        '<h2>Not all AI is equal. <span class="italic crim">Measured, not marketed.</span></h2>' +
        '<div class="aa-grid">' +
        '<figure class="aa-card"><img src="img/aa-index.webp" alt="Artificial Analysis Intelligence Index leaderboard" loading="lazy"><figcaption>Intelligence Index — free defaults at the bottom of the table</figcaption></figure>' +
        '<figure class="aa-card"><img src="img/aa-halluc.webp" alt="Hallucination rate chart" loading="lazy"><figcaption>Hallucination rate, lower is better — when it&rsquo;s wrong, does it admit it?</figcaption></figure>' +
        '<figure class="aa-card"><img src="img/aa-cost.webp" alt="Cost per task chart" loading="lazy"><figcaption>Cost per task — capable models cost pennies</figcaption></figure>' +
        '<figure class="aa-card"><img src="img/aa-scatter.webp" alt="Intelligence vs cost scatter" loading="lazy"><figcaption>Intelligence per euro — the green quadrant</figcaption></figure>' +
        "</div>" +
        '<div class="take one-line"><b>16/42</b> intelligence &middot; <b>65%/91%</b> PhD-exam &middot; <b>75%/28%</b> hallucination &middot; <b>$0.25/$7.63</b> per task &mdash; model + settings, not brand.</div>',
    },
    {
      beat: "8 · Close — survey", clock: "13:45–14:30",
      notes: [
        "Final: the 2-minute teacher survey — your subject + one thing that would make AI use work for your class.",
        "This survey IS the inbox: every teacher answer, question and complaint lands with us — read them all, reply to anything with a name on it.",
        "Q1 is the passphrase — so we know who was in the room; the quiz questions mirror the deck (penalties, permitted uses, authentication, feedback line).",
        "Tagline slowly, word for word: not every AI is the same — ask what model, what settings, and know how I learn.",
        "Leave both QRs up while the room empties: left = the teacher survey, right = the STUDENT study demo (h1done-learn) if they want to see what the students got.",
        "The briefing URL (workspace-gap.html) is on the slide for the one-pager.",
        "If asked about the tool itself or a pilot: take it after, one-to-one — this session stays informative."
      ],
      html: slideCloseTeachers,
    },

  ];

  // if-time tail: VERBATIM student-slide copies (no rework, no summaries) — skipping costs nothing
  [1, 5, 6, 7, 8].forEach((si) =>
    SLIDES_TEACHERS.push({
      tail: true,
      beat: "If time · " + SLIDES_STUDENTS[si].beat.replace(/^\d+ · /, ""),
      clock: "+1:00",
      diag: SLIDES_STUDENTS[si].diag,
      notes: SLIDES_STUDENTS[si].notes,
      html: SLIDES_STUDENTS[si].html,
    })
  );

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

  // One launcher for both talks: pick the talk, pick the device, passphrase, go.
  // Enter rewrites the URL (?audience=…&view=…) and reloads, so a refresh, a
  // shared link and the phone remote can never disagree about which deck is live.
  function renderGate() {
    document.removeEventListener("keydown", deckKeys);
    const authed = sessionStorage.getItem("h1talk-auth") === "1";
    const word = () => (state.audience === "teachers" ? "projects" : "study");

    $("#app").innerHTML =
      '<div class="gate-wrap"><div class="gate-card">' +
      '<img class="gate-logo" src="' + LOGO + '" alt="H1Done logo">' +
      '<div class="gate-brand">H1Done <span id="gate-word">' + word() + "</span></div>" +
      '<div class="gate-kicker">St Joseph&rsquo;s, Ballybunion &middot; school talk</div>' +

      '<p class="gate-step">1 &middot; Which talk?</p>' +
      '<div class="gate-pick" id="pick-talk">' +
      '<button type="button" class="pick' + (state.audience === "students" ? " active" : "") + '" data-aud="students"><b>Study talk</b><small>Students &middot; 30 min</small></button>' +
      '<button type="button" class="pick' + (state.audience === "teachers" ? " active" : "") + '" data-aud="teachers"><b>Projects talk</b><small>Teachers &middot; 15 min</small></button>' +
      "</div>" +

      '<p class="gate-step">2 &middot; This device</p>' +
      '<div class="gate-pick" id="pick-role">' +
      '<button type="button" class="pick' + (state.role === "presenter" ? " active" : "") + '" data-role="presenter"><b>Present</b><small>Laptop &middot; the big screen</small></button>' +
      '<button type="button" class="pick' + (state.role === "remote" ? " active" : "") + '" data-role="remote"><b>Phone remote</b><small>Notes + next slide</small></button>' +
      "</div>" +

      (authed ? "" : '<p class="gate-step">3 &middot; Passphrase</p><input id="pw" class="gate-input" type="password" inputmode="text" autocomplete="off" placeholder="Passphrase" aria-label="Passphrase">') +
      '<div class="gate-err" id="gate-err"></div>' +
      '<p style="margin:14px 0 0"><button class="btn full" id="gate-go">' + (authed ? "Go" : "Enter") + "</button></p>" +
      '<div class="gate-foot">Same link for everything. Venue laptop: <b>Present</b>. Your phone: <b>Phone remote</b> &mdash; same talk, or it won&rsquo;t steer.</div>' +
      '<div class="gate-build">build ' + CONFIG.BUILD + "</div>" +
      "</div></div>";

    const setWord = () => { const w = $("#gate-word"); if (w) w.textContent = word(); };
    const pickIn = (sel, attr, apply) =>
      $$(sel + " .pick").forEach((b) =>
        b.addEventListener("click", () => {
          $$(sel + " .pick").forEach((o) => o.classList.remove("active"));
          b.classList.add("active");
          apply(b.getAttribute(attr));
          setWord();
        })
      );
    pickIn("#pick-talk", "data-aud", (v) => { state.audience = v; });
    pickIn("#pick-role", "data-role", (v) => { state.role = v; });

    const go = () => {
      const field = $("#pw");
      if (!authed) {
        if (field.value.trim().toLowerCase() !== CONFIG.PASSWORD) {
          $("#gate-err").textContent = "Not the passphrase — check it (it's the venue town).";
          field.focus();
          return;
        }
      }
      sessionStorage.setItem("h1talk-auth", "1");
      sessionStorage.setItem("h1talk-role", state.role);
      sessionStorage.setItem("h1talk-audience", state.audience);

      // put the choice in the URL, then reload if it changed — one source of truth
      const params = new URLSearchParams(location.search);
      if (state.audience === "teachers") params.set("audience", "teachers");
      else params.delete("audience");
      if (state.role === "remote") params.set("view", "remote");
      else params.delete("view");
      const qs = params.toString();
      const want = location.pathname + (qs ? "?" + qs : "");
      if (want !== location.pathname + location.search) { location.replace(want); return; }
      start();
    };

    $("#gate-go").addEventListener("click", go);
    const field = $("#pw");
    if (field) { field.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); }); field.focus(); }
  }

  /* ---------------- lightbox (click any image → fullscreen) ---------------- */

  function ensureLightbox() {
    if ($("#lightbox")) return;
    const lb = document.createElement("div");
    lb.id = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-label", "Image fullscreen — click or press Escape to close");
    lb.innerHTML = '<img alt="">' + '<button class="lb-close" aria-label="Close">×</button>';
    document.body.appendChild(lb);
    const img = lb.querySelector("img");
    const close = () => { lb.classList.remove("open"); setTimeout(() => { lb.style.display = "none"; }, 180); };
    lb.addEventListener("click", close);
    lb.querySelector(".lb-close").addEventListener("click", close);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && lb.classList.contains("open")) close(); });
  }

  function bindLightbox(root) {
    ensureLightbox();
    root.addEventListener("click", (e) => {
      const t = e.target;
      const isImg = t.tagName === "IMG" && !t.closest(".lb") && (t.classList.contains("diag-img") || t.closest(".aa-card") || t.closest(".qr-box") || t.classList.contains("brand-mark") === false && t.closest(".side-media, .hero-pic, .diag-split"));
      if (!isImg) return;
      e.preventDefault();
      e.stopPropagation();
      const lb = $("#lightbox");
      lb.querySelector("img").src = t.src;
      lb.style.display = "flex";
      requestAnimationFrame(() => lb.classList.add("open"));
    });
  }

  /* ---------------- deck (presenter) ---------------- */

  function renderDeck() {
    const slides = SLIDES();
    $("#app").innerHTML =
      '<div class="view">' +
      '<div class="deck-head">' +
      '<a class="deck-brand" href="#" id="home-brand">' + brandMark() + 'H1Done <span>' + (state.audience === "teachers" ? "projects" : "study") + "</span></a>" +
      '<span class="mut" style="font-size:0.75rem" id="conn-pill"></span>' +
      '<div class="head-btns">' +
      '<button class="icon-btn" id="theme-btn" title="Light / dark for the room">◑ light</button>' +
      '<button class="icon-btn" id="fs-btn" title="Full screen (f)">⛶ full</button>' +
      '<button class="icon-btn" id="print-btn" title="Save as PDF fallback (offline)">⎙ pdf</button>' +
      '<button class="icon-btn" id="remote-btn" title="Open the phone remote — shows this URL on your phone">⌁ remote</button>' +
      '<button class="icon-btn" id="switch-btn" title="Switch talk / device — back to the launcher">⇄ talk</button>' +
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
    $("#switch-btn").addEventListener("click", renderGate);

    document.addEventListener("keydown", deckKeys);
    bindSwipe($("#stage"));
    bindLightbox($("#stage"));

    connPill();
    connectMqtt(true);
  }

  function showRemoteUrl() {
    // preserve the audience param so the remote joins the SAME deck's channel
    const params = new URLSearchParams(location.search);
    params.set("view", "remote");
    const qs = params.toString();
    const url = location.origin + location.pathname + (qs ? "?" + qs : "");
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
    else if (e.key === "End") go(0, SLIDES_LAST_REAL());
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
    // tail slides are presenter-only: normal navigation stops at the last real slide
    if (typeof absolute !== "number") {
      const lastReal = SLIDES_LAST_REAL();
      if (dir > 0 && state.slide >= lastReal) return;
      if (dir < 0 && state.slide > lastReal) i = lastReal; // coming back from the tail
    }
    i = Math.max(0, Math.min(n - 1, i));
    if (i === state.slide && typeof absolute !== "number") return;
    state.slide = i;
    $$("#stage .slide").forEach((s) => s.classList.toggle("on", +s.dataset.i === i));
    publishState();
  }

  // index of the last non-tail slide (tail = "if time" slides after the close)
  function SLIDES_LAST_REAL() {
    const s = SLIDES();
    for (let i = s.length - 1; i >= 0; i--) if (!s[i].tail) return i;
    return s.length - 1;
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
      '<div class="remote-top"><span class="deck-brand">' + brandMark() + 'H1Done <span>' + (state.audience === "teachers" ? "projects" : "study") + "</span></span>" +
      '<span class="remote-status" id="r-status"><span class="dot"></span>connecting…</span>' +
      '<button class="icon-btn" id="r-switch" title="Switch talk / device">⇄</button></div>' +
      '<div class="remote-cards" id="r-cards"></div>' +
      '<div class="remote-taps">' +
      '<button class="btn ghost" id="r-prev" aria-label="Previous">‹</button>' +
      '<button class="btn" id="r-next">Next ›</button>' +
      "</div></div>";

    $("#r-switch").addEventListener("click", renderGate);

    // cache the stylesheet text so next-slide visual previews render faithfully
    fetch("talk.css?v=" + CONFIG.BUILD).then((r) => r.text()).then((t) => { state.cssText = t; }).catch(() => {});

    // skip over the "if time" tail slides: the remote's Next/Prev never walks into them.
    // The remote knows the presenter's current slide from state messages, so it sends an
    // absolute goto; falls back to plain +1/-1 if no state has arrived yet.
    // (Tail slides stay printable and keyboard/End-reachable on the presenter.)
    const lastKnown = () => (typeof state.slide === "number" ? state.slide : 0);
    const publishCmd2 = (obj) => {
      if (!state.mqtt || !state.connected) { toast("Not linked yet — check the phone is on the same URL"); return; }
      try { state.mqtt.publish(topic(), JSON.stringify(obj)); } catch (e) {}
    };
    const skip = (dir) => {
      const n = SLIDES().length;
      let i = lastKnown() + dir;
      while (i >= 0 && i < n && SLIDES()[i] && SLIDES()[i].tail) i += dir;
      i = Math.max(0, Math.min(n - 1, i));
      if (state.connected) publishCmd2({ type: "cmd", cmd: "goto", slide: i });
      else publishCmd(dir > 0 ? "+1" : "-1");
    };
    $("#r-next").addEventListener("click", () => skip(1));
    $("#r-prev").addEventListener("click", () => skip(-1));
    bindSwipe(document.body);
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === " ") skip(1);
      if (e.key === "ArrowLeft") skip(-1);
    });

    connectMqtt(false);
  }

  function visualSrcdoc(nextHtml) {
    return (
      '<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap" rel="stylesheet">' +
      "<style>" + (state.cssText || "") + "</style>" +
      '<style>body{overflow:hidden}.slide{position:static;display:flex!important;inset:auto;height:800px}.slide-foot{display:none}</style></head>' +
      '<body><div class="slide on">' + nextHtml + "</div></body></html>"
    );
  }

  function scaleVisual(card) {
    const frame = card.querySelector("iframe");
    if (!frame) return;
    const apply = () => {
      const w = card.clientWidth || 320;
      frame.style.transform = "scale(" + (w / 1280) + ")";
      frame.style.width = "1280px";
      frame.style.height = Math.round(800 * (w / 1280) / (w / 1280)) + "px";
      // height container: keep 1280:800 ratio
      card.style.height = Math.round(w * (800 / 1280)) + "px";
    };
    frame.addEventListener("load", apply);
    apply();
  }

  function renderRemoteState(msg) {
    const cards = $("#r-cards");
    if (!cards) return;
    const slides = SLIDES();
    const i = Math.max(0, Math.min(slides.length - 1, msg.slide | 0));
    const now = slides[i];
    let next = slides[i + 1];
    if (next && next.tail) next = undefined; // tail is presenter-only — never advertised
    const realCount = SLIDES_LAST_REAL() + 1;
    const items = (now.notes || []);
    const visId = "rv-" + (i + 1);
    cards.innerHTML =
      '<div class="remote-now"><p class="remote-card-k">Now — beat ' + pad(i) + "/" + pad(realCount - 1) + ' <span class="remote-clock">' + (now.clock || "") + "</span></p>" +
      '<div class="rt">' + now.beat + "</div>" +
      '<ul class="remote-notes">' + items.map((n, k) => '<li class="' + (k === 0 ? "" : "dim") + '">' + n + "</li>").join("") + "</ul></div>" +
      (next
        ? '<div class="remote-next"><p class="remote-card-k">Next</p><div class="rt">' + next.beat + "</div>" +
          '<div class="remote-visual" id="' + visId + '"><span class="rv-skel">rendering next slide…</span></div>' +
          '<span class="rv-label" style="position:absolute;right:8px;bottom:4px;font-size:0.6rem;color:var(--muted)">next: ' + next.beat + "</span></div>"
        : '<div class="remote-next"><p class="remote-card-k">Next</p><div class="rt">— end —</div></div>');
    if (next) {
      const card = $("#" + visId);
      const frame = document.createElement("iframe");
      frame.setAttribute("title", "Next slide preview");
      frame.setAttribute("sandbox", "");
      card.innerHTML = "";
      card.appendChild(frame);
      frame.srcdoc = visualSrcdoc(next.html());
      scaleVisual(card);
    }
    if (state.role === "remote" && !state.connected) toast("Not linked yet — open the SAME url on the laptop");
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

    // audience-segmented: a teacher-remote can't steer the student deck (or vice versa)
    const topic = "h1talk/" + CONFIG.CHANNEL_ID + "-" + state.audience + "/state";
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
          else if (msg.cmd === "goto") go(0, msg.slide | 0);
          else if (msg.cmd === "ping") { state.remoteSeen = Date.now(); connPill(); }
          if (msg.cmd === "+1" || msg.cmd === "-1" || msg.cmd === "goto") state.remoteSeen = Date.now();
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

  function topic() {
    return "h1talk/" + CONFIG.CHANNEL_ID + "-" + state.audience + "/state";
  }

  /* ---------------- boot ---------------- */

  function start() {
    state.view = state.role === "remote" ? "remote" : "deck";
    // the tab title says which talk is loaded — no more guessing between the two decks
    document.title =
      (state.audience === "teachers" ? "H1Done projects — teacher talk" : "H1Done study — student talk") +
      (state.role === "remote" ? " · remote" : "");
    if (state.view === "remote") renderRemote();
    else renderDeck();
  }

  function boot() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const params = new URLSearchParams(location.search);
    // the URL is the only source of truth for which deck is live: a plain link is
    // ALWAYS the student talk, whatever this tab was showing earlier
    const params_aud = params.get("audience");
    state.audience = params_aud === "teachers" ? "teachers" : "students";
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
