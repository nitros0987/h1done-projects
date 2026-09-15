# H1DONE PROJECTS — MASTER PROJECT BRIEF (single file for multi-AI review)
_Assembled Mon 14 Sep 2026, updated post-Kevin-meeting + strategy sharpening (D1–D37). Contains EVERYTHING: decisions, research (incl. verified SEC primary documents), meeting notes, and the full source of the live mock-up (https://nitros0987.github.io/h1done-projects/ · repo nitros0987/h1done-projects). Sections separated by --- with a header line._

## HOW TO USE THIS FILE
1. Paste this whole file into any AI with the prompt Tomás has.
2. Reviewer AIs: critique only. Revamper AIs: rewrite this file in full.
3. All factual claims about the SEC/NCCA are cited inside the research briefs; items marked UNVERIFIED are unverified.

---
## SECTION 1 — DECISION LOG (D1–D37)
# H1Done Platform — Project Mentor: decision log
**Grill session 1 — Mon 14 Sep 2026, ~12:30 IST.** Kevin O'Keefe (geography) meeting ~14:00-15:00 today.
Research: `research-brief-2026-09-14.md` (same folder).

## Locked decisions
- **D1 · Product home:** inside the **H1Done Platform** (the rebuild of Leaving Cert Mastery). A "Projects" section, not a separate product.
- **D2 · Subject order:** **Biology first** (existing marking-scheme content), **Geography second** (Kevin).
- **D3 · Beachhead:** 6th-year **biology** students NOW (LC 2027, mid-Biology-in-Practice-Investigation, brief topics: membranes / osmosis / food preservation) + **5th-year geography** (LC 2028, AGP brief spring 2027 — prep window Sept-Jan: stages 1-3 skills).
- **D4 · Generalizability rule:** engine shared across subjects; per-subject = a config pack (stages, official prompt questions, report headings, rubric). Change little between subjects. We take our grill→brief→subtasks loop as the engine, but **the visible skeleton maps to THEIR official structure** (7 AGP stages / 6 biology stages + SEC report headings).
- **D5 · Integrity stance (hard wall + verbatim export):** AI never produces a sentence for the report. Export feature: end of each stage, student clicks "your answers" → page of their verbatim answers under headings (headings from the SEC-prescribed structure) → they copy it into the project themselves. Plus platform auto-generates the SEC-compliant AI-use reference (tool, date, how used, chat URL/prompt).
- **D6 · Kevin meeting goal:** validate stage mapping + teacher-dashboard needs AND secure him as **design advisor + pilot teacher**. Pilot deal must be free/nearly free. Include a **back-fill ingest** (students upload existing work → mapped into stage slots → continue from there) so the pilot can start mid-project. Kick off ASAP.
- **D7 · Teacher dashboard v1 (ED-triage model):** per-student profile cards coloured by status; click for one-screen profile; raise-hand queue. Colours + triage computed from **events and rules, not AI** (cost = ~zero, explainable to teachers). AI spend only on: reviewing submitted subtasks, answering student questions.
- **D8 · Data & compliance:** work lives in platform DB (the evidence trail is the moat), export at end; pilot checklist = school AUP updated + parental consent (under-18/under-16 rules) + simple data-processing agreement before any student logs in.

## Open items (Round 3)
- Kevin pilot deal terms (free in exchange for feedback + testimonial? who pays API ~€0.50-2/student?)
- Back-fill ingest: MVP scope or post-pilot?
- Subject-pack architecture confirm (JSON config, no per-subject code)
- Funding: LEO feasibility grant to cover pilot costs — to research properly.

## Facts that shaped decisions (from research brief)
- Old-GI cohort (Kevin's 6th yrs, due ~Dec/Jan) = immediate second use case, same engine.
- AI is allowed as a *referenced* research source; unacknowledged AI material = plagiarism → up to withholding of results.
- Nobody does AAC process-mentoring or teacher triage (Studyclix = exam-prep only).
- Teacher authentication chain = candidate + teacher + principal → process log strengthens THEIR file = the teacher pitch.

## Round 3+ locked (13 Sep 14:00 meeting — Kevin O'Keefe, Tarbert CS)
- **D9 · Kevin deal:** FREE until Christmas, full export/printout at the end (students keep everything), fortnightly 15-min feedback + testimonial + principal intro. He's design advisor + pilot teacher.
- **D10 · Verbatim export confirmed:** copy-page = student's answers + SEC-prescribed headings only; AI-use reference auto-appended; no connective prose ever.
- **D11 · Subject-pack architecture confirmed:** engine shared; subject = config pack (stages, official prompt questions, headings, definitions-of-done, links policy). Biology first, geography second.
- **D12 · Teacher advice box (v1 feature):** teacher types advice/next-nudge on the dashboard → submits → notifies the student's site. Zero AI cost, event-driven.
- **D13 · Back-fill ingest in MVP:** students upload existing work (photos/PDFs/notes) → slotted into stage slots, organise-only → grill continues mid-project. Pilot can start any time.
- **D14 · AI cost surfaces (3):** E1 submit-review · E2 next-question generation (the grill engine) · E3 student help requests. Teacher advice + dashboard = free. Measured: ~€0.07/student/project (DeepSeek V4.1 Flash $0.15/M in, $0.60/M out; peak ceiling <€0.45). Photos ≈ €0.005/student.
- **D15 · Funding:** LEO Feasibility Grant (50%/€15k, pre-spend application, sole trader eligible) → then New Frontiers Phase 1 (part-time). Matches the 18 Jul funding plan in H1Done-Business.md.
- **D16 · Mock-up built & deployed:** separate repo **github.com/nitros0987/h1done-projects**, live at https://nitros0987.github.io/h1done-projects/ — student + teacher sides, brand-consistent, demo AI (canned) or real DeepSeek via OpenRouter key in settings.
- **Kevin intel (from vault/RPM briefings):** k.okeeffe@tarbertcs.ie · Patrick Hickey (teacher + SEC examiner) gave the school AI/coursework talk 3 Sep · ExamRevision live at Tarbert CS — wedge = project workflow + authentication evidence, NOT revision.
- **Prior thinking recovered:** v0 concept paragraph + 12-question grill seed in `00_today/briefings/rpm-leverage-20260907.md`/`20260910.md`; business resume point `~/Documents/Tomas_OS/Projects/H1Done-Business.md`; six-month roadmap in vault `Knowledge/Life-Areas/5-Mission (Career & Business)/H1Done — Six-Month Roadmap (Jul 2026 – Jan 2027).md`.

## Post-Kevin-meeting decisions (Mon 14 Sep, meeting went well) — notes: meeting-notes-kevin-2026-09-14.md
- **D17 · Documentation-first compliance strategy:** never wait on SEC clarification. Compile exact official wording (guidelines, SEC rules, briefs) per subject → show how the platform meets each line → adapt fast if corrected. Core rebuttal on individualised feedback: the AGP guidelines explicitly ENDORSE prompt questions as teacher support (Role of the teacher p.12 + Appendix 1); the bans are on model text, answers and draft-editing — which the platform already enforces. Product framing: our engine is the official Appendix-1 script, individualised.
- **D18 · Objection-handling pack (for sceptical teachers):** exact SEC/NCCA AI quotes + ethos ("tool per SEC rules, makes students better, never does the project") + hard-wall explanation + Workspace/Teams comparison (individualised per-student adaptation is the difference; integration later, not v1).
- **D19 · Pilot goes through the PRINCIPAL:** schools standardise across year/classrooms (Tarbert geography = all classes); even free pilots cost adaptation time. Sales motion = principals, with teachers as champions. Update GTM accordingly.
- **D20 · New exam-content thread (paper side):** no published marking schemes / no marks — answers fit in a BOX. Build practice questions sized to the box (lines = marks proxy); use new JC paper structure as the model for new LC structure; class-level summaries for teachers ("X stuck on topic A") + teacher-uploaded class content drives student learning content (tightly classroom-connected, self-study optional). Projects are already classroom-tight; bring the exam side to parity.
- **D21 · Ethics-first marketing:** all advertising leads with the SEC-aligned ethics story (exact guideline quotes + the hard wall) and demonstrates the individual-vs-general feedback boundary. Clarity on how specific feedback can be IS the marketing.
- **D22 · "H1Done Learning" (exam side named):** internal marking schemes derived from the specs' LEARNING OUTCOMES (decompose each outcome into sub-requirements; show how one chosen example satisfies several outcomes at once) · box size as the marks proxy (questions sized to the box, sub-points = lines) · new JC paper structure as the LC model · teacher-uploaded class content drives student learning content. Projects = H1Done Projects; exam = H1Done Learning.
- **D23 · Voice feedback for teachers:** record/dictate → voice-to-text → auto-format → send (Kevin's existing Google Classroom voice-feedback habit). Strong adoption wedge; v2 feature but design for it now (feedback loop must be voice-ready).
- **D24 · November union meeting = documentation-pack deadline:** geography teachers + union rep (~Nov) will clarify individual-feedback rules. Get the D17/D18 pack to Kevin well before so our interpretation is stress-tested there. Kevin is the channel in.
- **D25 · Guided-notes engagement principle (H1Done Learning):** Kevin's 80/20 handout technique (students complete the missing 20%) — learning content should be fill-the-gap, not passive. Digital equivalent built into content design.
- **D26 · Teacher-gated AI + group nudges:** teacher-side AI never auto-fires; only on teacher click (then max-reasoning for quality). One click can generate a nudge applicable to a group of similar students. Student-side grill (E1/E2) unchanged.
- **D27 · Pitch = proof story:** narrative spine (doctor → metacognition → taught Jim & Paula-Eve → knowing ≠ applying → platform → grades jumped) reused for Projects (topic varies, process doesn't). One story, page per platform (Projects / Learning).
- **D28 · Root-criteria discovery tactic:** conditional questions ("if I solved X, would you take it on?") in sequence expose the REAL adoption criteria — for Kevin they were: ALL geography classes (standardisation) + principal approval, not the three issues raised. Use this pattern in every sales/discovery conversation; the stated objections are rarely the gate.
- **D29 · Ballybunion = second beachhead:** St Joseph's Ballybunion (Patrick Moran, guidance counsellor, intro via John Donovan). Talk to 5th/6th years + teacher sessions. Target Friday 18 Sep (clear of MRCEM 16th + BLS 17th; MRCP 23rd). Teacher pick: Biology (live LC 2027 AAC) + Geography (new, Kevin-pilot alignment) + Engineering over Construction for variety (Dad already covers Construction ground truth), unless John Donovan teaches Construction. Same-day Tarbert principal slot if Kevin can arrange. Corrected intel: English/Accounting POSTPONED ≥2027 (don't call them new); biology coursework "26 Feb 2027" from a Scribd brief copy = plausible, UNVERIFIED — verify with the biology teacher; SEC bot-wall blocked Scribd fetch too.- **D30 · SEC compliance base = Coursework Rules and Procedures 2025/2026, Appendix 2 (verified 14 Sep, sec-docs/):** supersedes S52/24 + S69/04 + S68/08 + S76/22. "Structuring coursework plans" is a NAMED PERMITTED use — the grill→brief→subtasks engine is literally on the SEC's permitted list. Export renders the SEC-format AI acknowledgment appendix (tool+version, developer, date, description, prompts, session URL). Onboarding includes "discuss AI use with your teacher" step. Penalties ladder goes into teacher-facing materials verbatim.
- **D31 · Three-level individualisation model (the core of H1Done Projects):** L1 — the main sections come from the subject + the EXACT SEC brief for that subject/year; L2 — the sub-questions/subtasks inside each section are generated dynamically from THAT student's own answers so far; L3 — feedback/nudges are specific to that student's work. Defining trait vs generic AI.
- **D32 · Workspace/Teams class deployment:** teacher creates a class section → copy-link for the classroom → students open it → auto-login via their school Google/Microsoft account (SSO) → everyone lands in that section. Teacher feedback flows through our site OR Google Workspace; voice notes supported; auto speech-to-text + concise formatting so the student receives both the audio and clean text.
- **D33 · Subtasks as PRs (Matt Pocock pattern, student-executed):** each main section spawns small subtasks structured like pull requests — definition-of-done, review, accept/revise — but the STUDENT does them and fills them in; the AI reviews and asks the next question.
- **D34 · Platform-can-individualise (Richard's insight):** the SEC feedback rules bind the TEACHER, not the platform. The platform's individualised questioning already sits inside the SEC's named permitted uses (prompt questions, structuring plans). Two modes: (a) fully automated, no teacher involvement; (b) within documented lines with teacher approval/oversight. Strategy: follow what's documented, teacher approves, adapt if corrected. Guardrail: the platform never does what a teacher may not (model text, answers).
- **D35 · Periodic cohort digest:** at stage checkpoints (e.g. two weeks into Considering the brief) the AI aggregates all student responses → class-level summary for the teacher: the common problems, who's ahead/behind → teacher addresses them in class. One AI call per class per checkpoint — negligible cost.
- **D36 · Anti-"paste it into ChatGPT" advantages (marketing):** standardisation done right (best models + right settings; every student gets the same standard — teacher-verifiable), the brief + relevant documents pre-loaded, SEC-ethics compliant by design (never gives answers, asks prompt questions), teacher monitoring of progress in one place, and per-student clarity so feedback never mixes projects up.
- **D37 · Back-fill UX for mid-project students:** dead-simple "dump your stuff" upload → auto-slot into the stages → continue where they left off. Design for people who already live in Google Classroom/Microsoft — familiar patterns, easy to use; test efficiency + efficacy with half-way students.
---
## SECTION 2 — MEETING NOTES: KEVIN O KEEFFE (POST-MEETING)
# Post-meeting notes — Kevin O'Keefe, Mon 14 Sep 2026
**Outcome: went well. He genuinely liked the demo app.** (Tomás's journal additions to follow — placeholder at the bottom.)

## Kevin's concerns + the strategy (agreed with Dad)

### 1. "Teachers can't give individualised project feedback" — clarify without waiting
- Teachers were told (union/school guidance) they can't give individualised feedback. But the actual documents don't say that — they say feedback must be **general and non-directive**, no editing drafts, **no model text or answers**. Individual *question-led* prompting is explicitly endorsed.
- **Strategy: documentation-first, don't wait on the SEC** (Dad: "the SEC probably don't know themselves"; past-paper clarification requests took forever). Compile the exact official wording per subject and show: *this is what they said → this is how our platform meets it → we adapt if they ever tell us differently.*
- **Evidence we already hold** (research brief §3.3, AGP guidelines Dec 2025): teachers "offering prompt questions... to stimulate and support students' planning and critical thinking" is listed as a **legitimate teacher support** (Role of the teacher, p. 12); Appendix 1 IS an official per-stage prompt-question script. Our engine is that script, individualised. The line we never cross: no model text, no answers, no editing — same as the teacher.

### 2. Sceptical teachers on AI — get ahead of it
- Objection-handling pack: quote exactly what the SEC/NCCA officially said (AI output may be cited as a referenced research source: tool name, date generated, how used, chat URL/prompt; unacknowledged = plagiarism). Ethos framing: a tool aligned with SEC rules that makes students *better*, never does the project; every research use is documented per SEC rules; the product's hard wall (never writes a word) IS the compliance.

### 3. "Why not just Google Workspace / Microsoft Teams?"
- Find out what schools already use, what it costs, how ours differs: **individualised + adapts to each student's custom project as it evolves — that's the AI layer Workspace doesn't have.** Decide later whether to integrate with Workspace/Teams (nice-to-have, not v1).

### 4. Pilot reality — the principal is the gate
- Not one classroom: Tarbert standardises across geography classrooms, and even a free pilot costs time (students + staff adapting). So the buyer conversation is with **principals**.
- New approach, three parts: (1) the documentation pack (exact SEC/NCCA wording → how we meet it → we adapt), (2) better-than-Workspace comparison + integration story, (3) sell to principals, teachers champion it.

### 5. Project structure change — confirmed by both Kevin and Dad
- Old world: everyone did the same project. New world: every project is different — **even two students can't do the same one** (Dad: same shift in Construction). Same structure, individualised per student — exactly what the AI layer enables (grill → brief → per-student subtasks).

## New product thread: the EXAM (paper) side
- **Marking schemes for the new exams aren't published; no marks shown. Instead answers fit in a BOX** (given lines, e.g. 10 lines). Action: build exam-practice questions sized to the box — box capacity as the marking proxy (points per lines).
- **New JC paper structure ≈ new LC paper structure** (same structure, not content) — work off JC structure/papers to help study for LC.
- **Classroom integration for learning (not just projects):** teacher gets a class-level summary ("X students are stuck on topic A, Y on topic B") → gives a class talk + individual feedback in parallel. (Kevin's ExamRevision observation: standardised textbook-style topic learning is weak — students just run it through generic AI. The fix is teacher-connected content.)
- Concept: template + official marking-scheme structures, **teacher uploads/selects their class content** → student's learning content follows what's actually taught in class, with the option to self-study beyond it.

## Follow-up additions (14 Sep, after the meeting)
- **Marketing = ethics-first:** the advertising push must SHOW that our ethics and workflow are within the SEC guidelines and their advice — the tool that helps the student get better. Be explicit about the feedback boundary: individual vs generalised, and how specific feedback can be (questions and nudges always; never content).
- **Workspace/Teams positioning:** some schools live in Google Classroom / Teams — position honestly as complement-or-replacement; the individualised per-student layer is what they don't have.
- **Anchor in official scaffolding:** the guidelines' **role of the teacher** text + the specs' **learning outcomes** are the official framework for everything we do — cite them, don't paraphrase.
- **EXAM SIDE NAMED: "H1Done Learning":**
  - What to LEARN comes from the specs' **learning outcomes** — the new ones are deliberately broad (old: "volcanoes in a named country in North America" → new: "know one place where volcanoes occur"), and Dad expects marking schemes to get MORE unclear → so we build **our own internal marking scheme**: decompose each learning outcome into its sub-requirements ("you need to know this, this and this"), and show how **one well-chosen example can satisfy several outcomes** (one plate/one place fits many).
  - The **BOX**: new papers give a box (≈10 lines) instead of published marks → box size = how much to write / how many points to make. Practice questions are sized to the box; sub-points map to the space given.
  - This nests with the JC-structure insight from the meeting notes above.
- **Voice feedback for teachers:** Kevin records **voice feedback in Google Classroom** for past-paper work → build voice into our feedback loop: record/dictate → voice-to-text → auto-format → send to student. Fast feedback is the teacher adoption wedge.

## Follow-up additions 2 (14 Sep, later)
- **NOVEMBER: geography teachers' meeting with a union rep (~Novemberish)** — will clarify the individual-feedback rules. ACTION: the documentation-first pack (D17/D18) must be in Kevin's hands well before it, so our interpretation gets stress-tested there and we adapt fast. Kevin = our channel into that room.
- **Kevin's classroom engagement technique (→ H1Done Learning):** handouts carry ~80% of what he teaches; students write in the missing ~20% themselves — keeps them engaged. Design principle: guided-notes / fill-the-gap interactions in learning content, not passive reading.
- **Pain point confirmed (Projects):** reviewing student content today is not individualised — the teacher must hold in mind exactly how each project differs to give useful feedback; hard. He loved how individualised the demo was per student — his only remaining worry is the feedback-rules ambiguity (covered by D17/D18 + the November meeting).
- **Folded in from a pre-meeting AI chat (useful bits; superseded bits dropped):**
  - **Narrative spine for the pitch:** proof story, not feature list — "I'm a doctor; years into cognitive science/metacognition; taught Jim & Paula-Eve the principles; they knew it but couldn't apply it (knowing ≠ applying); built the platform; they thrived, grades jumped." Same shape for Projects: the topic changes every year and every student, the process never does — knowing the process ≠ running it.
  - **The ask, small-yes-first phrasing:** "Would you try it with one class for a month or two — free — and if it's working, we run it through to Christmas?" (we already landed the Christmas version).
  - **Teacher-gated AI nudges:** AI never fires teacher-side responses automatically — only when the teacher clicks; then spend up (max-reasoning model) for quality. Extension: one click produces a nudge the teacher applies to a GROUP of similar students in one go.
  - **Sales page:** one story for both platforms ("I turn knowing into doing"), separate page per platform (Projects / Learning).
  - Confirmed as-is (no change): Patrick Hickey talk (internal, from principal's mail — treat as context, ask-never-claim), log-not-submitted mechanics, SEC AI rules summary.
  - Context: H1Done R2 (platform rebuild) reopens by Sat 26 Sep per the ship plan.

- **The discovery tactic that worked (repeat it):** asking tough conditional questions — "if I solved the individual-feedback issue, would you take it on? ...the Google-platform issue? ...the AI issue?" — surfaced the REAL adoption criteria, which weren't any of those: **it has to be all geography classes, and the principal has to approve.** Root criteria came out only under pressure. Use this pattern with every stakeholder.

## Follow-up additions 3 (late 14 Sep — strategy sharpened)
- **Core model named (D31):** sections = subject + exact SEC brief; sub-questions = generated from that student's own answers; feedback = per-student. Three levels of individualisation — this IS the product.
- **Workspace/Teams deployment (D32):** class copy-link → students auto-login via school account → same section. Feedback through our site OR Google Workspace; voice notes + auto speech-to-text with concise formatting (student gets both).
- **Subtasks formalised as student-executed PRs (D33).**
- **Richard's insight (D34):** the platform can individualise even where the teacher can't — the rules bind the teacher, not the software; run on documented lines with teacher approval.
- **Cohort digest (D35):** periodic AI summary of where the whole class is struggling → teacher teaches to it.
- **Anti-ChatGPT marketing (D36):** standardisation (right models/settings for everyone), pre-loaded briefs, SEC-ethics by design, teacher monitoring, per-student clarity.
- **Back-fill UX (D37):** dump-your-stuff upload for half-way students; familiar Google-Classroom patterns.

## Tomás's journal additions
_(to be appended — he'll add these after journaling)_
---
## SECTION 3 — TEACHER MEETING PACK
# Kevin O'Keefe — Meeting Pack
**Mon 14 Sep 2026 · Tarbert CS geography teacher · meeting ~14:00-15:00**
Mock-up (open on phone): **https://nitros0987.github.io/h1done-projects/**
Full research: `~/Documents/h1done-project-mentor/research-brief-2026-09-14.md` + `research-brief-money-dates-2026-09-14.md`

---

## 1. The ask (one line)
**Design advisor + pilot teacher**: his 5th-year geography class, free until Christmas, we build around his topic.

## 2. Open with (30 seconds)
- "(Jim's son)" warmth — Dad set this up.
- **Patrick Hickey's talk** (Tarbert CS library, Thu 3 Sep — SEC examiner on AI in coursework: SEC requirements + school policy). "We built to exactly those rules — the tool never writes a word."
- Discovery Q: **"How are ye finding ExamRevision?"** (school-funded, live for LC1/LC2 — do NOT pitch as revision).

## 3. Concept in 2 minutes (v1 — grilled this morning)
> H1Done Projects is the teacher's project-manager for the new Leaving Cert's 40% project. The topic changes every year and every student; the process never does. The site runs the official stage timeline for a whole class: each student is walked through the stage they're on with the right questions in the right order (grill-me method — the NCCA guidelines themselves hand teachers a stage-by-stage prompt-question script, we digitise it), their own words become the report, and the teacher sees one triage board — who's on track, who's stuck and why, who raised a hand — plus the evidence trail the SEC and inspectors want. One engine, every subject: biology first (live AACs now), geography second.

## 4. Show, don't tell (phone, 5 min)
- **Student side** → geography persona (Ava Byrne): 7-stage map → tap a stage → the next question → type → submit → mentor review ("what's working" / "before you move on") → next question. Then **Your Answers**: their verbatim answers under the report headings + auto-generated AI-use reference.
- **Teacher side** → triage board: green/orange/red/blue cards, hand-raised queue on top, tap a student → profile + **advice box** → type advice → student gets it as a notification (demo it with two tabs).
- Keep repeating: **it never writes a word.** Every sentence is the student's own.

## 5. Richard's four questions — our answers + what to listen for
1. **What does the new project entail?** — We know this: the **Applied Geography Project** is 40% of LC Geography (exam 60%), ≤20 hours, **7 named stages** (brief → inquiry question → evidence plan → collect → analyse/communicate → evaluate/reflect → finalise report), individual digital report in SEC format, personal inquiry log kept but **not submitted**, authentication = **candidate + teacher + principal**. SEC brief lands **spring 2027** (Term 2 of 5th year). His current 6th years are on the **old 20% GI** instead — report due ~Dec/Jan.
2. **How is he approaching it?** → ASK. Listen: how he schedules the stages across the two years; whether he uses the guidelines' Appendix 1 prompt questions; how he keeps 30 different inquiry questions on track.
3. **What are the pinch points?** → Our hypotheses (ASK, RANK): ① 30 students = 30 different projects — no repeats, so no reusable notes; ② feedback must be **general and non-directive** (no editing drafts, no model text) — so where do his hours go?; ③ **authentication risk** sits on teacher + principal; ④ evidence collection outside school hours needs oversight; ⑤ students stall between sessions; ⑥ spread: some never start, some finish early.
4. **What supports would he like?** → ASK. Then map his list onto the menu: per-student question engine · triage board · teacher advice box (type → notifies student) · authentication evidence log · back-fill ingest (upload what's already done).

## 6. Discovery questions for Kevin
- Week by week, what does a teacher actually DO for this project from brief to submission? Where do the hours go?
- Which single stage, if the tool handled it, would be worth paying for?
- What does the school/inspector/SEC make you evidence? (Patrick Hickey's list?)
- Why would this be a hard NO? What's missing?
- His 6th years' old GI (due ~Dec/Jan): who's stuck already? Could a pilot start THERE this term?
- Does ExamRevision touch any of this? (Probably not — that's the wedge.)
- Who else in Tarbert CS should we show this to (principal, biology teacher for the live AAC)?

## 7. The offer
- **Free until Christmas** for one class. At the end: **full export/printout of everything** — students keep all their work either way.
- **Back-fill ingest**: students upload what they've already done (photos, PDFs, typed notes) — slotted into the stages, never rewritten.
- His commitment: **fortnightly 15-min feedback**, testimonial, intro to the principal.
- Subject order: **Biology first** (science AACs live for 6th years NOW — membranes/osmosis/food preservation), **Geography second** — his 5th years get the full AGP journey; brief lands spring 2027, so Sept-Jan is the prep window (stages 1-3 skills).

## 8. Facts card (all cited in the research brief)
- Reform timeline: geography reformed from Sept 2026 (LC 2028); English postponed to ≥2027; 8 of 9 tranche-1 subjects have 40% AACs with live LC 2027 briefs (issued Jan 2026).
- AI rule: AI output **may be cited as a research source** — must acknowledge **tool name, date generated, how used, chat URL or prompt**. Unacknowledged = plagiarism → **penalties up to withholding of results**. H1Done auto-generates that reference for the student.
- Teacher's legal duty: candidate + teacher + principal authenticate; school stores work for appeals; no draft-editing, no model text.
- Our cost: ~**€0.07 per student per whole project** (DeepSeek V4.1 Flash; worst-case peak <€0.45). Pilot of 30 ≈ €2-13 of API.
- Funding: LEO Feasibility Grant — up to 50% or €15,000, covers prototype/technical development, sole traders eligible, **apply before spending**.

## 9. Don't say
- "Revision app" — ExamRevision owns that and it's school-funded. We are the **project workflow + evidence trail**.
- Anything implying the AI writes content. The hard wall IS the pitch (it's why a principal can say yes).
- Don't promise AGP brief specifics before the SEC publishes it (spring 2027) — the stages and skills are known, the brief isn't.---
## SECTION 4 — RESEARCH BRIEF 1: SEC/NCCA/AAC/AI RULES
# Research brief — AI "project mentor" for reformed Senior Cycle coursework
**Prepared:** Monday 14 September 2026 · **For:** H1Done Platform — project-mentor product design · **Meeting:** Geography teacher (~2h)

All claims carry a source URL. Items marked **UNVERIFIED** could not be fetched or confirmed — never present them as fact.

---

## 0. Source notes (read first)

- **examinations.ie (State Examinations Commission, SEC) is bot-blocked** (HTTP 403 / Cloudflare challenge on every route tried: root, PDFs, curl with browser UA, Jina reader). Nothing from that domain could be read directly; Wayback holds only old exam papers. Every SEC-related claim below is therefore cited from **gov.ie, NCCA/curriculumonline.ie, ASTI (ASTIR magazine)** which quote the SEC documents.
- **ncca.ie is bot-blocked (403)** but fully recoverable via the Wayback Machine; **curriculumonline.ie and assets.gov.ie are open** and host the primary PDFs (specifications, AAC guidelines).
- NCCA PDFs cited below were downloaded and text-extracted (pdftotext); quotes are verbatim from those PDFs.
- Search engines (DDG, Bing, Google) blocked/mangled queries; verification relied on direct fetches of primary sources.

**Key documents captured locally** (in `/tmp/opencode/sc-research/`): Geography spec, Guidelines to support the Applied Geography Project (Dec 2025), Guidelines to support the Biology in Practice Investigation (Nov 2024), old Geography syllabus, gov.ie AI-in-Schools guidance, Department Information Note (2027 arrangements), ASTIR March 2026 (live AAC briefs).

---

## 1. Senior Cycle reform timeline (Q1)

### 1.1 Tranche schedule (NCCA, page captured 5 Sep 2026)

Source: NCCA "Schedule of senior cycle subjects for redevelopment" — https://web.archive.org/web/20260905054846/https://ncca.ie/en/senior-cycle/senior-cycle-redevelopment/schedule-of-senior-cycle-subjects-for-redevelopment/

| Introduced to schools (5th yr Sept of) | First examined (LC year) | Subjects |
|---|---|---|
| 2025 | LC 2027 | Ancient Greek, Arabic, **Biology**, **Business**, **Chemistry**, Climate Action & Sustainable Development (new), Drama, Film & Theatre Studies (new), Latin, **Physics** |
| 2026 | LC 2028 | Accounting*, Construction Studies, **English***, **Geography**, LCVP Link Modules, Physical Education (LCPE) |
| 2027 | LC 2029 | Agricultural Science, Computer Science, Design & Communication Graphics, History, Home Economics, Mathematics, Music, Physics and Chemistry |
| 2028 | LC 2030 | Art, Economics, French, Gaeilge, German, Italian, Politics & Society, Spanish, Technology |
| 2029 | LC 2031 | Applied Mathematics, Classical Studies, Japanese, Lithuanian, Mandarin Chinese, Polish, Portuguese, Religious Education, Russian |

*Accounting and English postponed "until at least September 2027" (footnote on the same NCCA page).

### 1.2 What current students sit (as of Sept 2026)

| Cohort | Exam year | Reformed subjects they sit | Everything else |
|---|---|---|---|
| Current 6th years (started 5th yr Sept 2025) | **LC 2027** | Tranche 1: Biology, Chemistry, Physics, Business, Latin, Ancient Greek, Arabic, Drama Film & Theatre Studies, Climate Action & SD — all with AACs | Old syllabi, incl. **old Geography (20% GI)** — old syllabus "for examination to June 2027" |
| Current 5th years (started 5th yr Sept 2026) | **LC 2028** | Tranche 1 (continuing) + Tranche 2: **Geography (new spec + 40% Applied Geography Project)**, Construction Studies, Engineering, LCPE, LCVP Link Modules | History, Maths, English, Gaeilge, Home Economics etc. still old syllabi (Tranche 3 arrives 2027 → LC 2029) |

Evidence:
- "A new Leaving Certificate Geography specification will be introduced for fifth year students in September 2026 and will replace the current Leaving Certificate Geography syllabus." + old syllabus "for examination to June 2027" — https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/geography/
- "A new Leaving Certificate Biology specification will be introduced for fifth year students in September 2025... current syllabus... examined for the last time in June 2026" — https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/biology/ and https://web.archive.org/web/20250907082541/https://ncca.ie/en/senior-cycle/curriculum-developments/biology/
- COVID-era assessment adjustments remain for LC 2027+ "for all existing subjects until they are replaced by new or revised specifications under Senior Cycle Redevelopment" — Department Information Note, https://assets.gov.ie/static/documents/5b7f190c/Information_Note_to_Schools_EN.pdf (linked from https://www.gov.ie/en/department-of-education/publications/state-examinations-2026/)

> ⚠️ **Correction to the brief's premise:** reformed LC Geography is **not** examined in 2026 and its AAC does **not** run for the LC 2027 cohort. It starts Sept 2026 (current 5th years) → **LC 2028**. The LC 2027 cohort (current 6th years) still does the **old 20% Geographical Investigation**. This is actually good news: a product can serve the old-GI cohort AND be first-to-market for the new AAC cohort.

### 1.3 Pace & politics (context for teacher conversations)

- Live AAC briefs for 8 of 9 Tranche 1 subjects issued by the SEC in **January 2026** (Arabic exempt — oral/aural); sample AAC briefs Sept 2025; sample exam papers April 2025; AAC guidance documents for all Tranche 1 subjects published 2024 — ASTIR Vol 44 No 2, March 2026, https://www.asti.ie/document-library/astir-article-live-aac-briefs-issued-for-senior-cycle-march/astir-march2026-web-scupdates.pdf
- 19 Nov 2024: 30,000+ ASTI/TUI members protested reform pace. May 2025: Department published "Senior Cycle Redevelopment – Implementation Support Measures"; TUI accepted, ASTI rejected 68/32. June 2026: ASTI accepted measures + Addendum 84/16 (incl. pilot lab assistants, posts of responsibility, **teacher workload working group, taskforce for AI in education**) — https://www.asti.ie/news-campaigns/campaigns/seniorcycleredevelopment/ and https://www.asti.ie/news-campaigns/latest-news/asti-members-accept-senior-cycle-implementation-measures/
- Jan 2025 ASTI RedC survey: teachers said LC integrity "will be compromised" (AAC concerns) — https://www.asti.ie/document-library/asti-redc-jan-2025-senior-cycle-redevelopment-additional/ (linked from campaign page)

---

## 2. AAC structure — reformed subjects (Q2)

### 2.1 General model (Tranche 1, verified)

| Feature | Detail | Source |
|---|---|---|
| Weighting | **40%** AAC + 60% written exam, for 8 of 9 Tranche 1 subjects (Drama F&T = 50:50 project/exam) | ASTIR March 2026 (URL above); Biology & Geography specs (below) |
| Set/marked by | Both components set and examined by the **SEC** (externally assessed; the 2022 plan for school-based assessment + moderation was dropped in Sept 2023) | ASTI campaign timeline, https://www.asti.ie/news-campaigns/campaigns/seniorcycleredevelopment/ ; Geography spec PDF |
| Brief | Common (common-level) brief **published annually by the SEC in Term 2 of Year 1** (5th year), incl. stimulus material | Biology AAC guidelines §Investigation brief; Geography spec pp. 22–23 |
| When completed | Spans Year 1 → Year 2: brief issued Term 2 of 5th year; **report submitted in Year 2** (Biology states this explicitly) in a format prescribed by the SEC; all work "concluded by a set date" set by the SEC | Biology AAC guidelines ("students submit a report of their investigation in Year 2 in a format prescribed by the SEC"); Geography AGP guidelines §Format and Submission |
| Scale | ~**20 hours** of student work (Biology & Geography both) | Biology AAC guidelines ("Over the course of approximately 20 hours"); Geography spec fn.1 ("the AAC will take up to 20 hours") |
| Where done | Integrated into ongoing classroom teaching and learning; experiment/fieldwork **under teacher supervision** in school (lab); schools "have a high degree of autonomy" in scheduling stages across the window | Biology AAC guidelines Stage 4; Geography spec; AGP guidelines |
| Output | Individual digital report in SEC-prescribed format (structure, word count, images, file size defined in SEC instructions); personal inquiry/investigative log is **not** submitted | AGP guidelines; Biology AAC guidelines |
| Authentication chain | **Candidate + teacher + school principal**; school stores work securely as hard-copy PDF for appeals; must comply with SEC Coursework Rules and Procedures | ASTIR March 2026 (URL above) |
| Penalties | Submitting work not entirely the candidate's own = "significant breach of regulations" → "penalties, up to and including the withholding of related results" | Biology & Geography AAC guidelines |

### 2.2 AAC names per subject (LC 2027 live briefs, issued Jan 2026)

Source: ASTIR March 2026 (URL above). Brief topics as published for LC 2027.

| Subject | AAC name | LC 2027 brief topic |
|---|---|---|
| Biology | **Biology in Practice Investigation** | Membranes; osmosis; food preservation |
| Chemistry | Chemistry in Practice Investigation | Rate of a chemical reaction / factors |
| Physics | Physics in Practice Investigation | Domestic energy losses / sustainability |
| Business | Business Alive Investigative Study | How a work practice using digital technology impacts employers/employees |
| Latin / Ancient Greek | Research study ("text in context") | 'the divine' / ξενία |
| Drama, Film & Theatre Studies | Creativity in Practice Project (50:50 with exam) | "The use of Colour in Theatre and Film" |
| Climate Action & SD | Action Project | Reducing Ireland's greenhouse gas emissions |
| Arabic | (no AAC brief — oral/aural components) | — |

### 2.3 Biology AAC — specifics (Tomás's first launch subject)

Source: *Guidelines to support the Biology in Practice Investigation* (NCCA, November 2024) — https://www.curriculumonline.ie/getmedia/fc6493fa-f5d7-4c8e-9c82-3fcd268ce1ba/AAC_Guidelines_Biology_Final.pdf ; spec: https://www.curriculumonline.ie/getmedia/04e86311-7225-4cf3-a723-675e33154daf/SC-BIOLOGY-Spec-ENG.pdf

- **40%** of total marks, common brief, assessed at the level (H/O) the student sits the written exam; written exam 60%.
- **Brief:** published annually by SEC **in Term 2 of Year 1 (5th year)**; includes stimulus material; students build an **investigative log** from it (log is a personal document, **not submitted**).
- **Report submitted in Year 2 (6th year)** in SEC-prescribed format.
- **~20 hours over 6 stages:** 1 Initial response to brief (1–2h) → 2 Background research → 3 Designing & planning the experiment (2–3h) → 4 Conducting the experiment (**under the supervision of the teacher in a school laboratory**; may need up to 3 sessions; peer support permitted in this stage only) → 5 Data analysis & conclusions (1–2h) → 6 Finalising the report.
- **LC 2027 brief topics (live, Jan 2026):** membranes, osmosis, food preservation (ASTIR March 2026).
- Authentication is staged: students share investigative log with teacher for regular check-ins; at Stage 4 the teacher must be satisfied the experiment matches the logged plan; at Stage 5 the teacher "must be satisfied to give an undertaking that the analysis and conclusions are aligned with the experiments that took place under their supervision" (guidelines, Stages 2–5 + Role of the teacher).
- Teacher feedback must be general and non-directive; **no editing of drafts, no model text or answers** (Biology & Geography AAC guidelines, Role of the teacher).

---

## 3. Geography deep-dive (Q3) — the meeting subject

### 3.1 Reformed LC Geography (first examined LC 2028)

Sources: Geography spec — https://www.curriculumonline.ie/getmedia/837bf939-b559-4b45-8c94-5590d8710083/SC-Geography-Spec-ENG-INT.pdf ; *Guidelines to support the Applied Geography Project* (NCCA, **December 2025**) — https://www.curriculumonline.ie/getmedia/e59372b0-ef87-44a4-8db0-bff434e54a29/Guidelines-to-support-the-Applied-Geography-Project.pdf (both linked from https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/geography/)

| Element | Detail |
|---|---|
| AAC name | **Applied Geography Project (AGP)** |
| Weighting | **40%** (written exam 60%, Higher & Ordinary) |
| Level | **Common brief** (single level for the project; exam differentiates H/O) |
| Brief | Published annually by the SEC; **issues in Term 2 of Year 1 of the course** (5th year) → for the LC 2028 cohort that is spring 2027. Brief sets requirements + supports choosing a focus, teacher planning, and resource-gathering |
| Scale | "Envisaged that the AAC will take **up to 20 hours**" (spec fn.1) |
| What it requires | An **inquiry** in line with the SEC brief: research into an area related to the brief; plan and carry out an inquiry; gather and analyse data; draw and communicate informed conclusions. Students apply the Unifying Strand to one or more of the three contextual strands; encouraged to anchor the project in **their local area** |
| Output | Individual **Applied Geography Project Report** in a **digital format prescribed by the SEC** (word count, number of images, structure/section headings, file size — all specified in SEC instructions with the brief). Personal **inquiry log** recommended but **not submitted**; report is the sole basis of assessment |
| Collaboration | Only in the **evidence-collection stage**; every other stage and the report are individual |
| Ethics | Must demonstrate how ethics, safety and sustainability shaped decisions; GDPR/property/health-and-safety compliance flagged to students |

### 3.2 The seven stages (actual stage names — AGP guidelines, Dec 2025)

| Stage | Name | Indicative time |
|---|---|---|
| 1 | Considering the brief | up to 1 hour |
| 2 | Formulating the inquiry question | 3–4 hours |
| 3 | Considering evidence collection | 2–3 hours |
| 4 | Collecting evidence | (set per brief/approach) |
| 5 | Analysing and communicating | 2–3 hours |
| 6 | Evaluating evidence and reflecting on findings | 1–2 hours |
| 7 | Finalising the Applied Geography Project Report | up to 1 hour |

(Stages "may occur at different times during the broad window for completion"; assessment is based **solely on the report**; the inquiry log feeds it. Appendix 1 of the guidelines gives official **teacher prompt questions per stage** — e.g. "What geographical questions do I have about the theme?" — i.e. the State itself endorses question-led mentoring.)

### 3.3 Teacher authentication & supervision

- Teachers should **review the inquiry log at Stage 2** explicitly "to support the authentication process" (AGP guidelines, Stage 2).
- Evidence collection "must be carried out under the supervision of the teacher. If the project involves carrying out tasks outside of school hours or the school grounds... authenticated by the teacher through oversight of work done in school and ongoing review" (Stage 3/4 text).
- Feedback: "general and nondirective"; **no editing draft work, no model text or answers** (Role of the teacher, p. 12–13).
- SEC authentication guidance applies: teacher + principal authenticate; secure storage; see §5 below.

### 3.4 Deadlines & mechanics for 2026-27

| Cohort | What happens in 2026-27 | Exact dates |
|---|---|---|
| **LC 2027 (current 6th yrs)** | **Old** Geographical Investigation (20%): topics issued by SEC in LC Year 1; report submitted **at the end of Term 1 in LC Year 2** (≈ Dec 2026–Jan 2027). Teacher + principal verify authenticity; 60% primary / 40% secondary sources; no group reports. Old syllabus examined for last time June 2027 | Old syllabus, §Core Unit 3 — https://www.curriculumonline.ie/getmedia/9da21be1-3f99-4f50-88ee-ba7ce6638e1a/SCSEC17_Geography_syllabus_eng.pdf . Exact calendar date per SEC circular — **UNVERIFIED** (examinations.ie blocked); check the SEC Coursework Rules for 2025/26 (link in §4) |
| **Current 5th yrs (LC 2028)** | New spec from Sept 2026. **First-ever AGP brief issues Term 2 of Year 1 = spring 2027.** Work concluded by a SEC-set date communicated in the brief; submission per SEC instructions. No LC 2028 AGP dates published yet as of 14 Sep 2026 | AGP guidelines §Format and Submission ("brief that issues in Term 2 of Year 1"; "date will be set by the SEC and communicated to schools") |

**UNVERIFIED / to confirm with SEC when reachable:** exact AGP report submission date for LC 2028 (expect it in the spring 2027 brief); whether the AGP report is due in 6th year (Biology is explicit; Geography's guidelines leave the date to the SEC).

### 3.5 Old vs new Geography assessment (quick compare)

| | Old GI (to LC 2027) | New AGP (from LC 2028) |
|---|---|---|
| Weighting | 20% (exam 80%) | **40%** (exam 60%) |
| When | Topics issued in LC Year 1; investigation carried in autumn of Year 2; report end of Term 1 Year 2 | Brief issues Term 2 of **Year 1** (5th yr); window spans into Year 2, SEC-set end date |
| Structure | SEC annual topic list; structured **report booklet**; 60/40 primary/secondary source ratio mandated | Open **inquiry** within SEC common brief theme; digital report in SEC format; inquiry log kept personally |
| Stages | Syllabus skills stages (planning→data collection→analysis→conclusions) | **7 named stages** incl. explicit evaluation/reflection stage |
| Authored by | Individual report; teacher + principal verify | Individual (collaboration only for data collection); candidate + teacher + principal authenticate; secure storage for appeals |
| Sources | Old syllabus (URL above) | Geography spec + AGP guidelines (URLs above) |

---

## 4. AI rules (Q4) — SEC, NCCA and national guidance

### 4.1 The SEC rule in short

1. **Since the 2023 examinations**, the SEC has included in its general and subject-specific coursework documentation an instruction on AI-generated material: any material generated by AI software "will be treated in the same way as any other material that the candidate has not generated themselves" — i.e. it must be referenced/acknowledged — Department press release + Guidance on AI in Schools, https://www.gov.ie/en/department-of-education/press-releases/minister-mcentee-welcomes-new-national-guidance-on-the-use-of-ai-in-schools/ and https://assets.gov.ie/static/documents/dee23cad/Guidance_on_Artificial_Intelligence_in_Schools_2025.pdf
2. **Governing circulars:** coursework acceptance/authentication is set out in SEC Circulars **S69/04, S68/08, S76/22 and S52/24** — "which contains specific instructions in relation to the use of AI software in coursework" (same gov.ie AI guidance, fn. 4). Circular texts sit on examinations.ie — **UNVERIFIED directly (site bot-blocked)**; verify at www.examinations.ie before quoting to teachers.
3. **Consolidated rules now exist:** the SEC published **"Coursework Rules and Procedures for 2025/2026"** (announced as imminent in Oct 2025; linked from gov.ie's State Examinations 2026 page, which "includes their guidance on the use of AI software and applications in the context of coursework for assessment for the purposes of certification") — link used by gov.ie: https://www.examinations.ie/docs/viewer.php?q=f6aceaad84e313de562fc03dc827478372eaaad9 (bot-blocked; retrieve manually).
4. **NCCA AAC guidelines (Tranche 1, 2024/25) hard-code AI rules:** AI-generated material **may be cited as a research source**, but use must be acknowledged — reference must include **the AI tool's name, the date the content was generated, and a brief explanation of how it was used**; where the tool generates a **shareable chat URL, include it**, otherwise include **the tool name and the prompt used**. Unacknowledged AI material = plagiarism → "penalties, up to and including the withholding of related results" — Biology AAC guidelines Appendix (Nov 2024) and Geography AGP guidelines Appendix 2 (Dec 2025), URLs in §2/§3. Same rule is confirmed as applying to the live LC 2027 AACs: "use of sources, including AI tools, must be acknowledged" (ASTIR March 2026).
5. **School-side:** the national *Guidance on Artificial Intelligence in Schools* (21 Oct 2025) requires schools to review Privacy/Data Protection Policy, **Acceptable Use Policy** (Webwise AUP generator updated with 21 AI statements), Code of Behaviour and Bí Cineálta before permitting AI use; GenAI accounts have age limits (13/16/18) and often need parental consent for under-18s; SEC has commissioned University of Limerick research on GenAI's impact on certification assessment — gov.ie press release + AI guidance PDF (URLs above); ASTI June 2026 acceptance includes an AI-in-education taskforce — https://www.asti.ie/news-campaigns/latest-news/asti-members-accept-senior-cycle-implementation-measures/

**Permitted (per NCCA AAC guidelines):** AI material as a *referenced* research source, alongside podcasts, websites, official reports etc.
**Prohibited:** using AI-generated material without acknowledgement (plagiarism); submitting any work not entirely the student's own. The NCCA/SEC documents do **not** publish a subject-specific whitelist (e.g. "grammar-checking allowed") in the material I could fetch — **UNVERIFIED**; the SEC brief and Coursework Rules and Procedures govern the detail.

### 4.2 What this means for a "mentor not writer" product

- The compliance line in the current documents is *acknowledgement*, not prohibition: an AI tool that **asks questions, suggests sources, and scaffolds planning** sits comfortably beside "offering prompt questions... to stimulate and support students' planning and critical thinking" — which the AGP guidelines explicitly list as a legitimate teacher support (Role of the teacher, p. 12).
- Any AI involvement must be surfaced for the student's own referencing (tool name, date, how used, chat URL/prompt) — a compliant product should generate that reference text automatically for the student's inquiry log.
- Risk area to design around: the report must be the student's own writing; teacher feedback must stay non-directive; nothing the product produces should be paste-able as report content.

---

## 5. Authentication & supervision (Q5)

| Question | Answer | Source |
|---|---|---|
| Where must work be completed? | Integrated into ongoing classroom teaching and learning; experiments/fieldwork under **teacher supervision** in school (Biology Stage 4); Geography evidence collection supervised, with out-of-school tasks authenticated via oversight of in-school work | Biology AAC guidelines Stage 4; AGP guidelines Stages 3–4 |
| Who certifies? | **Candidate, teacher and school principal** all authenticate; school stores completed work securely as **hard-copy PDF for appeal purposes**; compliance with SEC Coursework Rules and Procedures required | ASTIR March 2026 (URL in §1.3) |
| What does the teacher certify? | That the student carried out the work themselves — teacher "needs to be satisfied that students have carried out the work themselves" via "regular, comprehensive engagement" with the work; not required to witness all aspects | Biology & Geography AAC guidelines, Role of the teacher |
| Staged checkpoints? | Yes: Biology — investigative log shared with teacher for "regular check-ins" (Stage 2), teacher checks plan-vs-experiment (Stage 4), teacher "must be satisfied" analysis matches supervised experiments (Stage 5); Geography — teacher reviews inquiry log at Stage 2 for authentication | Biology AAC guidelines; AGP guidelines |
| Drafts seen by teacher? | Teachers see logs/process work, but feedback must be "general and nondirective"; **editing draft work or providing model text/answers is explicitly prohibited** | AGP guidelines p. 13; Biology guidelines Role of the teacher |
| Log submitted? | No — inquiry/investigative log is a personal document, not submitted to the SEC; only the final report is assessed | Biology & Geography AAC guidelines |
| AI declaration? | No separate student declaration found in NCCA guidelines; instead **mandatory referencing** of AI use (tool, date, method, chat URL/prompt) in the report's reference list; candidate + teacher + principal authenticate the submission | NCCA AAC guidelines Appendix; ASTIR March 2026 |

---

## 6. Competition (Q6) — brief

| Product | Public AI stance (verified) | Source |
|---|---|---|
| **Studyclix** | Live **"Answer Guidance AI"** — marking-scheme-grounded guidance that explicitly **will not** write answers/essays/conclusions, does not grade, does not accept prompts or uploads, same output for all students, optional toggle on selected questions; subjects: LC English, Maths, HL German/French/Spanish, Business, Biology, Chemistry, Physics + JC equivalents; published "How it works" and "AI Safety and Responsible Use" pages | https://www.studyclix.ie/ai-answer-guidance-how-it-works ; https://www.studyclix.ie/ai-safety-and-responsible-use-on-studyclix ; https://www.studyclix.ie/ai-answer-guidance-overview |
| Bright | **UNVERIFIED** — could not fetch any Bright product page or independent coverage via available search routes (search engines captcha-blocked); do not assert anything about it |
| iRevise | irevise.com returned HTTP 403 to fetches — AI stance **UNVERIFIED** |
| Implication | Studyclix's AI is exam-prep (past questions + marking schemes), philosophy already "guide, don't write". Nobody found is doing **process-mentoring for the AAC itself** (inquiry-log scaffolding, stage-by-stage next-question guidance, teacher triage dashboard) — the reform's new workflow is the open space |

---

## 7. Unverified items — do not rely on these without checking

1. **Any standalone SEC AI-guidance document title/URL** — examinations.ie is bot-blocked and its pages are barely archived; the SEC's AI instructions are cited here only as quoted in gov.ie/Department documents and NCCA guidelines. Manual check: https://www.examinations.ie (Coursework Rules and Procedures 2025/2026 + Circular S52/24).
2. **Exact LC 2027 AAC submission deadline dates** (e.g. Biology in Practice Investigation report due date) — inside SEC coursework documentation; not retrievable.
3. **Exact old-GI booklet submission date for LC 2027** (syllabus says "end of term one in LC Year 2"; SEC sets the calendar date annually).
4. **Bright's AI features** — unverified (see §6).
5. **AGP report submission year for LC 2028** — guidelines say work is "concluded by a set date" set by the SEC and included in the brief; the first LC 2028 AGP brief is due in Term 2 of Year 1 (spring 2027). Whether submission then falls in 5th or 6th year should be confirmed when the brief publishes.

---

## 8. Fast takeaways for the Geography meeting

- The Geography teacher's **current 6th years** run the old GI (20%, report due ~end of Term 1 of Year 2 ≈ Dec/Jan 2026-27); her **5th years** (LC 2028) start the 40% Applied Geography Project — brief lands **spring 2027** (Term 2 of 5th year), so Sept 2026–Jan 2027 is a preparation window, not a project window.
- The AGP is a 7-stage, ~20-hour inquiry anchored in the local area, assessed solely on an individual digital report; the official guidelines hand teachers a **stage-by-stage prompt-question script (Appendix 1)** — the product can digitise exactly this, stage by stage.
- AI is explicitly allowed as a **referenced research source** (tool, date, how used, chat URL or prompt) and explicitly banned as **unacknowledged text** — "mentor that asks the next question and supplies links" is squarely on the permitted side, and can auto-generate the AI reference entry for the inquiry log.
- Teachers carry real authentication risk (candidate + teacher + principal, secure storage, no draft-editing): a product that logs process evidence (decision points per stage) strengthens *their* authentication file — that's a pitch that lands with a teacher, not a threat.
---

## 9. VERIFIED 14 Sep evening — SEC primary documents (local: sec-docs/)
Source: uploaded by Tomás to Drive "Inbox - For AI", downloaded to `sec-docs/`.

- **Coursework Rules and Procedures 2025/2026** (full PDF + txt extracted). Per circular **S79/25** §A, it **replaces S69/04, S68/08, S76/22 and S52/24** — the consolidated compliance base. No need to hunt the older circulars.
- **Appendix 2 — Rules for the Use of AI in SEC Examination Coursework** (exact wording now on file):
  - Permitted: gathering background information from credible sources; **structuring coursework plans**; clarifying research material. Candidates must critically evaluate AI output (accuracy, bias, hallucinations).
  - Prohibited: using AI to generate coursework content, responses or creative elements directly; copying **or paraphrasing** AI-generated material — "Any ideas, prompts, or suggestions derived from the use of AI tools must be explicitly acknowledged; however, candidates remain responsible for expressing these ideas in their own words".
  - Acknowledgment: **dedicated appendix section** in the coursework containing tool name+version, developer/publisher, date output generated, brief description of how used; prompts where applicable; shareable URL/session link if available.
  - Marking: properly referenced AI material earns **no credit itself** — credit only for its effective use in support/development of the candidate's own work.
  - Penalties ladder: loss of coursework marks → loss of subject → loss of entire examination → debarment from subsequent years' certificate examinations.
  - Authentication Form P.2 signed by candidate ("free from any unacknowledged AI tool assistance"); "Candidates should discuss the proposed use of any AI tools with their class teacher before they undertake their coursework."
- **S79/25 Timetable and Coursework Circular 2026**: introduces the Rules; provisional LC 2026/27 schedule; per-subject AAC dates live in the briefs (biology deadline still to verify from the brief itself).
- **Old GI LC 2027**: Prescribed List + Reporting Booklet downloaded (booklet requires PDF conversion before submission).

**Product mapping (update to §4.2):** the grill→brief→subtasks engine is a **named permitted use** ("structuring coursework plans"). The platform's auto-generated AI-use export must render the SEC-format acknowledgment appendix verbatim (tool+version, developer, date, description, prompts, session URL). Onboarding must include the "discuss AI use with your teacher" step. The hard wall satisfies every prohibited use.
---
## SECTION 5 — RESEARCH BRIEF 2: DATES, LEO GRANT, AI COST MODEL
# H1Done Project Mentor — Research Brief: Due Dates, LEO Grant, AI Cost Model
**Prepared:** Monday 14 September 2026, ~13:45 IST (for 14:00 meeting)
**Scope:** (1) LC coursework due dates; (2) LEO Feasibility Grant terms; (3) DeepSeek AI cost model per student; (4) registration/legal quick facts.
**Sources:** local extracts in `/tmp/opencode/sc-research/` (cited by file + line/section) and live web pages (cited by URL) fetched 14 Sep 2026. examinations.ie (SEC) is bot-blocked (Cloudflare) and its PDFs are not in the Wayback Machine, so SEC-set exact dates could not be retrieved — flagged below.

---

## 1. DUE DATES (what is confirmed vs not found)

### (a) Biology in Practice Investigation — LC 2027
| Item | Finding | Status |
|---|---|---|
| Brief issue | Live brief issued **January 2026** for all eight Tranche 1 subjects with live AAC briefs, incl. Biology ("Biology in Practice Investigation", topics: membranes, osmosis, food preservation). AAC = 40% of total marks. | **CONFIRMED** — `/tmp/opencode/sc-research/astir-mar26.txt` (ASTIR Vol 44 No 2, March 2026, pp 12–13: "The release by the SEC of the live briefs ... in January 2026") |
| Brief timing rule | Brief published annually by SEC in **Term 2 of Year 1** of the course. | **CONFIRMED** — `/tmp/opencode/sc-research/bio-aac.txt` (Guidelines to support the Biology in Practice Investigation, Nov 2024) lines 78–79, 120, 195 |
| Report submission | Students **submit the report in Year 2** (i.e. the 2026/27 school year for LC 2027 candidates). Report is digital, in a format prescribed by SEC. Investigation ≈ 20 hours over six stages; Stage 6 (finalising report) up to 4 hours. | **CONFIRMED (year, not month)** — `bio-aac.txt` lines 107–108, 145, 222, 435 |
| Exact submission date | "All work ... must be concluded by a set date. This date will be set by the SEC and communicated to schools and will also be included in the brief that issues in Term 2 of Year 1." | **NOT FOUND** — `bio-aac.txt` lines 474–476; the Jan 2026 brief itself sits on examinations.ie (bot-blocked; no Wayback capture of examinations.ie PDFs — CDX domain query 2025–2026 returned nothing). **Exact month/date unverified; expect spring 2027 by analogy with other SEC coursework, but do not quote a date in the meeting.** |

### (b) Old Geography GI (Geographical Investigation) — LC 2027 (old syllabus, last old-syllabus cohort)
- Topics list for the investigation issued to schools by the SEC in **Leaving Certificate Year 1** (i.e. 5th year, 2025/26 for LC 2027).
- Report **"submitted for assessment at the end of term one in Leaving Certificate Year 2"** — i.e. end of the first term of 6th year (≈ December 2026 / January 2027 window on school-calendar wording).
- Report assessed outside the terminal written exam; teacher + principal verify authenticity; 60% primary / 40% secondary sources; no group projects.
- **CONFIRMED (wording only)** — `/tmp/opencode/sc-research/geo-old-syllabus.txt` lines 805–829 ("THE GEOGRAPHICAL INVESTIGATION FOR ORDINARY AND HIGHER LEVEL STUDENTS").
- **Month NOT stated.** No month appears in the syllabus text; the SEC sets the annual date. Not found in any local file or accessible web source — **unverified**.

### (c) Applied Geography Project (AGP) — LC 2028 (new syllabus)
- Brief published annually by SEC in **Term 2 of Year 1** (`/tmp/opencode/sc-research/geo-agp.txt` lines 69–70, 454–461, 565).
- For LC 2028 candidates (entering 5th year Sept 2026 — i.e. the current first-years of senior cycle), Year 1 = 2026/27, so **brief issues in Term 2 of 2026/27 ≈ spring 2027** (Irish "term 2" ≈ January–Easter). This is an inference from the term calendar, not a stated month — **treat as provisional**.
- Submission: all work "concluded by a set date... set by the SEC... included in the brief"; report submitted in **Year 2 (2027/28 school year)**, digital format. Exact month **NOT FOUND** (`geo-agp.txt` lines 454–462).
- Project scale: up to 20 hours, seven stages, assessed solely on the individual report (`geo-agp.txt` lines 109–113, 171).

### (d) ASTIR March 2026 / January issue — submission windows for LC 2027 AACs
- ASTIR March 2026 confirms the January 2026 brief issue and the mandatory authentication/coursework-rules framework (candidate + teacher + principal authentication; secure hard-copy PDF storage for appeals; AI use must be acknowledged) — but contains **no submission-window dates** (`astir-mar26.txt` lines 30–45, 51–123).
- The "January" ASTIR file is actually **Vol 43 No 1, January 2025** (`astir-jan26.txt` lines 41, 73, 130, 180) — protest coverage and oral-exam scheduling (orals at Easter "until the 2026/2027 school year", review after the 2027 exams, lines 95–99, 159); **no AAC submission dates**.

**Bottom line for the meeting:** Biology brief = Jan 2026 (confirmed); Biology report = during LC 2027 exam year, date set by SEC in the Jan 2026 brief (exact date unverified); old Geography GI report = end of term 1 of 6th year (≈ Dec 2026/Jan 2027, month unverified); AGP brief ≈ spring 2027, submission in LC 2028 exam year (unverified). Action: pull the exact SEC dates from the Jan 2026 briefs via a school/principal contact or a logged-in examinations.ie session.

---

## 2. LEO FEASIBILITY GRANT — verified terms (localenterprise.ie, fetched 14 Sep 2026)

- **Amount:** 50% of investment or **€15,000**, whichever is less, in the Southern & Eastern Region (Dublin is S&E); 60% of investment or €15,000 in the Border-Midlands-Western region. Source: https://www.localenterprise.ie/discover-business-supports/funding-and-grants/financial-supports/feasibility-grant/
- **Eligible costs:** Market research; consultancy costs; **technical development / prototype / innovation** (explicitly includes "design and prototype development" and hiring third-level college expertise); **salary / own-labour research**; miscellaneous. So software development as a prototype/feasibility activity is in scope. Source: same page.
- **Who's eligible:** businesses or individuals intending to explore feasibility of a **manufacturing or internationally traded services** business; **≤10 employees**; commercial sphere; registered in the LEO's geographic area; must demonstrate a market. Edtech/AI software qualifies as internationally traded services in principle. **Sole traders explicitly eligible** — LEO criteria cover "limited company, individuals/sole trader, cooperatives and partnerships" (https://www.localenterprise.ie/discover-business-supports/funding-and-grants/financial-supports/eligibility-criteria/). **No full-time-commitment requirement is stated on the national pages** (unverified either way — confirm with the local LEO).
- **Process/timing:** application must be submitted **before any project expenditure or activity commences** (deadweight rule — eligibility-criteria page). Applications go through your local LEO; the national pages do not publish a typical decision lead time — **ask the local LEO** (not verified).

**Related, for a doctor with a day job:**
- **LEO Priming Grant** (for later, once trading): within first 18 months of start-up; max **50% of investment or €150,000** (standard cap €80,000; EI approval needed ≥€50k; €15,000 per full-time job created); costs: capital, salary, consultancy/innovation/marketing, overheads; open to sole traders, partnerships, limited companies. Source: https://www.localenterprise.ie/discover-business-supports/funding-and-grants/financial-supports/priming-grant/
- **Enterprise Ireland New Frontiers — Phase 1 is part-time; Phase 2 is full-time** ("During the part-time Phase 1 and full-time Phase 2..."). Phase 1 alone is therefore compatible with a day job; Phase 2 (with the **€17,500 tax-free allowance** and free co-working) implies full-time commitment. No equity taken; support package ~€30,000. No business registration needed to participate. Sources: https://www.newfrontiers.ie/about/faq ; https://www.newfrontiers.ie/
- **Funding conflict rule:** you may hold **only one** of {New Frontiers allowance, EI HPSU Start Feasibility, Food Works, EI PSSF, **LEO Feasibility**, Commercialisation Fund, Údarás na Gaeltachta Feasibility} at a time; an undrawn LEO Feasibility grant must be fully drawn down or forfeited before joining NF Phase 2, and receipt of a LEO Priming/Business Expansion Grant for the same business disqualifies the NF tax-free allowance. Plan the sequence: **LEO Feasibility now → NF Phase 2 later** works; both at once does not. Source: https://www.newfrontiers.ie/about/eligibility-criteria

---

## 3. AI COST MODEL — DeepSeek V4.1-Flash ("deepseek-flash")

**Pricing verified live today** (https://api-docs.deepseek.com/quick_start/pricing, fetched 14 Sep 2026):
- Model `deepseek-flash` = **DeepSeek-V4.1-Flash**; context 1M tokens; JSON, tool calls, Responses API, Anthropic-format API all supported.
- Input (cache miss): **$0.15 /M off-peak**, $0.30 /M peak — matches local config.
- Input (cache hit): **$0.003 /M off-peak**, $0.006 /M peak — matches local config.
- Output: **$0.60 /M off-peak**, $1.20 /M peak — matches local config.
- Peak = 01:00–04:00 and 06:00–10:00 UTC Mon–Fri = **02:00–05:00 and 07:00–11:00 IST Mon–Fri**; everything else (evenings, weekends, most school-hours use after 11:00) is off-peak at half price. Irish **school-morning use (07:00–11:00) is peak** — price that in.
- **OpenRouter ~5% fee:** per local config note; not re-verified this session (openrouter.ai docs unreachable in time). Add ~5% for a realistic ceiling.

### Per-student cost, one ~20-hour project (off-peak, cache-miss worst case)
| Surface | Calls | Input tok | Output tok | Input $ | Output $ | Total $ |
|---|---|---|---|---|---|---|
| E1 submission reviews | 60 × (3,000 in + 300 out) | 180,000 | 18,000 | $0.02700 | $0.01080 | **$0.03780** |
| E2 next-question generation | 60 × (2,000 in + 200 out) | 120,000 | 12,000 | $0.01800 | $0.00720 | **$0.02520** |
| E3 student help questions | 30 × (1,500 in + 300 out) | 45,000 | 9,000 | $0.00675 | $0.00540 | **$0.01215** |
| **Total per student** | 150 calls | 345,000 | 39,000 | $0.05175 | $0.02340 | **$0.07515** |

| Scale | USD | EUR (€1 = $1.08) |
|---|---|---|
| **Per student** | **$0.075** (≈7.5¢; €0.070) | **€0.07** |
| **30 students** | **$2.25** | **€2.09** |
| **300 students** | **$22.55** | **€20.88** |
| 300 students, all peak-hour (×2) | $45.09 | €41.75 |
| Per student + OpenRouter ~5% | $0.079 | €0.073 |

Sensitivity: if ~80% of review input context is cache hits, the per-student total falls to ≈ **$0.034** (≈€0.032) — caching roughly halves it. Even the all-peak, no-cache ceiling is **< 45¢ per student**; AI inference cost is negligible vs any price point.

### Photo ingest (back-fill) — vision
- **Local config says DeepSeek V4 Flash is text-only. That is now outdated: the live docs show `deepseek-flash` (V4.1-Flash) supports vision** (JPEG/PNG/GIF/WebP; images in user messages; via base64, URL, or Files API). Source: https://api-docs.deepseek.com/guides/vision (fetched 14 Sep 2026).
- Image billing: each image is auto-resized (large ones down to ~1300×1300) and converted to tokens, **upper bound 1,024 tokens per image**, billed with text at the normal rates. `detail: "low"` downscales to 512×512 and is cheaper (exact token count not published).
- **Estimate for ~20 photos/student:** 20 × 1,024 = 20,480 image tokens ≈ **$0.0031** input + ~4,000 output tokens (transcription/extraction) ≈ **$0.0024** → **≈ $0.0055 per student (≈ €0.005)**; 30 students ≈ $0.16 (€0.15); 300 students ≈ $1.64 (€1.52).
- A separate vision model (Gemini Flash class) is therefore **not required** for photo ingest on DeepSeek; if used anyway, expect the same order of magnitude (cents per student) — Gemini pricing not verified this session (fetch failed).

---

## 4. REGISTRATION / LEGAL QUICK FACTS

- **LEO grants accept sole traders.** "LEOs can assist in the establishment and/or development of new and existing enterprises (limited company, individuals/sole trader, cooperatives and partnerships)..." — https://www.localenterprise.ie/discover-business-supports/funding-and-grants/financial-supports/eligibility-criteria/
- **Priming Grant** likewise "may be available for sole traders, partnerships or limited companies" — https://www.localenterprise.ie/discover-business-supports/funding-and-grants/financial-supports/priming-grant/
- **Revenue registration:** a sole trader registers for tax (Income Tax) with **Form TR1** via eRegistration on ROS; a new Irish-resident company registers (Corporation Tax) with **Form TR2**; eRegistration is the required route for agents/non-agents alike (paper TR2 only when unrepresented by an agent) — https://www.revenue.ie/en/starting-a-business/registering-for-tax/index.aspx (published 4 Jun 2026).
- Practical note (not cited to a single page, inference from the two above): **sole trader is the fastest route to LEO-grant eligibility**; company registration (CRO + TR2 + Corporation Tax) can follow before Priming/PEI-stage funding.

---

## Open items (say these are unverified in the meeting)
1. Exact SEC submission dates for LC 2027 Biology in Practice and old-syllabus Geography GI (and LC 2028 AGP) — set by SEC in the briefs; examinations.ie blocked. Get from a school contact / the printed briefs.
2. LEO Feasibility decision lead time — not published nationally; ask the local LEO office.
3. OpenRouter fee (~5%) and Gemini Flash-class vision pricing — not re-verified today.---
## SECTION 6 — MOCK-UP README
# H1Done Projects – Interactive Mock-up

A semi-interactive demo of **H1Done Projects**, an AI project-mentor for the Irish Leaving Certificate Additional Assessment Components (AAC – the 40% project component). It shows both sides of the product:

- **Student side** – a stage map for the real NCCA project stages, a mentor that asks the next question, reviews the student's own answers (never writes for them), and an export preview laid out under SEC report headings with an auto-generated AI-use reference.
- **Teacher side** – a class board with a hand-raised queue, status dots (on track / stalled / stuck / hand raised), per-student profiles with last submissions, an advice box that genuinely round-trips to the student, and a full **Authentication evidence** log.

Two full subject packs are included, built from the real NCCA guidelines:

| Pack | AAC | Stages | Source |
|---|---|---|---|
| Geography | Applied Geography Project | 7 | NCCA *Guidelines to support the Applied Geography Project*, Dec 2025 (incl. Appendix 1 prompt questions) |
| Biology | Biology in Practice Investigation | 6 | NCCA *Guidelines to support the Biology in Practice Investigation*, Nov 2024 |

Vanilla HTML/CSS/JS. No build step, no frameworks, no npm. Hash-routed single-page app with state in `localStorage`. UK English throughout.

## Run it

```bash
python3 -m http.server 8410
```

Then open <http://localhost:8410>. Open a **second tab** (one on the student persona, one on the teacher) to watch the round-trip: raise a hand as the student, send advice as the teacher, and see the banner + toast appear on the student's home instantly (tabs sync via the browser `storage` event).

## Routes

| Route | View |
|---|---|
| `#/` | Role chooser (Ava Byrne 5th Year Geography, Jake O'Donnell 5th Year Biology, Ms O'Halloran teacher) |
| `#/student/home` | Project header, progress bar, vertical stage map, sticky raise-hand button |
| `#/student/stage/:n` | Next question (brief-specific), answer box, mentor review panel, Read the brief button. Locked stages show the full page with the real question and a "Finish Stage N to unlock your answer" panel |
| `#/brief/:subject` | Brief reader: embedded PDF (`assets/*.pdf`) with "Open PDF in new tab" fallback, plus a styled HTML recreation of the brief (labelled). Biology = recreation of the live LC 2027 brief (membranes, osmosis, food preservation); Geography = demo brief until the real SEC brief issues in spring 2027 |
| `#/student/answers` | Export preview under SEC report headings + AI use reference + Copy page |
| `#/teacher/board` | Pinned hand-raised queue, filter chips, 20-student roster (12 Geography, 8 Biology) across all stages, including one stalled, one stuck, one hand raised and two fully complete students |
| `#/teacher/student/:id` | Profile: progress, clickable last 3 submissions (open full-view at `#/sub/:n`), full answers (every stage, every question, full text, verdicts), advice box with Suggest feedback, Authentication evidence log, View as student |
| `#/teacher/student/:id/as-student` | Read-only view of that student's stage map exactly as they see it |
| `#/teacher/student/:id/as-student/stage/:n` | Read-only stage view: their question, full answer and the review they received \u2013 no action buttons |
| `#/teacher/student/:id/as-student/answers` | Read-only export preview for the student \u2013 full report assembly + AI-use reference |
| `#/teacher/student/:id/sub/:n` | Full record of one exact submission: question, complete answer, verdict, timestamp |
| `#/settings` | OpenRouter key (optional live AI) and demo-data reset |

The topbar carries an AI status chip at all times: **Demo AI** (grey) or **Live AI** (green).

## Getting a live AI key in (without touching Settings)

Append `?key=YOUR_OPENROUTER_KEY` to any URL on first load: the key is saved to localStorage, stripped from the address bar immediately (`history.replaceState`) and a "Live AI connected" toast confirms. Keys are never stored in any file.

## Brand tokens

| Token | Value |
|---|---|
| Primary crimson | `#A51C30` |
| Accent | `#C4354A` |
| Dark crimson | `#8B1728` |
| Background | `#F5F3F0` / `#E8E4E0` |
| Card | `#FFFFFF` |
| Text / muted | `#1A1A1A` / `#7A7A7A` |
| Status dots | on track `#2E7D4F`, stalled `#C77D1F`, stuck `#B3372E`, hand raised `#1F7A8C` |
| Headings | Playfair Display |
| UI | Inter |

Mobile-first: the demo is designed to be shown on a phone.

## Subject pack schema

Everything per-subject lives in `data/*-pack.js` (no code forks). Both packs share the same shape:

```js
window.H1_PACKS.geography = {
  subject: "Leaving Certificate Geography",
  aacName: "Applied Geography Project",
  weighting: "40% of the final grade",
  stages: [
    {
      name: "Considering the brief",          // real NCCA stage name
      blurb: "one-liner for the stage map",
      time: "Up to 1 hour",                    // official indicative time
      promptQuestions: [],                     // real teacher prompts (Geography: Appendix 1; Biology: stage guidance text)
      definitionOfDone: [],                    // checklist shown per stage
      questions: [],                           // sequential demo grill questions
      demoReview: { strengths: [], prompts: [] }  // canned mentor feedback
    }
  ],
  reportHeadings: [],   // export-preview section titles (see note below)
  linksPolicy: "..."    // AI/referencing policy text from the guidelines appendix
};
```

Notes on fidelity: the stage names, indicative times and Geography prompt questions are taken from the NCCA guideline documents. The SEC (not the NCCA) prescribes the final report structure, word count and section headings each year, so `reportHeadings` is a demo mapping of the inquiry stages, and the export view says so. Stage 7 of the Geography pack takes its prompts from Appendix 2 (referencing) because Appendix 1 ends at stage 6; Biology stage prompts are drawn from the stage guidance text of the Nov 2024 guidelines.

## How the demo AI works

- **Default (no key):** reviews are canned, scripted per stage in `demoReview`. Mentor voice: 2 "What's working" bullets, 1–2 "Before you move on" prompts, always tied to the stage's definition of done, never writing text for the student. After three unaccepted submissions on a stage the student is flagged **stuck** and the mentor nudges them to raise a hand.
- **Optional live AI:** in Settings, paste an OpenRouter API key (stored only in `localStorage`, never committed or sent anywhere except `openrouter.ai`), or load the app once with `?key=...`. All AI calls \u2013 answer reviews with next questions, and teacher feedback suggestions \u2013 go through the same OpenRouter path with model `deepseek/deepseek-v4.1-flash`. The system prompts encode the product's rules: mentor not ghostwriter, never write report text, ask the next specific question building on the student's previous answers, JSON responses. On any failure the app silently falls back to the canned script.

## State and the two-tab round-trip

All state is `localStorage`, keys prefixed `h1_`:

- `h1_persona`, `h1_student_geography`, `h1_student_biology` – student progress, answers, attempts, hand state, teacher messages and the activity log.
- `h1_roster` – the teacher's 8-student demo roster; the two "live" entries (Ava, Jake) are re-synced from the student state every time the teacher board renders, so raising a hand as the student changes the teacher board instantly.
- `h1_openrouter_key` – optional API key.

Sending advice from the teacher profile writes a message into the live student's state; the student's home shows it as a banner and fires a toast (live across tabs via the `storage` event). Sending advice also clears the raised hand. **Reset demo data** in Settings restores the seeded state for repeatable demos.

## Cost per student (estimate)

DeepSeek V4.1 Flash on OpenRouter is priced at about **$0.15 per million input tokens** and **$0.60 per million output tokens**. A full project involves roughly 150 review-and-next-question calls; at roughly 1,000 input and 200 output tokens per call that is about $0.04 of AI cost per project. Even at ten times that usage it stays well under €1 per student. Figures are estimates, not a quote.
---
## SECTION 7 — SOURCE: index.html
```html
<!doctype html>
<html lang="en-IE">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>H1Done Projects – Interactive mock-up</title>
  <meta name="description" content="Semi-interactive mock-up of H1Done Projects, an AI project mentor for Irish Leaving Cert Additional Assessment Components.">
  <meta name="theme-color" content="#A51C30">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app" class="app"></div>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
  <script src="data/geography-pack.js"></script>
  <script src="data/biology-pack.js"></script>
  <script src="data/seed-answers.js"></script>
  <script src="app.js"></script>
</body>
</html>
```
---
## SECTION 8 — SOURCE: styles.css
```css
:root {
  --crimson: #A51C30;
  --crimson-dark: #8B1728;
  --accent: #C4354A;
  --bg: #F5F3F0;
  --bg-alt: #E8E4E0;
  --card: #FFFFFF;
  --ink: #1A1A1A;
  --muted: #7A7A7A;
  --ok: #2E7D4F;
  --stalled: #C77D1F;
  --stuck: #B3372E;
  --raised: #1F7A8C;
  --radius: 14px;
  --shadow: 0 1px 2px rgba(26, 26, 26, 0.05), 0 8px 24px rgba(26, 26, 26, 0.07);
}

* {
  box-sizing: border-box;
}

html {
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font: 16px/1.6 "Inter", system-ui, -apple-system, sans-serif;
}

h1, h2, h3 {
  font-family: "Playfair Display", Georgia, serif;
  line-height: 1.18;
  margin: 0 0 0.35rem;
  letter-spacing: -0.01em;
}

h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.1rem; }

p { margin: 0.35rem 0; }

a { color: var(--crimson); text-decoration: none; }
a:hover { text-decoration: underline; }

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(245, 243, 240, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--bg-alt);
}

.topbar-inner {
  max-width: 980px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.brand {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--ink);
  white-space: nowrap;
}

.brand span { color: var(--crimson); font-style: italic; }

.topbar nav {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.topbar nav a {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--muted);
  padding: 6px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.topbar nav a.on { color: var(--crimson); background: #fff; }
.topbar nav a:hover { color: var(--crimson); text-decoration: none; }

.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 18px 16px 110px;
}

.container.wide { max-width: 980px; }

.kicker {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
  margin: 0 0 4px;
}

.kicker.crimson { color: var(--crimson); }

.card {
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 18px;
  margin: 0 0 14px;
}

.card.tint {
  background: #FDF7F5;
  border: 1px solid #EED9D4;
}

.hero {
  padding: 30px 18px 8px;
  max-width: 720px;
  margin: 0 auto;
}

.hero h1 { font-size: 2.3rem; margin-bottom: 8px; }
.hero .lede { color: var(--muted); font-size: 1rem; }

.role-grid { margin-top: 22px; }

.role-card { border-left: 4px solid var(--crimson); }

.role-card.teacher { border-left-color: var(--raised); }

.role-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
}

.role-btn {
  display: block;
  width: 100%;
  text-align: left;
  background: var(--bg);
  border: 1px solid var(--bg-alt);
  border-radius: 10px;
  padding: 14px 16px;
  font: inherit;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.role-btn:hover { border-color: var(--crimson); background: #fff; }

.role-btn .who { font-weight: 600; display: block; }
.role-btn .what { color: var(--muted); font-size: 0.85rem; display: block; }

.btn {
  display: inline-block;
  border: none;
  border-radius: 999px;
  padding: 12px 20px;
  font: 600 0.95rem "Inter", sans-serif;
  cursor: pointer;
  background: var(--bg-alt);
  color: var(--ink);
  transition: background 0.15s, transform 0.05s;
}

.btn:active { transform: scale(0.98); }

.btn.primary { background: var(--crimson); color: #fff; }
.btn.primary:hover { background: var(--crimson-dark); }
.btn.ghost {
  background: transparent;
  border: 1.5px solid var(--crimson);
  color: var(--crimson);
}
.btn.small { padding: 8px 14px; font-size: 0.82rem; }

.backlink {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--muted);
  margin-bottom: 10px;
}

.backlink:hover { color: var(--crimson); }

.progress {
  height: 9px;
  background: var(--bg-alt);
  border-radius: 999px;
  overflow: hidden;
  margin: 12px 0 6px;
}

.progress span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--crimson), var(--accent));
  border-radius: 999px;
  transition: width 0.4s ease;
}

.progress-note { font-size: 0.85rem; color: var(--muted); }

.stage-map {
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
  position: relative;
}

.stage-map::before {
  content: "";
  position: absolute;
  left: 11px;
  top: 16px;
  bottom: 16px;
  width: 2px;
  background: var(--bg-alt);
}

.stage-map li {
  position: relative;
  margin: 0 0 12px;
}

.marker {
  position: absolute;
  left: 0;
  top: 18px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid var(--bg-alt);
  z-index: 1;
}

.marker.done { background: var(--crimson); border-color: var(--crimson); }
.marker.done::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 6px;
  width: 9px;
  height: 5px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg);
}

.marker.current { border-color: var(--crimson); }
.marker.current::before {
  content: "";
  position: absolute;
  left: 6px;
  top: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--crimson);
  animation: pulse 1.8s ease-out infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(165, 28, 48, 0.45); }
  70% { box-shadow: 0 0 0 9px rgba(165, 28, 48, 0); }
  100% { box-shadow: 0 0 0 0 rgba(165, 28, 48, 0); }
}

.stagecard {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 16px;
  margin-left: 36px;
  color: var(--ink);
}

.stagecard:hover { text-decoration: none; outline: 2px solid var(--crimson); outline-offset: -2px; }

.stagecard.locked { opacity: 0.62; }

.stage-name { display: block; font-weight: 600; font-size: 1rem; margin-top: 2px; }
.stage-blurb { display: block; color: var(--muted); font-size: 0.85rem; line-height: 1.45; }
.stage-top { display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.09em; color: var(--muted); }

.tag {
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  border-radius: 999px;
  padding: 4px 10px;
  white-space: nowrap;
  align-self: center;
}

.tag.done { background: #E4F0E8; color: var(--ok); }
.tag.current { background: #F7E3E6; color: var(--crimson); }
.tag.locked { background: var(--bg-alt); color: var(--muted); }

.q-text {
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.35rem;
  line-height: 1.35;
  margin: 6px 0 14px;
}

.q-label { color: var(--crimson); margin-bottom: 2px; }

label.field-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
  margin: 12px 0 6px;
}

textarea, input[type="password"], input[type="text"] {
  width: 100%;
  border: 1.5px solid var(--bg-alt);
  border-radius: 10px;
  background: #FCFBFA;
  padding: 12px;
  font: 400 0.95rem/1.55 "Inter", sans-serif;
  color: var(--ink);
  resize: vertical;
}

textarea:focus, input:focus {
  outline: none;
  border-color: var(--crimson);
  background: #fff;
}

details.promptbank {
  border-top: 1px dashed var(--bg-alt);
  border-bottom: 1px dashed var(--bg-alt);
  padding: 8px 0;
  margin: 0 0 14px;
}

details.promptbank summary {
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
}

details.promptbank ul { margin: 8px 0 2px; padding-left: 18px; }
details.promptbank li { font-size: 0.85rem; color: var(--muted); margin: 4px 0; }

.review { border-left: 4px solid var(--ok); }

.review.flagged { border-left-color: var(--stuck); }

.review h3 { margin-top: 12px; }

.review h3:first-of-type { margin-top: 4px; }

.review ul { margin: 6px 0; padding-left: 0; list-style: none; }

.review li {
  position: relative;
  padding-left: 20px;
  margin: 8px 0;
  font-size: 0.93rem;
}

.review ul.strengths li::before {
  content: "";
  position: absolute;
  left: 2px;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--ok);
}

.review ul.prompts li::before {
  content: "";
  position: absolute;
  left: 2px;
  top: 8px;
  width: 8px;
  height: 2px;
  background: var(--crimson);
}

.review-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.source-badge {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 999px;
  padding: 3px 9px;
  margin-left: 8px;
  vertical-align: middle;
}

.source-badge.canned { background: var(--bg-alt); color: var(--muted); }
.source-badge.live { background: #E1EEF1; color: var(--raised); }

.reading { text-align: center; color: var(--muted); font-style: italic; padding: 26px 18px; }

.reading::after {
  content: "";
  display: block;
  width: 42px;
  height: 3px;
  margin: 14px auto 0;
  border-radius: 999px;
  background: var(--crimson);
  animation: load 1.1s ease-in-out infinite alternate;
}

@keyframes reading-bar {
  from { width: 12px; }
  to { width: 42px; }
}

.reading::after { animation-name: reading-bar; }

.dod-list { margin: 8px 0 0; padding-left: 0; list-style: none; }

.dod-list li {
  position: relative;
  padding-left: 26px;
  margin: 9px 0;
  font-size: 0.9rem;
}

.dod-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1.5px solid var(--bg-alt);
  background: #fff;
}

.dod-list li.hit::before {
  background: var(--ok);
  border-color: var(--ok);
}

.dod-list li.hit::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 7px;
  width: 6px;
  height: 3px;
  border-left: 1.5px solid #fff;
  border-bottom: 1.5px solid #fff;
  transform: rotate(-45deg);
}

.banner {
  background: #F7E3E6;
  border: 1px solid #EBC4CB;
  border-radius: var(--radius);
  padding: 14px 16px;
  margin: 0 0 14px;
}

.banner h3 { color: var(--crimson-dark); margin-bottom: 4px; }

.banner .msg-text { font-size: 0.95rem; }

.banner .msg-time { font-size: 0.78rem; color: var(--muted); }

.done-banner {
  background: #E4F0E8;
  border: 1px solid #CBE2D3;
  border-radius: var(--radius);
  padding: 14px 16px;
  margin: 0 0 14px;
}

.done-banner h3 { color: var(--ok); margin-bottom: 4px; }

.export-headings h3 {
  border-bottom: 2px solid var(--crimson);
  padding-bottom: 6px;
  margin-top: 26px;
}

.answer-block { margin: 12px 0; }

.answer-block .q-ref {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--muted);
  margin: 0 0 3px;
}

.answer-block .a-text {
  margin: 0;
  background: #FCFBFA;
  border-left: 3px solid var(--bg-alt);
  padding: 10px 12px;
  font-size: 0.93rem;
  white-space: pre-wrap;
}

.empty-note { color: var(--muted); font-style: italic; font-size: 0.88rem; }

.ai-ref-block {
  background: #FDF7F5;
  border: 1px solid #EED9D5;
  border-radius: var(--radius);
  padding: 16px 18px;
  margin-top: 26px;
}

.ai-ref-block dl { margin: 8px 0 0; }

.ai-ref-block dt { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--crimson); margin-top: 10px; }
.ai-ref-block dd { margin: 2px 0 0; font-size: 0.92rem; }
.ai-ref-block .placeholder { color: var(--muted); font-style: italic; }

.policy-note {
  margin-top: 16px;
  font-size: 0.8rem;
  color: var(--muted);
  border-top: 1px dashed var(--bg-alt);
  padding-top: 10px;
}

.queue-head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0 10px;
}

.queue-head h3 { margin: 0; }

.pinned { border-left: 4px solid var(--raised); }

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 4px 0 16px;
  font-size: 0.8rem;
  color: var(--muted);
}

.legend span { display: inline-flex; align-items: center; gap: 6px; }

.dot {
  display: inline-block;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  flex-shrink: 0;
}

.dot.ok { background: var(--ok); }
.dot.stalled { background: var(--stalled); }
.dot.stuck { background: var(--stuck); }
.dot.raised { background: var(--raised); animation: blink 1.6s ease-in-out infinite; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}

.chips {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 0 10px;
  margin-bottom: 6px;
}

.chip {
  flex-shrink: 0;
  border: 1.5px solid var(--bg-alt);
  background: #fff;
  color: var(--muted);
  border-radius: 999px;
  padding: 7px 15px;
  font: 600 0.82rem "Inter", sans-serif;
  cursor: pointer;
  transition: all 0.15s;
}

.chip.on {
  background: var(--crimson);
  border-color: var(--crimson);
  color: #fff;
}

.tgrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.tcard {
  display: block;
  color: var(--ink);
  padding: 15px 16px;
}

.tcard:hover { text-decoration: none; outline: 2px solid var(--crimson); outline-offset: -2px; }

.tcard-top {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.status-label { font-size: 0.76rem; font-weight: 600; color: var(--muted); }

.subject-chip {
  margin-left: auto;
  font-size: 0.66rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--muted);
  background: var(--bg);
  border-radius: 999px;
  padding: 3px 9px;
}

.tcard h3 { margin: 0 0 2px; font-size: 1.08rem; }

.tstage { font-size: 0.86rem; margin: 0; }

.tmeta { font-size: 0.78rem; color: var(--muted); margin: 2px 0 0; }

.traised { font-size: 0.8rem; font-weight: 600; color: var(--raised); margin: 6px 0 0; }

.profile-head { display: flex; align-items: center; gap: 12px; }

.profile-dot { width: 14px; height: 14px; }

.sub-list { list-style: none; margin: 0; padding: 0; }

.sub-item { border-top: 1px solid var(--bg-alt); padding: 12px 0; }

.sub-item:first-child { border-top: none; padding-top: 2px; }

.sub-item .q-ref { font-size: 0.8rem; color: var(--muted); margin: 0 0 4px; }

.sub-item .excerpt { margin: 0 0 6px; font-size: 0.92rem; }

.verdict {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  border-radius: 999px;
  padding: 3px 10px;
}

.verdict.proceed { background: #E4F0E8; color: var(--ok); }
.verdict.revise { background: #F7EAD8; color: var(--stalled); }

.sub-time { font-size: 0.75rem; color: var(--muted); margin-left: 8px; }

.advice-box textarea { min-height: 90px; }

.advice-note { font-size: 0.8rem; color: var(--muted); margin: 8px 0 12px; }

.sent-flash {
  background: #E4F0E8;
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 0.88rem;
  color: var(--ok);
  font-weight: 600;
  margin-top: 10px;
}

.auth-log { list-style: none; margin: 10px 0 0; padding: 0; }

.auth-log li {
  position: relative;
  padding: 0 0 16px 24px;
  border-left: 2px solid var(--bg-alt);
  margin-left: 6px;
}

.auth-log li:last-child { border-left-color: transparent; padding-bottom: 2px; }

.auth-log li::before {
  content: "";
  position: absolute;
  left: -6px;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--crimson);
  border: 2px solid var(--bg);
}

.auth-log .when { display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); }
.auth-log .what { display: block; font-weight: 600; font-size: 0.9rem; }
.auth-log .detail { display: block; font-size: 0.85rem; color: var(--muted); }

.handfab {
  position: fixed;
  right: 16px;
  bottom: 18px;
  z-index: 30;
  border: none;
  border-radius: 999px;
  background: var(--crimson);
  color: #fff;
  padding: 13px 20px;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 10px 28px rgba(139, 23, 40, 0.4);
  max-width: 78vw;
  transition: background 0.2s;
}

.handfab:hover { background: var(--crimson-dark); }

.handfab .handfab-main { display: block; font: 700 0.92rem "Inter", sans-serif; }
.handfab .handfab-sub { display: block; font: 400 0.72rem "Inter", sans-serif; opacity: 0.85; }

.handfab.raised { background: var(--crimson-dark); animation: raised-glow 2.2s ease-in-out infinite; }

@keyframes raised-glow {
  0%, 100% { box-shadow: 0 10px 28px rgba(139, 23, 40, 0.4); }
  50% { box-shadow: 0 10px 34px rgba(139, 23, 40, 0.75); }
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 92px;
  transform: translate(-50%, 20px);
  background: var(--ink);
  color: #fff;
  font-size: 0.88rem;
  font-weight: 500;
  padding: 11px 18px;
  border-radius: 999px;
  box-shadow: 0 8px 24px rgba(26, 26, 26, 0.35);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s, transform 0.25s;
  z-index: 40;
  max-width: 84vw;
  text-align: center;
}

.toast.show { opacity: 1; transform: translate(-50%, 0); }

.footnote {
  max-width: 720px;
  margin: 26px auto 0;
  padding: 0 16px 90px;
  text-align: center;
  color: var(--muted);
  font-size: 0.78rem;
}

.settings-row { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }

.status-line { font-size: 0.88rem; color: var(--muted); margin-top: 10px; }

.status-line strong.ok { color: var(--ok); }
.status-line strong.warn { color: var(--crimson); }

.ro-badge {
  display: inline-block;
  font: 700 0.68rem "Inter", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fff;
  background: var(--raised);
  border-radius: 999px;
  padding: 5px 11px;
  white-space: nowrap;
}

.pov-card { border-left: 4px solid var(--raised); }

.full-answers h3 { margin-bottom: 2px; }

.fa-scroll {
  max-height: 480px;
  overflow-y: auto;
  padding: 2px 6px 2px 2px;
  margin-top: 6px;
  -webkit-overflow-scrolling: touch;
}

.stage-overline {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 18px 0 6px;
  font: 700 0.72rem "Inter", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.11em;
  color: var(--crimson);
  white-space: nowrap;
}

.stage-overline::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--bg-alt);
}

.stage-overline:first-child { margin-top: 4px; }

.fa-item {
  background: var(--card);
  border: 1px solid var(--bg-alt);
  border-radius: 12px;
  box-shadow: var(--shadow);
  padding: 12px 14px;
  margin: 10px 0;
}

.fa-item .q-ref {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--muted);
  margin: 0 0 4px;
}

.fa-item .a-text {
  margin: 0;
  font-size: 0.93rem;
  white-space: pre-wrap;
}

.fa-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.ai-chip {
  display: inline-block;
  font: 700 0.66rem "Inter", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 999px;
  padding: 4px 10px;
  background: var(--bg-alt);
  color: var(--muted);
  white-space: nowrap;
}

.ai-chip.live {
  background: var(--ok);
  color: #fff;
}

.ai-chip:hover { text-decoration: none; filter: brightness(1.08); }

.sub-item {
  display: block;
  color: inherit;
  border-radius: 10px;
  transition: background 0.15s;
}

a.sub-item:hover {
  background: #FDF7F5;
  text-decoration: none;
  outline: 1.5px solid #EBC4CB;
}

.locked-panel {
  border: 1.5px dashed var(--bg-alt);
  background: #FCFBFA;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  margin-top: 16px;
}

.locked-panel .locked-title {
  font-weight: 700;
  font-size: 1rem;
  color: var(--crimson);
  margin: 0 0 6px;
}

.locked-panel p:last-child {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
}

.brief-label h3 { margin-bottom: 2px; }

.pdf-frame {
  height: 72vh;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  border: 1px solid var(--bg-alt);
}

.pdf-frame object { width: 100%; height: 100%; display: block; }

.pdf-fallback {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--muted);
  font-size: 0.9rem;
}

.pdf-link-row { text-align: center; margin: 10px 0 18px; }

.brief-doc {
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 30px 26px;
  max-width: 780px;
  margin: 0 auto;
}

.brief-doc header { border-bottom: 3px solid var(--crimson); padding-bottom: 12px; margin-bottom: 8px; }

.brief-doc h2 { font-size: 1.6rem; color: var(--crimson); margin-bottom: 4px; }

.brief-sub { font-style: italic; color: var(--muted); font-size: 0.88rem; margin: 0; }

.brief-h {
  font-size: 1.05rem;
  color: var(--crimson-dark);
  border-bottom: 1px solid var(--bg-alt);
  padding-bottom: 4px;
  margin: 22px 0 8px;
}

.brief-doc p { font-size: 0.93rem; line-height: 1.65; }

.brief-doc ul { padding-left: 20px; margin: 8px 0; }

.brief-doc li { font-size: 0.9rem; margin: 6px 0; line-height: 1.55; }

.brief-subh { font-family: "Playfair Display", Georgia, serif; font-size: 1rem; margin: 16px 0 4px; color: var(--ink); }

.brief-wrap { padding-bottom: 60px; }

@media (min-width: 640px) {
  .tgrid { grid-template-columns: 1fr 1fr; }
  .role-buttons { flex-direction: row; }
  .role-btn { flex: 1; }
  h1 { font-size: 2.4rem; }
  .hero { padding-top: 44px; }
}

@media (min-width: 960px) {
  .tgrid { grid-template-columns: repeat(3, 1fr); }
  .container { padding-top: 28px; }
}
```
---
## SECTION 9 — SOURCE: app.js
```javascript
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
```
---
## SECTION 10 — SOURCE: data/geography-pack.js
```javascript
window.H1_PACKS = window.H1_PACKS || {};

window.H1_PACKS.geography = {
  subject: "Leaving Certificate Geography",
  aacName: "Applied Geography Project",
  weighting: "40% of the final grade",
  brief: {
    label: "Demo brief \u2014 the real SEC brief issues in Term 2 of 5th year (spring 2027)",
    pdf: "assets/geography-brief.pdf",
    title: "Leaving Certificate Geography \u2013 Applied Geography Project Brief",
    subtitle: "Demo brief built from the NCCA Guidelines to support the Applied Geography Project (December 2025)",
    sections: [
      {
        h: "1. The theme: water \u2013 shaping our local area",
        p: [
          "Water shapes every community in Ireland. It fills our taps, powers and employs us, carves our river valleys, moves our coastlines and, increasingly, tests us \u2013 flooding homes and towns in one season and stressing supplies in the next. Climate change is making storms wetter and summers drier, so the way water behaves where you live is changing too.",
          "For this project you will investigate one aspect of the theme where you actually live. Water is everywhere once you start looking: the river that floods the car park, the beach that retreats every winter, the limescale in the kettle, the canal behind the school, the burst pipe in the cold snap, the group water scheme in the countryside, the lifeguards on the strand in July."
        ],
        list: [
          "The theme is the focus of your project: your inquiry question must be directly related to it.",
          "You are strongly encouraged to choose a local focus or setting \u2013 it makes the inquiry manageable and the evidence real."
        ]
      },
      {
        h: "2. Getting started",
        p: [
          "Your teacher will introduce the brief and may facilitate a class discussion on the theme. Use the discussion to consider initial ideas, their feasibility and any limitations. From the very beginning, keep an inquiry log: a personal record of your approach, decisions (and your reasons), useful sources and evidence as you gather it. The inquiry log is not submitted to the SEC, but it is the engine of your report."
        ]
      },
      {
        h: "3. What you must do: the seven stages of the inquiry",
        p: [
          "The project runs through seven stages of geographical inquiry, in order. Indicative times are shown; the whole project is up to 20 hours."
        ],
        list: [
          "Stage 1 \u2013 Considering the brief (up to 1 hour): understand the theme, list your geographical questions, note possible local focuses.",
          "Stage 2 \u2013 Formulating the inquiry question (3-4 hours): background reading from reliable sources, then an inquiry question that is relevant to the theme, clear about what you are finding out and where, broken into sub-questions.",
          "Stage 3 \u2013 Considering evidence collection (2-3 hours): decide what primary and secondary evidence you need, justify your methods, plan to minimise bias, and consult your teacher on feasibility, safety, ethics and data protection.",
          "Stage 4 \u2013 Collecting evidence (6-8 hours): gather your own evidence, recorded in your inquiry log with dates, locations and conditions. Evidence must not be shared with peers.",
          "Stage 5 \u2013 Analysing and communicating (2-3 hours): find the patterns and trends, present evidence in justified formats (charts, graphs, tables, maps), and interpret what it all means for your inquiry question.",
          "Stage 6 \u2013 Evaluating evidence and reflecting on findings (1-2 hours): judge the reliability and accuracy of your method, consider bias, and reflect on the broader significance of your findings.",
          "Stage 7 \u2013 Finalising the report (up to 1 hour): assemble your authentic account into the digital report the SEC will mark."
        ]
      },
      {
        h: "4. Requirements",
        p: [
          "All work must be your own. You may work with others only when carrying out specific evidence-collection activities, but the evidence you use and the report you write are individual. Most work is completed in school under your teacher's supervision; if any part happens outside school hours or grounds, you need the necessary permissions and must follow ethical and safety guidelines agreed with your school.",
          "You must consult with your teacher on the manageability and feasibility of your approach before you begin collecting evidence."
        ],
        list: [
          "Your inquiry question must be relevant to the theme, state what you are finding out, and name the setting.",
          "Evidence does not need to be collected at a single point in time; keep privacy and data protection (GDPR) in mind throughout.",
          "Projects do not always go as planned \u2013 documenting decisions and adaptations is valued, not penalised.",
          "Reference every source that is not your own, including any AI tools: the tool's name, the date, how it was used, and the shareable chat URL or the prompt used.",
          "The final report is submitted digitally in a format prescribed by the SEC \u2013 the instructions with this cycle's brief will set the word count, number of images, required structure and section headings."
        ]
      },
      {
        h: "5. Timeline",
        p: [
          "In the live examination cycle the real brief issues from the State Examinations Commission in Term 2 of Year 1 (spring of 5th year \u2013 spring 2027), and all work must be concluded by the date the SEC sets and communicates to schools. This demo brief stands in for that document so you can practise the process now."
        ]
      },
      {
        h: "6. Assessment",
        p: [
          "The Applied Geography Project is worth 40% of your Leaving Certificate Geography grade and is assessed solely on your individual report, at the level at which you sit the written examination. Examiners reward three things in the descriptors of quality: planning and conducting your inquiry, analysis and communication, and evaluation and reflection."
        ]
      }
    ]
  },
  stages: [
    {
      name: "Considering the brief",
      blurb: "Read the brief closely and let the water theme spark local possibilities.",
      time: "Up to 1 hour",
      promptQuestions: [
        "How can I better understand the geographical nature of the theme?",
        "What geographical questions do I have about the theme?",
        "How does the theme present itself in the geography of my local area?"
      ],
      definitionOfDone: [
        "I can describe the theme of the brief in my own words",
        "I have listed the geographical questions I have about the theme",
        "I have noted at least two possible local focuses in my inquiry log",
        "I have recorded my first decisions, and my reasons, in my inquiry log"
      ],
      questions: [
        "Read the theme on the brief \u2013 water: shaping our local area. Which part of it matters most where you live, and why?",
        "How does the theme present itself in the geography of your local area? Name one concrete place or setting.",
        "What one geographical question about water in your community would you most like your project to answer?"
      ],
      demoReview: {
        strengths: [
          "You have stayed with what the brief's water theme is actually asking instead of jumping ahead to a topic \u2013 that is exactly what stage 1 is for.",
          "Your local examples are places you can genuinely reach and observe, which will make collecting evidence in stage 4 realistic."
        ],
        prompts: [
          "Before you move on: the definition of done asks you to record your first decisions in your inquiry log. What will you note there tonight?",
          "Which of your local water stories could run into inquiry limitations, and how might you adapt?"
        ]
      }
    },
    {
      name: "Formulating the inquiry question",
      blurb: "Background reading, then an inquiry question anchored in the brief and a real setting.",
      time: "3-4 hours",
      promptQuestions: [
        "Is my inquiry question clear about what I am trying to find out?",
        "Is the location or setting for the inquiry clearly identified in my question?",
        "Given the time and resources available for the Applied Geography Project, is my inquiry question feasible and manageable?"
      ],
      definitionOfDone: [
        "I have done background reading from appropriate, reliable sources and recorded useful information and data in my inquiry log",
        "My inquiry question is directly related to the theme in the brief",
        "My question makes clear what I am trying to find out and where the inquiry is set",
        "I have drafted sub-questions to break the inquiry into manageable parts",
        "I am tracking my sources so I can cite them later"
      ],
      questions: [
        "Write your draft inquiry question exactly as it stands now, even if you are not happy with it yet.",
        "Check it against the guidelines: does your question say clearly what you are finding out and where? Rewrite it naming the setting.",
        "What two or three sub-questions would break your inquiry into manageable parts?"
      ],
      demoReview: {
        strengths: [
          "Your question is anchored in the brief's water theme and names a specific setting, which is exactly what the guidelines require of an inquiry question.",
          "You have kept it feasible \u2013 the evidence you need is the kind you can actually gather in the time available."
        ],
        prompts: [
          "Before you move on: record in your inquiry log why you chose this question, and what changed from your first draft.",
          "Do your sub-questions cover the who, what, where, why and how of the theme?"
        ]
      }
    },
    {
      name: "Considering evidence collection",
      blurb: "Decide what evidence you need, how you will gather it, and how you will keep it trustworthy.",
      time: "2-3 hours",
      promptQuestions: [
        "What type of evidence (data and/or information) do I need to respond to my inquiry question?",
        "How will I avoid bias and ensure reliability and accuracy in the evidence I collect?",
        "What, if any, are the data protection, ethical and safety considerations I need to think about?"
      ],
      definitionOfDone: [
        "I have listed the primary evidence I will collect myself and the secondary sources I will use",
        "I can justify my chosen collection method, whether it gathers qualitative, quantitative or mixed evidence",
        "I have planned how to minimise bias and keep the evidence reliable and accurate",
        "I have discussed manageability and feasibility with my teacher before gathering evidence",
        "Data protection, ethical and safety considerations are noted in my inquiry log"
      ],
      questions: [
        "What primary evidence will you collect yourself, and what secondary sources will support it?",
        "Which collection method will you use, and why is it the right one for your inquiry question?",
        "How exactly will you guard against bias and keep your evidence reliable and accurate?"
      ],
      demoReview: {
        strengths: [
          "You have separated primary from secondary evidence clearly \u2013 that distinction is at the heart of this stage.",
          "Your plan shows you have thought about bias before it happens, which the definition of done asks for explicitly."
        ],
        prompts: [
          "Before you move on: have you agreed the approach with your teacher? The guidelines expect that conversation before evidence collection begins.",
          "Where could your chosen method quietly introduce bias, and what is your counter-move?"
        ]
      }
    },
    {
      name: "Collecting evidence",
      blurb: "Fieldwork and desk work on your own evidence \u2013 recorded properly, in your log, as you go.",
      time: "6-8 hours",
      promptQuestions: [
        "Have I collected enough appropriate and accurate evidence to respond to my inquiry question?",
        "Do I need to gather more evidence or adapt my evidence collection approach to get the necessary evidence?",
        "Has the process of collecting evidence highlighted a need to revise my inquiry question?"
      ],
      definitionOfDone: [
        "I have collected my own evidence, and it has not been shared with peers",
        "My evidence is recorded in my inquiry log with dates, locations and conditions",
        "I have gathered enough appropriate and accurate evidence to respond to my inquiry question",
        "Permissions, privacy and safety requirements have been respected",
        "Any decision to revise my inquiry question or method has been logged with reasons"
      ],
      questions: [
        "Walk me through what you collected in your most recent evidence session: what did you gather, where and when?",
        "Do you have enough appropriate and accurate evidence to respond to your inquiry question, or is there a gap?",
        "Did collecting the evidence throw up anything that made you reconsider your inquiry question or your method?"
      ],
      demoReview: {
        strengths: [
          "You are recording dates, locations and conditions as you go \u2013 that habit is what makes evidence trustworthy at analysis stage.",
          "Your evidence maps directly onto the inquiry question rather than wandering off theme."
        ],
        prompts: [
          "Before you move on: write in your inquiry log one decision you made in the field and the reason for it.",
          "If a second collection session would strengthen reliability, say when it will happen."
        ]
      }
    },
    {
      name: "Analysing and communicating",
      blurb: "Break down your evidence, find the patterns, and choose formats that do the work.",
      time: "2-3 hours",
      promptQuestions: [
        "Have I used different formats to present my evidence?",
        "What, if anything, surprises me about my findings?",
        "Do my findings help me respond to my inquiry question?"
      ],
      definitionOfDone: [
        "I have presented evidence in appropriate formats (charts, graphs, tables, maps or diagrams) and can justify each choice",
        "I have identified relationships, patterns or trends in my evidence",
        "I have interpreted what the analysis means in response to my inquiry question",
        "My findings are linked back to the theme in the brief"
      ],
      questions: [
        "What pattern or trend do you see in your evidence? Describe it in a sentence or two.",
        "Which format will you use to present each piece of evidence, and why is that format the right one?",
        "What, if anything, surprises you about your findings?"
      ],
      demoReview: {
        strengths: [
          "You have chosen formats that fit the evidence rather than the other way round, and you can say why.",
          "Your findings speak directly to the inquiry question \u2013 the analysis is doing real work."
        ],
        prompts: [
          "Before you move on: check your inquiry log captures the decisions behind your format choices.",
          "Does anything in your findings cut against what you expected? Say so plainly \u2013 that is good geography."
        ]
      }
    },
    {
      name: "Evaluating evidence and reflecting on findings",
      blurb: "Judge your own method honestly and ask what your findings mean beyond your setting.",
      time: "1-2 hours",
      promptQuestions: [
        "Did the methods I used to collect evidence ensure reliability and accuracy? What might have further improved reliability and accuracy?",
        "Did the evidence I collected lead to the findings I expected or not? Why/why not?",
        "How significant are my findings? Can my findings be connected or applied to other geographical inquiries?"
      ],
      definitionOfDone: [
        "I have evaluated the accuracy and reliability of how my evidence was collected",
        "I have considered whether bias was evident in my evidence or in my collection methods",
        "I have reflected on the broader significance of my findings",
        "I have considered how my findings connect to other geographical focuses or settings"
      ],
      questions: [
        "How reliable and accurate was your evidence collection? Name one strength and one weakness in your method.",
        "Did your findings match what you expected? Explain why or why not.",
        "Where else could your findings apply \u2013 a different focus, setting or inquiry?"
      ],
      demoReview: {
        strengths: [
          "You are judging your own method honestly, including where it could have been stronger \u2013 examiners reward exactly this.",
          "You have pushed your findings beyond your own setting and connected them back to the theme."
        ],
        prompts: [
          "Before you move on: log in your inquiry log what you would do differently if you repeated the inquiry.",
          "Can your findings transfer to a different setting? Say which one and why."
        ]
      }
    },
    {
      name: "Finalising the Applied Geography Project Report",
      blurb: "Shape everything from your inquiry log into the digital report the SEC will mark.",
      time: "Up to 1 hour",
      promptQuestions: [
        "Have I complied with all the requirements of the brief, such as word count, number of images and required structure?",
        "Have I acknowledged any AI tool I used: the name of the tool, the date, how it was used, and the shareable URL or the prompt used?",
        "Is my report an authentic account of my own engagement, written in my own words?"
      ],
      definitionOfDone: [
        "My report complies with every requirement in the brief: format, word count, images and section headings",
        "It gives an authentic account of my engagement across all seven stages",
        "Every source that is not my own is referenced, including any AI tools, with shareable URL or prompt",
        "The report is finalised in the digital format prescribed by the SEC and submitted by the deadline"
      ],
      questions: [
        "Read your draft against the requirements of the brief: word count, images, structure. What still needs fixing?",
        "Run a reference check: for every source that is not your own, do you have enough detail for a reader to authenticate it?",
        "In one sentence of your own words: what did your inquiry show, and how did you show it?"
      ],
      demoReview: {
        strengths: [
          "Your draft follows the structure the brief demands, and your stage work will map cleanly onto the SEC format.",
          "Your references are specific enough to authenticate \u2013 dates, page numbers and links are all there."
        ],
        prompts: [
          "Before you submit: confirm the report is an authentic account of your own work, in your own words, with AI use acknowledged.",
          "Does your reference section include the AI use reference? The guidelines expect the tool, the date, how it was used and the shareable URL or prompt."
        ]
      }
    }
  ],
  reportHeadings: [
    "Introducing the brief and my focus",
    "My inquiry question",
    "My plan for collecting evidence",
    "Collecting my evidence",
    "Analysis and communication of findings",
    "Evaluation and reflection",
    "Final report checks and references"
  ],
  linksPolicy: "Referencing note (NCCA Applied Geography Project guidelines, Appendix 2): acknowledge any AI tool you use \u2013 the name of the tool, the date the content was generated, and a brief explanation of how it was used. Where the tool generates a shareable URL of the chat, include it in your list of research sources; where it does not, include the name of the tool and the prompt used. Plagiarism, including the use of AI-generated material without acknowledgement, may incur penalties up to and including the withholding of results."
};
```
---
## SECTION 11 — SOURCE: data/biology-pack.js
```javascript
window.H1_PACKS = window.H1_PACKS || {};

window.H1_PACKS.biology = {
  subject: "Leaving Certificate Biology",
  aacName: "Biology in Practice Investigation",
  weighting: "40% of the final grade",
  brief: {
    label: "Recreation of the live LC 2027 brief for demo \u2014 swap in the official PDF when available",
    pdf: "assets/biology-brief.pdf",
    title: "Leaving Certificate Biology \u2013 Investigation Brief 2027",
    subtitle: "Biology in Practice Investigation \u00b7 issued by the State Examinations Commission, January 2026 (recreated for this demo)",
    sections: [
      {
        h: "1. To the candidate",
        p: [
          "The State Examinations Commission (SEC) publishes a brief each year for the Biology in Practice Investigation, the 40% Additional Assessment Component of Leaving Certificate Biology. This brief is for candidates examining in 2027 and was issued in January 2026, in Term 2 of Year 1.",
          "The brief gives the context and stimulus for your investigation. You will complete scientific research on an issue related to the brief, design and conduct an experiment to generate your own primary data, and develop an evidence-based argument in response to the brief. The investigation takes approximately 20 hours across the course, and it is designed to be part of your ordinary biology classwork, not separate from it."
        ]
      },
      {
        h: "2. The stimulus: three investigation topics",
        p: [
          "Choose ONE of the three topics below as the starting point for your research and experiment. Each is open-ended: you decide the particular issue, the research question and the experiment."
        ],
        sub: [
          {
            h: "Topic 1 \u2013 Membranes",
            p: [
              "Every cell is enclosed by a membrane \u2013 a partially permeable barrier that controls what enters and leaves. Membranes are made of molecules that are sensitive to their surroundings: heat, alcohol and acids can disrupt them, changing how permeable they become.",
              "Everyday starting points: why beetroot stains the cooking water when it is boiled; why alcohol stings on a cut; how the inside of an egg models a cell; what happens to thawed frozen strawberries; why some plants wilt in heat but recover when watered."
            ]
          },
          {
            h: "Topic 2 \u2013 Osmosis",
            p: [
              "Water moves across partially permeable membranes from where water is more concentrated to where it is less concentrated. This movement \u2013 osmosis \u2013 matters to every living thing, all the time.",
              "Everyday starting points: why salting or brining draws water out of food; why salad wilts and crisp lettuce revives in water; what sports drinks are designed to do; why concentrating sugar preserves jam; how plant cells become firm or limp."
            ]
          },
          {
            h: "Topic 3 \u2013 Food preservation",
            p: [
              "Food spoils when microorganisms grow on it and enzymes inside it keep working. Preservation methods \u2013 cold, heat, salt, sugar, acid, drying, vacuum and sealing \u2013 all work by slowing or stopping that growth and activity.",
              "Everyday starting points: why milk lasts longer in the fridge than on the counter; what brine does to bacon or cabbage; why jam keeps once opened only if refrigerated; how yeast behaves in bread-making and why salt is measured carefully; why frozen peas taste fresh months later."
            ]
          }
        ]
      },
      {
        h: "3. The task",
        p: [
          "Having chosen a topic, complete two connected pieces of work:"
        ],
        list: [
          "Scientific research on an issue related to your chosen topic: draw on secondary sources, develop a research question, review and summarise evidence from different viewpoints, and keep a record of findings, download dates and references in your investigative log.",
          "An experiment related to your chosen topic: pose a testable hypothesis, plan and design the experiment, conduct it under your teacher's supervision in the laboratory or a field setting, gather primary data, analyse it, and form justifiable conclusions."
        ]
      },
      {
        h: "4. Requirements",
        p: [
          "Keep an investigative log throughout \u2013 a personal record of your approach, decisions, data and reflections. The log is not submitted to the SEC, but it is where your report comes from. The investigation is your own individual work; you may get help from peers only to handle equipment safely, and the data you use must be your own.",
          "Students should reflect on difficulties experienced during planning, record how they overcame them, and treat unanticipated outcomes as a valid and important part of the scientific process."
        ],
        list: [
          "Approximately 20 hours in total across the stages: initial response (1-2 hours), background research (2-3 hours), designing and planning (2-3 hours), conducting (depends on the brief), analysis and conclusions (1-2 hours), finalising the report (up to 4 hours).",
          "Reference every source that is not your own \u2013 including any AI tools: the tool's name, the date, how it was used, and the shareable chat URL or the prompt used.",
          "The report is submitted in Year 2 in a digital format prescribed by the SEC; the accompanying instructions set the word count, number of images, required structure and section headings."
        ]
      },
      {
        h: "5. Timeline",
        p: [
          "This brief issued in January 2026 (Term 2 of Year 1). Stages are completed when they best fit teaching and learning across 5th year \u2013 they do not need to run in one continuous block. All work must be concluded by the date set by the SEC, and the report is submitted for marking in Year 2."
        ]
      },
      {
        h: "6. Authenticity and the use of AI",
        p: [
          "All work submitted for assessment must be your own. Submitting work not entirely completed by you is a significant breach of regulations and may lead to penalties, up to and including the withholding of results. Material generated by AI software must be acknowledged in your references. Direct copying from any source, including AI-generated material, is not permitted."
        ]
      }
    ]
  },
  stages: [
    {
      name: "Initial response to the investigation brief",
      blurb: "Open the brief, pick your topic \u2013 membranes, osmosis or food preservation \u2013 and sketch first directions.",
      time: "1-2 hours",
      promptQuestions: [
        "What do I already know about the topic and/or issue in the Investigation Brief?",
        "What research and experimental activities in biology connect to the topic and/or issue in the Investigation Brief?",
        "What experiment am I interested in completing?"
      ],
      definitionOfDone: [
        "I can explain the context and biological phenomenon in the brief in my own words",
        "I have chosen one of the three topics \u2013 membranes, osmosis or food preservation \u2013 and listed the areas I could explore within it",
        "I have connected the brief to my own interests, experiences and prior learning",
        "I have started an investigative log to record my approach and gather resources"
      ],
      questions: [
        "Read the three investigations on the brief \u2013 membranes, osmosis or food preservation. Which one are you choosing, and why?",
        "In your own words, what is the biological phenomenon behind your chosen topic? What is actually going on?",
        "What experiment could you run within your topic \u2013 an extension of one you have already done in class, or an original approach?"
      ],
      demoReview: {
        strengths: [
          "You have chosen your topic from the brief and found a genuinely personal angle on it \u2013 that motivation will carry a twenty-hour investigation.",
          "You connected the topic to prior learning from the course, which anchors the work in the specification."
        ],
        prompts: [
          "Before you move on: open your investigative log and record your initial research and experimental areas, with the reasons for choosing them.",
          "Where could your first idea hit a practical limitation \u2013 equipment, time, safety? Name it now."
        ]
      }
    },
    {
      name: "Background research",
      blurb: "Research your topic from different viewpoints and land a research question of your own.",
      time: "2-3 hours",
      promptQuestions: [
        "What research question will I pursue, and how does it arise from the brief?",
        "Have I reviewed, summarised and evaluated evidence from different viewpoints?",
        "Am I recording findings, download dates and references in my investigative log?"
      ],
      definitionOfDone: [
        "I have a clear research question on a particular issue in response to the brief",
        "I have reviewed, summarised and evaluated evidence from different viewpoints",
        "My investigative log records extracts, secondary data, reflections, download dates and references",
        "I can say how the research will inform my experimental work"
      ],
      questions: [
        "State your research question for your chosen topic, and trace how it grew out of the brief and your background reading.",
        "Summarise one source that takes a different viewpoint from yours, or explains the theory behind your topic. What did it add?",
        "What have you recorded in your investigative log so far \u2013 findings, dates and references?"
      ],
      demoReview: {
        strengths: [
          "Your research question is specific and clearly linked to the topic you chose from the brief.",
          "You have weighed more than one viewpoint, which is what good research practice looks like."
        ],
        prompts: [
          "Before you move on: check your log has download dates and full references for every source you used.",
          "Where does your reading connect to the cross-cutting themes of the course?"
        ]
      }
    },
    {
      name: "Designing and planning the experiment",
      blurb: "Turn your research into a testable hypothesis and a method you can actually run.",
      time: "2-3 hours",
      promptQuestions: [
        "What testable hypothesis will my experiment investigate?",
        "How will I address reliability, validity, accuracy, precision, error, fairness, safety and integrity in my design?",
        "What materials and equipment will I need, and how will I make sure they are available when I need them?"
      ],
      definitionOfDone: [
        "I have posed a testable hypothesis and can state what I will measure",
        "My method is written step by step, with fair testing and controlled variables identified",
        "Materials and equipment are listed, with a plan to have them available",
        "Health and safety considerations are addressed",
        "Limitations, compromises and key decisions are recorded with justifications in my investigative log"
      ],
      questions: [
        "State your hypothesis and your variables: what will you change, what will you measure, and what will you keep the same?",
        "Walk me through your method step by step. Where is error most likely to creep in?",
        "What materials and equipment does your setup need, and what is your plan for having them ready?"
      ],
      demoReview: {
        strengths: [
          "Your hypothesis is testable and underpinned by biological theory, not just a hunch.",
          "You have identified your control variables and justified them \u2013 that is real experimental design."
        ],
        prompts: [
          "Before you move on: record in your log any compromises you had to make because of equipment or time limits, and why.",
          "How will you handle results you did not anticipate? Plan for them now, not after."
        ]
      }
    },
    {
      name: "Conducting the experiment",
      blurb: "Run your own experiment under supervision, and record everything \u2013 expected or not.",
      time: "Depends on the brief; often 1-2 hour lab sessions",
      promptQuestions: [
        "Have I recorded all relevant observations and data, qualitative and quantitative, in my investigative log?",
        "Have I recorded the arrangement of apparatus and any results, whether anticipated or not?",
        "Is my experiment running in line with the plan I shared with my teacher?"
      ],
      definitionOfDone: [
        "I carried out my own experiment under teacher supervision in the laboratory or field setting",
        "All observations and data, anticipated or not, are recorded in my investigative log",
        "The arrangement of apparatus and results are recorded, with photographs where appropriate",
        "Any support from peers with equipment is recorded, and the evidence remains my own"
      ],
      questions: [
        "Tell me what happened when you ran your experiment: what did you observe, and did anything behave unexpectedly?",
        "How are you capturing your data as it comes \u2013 tables, photographs, notes? What goes in the log tonight?",
        "Did anything about the apparatus or materials force you to adapt on the spot? Explain."
      ],
      demoReview: {
        strengths: [
          "You recorded the unexpected observations instead of discarding them \u2013 that is exactly how scientists work.",
          "Your data capture is systematic: qualitative and quantitative, with the apparatus arrangement logged."
        ],
        prompts: [
          "Before you move on: note in your log one difficulty you met during the experiment and how you dealt with it.",
          "If you ran the experiment again, what one change would improve the quality of your primary data?"
        ]
      }
    },
    {
      name: "Data analysis and conclusions",
      blurb: "Interrogate your data, explain the anomalies, and land a conclusion your data can defend.",
      time: "1-2 hours",
      promptQuestions: [
        "Have I evaluated my data in terms of accuracy, precision, repeatability and reproducibility?",
        "Do my data and conclusions support the hypothesis I posed?",
        "Can I identify and explain any anomalous results or observations?"
      ],
      definitionOfDone: [
        "My analysis includes calculations and/or graphs that identify patterns and relationships",
        "Anomalous results or observations are identified and explained, not ignored",
        "My conclusion is justified by the data and reflects on whether it supports my hypothesis",
        "My analysis has been shared with my teacher as part of the authentication process"
      ],
      questions: [
        "What pattern do your data show? Quote the numbers or observations that demonstrate it.",
        "Does your conclusion support your hypothesis? Say why, or why not, in your own words.",
        "Explain one anomalous result: what might have caused it, and how did you handle it?"
      ],
      demoReview: {
        strengths: [
          "Your conclusion is justified by the data rather than by what you hoped to find.",
          "You have accounted for your anomalous result with a reasoned explanation tied to equipment and design."
        ],
        prompts: [
          "Before you move on: check that any graph you present is justified by the data and clearly labelled.",
          "Reflect in your log: how confident are you in the repeatability of your result, and what would settle it?"
        ]
      }
    },
    {
      name: "Finalising the investigation report",
      blurb: "Draw on your investigative log to write one authentic, coherent account for the SEC.",
      time: "Up to 4 hours",
      promptQuestions: [
        "Have I given an authentic account of all aspects of the investigative process, including refinements and decisions?",
        "Are my conclusions and judgements linked to the hypotheses and research questions I posed?",
        "Have I referenced every source that is not my own, including any AI tools I used?"
      ],
      definitionOfDone: [
        "My report draws on my investigative log to give an authentic account of the whole process",
        "Data is presented clearly and linked to my research questions and hypotheses",
        "Limitations in research and experimental design, and reflections on refinements, are described",
        "References are complete, including any AI use, in the format the SEC brief requires"
      ],
      questions: [
        "Which part of your investigation was hardest to explain, and how will you account for it honestly in the report?",
        "Check your draft against the SEC instructions: word count, images, structure. What needs to change before submission?",
        "Where in your report do you show how reflections on the process shaped your decisions?"
      ],
      demoReview: {
        strengths: [
          "Your report reads as one coherent account: research, experiment, analysis and reflection all point the same way.",
          "You have shown your decisions and refinements, which strengthens the authenticity of the work."
        ],
        prompts: [
          "Before you submit: confirm every reference is in place, including the AI use reference with tool, date, how used and shareable URL or prompt.",
          "Your teacher cannot correct the report for redrafting \u2013 read it once more as an examiner would. What stands out?"
        ]
      }
    }
  ],
  reportHeadings: [
    "Introduction: the brief and my issue",
    "Background research",
    "Designing and planning the experiment",
    "Conducting the experiment",
    "Data analysis and conclusions",
    "Final report and references"
  ],
  linksPolicy: "Referencing note (NCCA Biology in Practice Investigation guidelines, Appendix 1): acknowledge any AI tool you use \u2013 the name of the tool, the date the content was generated, and a brief explanation of how it was used. Where the tool generates a shareable URL of the chat, include it in your list of research sources; where it does not, include the name of the tool and the prompt used. Plagiarism, including the use of AI-generated material without acknowledgement, may incur penalties up to and including the withholding of results."
};
```
---
## SECTION 12 — SOURCE: data/seed-answers.js (student-voice demo histories)
```javascript
window.H1_SEED_HISTORY = {
 "dillon": [
  {
   "s": 0,
   "q": 2,
   "a": "How far have the dunes at Portmarnock retreated since last September, and does that match up with when the storms actually hit? I keep hearing 'coastal erosion' on the news but I want to know if it's the winter storms doing the damage or just gradual everyday wave action. If I can line my measurements up with the Met Éireann storm record, that answers something real about my own beach, not just something abstract.",
   "v": "accepted",
   "d": 5.86
  },
  {
   "s": 0,
   "q": 1,
   "a": "The dunes at Portmarnock strand, especially the section behind the car park where the walkway is. Every winter the council moves the boardwalk back a bit further and you can see the sand scarp getting steeper. Last February there was a big chunk of dune just gone, marram grass roots sticking out of the sand. That's water shaping where I live, literally. I walk it with the dog most weekends so I'd know it well and I've watched it change.",
   "v": "accepted",
   "d": 5.74
  },
  {
   "s": 0,
   "q": 0,
   "a": "The coast, no question. Portmarnock's dunes take a hammering every winter and the council keeps moving the walkway back – water is literally reshaping where people walk.",
   "v": "accepted",
   "d": 5.5
  },
  {
   "s": 1,
   "q": 2,
   "a": "Three of them. One: how much has the dune profile changed at each of my three transects between my first and last survey? Two: do the biggest changes line up with named storms in the Met Éireann record? Three: does the retreat look the same north of the walkway as it does south, where there's more foot traffic? They're manageable because each is either measurements I already have or a bit of looking up in the storm tables.",
   "v": "accepted",
   "d": 4.36
  },
  {
   "s": 1,
   "q": 0,
   "a": "My draft is: 'To what extent have the dunes at Portmarnock strand retreated at three fixed points between September and now, and how closely does that retreat match the storm and rainfall record for the same period?' I'm not fully happy with it. 'To what extent' feels vague and I'm not sure three points is enough to say anything about the whole strand. My teacher said the timescale part is strong because it lets me compare, so I'm keeping that bit.",
   "v": "accepted",
   "d": 4.12
  },
  {
   "s": 1,
   "q": 1,
   "a": "How far have the dunes at three fixed points on Portmarnock strand retreated since last September, and how does that retreat compare with the storm record for the same months?",
   "v": "accepted",
   "d": 4
  },
  {
   "s": 2,
   "q": 2,
   "a": "I do each transect the same way every time, same poles, and if my dad helps we both take the clinometer reading and use the average. I measure at low tide so the wet sand zone is consistent. I note date, weather and time in the log each visit in case a storm just happened. For bias, a survey is fairly objective anyway, but I only picked three transects, so I can't pretend that covers the whole beach and I'll say that plainly.",
   "v": "accepted",
   "d": 3.36
  },
  {
   "s": 2,
   "q": 1,
   "a": "Beach profiling with ranging poles and a clinometer at three fixed transects, marked by GPS and a photo of a landmark at each one. It's the right method because my question is about change in the shape of the dune, so I need numbers I can compare, not opinions. A survey gives me before-and-after figures. The photos are a backup in case a reading looks odd, and the Met Éireann storm data is free and gives me the comparison side.",
   "v": "accepted",
   "d": 3.24
  },
  {
   "s": 2,
   "q": 0,
   "a": "Primary: dune profile measurements with ranging poles and a clinometer at three fixed transects, plus photos from the same marked spots. Secondary: Met Éireann storm and rainfall records and the OPW coastal flood maps, so I can match profile change to storm dates.",
   "v": "accepted",
   "d": 3
  },
  {
   "s": 3,
   "q": 0,
   "a": "On Saturday at low tide I measured all three transects, took 24 photos from the fixed points and logged wind, tide and weather in my log. The middle transect has lost nearly a metre since my first visit – the sand fence that used to be behind it is now standing on bare marram roots.",
   "v": "accepted",
   "d": 2
  },
  {
   "s": 3,
   "q": 2,
   "a": "Yes, actually. First time out the dune at transect 1 was so steep my poles kept sinking and I got a profile way off the other two, so I switched to longer poles and redid it. And the storm data surprised me, the biggest retreat came after a November storm, not the January one I'd assumed it would be. I logged both changes. The question stayed the same, it was really the method that needed fixing.",
   "v": "revise",
   "d": 0.56,
   "reason": "Mentor asked whether one storm comparison is enough on its own – wants a decision logged on spreading the visits across the winter."
  },
  {
   "s": 3,
   "q": 1,
   "a": "Two visits done at all three transects. I think I need one more after this week's forecast storm, but I am not sure whether comparing before and after a single storm counts as enough evidence, or whether I should spread visits across the whole winter.",
   "v": "revise",
   "d": 0.2
  }
 ],
 "oisin": [
  {
   "s": 0,
   "q": 2,
   "a": "Does runoff from the Fairview estate outfall change the water quality of the River Tolka between the outfall and the Griffith Park footbridge? I want to compare a stretch below the outfall with a stretch upstream of it. If there's a difference in clarity or phosphate, that tells me the estate is having an effect. It's local, I can sample it on the way to school, and it connects to the EPA data I found.",
   "v": "accepted",
   "d": 8.36
  },
  {
   "s": 0,
   "q": 0,
   "a": "Water quality, for me, and the Tolka. Our estate has a surface-water outfall into the river about 200 metres above Griffith Park, so anything that washes off the roads and driveways goes straight in. I cycle past it every morning on the way to school. The river is right in the middle of the community, it's where people walk and where the herons and swans are, so whether the runoff is actually affecting it feels like something that matters to where I live.",
   "v": "accepted",
   "d": 8.12
  },
  {
   "s": 0,
   "q": 1,
   "a": "Water quality in the Tolka. There is a surface-water outfall from our estate into the river about 200 metres above Griffith Park, and I cycle past it every morning on the way to school.",
   "v": "accepted",
   "d": 8
  },
  {
   "s": 1,
   "q": 0,
   "a": "Does runoff from the Fairview estate outfall change the water quality of the River Tolka between the outfall and the Griffith Park footbridge?  I will stick to the same two sampling points every time so the comparison is fair.",
   "v": "accepted",
   "d": 7
  },
  {
   "s": 1,
   "q": 2,
   "a": "Three sub-questions. One: how does the clarity of the Tolka compare 20 metres upstream and 200 metres downstream of the outfall? Two: how do phosphate levels compare at the same two points? Three: does any difference get bigger the day after heavy rain compared with dry days? The last one is the interesting one because if rain makes it worse, that points straight at surface runoff from the estate rather than something else upstream.",
   "v": "accepted",
   "d": 6.36
  },
  {
   "s": 1,
   "q": 1,
   "a": "How does the clarity and phosphate level of the River Tolka compare 20 metres upstream and 200 metres downstream of the Fairview estate surface-water outfall, sampled on five dry days and one day after heavy rain?",
   "v": "accepted",
   "d": 6
  }
 ],
 "sean": [
  {
   "s": 0,
   "q": 2,
   "a": "Would the flooding in Ennis be worse if the ground upstream was built on, or is it just the amount of rain? I know there's a flood relief scheme for the town but I don't really understand what it actually does. What I'd most like to find out is whether the flooding at the market car park lines up with the highest rainfall days in the Met Éireann record, or whether it happens on days that aren't even that wet.",
   "v": "accepted",
   "d": 10.36
  },
  {
   "s": 0,
   "q": 1,
   "a": "Flooding, in Ennis. The car park beside the market floods a few times every winter and they close it off, you can see the water line on the wall after. But then last summer we had a hosepipe ban in the same town. That's the bit that gets me, too much water in January and not enough in July, same place. It's the river running through the town, when it can't get away fast enough.",
   "v": "accepted",
   "d": 10.24
  },
  {
   "s": 0,
   "q": 0,
   "a": "Flooding, definitely. The car park beside the market in Ennis floods a few times every winter, and then we had a hosepipe ban last summer – too much water and not enough, in the same town in the same year.",
   "v": "accepted",
   "d": 10
  }
 ],
 "luke": [
  {
   "s": 0,
   "q": 2,
   "a": "Does the hardness of the water supply in Clonee differ from the supply at my school, and can any difference be explained by the rock types each supply is drawn from? I'd add how the water lathers with soap as a simple test. If hardness does vary locally, that's the geology of the area showing up in my kitchen, which I think is a good way in for a project.",
   "v": "accepted",
   "d": 6.36
  },
  {
   "s": 0,
   "q": 0,
   "a": "Water hardness, which I never thought of as geography until I looked into it. Our kettle in Clonee is caked in limescale but my granny's in west Kerry is nearly clean. The difference comes from what the water flows through on the way to the treatment plant, so the theme is really about water taking something from the rocks underneath us and bringing it into every house. Rock type shaping the water we drink, that's what matters here.",
   "v": "accepted",
   "d": 6.12
  },
  {
   "s": 0,
   "q": 1,
   "a": "Limescale, honestly. Our kettle in Clonee is white with it, but my granny's house in west Kerry has almost none – and when I looked into it, it comes from the rock the water flows through on its way to the treatment plant.",
   "v": "accepted",
   "d": 6
  },
  {
   "s": 1,
   "q": 1,
   "a": "Reading it back, it doesn't say clearly where. 'Clonee mains supply' and 'school supply' are vague, and a supply comes from a plant miles away. So I've rewritten it: 'How does the water hardness of tap water from my home in Clonee and from two taps in my school compare, and how does each sample's soap-lathering behaviour match the rock type under the source area?' Now it names the settings, says what I'm finding out, and gives my own method.",
   "v": "accepted",
   "d": 4.74
  },
  {
   "s": 1,
   "q": 0,
   "a": "'How does the water hardness of the Clonee mains supply compare with the school supply, and does any difference match the rock types each is drawn from?' I'm only half happy with it. It says what it's about and roughly where, but 'does any difference match' is a bit soft, and I haven't said how I'll actually measure hardness. I'm going to rewrite it to name the setting properly and build in the soap lather test as my measurement.",
   "v": "accepted",
   "d": 4.62
  },
  {
   "s": 1,
   "q": 2,
   "a": "My sub-questions are: does water hardness differ between the Clonee mains supply and the school supply; does any difference match the rock types each supply is drawn from; and how does hardness relate to how easily soap lathers in a measured volume of each sample?",
   "v": "accepted",
   "d": 4.5
  }
 ],
 "aoife": [
  {
   "s": 0,
   "q": 2,
   "a": "Why does the car park at Clontarf Promenade flood at high spring tides, and how much does an onshore wind add to the flood level? I want to know because it's not just the tide – the wind seems to make it worse. If I can figure out the relationship, it might help predict when flooding will happen. Also, the council's sea wall work is expensive, so understanding the causes could inform better solutions.",
   "v": "accepted",
   "d": 9.36
  },
  {
   "s": 0,
   "q": 0,
   "a": "The part that matters most is coastal flooding. I live near Clontarf, and the promenade floods a few times a year when a spring high tide meets an easterly wind. The car park goes under and the council keeps raising the sea wall. It's a real issue because it affects people's daily lives – the road closes, and there's always talk about whether the defences are enough. So water shaping our local area is literally about the sea reshaping the coastline and threatening the area.",
   "v": "accepted",
   "d": 9.12
  },
  {
   "s": 0,
   "q": 1,
   "a": "Flooding by the sea. Clontarf Promenade closes a few times a year when a spring high tide meets an easterly wind – the road and the car park go under, and the council keeps raising the sea wall.",
   "v": "accepted",
   "d": 9
  },
  {
   "s": 1,
   "q": 2,
   "a": "Sub-questions: 1. How high does the tide get at Clontarf Promenade during spring tides compared to neap tides? 2. How does an easterly wind affect the actual water level compared to the predicted tide? 3. How often does the car park flood each year, and does that match the highest tides? That breaks it into tide patterns, wind impact, and flood frequency.",
   "v": "accepted",
   "d": 8.36
  },
  {
   "s": 1,
   "q": 1,
   "a": "My question is a bit general. I need to name the setting. So: 'Why does the car park at Clontarf Promenade in Dublin flood during high spring tides, and how much does an onshore easterly wind increase the flood height there?' That makes it clear it's about Clontarf Promenade and specifies the wind direction. It also says what I'm finding out: the flood height and the wind's contribution.",
   "v": "accepted",
   "d": 8.24
  },
  {
   "s": 1,
   "q": 0,
   "a": "Why does the car park at Clontarf Promenade flood at high spring tides, and how much does an onshore wind add to the flood level?",
   "v": "accepted",
   "d": 8
  },
  {
   "s": 2,
   "q": 2,
   "a": "I'll use the official tide gauge, not just my own eyes, and take three measurements each time to average. I'll also record conditions like wind and air pressure because they affect flooding. I'll stick to a schedule – same times after high tide – so my data is consistent. And I'll use the harbour master's tables as a baseline, so I'm not relying on my own estimates.",
   "v": "accepted",
   "d": 5.36
  },
  {
   "s": 2,
   "q": 0,
   "a": "Primary evidence: I'll measure tide heights against the marked gauge on the promenade wall at high tide, take photos from three fixed spots with timestamps, and record wind speed and direction from a handheld anemometer. Secondary sources: harbour master's tide tables for predicted tides, Met Éireann wind data, and council flood reports. That gives me both actual measurements and official records to compare.",
   "v": "accepted",
   "d": 5.12
  },
  {
   "s": 2,
   "q": 1,
   "a": "I will measure tide heights against the marked gauge on the promenade wall rather than estimating, photograph from the same three fixed spots with timestamps, and use the harbour master's tide tables instead of a phone app so my predicted levels are official. I will also record wind direction and speed from Met Éireann for each event so I am not cherry-picking the dramatic mornings.",
   "v": "accepted",
   "d": 5
  },
  {
   "s": 3,
   "q": 2,
   "a": "Yes, actually. I noticed that the flooding wasn't just about tide height – it also depended on how long the wind had been blowing. So I added a sub-question about wind duration. Also, I realised the gauge is partly blocked by seaweed sometimes, so I started taking a photo of the gauge to verify readings. I logged this change in my inquiry log.",
   "v": "accepted",
   "d": 2.86
  },
  {
   "s": 3,
   "q": 1,
   "a": "I've collected tide heights for six spring tides and three neap tides, with wind data for each. I have photos showing flooding extent. I think I have enough to see the pattern, but I'm missing a really strong easterly wind event – most days were calm. That might be a gap because my question asks how much wind adds, so I need at least one stormy high tide to compare.",
   "v": "accepted",
   "d": 2.74
  },
  {
   "s": 3,
   "q": 0,
   "a": "Over the last spring tide series I visited at predicted high water on four mornings, photographed the gauge and the car park from the fixed points, and logged the highest water mark against the wall with chalk and a tape. On the two mornings with a force 5-6 easterly the water reached about 38 cm above the predicted height; on the calm mornings it matched the tide table almost exactly.",
   "v": "accepted",
   "d": 2.5
  }
 ],
 "cathal": [
  {
   "s": 0,
   "q": 1,
   "a": "At the meander bend at Tinnahinch on the River Barrow. The outside of the bend is steep and eroding, with soil falling in, while the inside has a gravelly beach building up. It's a clear example of water shaping the land through erosion and deposition. I want to understand why the outside erodes faster and how water speed differs across the channel.",
   "v": "accepted",
   "d": 8.74
  },
  {
   "s": 0,
   "q": 0,
   "a": "For me, it's how rivers shape the land. I live near the River Barrow at Tinnahinch, and there's a meander bend that's always changing. The outside bank keeps collapsing into the river, and the inside builds up. I row past it every Saturday, and the field edge is getting closer each season. So water shaping our local area is literally about the river eroding and depositing, changing the landscape over time.",
   "v": "accepted",
   "d": 8.62
  },
  {
   "s": 0,
   "q": 2,
   "a": "Why does the outside of the meander bend at Tinnahinch on the River Barrow keep collapsing into the river while the inside bend builds up? I row past it every Saturday and the field edge is visibly closer every season.",
   "v": "accepted",
   "d": 8.5
  },
  {
   "s": 1,
   "q": 2,
   "a": "Sub-questions: 1. How does water speed vary across the channel from inner to outer bank? 2. How does the depth profile differ between the two banks? 3. What evidence of erosion or deposition is visible on each bank? That breaks it into velocity, depth, and physical features. I can measure each separately.",
   "v": "accepted",
   "d": 7.36
  },
  {
   "s": 1,
   "q": 1,
   "a": "My question is: 'How does water speed and erosion differ between the outside and the inside of the meander bend at Tinnahinch on the River Barrow?' It already names the setting, Tinnahinch on the River Barrow. But maybe I should specify the exact stretch. So: 'How do water velocity and bank erosion differ between the outer and inner banks of the meander at Tinnahinch, on the River Barrow in County Carlow?' That's clearer.",
   "v": "accepted",
   "d": 7.24
  },
  {
   "s": 1,
   "q": 0,
   "a": "How does water speed and erosion differ between the outside and the inside of the meander bend at Tinnahinch on the River Barrow?  I row that stretch every week, so I can keep an eye on whether the bend changes between sessions.",
   "v": "accepted",
   "d": 7
  },
  {
   "s": 2,
   "q": 2,
   "a": "I'll take three float timings at each point and average them, so one odd result doesn't skew it. I'll do the survey on the same day, at similar river flow, and note the water level. I'll use the same float and same 10-metre tape each time. I'll also record the weather because rain affects flow. And I'll have a friend check my timings for consistency.",
   "v": "accepted",
   "d": 5.36
  },
  {
   "s": 2,
   "q": 1,
   "a": "I'll use orange floats to time water speed over a 10-metre course at five points across the channel. I'll also use a metre stick to measure depth at each point. This is quantitative and gives me numbers to compare. It's right because I need to see if the outer bank has faster water, which causes erosion. I'll also take photos with a scale pole to show bank collapse.",
   "v": "accepted",
   "d": 5.24
  },
  {
   "s": 2,
   "q": 0,
   "a": "Primary: orange float timings over a measured 10 metre course at five points across the channel, depth with a metre stick at each point, and photographs of the collapsing bank with a scale pole. Secondary: OPW channel records for the Barrow and EPA water level data so I can compare my readings with normal conditions.",
   "v": "accepted",
   "d": 5
  },
  {
   "s": 3,
   "q": 2,
   "a": "Yes, I realised the depth was deeper than my metre stick in the middle, so I had to estimate. I also noticed that the outer bank had undercutting, which I hadn't planned to measure. So I added a sub-question about undercutting. I logged that I changed my method to include a longer stick next time.",
   "v": "accepted",
   "d": 2.36
  },
  {
   "s": 3,
   "q": 1,
   "a": "I have float timings and depth for five points across the channel, done twice on different days. I also have photos. But I only did it when the river was low. I'm missing data for higher flow conditions, which might show even more difference. So there's a gap: I need at least one more survey after heavy rain to see if the pattern holds.",
   "v": "accepted",
   "d": 2.24
  },
  {
   "s": 3,
   "q": 0,
   "a": "Two sessions on the bend. Floats moved fastest and the channel was more than twice as deep against the outside bank, where the field edge has collapsed; on the inside bend the floats slowed and there is a fresh shingle bank building. I logged timings to the nearest tenth of a second with a stopwatch and repeated each run three times.",
   "v": "accepted",
   "d": 2
  }
 ],
 "lauren": [
  {
   "s": 0,
   "q": 2,
   "a": "How does the clarity and phosphate level of the Royal Canal change between lock 8 and lock 12 in Phibsborough? I want to sample at the locks and see if the water quality actually changes along that stretch, or if it's just my imagination from walking it. If I can compare it with the EPA's Water Framework rating for the same stretch, even better, because then I'm not just guessing from what it looks like.",
   "v": "accepted",
   "d": 7.36
  },
  {
   "s": 0,
   "q": 0,
   "a": "The Royal Canal behind the school. It's the bit that matters most to me because I walk it every day and it's never the same two weeks running. Sometimes it's green and thick with algae, other times it's clear enough to see the bottom near the lock gates. The dog walkers are always giving out about it. It's the canal, not the sea or a river, but it's still water shaping the place kids in Phibsborough actually use.",
   "v": "accepted",
   "d": 7.12
  },
  {
   "s": 0,
   "q": 1,
   "a": "The Royal Canal behind our school. The stretch from lock 8 to lock 12 is either green and choked with algae one week or clear the next, and dog walkers complain about it constantly.",
   "v": "accepted",
   "d": 7
  },
  {
   "s": 1,
   "q": 2,
   "a": "One: does phosphate level differ between the five locks, or is it roughly the same the whole way along? Two: does it change at the same lock over the three weeks, or stay steady? Three: is there a link between phosphate and clarity, do the greener murkier spots have the higher phosphate readings? Each one is just a different way of slicing the same numbers I'm already collecting, so it's manageable.",
   "v": "accepted",
   "d": 5.86
  },
  {
   "s": 1,
   "q": 0,
   "a": "'How does the clarity and phosphate level of the Royal Canal change between lock 8 and lock 12 in Phibsborough, sampled at five locks over three weeks?' I think this one is fairly close to being done. It says what I'm testing (clarity and phosphate), where (locks 8 to 12), and it even says the sampling plan. The weak bit is that 'change' could mean along the canal or over time, so I'll make clear I'm looking at both.",
   "v": "accepted",
   "d": 5.62
  },
  {
   "s": 1,
   "q": 1,
   "a": "How does the clarity and phosphate level of the Royal Canal change between lock 8 and lock 12 in Phibsborough, sampled at five locks over three weeks?",
   "v": "accepted",
   "d": 5.5
  },
  {
   "s": 2,
   "q": 2,
   "a": "I'll sample at the same time of day each week, from the same spot at each lock, and rinse the tube with canal water before every test so a leftover reading from the last lock doesn't carry over. I'll take two readings at each lock and average them if they differ by much. I wear gloves, I don't drink or touch my face, and I go with a friend for safety. The photos mean someone else could check my results against the picture.",
   "v": "accepted",
   "d": 3.36
  },
  {
   "s": 2,
   "q": 1,
   "a": "Water testing mixed with photos. I'll take a sample at each of the five locks with a phosphate test kit and use a clarity tube, once a week for three weeks. That's quantitative, so I can actually compare readings. It's right for the question because 'how does it change' needs numbers across spots and dates, not one reading on one day. I'll take a photo at the same spot each time as a visual record, then the EPA data as a secondary source.",
   "v": "accepted",
   "d": 3.24
  },
  {
   "s": 2,
   "q": 0,
   "a": "Primary: water samples from five locks tested with a phosphate test kit and a clarity tube, plus a photo at each lock on each sampling day. Secondary: the EPA Catchments site Water Framework Directive rating for that canal reach, so I can compare my own results against the official classification.",
   "v": "accepted",
   "d": 3
  }
 ],
 "eoin": [
  {
   "s": 0,
   "q": 2,
   "a": "How do beach width and dune condition differ north and south of Rush harbour, and what does that suggest about how well each management approach is coping with the same waves? The waves hit both sides equally, so any difference in what the beach actually looks like should come down to the management rather than the sea. That's the part I find genuinely interesting, and I can see both sides from the car park.",
   "v": "accepted",
   "d": 8.36
  },
  {
   "s": 0,
   "q": 0,
   "a": "The sea defences at Rush. South of the harbour there's rock armour and a groyne, north of it the dunes are just left alone. From the car park you can see the beach is narrow on the defended side and wider on the dune side, and I want to know which one is actually holding up against the same sea. It's water shaping my local coastline, and there's a real argument behind it, hard engineering versus letting nature get on with it.",
   "v": "accepted",
   "d": 8.12
  },
  {
   "s": 0,
   "q": 1,
   "a": "The sea defences at Rush. South of the harbour there is a rock armour wall and a groyne; north of it the dunes are left alone. You can see the difference in the beach from the car park, and I want to know which approach is actually working.",
   "v": "accepted",
   "d": 8
  },
  {
   "s": 1,
   "q": 2,
   "a": "Three. One: how does beach width compare at matched distances north and south of the harbour? Two: does dune condition, vegetation cover and whether there's a steep scarp, differ between the two sides? Three: do the Ordnance Survey historical maps show the two sides changing differently over a longer period, or were they always like this? The first two I can measure myself, the third is desk research to add context to my own numbers.",
   "v": "accepted",
   "d": 4.36
  },
  {
   "s": 1,
   "q": 0,
   "a": "'How do beach width and dune condition differ north and south of Rush harbour, and what does that suggest about how well each management approach is coping with the same sea?' I'm happy enough with the where (Rush harbour) and the what (beach width, dune condition). The second half is softer though, 'coping with the same sea' implies a judgement I mightn't be able to back up with my own measurements. I might need to tighten that part.",
   "v": "accepted",
   "d": 4.12
  },
  {
   "s": 1,
   "q": 1,
   "a": "How do beach width and dune condition differ north and south of Rush harbour, and what does that suggest about how well each management approach is coping with the same sea?",
   "v": "accepted",
   "d": 4
  }
 ],
 "sara": [
  {
   "s": 0,
   "q": 2,
   "a": "How effective are the Fermoy flood defences at protecting the town centre since the scheme was completed, and how do the people who work beside them every day rate them? I want to know if the barriers actually stop flooding, and if the locals feel safer. It's not just about the engineering, it's about the human impact. So I want to combine physical data with people's experiences.",
   "v": "accepted",
   "d": 11.36
  },
  {
   "s": 0,
   "q": 0,
   "a": "For me, it's how water can devastate a town and how we try to control it. Fermoy flooded badly in 2009, and my aunt lives there. Now there are these big flood defences along the Blackwater. But do they actually work? The council says yes, but I want to know from the people who live and work there. So the part that matters is flood management and whether it makes a difference to the community.",
   "v": "accepted",
   "d": 11.12
  },
  {
   "s": 0,
   "q": 1,
   "a": "Flood defences. Fermoy flooded badly in 2009 and there are now permanent and demountable barriers along the Blackwater – my aunt lives there and I want to know whether they actually work, not just whether the council says they do.",
   "v": "accepted",
   "d": 11
  },
  {
   "s": 1,
   "q": 2,
   "a": "Sub-questions: 1. How many times has Fermoy town centre flooded since the defences were built? 2. How do business owners on the previously flooded streets rate the defences? 3. What do the gauge boards and barrier lines show about water levels during high flow? That breaks it into flood frequency, human perception, and physical evidence.",
   "v": "accepted",
   "d": 10.36
  },
  {
   "s": 1,
   "q": 1,
   "a": "My question names Fermoy, but I should be more specific. So: 'How effective are the flood defences at protecting Fermoy town centre from the River Blackwater since the scheme was completed in 2012, and how do local business owners rate their effectiveness?' That makes it clear it's Fermoy, the River Blackwater, and that I'm asking about both physical protection and perception.",
   "v": "accepted",
   "d": 10.24
  },
  {
   "s": 1,
   "q": 0,
   "a": "How effective are the Fermoy flood defences at protecting the town centre since the scheme was completed, and how do the people who work beside them every day rate them?",
   "v": "accepted",
   "d": 10
  },
  {
   "s": 2,
   "q": 2,
   "a": "I'll survey a range of shops, not just ones my aunt knows, to avoid bias. I'll ask the same questions to everyone. I'll record answers verbatim and not lead them. For the photos, I'll take them at the same spots and times to compare. I'll use official flood data to check against what people say. And I'll keep a log of my methods.",
   "v": "accepted",
   "d": 7.36
  },
  {
   "s": 2,
   "q": 1,
   "a": "I'll do a short survey of ten shop owners on the two streets that flooded in 2009, asking about closures and water since the barriers. This gives me qualitative data on effectiveness. I'll also take photos of the barrier lines and gauge boards to see how high water gets. Secondary sources like OPW flood data will give me numbers. So mixed methods: survey for opinions, photos for evidence, records for facts.",
   "v": "accepted",
   "d": 7.24
  },
  {
   "s": 2,
   "q": 0,
   "a": "Primary: a short survey of ten shop owners on the two flooded-in-2009 streets about closures and water since the barriers, plus photographs of the barrier lines and the gauge boards. Secondary: the OPW Fermoy scheme documents and EPA flood records, so I can compare floods before and after completion.",
   "v": "accepted",
   "d": 7
  },
  {
   "s": 3,
   "q": 2,
   "a": "Yes, some shop owners said they still get water in their basements even with the barriers. So I added a sub-question about minor flooding. I also realised my survey was too short, so I added a question about how often they see the barriers deployed. I logged this change.",
   "v": "accepted",
   "d": 4.36
  },
  {
   "s": 3,
   "q": 1,
   "a": "I have ten surveys from shop owners, photos of barriers and gauges, and flood records from the OPW. That covers both perception and physical data. But I'm missing data from the council about maintenance of the demountable barriers. So there's a gap: I don't know if the barriers are always deployed properly. I might need to interview someone from the council.",
   "v": "accepted",
   "d": 4.24
  },
  {
   "s": 3,
   "q": 0,
   "a": "I surveyed ten shops across two afternoons and photographed every barrier access point. The OPW documents record six demountable barrier closures since the scheme finished, and no shop in my survey has taken water since – while the EPA records show three town-centre floods in the nine years before it.",
   "v": "accepted",
   "d": 4
  },
  {
   "s": 4,
   "q": 2,
   "a": "I was surprised that most shop owners said the defences work, but they still worry because the demountable barriers take time to put up. Also, some said the river now rises faster because of the barriers, which I hadn't thought about. So the effectiveness isn't just about stopping water, it's about how the scheme changes the river's behaviour.",
   "v": "accepted",
   "d": 2.86
  },
  {
   "s": 4,
   "q": 1,
   "a": "For the survey, I'll use a bar chart showing the percentage of owners who rated the defences as effective, somewhat effective, or not effective. For flood frequency, a timeline showing floods before and after the scheme. For photos, I'll include them with captions showing water levels. Charts are good for comparing, and photos show the physical situation.",
   "v": "accepted",
   "d": 2.74
  },
  {
   "s": 4,
   "q": 0,
   "a": "The clearest pattern is the contrast either side of the scheme: three centre floods before, none after, and eight of ten shopkeepers say closures are now short and organised. The surprise was that two shopkeepers still keep sandbags behind the counter because they do not fully trust the demountable sections.",
   "v": "accepted",
   "d": 2.5
  },
  {
   "s": 5,
   "q": 2,
   "a": "My findings could apply to other towns with flood defences, like Mallow or Clonmel. The idea that defences work but need proper maintenance and quick deployment is common. It could also link to a study on how climate change might affect flood risk. So it's not just Fermoy, it's about any place trying to manage flood risk.",
   "v": "accepted",
   "d": 1.86
  },
  {
   "s": 5,
   "q": 1,
   "a": "I expected the defences to be effective, but I thought people might be more negative. Actually, most were positive, but they had concerns about maintenance and speed of deployment. So it matched in terms of overall protection, but not in terms of the issues they raised. The physical data also showed fewer floods since the scheme, so that matched.",
   "v": "accepted",
   "d": 1.74
  },
  {
   "s": 5,
   "q": 0,
   "a": "My evidence is strong on perceptions and closure counts but weak on hydrology – I did not measure the river myself, so I am relying on OPW and EPA data, which I have referenced. The survey has a bias too: the shops that flooded worst before may have closed or moved, so the survivors I surveyed are the ones that were never hit hardest.",
   "v": "accepted",
   "d": 1.5
  }
 ],
 "roisin": [
  {
   "s": 0,
   "q": 2,
   "a": "How does land use in the Dodder catchment above Rathfarnham Weir affect how quickly and how high the river rises after heavy rain? I think the car park near the bridge might make it worse, but I haven't measured it. I want to know if urban surfaces and drainage are causing the fast flooding.",
   "v": "accepted",
   "d": 13.36
  },
  {
   "s": 0,
   "q": 1,
   "a": "The Dodder River near Rathfarnham. After heavy rain, it rises really fast and the playground by the bridge floods. It's a concrete place – the river runs through the suburbs, and the land use around it seems to affect how quickly it floods. So water shaping our local area is about how the river responds to rain and how we've changed the catchment.",
   "v": "accepted",
   "d": 13.24
  },
  {
   "s": 0,
   "q": 0,
   "a": "Water in our community means the Dodder for me. We live near Rathfarnham and the river rises shockingly fast after heavy rain – the playground by the bridge floods its lower path most winters. I want to understand why it happens so quickly.",
   "v": "accepted",
   "d": 13
  },
  {
   "s": 1,
   "q": 0,
   "a": "Does land use affect flooding on the Dodder? I think it does because of the car park near the bridge, but I have not said where or how I would measure it.",
   "v": "revise",
   "d": 11.5
  },
  {
   "s": 1,
   "q": 2,
   "a": "Sub-questions: 1. How quickly does the river rise at Rathfarnham Weir after a rain event? 2. How does the river respond below the car park compared to above it? 3. What is the land use like in the catchment above the weir? That breaks it into river response, local comparison, and land use description.",
   "v": "accepted",
   "d": 11.36
  },
  {
   "s": 1,
   "q": 1,
   "a": "My question is clear about land use and the Dodder, but I should name the specific area. So: 'How does land use in the Dodder catchment between Bohernabreena and Rathfarnham Weir affect the speed and height of river rise after heavy rain?' That names the stretch and makes it specific.",
   "v": "accepted",
   "d": 11.24
  },
  {
   "s": 1,
   "q": 0,
   "a": "How does land use in the Dodder catchment above Rathfarnham Weir affect how quickly and how high the river rises after heavy rain? My sub-questions are how the river responds below the car park versus the park stretch, and how that compares with the rainfall on each day.",
   "v": "accepted",
   "d": 11
  },
  {
   "s": 2,
   "q": 2,
   "a": "I'll take measurements at the same spots each time, and use a fixed gauge so I'm not estimating. I'll record the rainfall from a local weather station to ensure I'm comparing similar events. I'll take multiple readings and average. And I'll note anything that might affect flow, like a fallen tree.",
   "v": "accepted",
   "d": 9.36
  },
  {
   "s": 2,
   "q": 1,
   "a": "I'll measure river height at two points – above and below the car park – using a marked gauge or a ruler at the same times after rain. I'll also record the time it takes to rise. And I'll map the land use using a simple sketch or satellite image. This is quantitative and comparable.",
   "v": "accepted",
   "d": 9.24
  },
  {
   "s": 2,
   "q": 0,
   "a": "Primary: channel width and depth at three fixed points near the weir after rainfall events, and photographs of ground cover along each stretch – the tarmac car park, the grass park and the natural bank. Secondary: Met Éireann daily rainfall for the nearest station and OPW water level data for the Dodder gauge.",
   "v": "accepted",
   "d": 9
  },
  {
   "s": 3,
   "q": 2,
   "a": "Yes, I realised that the river rises fast even before the water reaches the car park, so the car park might not be the main factor. I changed my question to focus on the whole catchment above the weir. I logged this shift in my inquiry log.",
   "v": "accepted",
   "d": 6.36
  },
  {
   "s": 3,
   "q": 1,
   "a": "I have river height data for three rain events, and I've mapped the land use. But I only have two points – above and below the car park – and the car park is just one feature. I might need more points to see the overall pattern. So there's a gap in spatial coverage.",
   "v": "accepted",
   "d": 6.24
  },
  {
   "s": 3,
   "q": 0,
   "a": "Three visits after rain over four weeks, measuring width and depth at the three points each time and photographing ground cover, plus the rainfall figures for each event. The point below the car park rose fastest and ran muddiest; the point downstream of the grass park rose more slowly and stayed clearer.",
   "v": "accepted",
   "d": 6
  },
  {
   "s": 4,
   "q": 2,
   "a": "I was surprised that the river rose almost as fast above the car park as below it. So the car park isn't the only cause. Also, the highest peak happened after a short intense shower, not a long rain. That suggests the urban drainage is really important.",
   "v": "accepted",
   "d": 3.86
  },
  {
   "s": 4,
   "q": 1,
   "a": "For the river height data, I'll use a line graph showing height over time for each event. For land use, a pie chart or a map showing the proportions of urban, park, and residential areas. The line graph shows the speed of rise, and the map shows spatial patterns.",
   "v": "accepted",
   "d": 3.74
  },
  {
   "s": 4,
   "q": 0,
   "a": "The pattern is consistent across three rain events of 12-15 mm: the level below the car park rose roughly twice as fast as the point below the park, and the water was visibly muddier there. Impermeable surfaces send rain straight into the channel, while the grass stretch slows it and lets it soak away – so land use is changing how the river responds.",
   "v": "accepted",
   "d": 3.5
  },
  {
   "s": 5,
   "q": 2,
   "a": "This could apply to other urban rivers, like the Tolka or the Liffey in Dublin. The idea that urbanisation speeds up river response is common. It could also link to a study on sustainable drainage systems. So it's not just the Dodder.",
   "v": "accepted",
   "d": 2.36
  },
  {
   "s": 5,
   "q": 1,
   "a": "I expected the car park to make a big difference, but it didn't. The whole catchment seems to be urbanised, so the river responds quickly everywhere. So my findings partly matched – the river does rise fast – but not the specific cause I thought.",
   "v": "accepted",
   "d": 2.24
  },
  {
   "s": 5,
   "q": 0,
   "a": "My method was simple enough to repeat, but my readings were ruler readings to the nearest centimetre, so small rises are uncertain. I only caught three moderate rain events, so I cannot say what a serious storm does. Bias: I chose measuring points I could safely reach, which limits the locations I could compare.",
   "v": "accepted",
   "d": 2
  },
  {
   "s": 6,
   "q": 2,
   "a": "My inquiry showed that the Dodder rises quickly after heavy rain because the urban catchment drains fast, and I demonstrated this by measuring river height at two points and mapping land use, showing that the car park was not the main factor.",
   "v": "accepted",
   "d": 1.86
  },
  {
   "s": 6,
   "q": 1,
   "a": "Yes, I have the URL for Met Éireann rainfall data, the OPW flood records, and the satellite image source. I also have the date I accessed each. For the river gauge, I used the council's gauge, so I have that reference. I think it's all there.",
   "v": "accepted",
   "d": 1.74
  },
  {
   "s": 6,
   "q": 0,
   "a": "My report follows the brief's headings and I have checked the word count and trimmed my photo set to the five that carry the analysis. Every source is referenced with dates, and the AI-use reference covers the mentor sessions where I was questioned on my own answers – no sentence of the report was written for me.",
   "v": "accepted",
   "d": 1.5
  }
 ],
 "eva": [
  {
   "s": 0,
   "q": 2,
   "a": "I'd extend the beetroot core practical. I'll cut equal cylinders from fresh beetroot using a cork borer, rinse them to remove cut-cell pigment, then place one cylinder into a test tube of distilled water at each temperature: 20, 40, 60, 80 °C maybe. After 15 minutes I'll remove the beetroot and measure the colour of the water using a colorimeter or by comparing to a colour chart. I'll control volume of water, time, cylinder size and rinse method. Risk: higher temps might also break down pigment. I could use a spectrophotometer at school if available.",
   "v": "accepted",
   "d": 3.36
  },
  {
   "s": 0,
   "q": 1,
   "a": "Membranes. All cells have a cell membrane, a phospholipid bilayer with proteins. It controls what enters and leaves. In beetroot the red pigment betalain is inside vacuoles. Heat damages membrane proteins and makes the bilayer more fluid, so the membrane loses its selective permeability. The pigment leaks out into the water. The more damage, the more pigment. That's the phenomenon behind my topic.",
   "v": "accepted",
   "d": 3.24
  },
  {
   "s": 0,
   "q": 0,
   "a": "Membranes. The brief's stimulus mentions heat and chemicals damaging membranes, and I straight away thought of the beetroot experiment – the pigment leaks into the water when you cook it because the membrane holding it in breaks down.",
   "v": "accepted",
   "d": 3
  },
  {
   "s": 1,
   "q": 2,
   "a": "In my investigative log I've recorded the brief quote about heat and membranes. I made a research question page. I summarised the textbook chapter and the food science article, with links and dates I accessed them. I wrote a reflection: I need to rinse beetroot before starting or my results will be wrong. I sketched a results table with temperature and absorbance. I also noted a risk: hot water baths can scald. I have a to-do list: ask teacher for colorimeter, buy fresh beetroot, and check what temperatures are safe in the lab.",
   "v": "accepted",
   "d": 1.36
  },
  {
   "s": 1,
   "q": 1,
   "a": "I found a Biology textbook chapter and a YouTube from a UK exam board. The textbook explains membrane fluidity and protein denaturation. A food science article said beetroot colour loss in cooking is mainly due to cell wall breakdown and vacuole rupture, not just membrane proteins. That was different because it said heat also damages cellulose cell walls, so pigment can escape even if membrane is partly intact. It added that my temperature range should include lower temps to see the threshold. I recorded the title, author, date accessed and a short quote in my log.",
   "v": "accepted",
   "d": 1.24
  },
  {
   "s": 1,
   "q": 0,
   "a": "How does increasing temperature affect the permeability of beetroot cell membranes, measured by the amount of pigment released into the surrounding water?  I found the pigment is called betalain in one of my sources, which made the whole thing feel more real.",
   "v": "accepted",
   "d": 1
  }
 ],
 "faye": [
  {
   "s": 0,
   "q": 1,
   "a": "It's about cell membranes being selectively permeable. The eggshell is calcium carbonate, and just inside is the egg membrane. That membrane controls what passes in and out, like a cell membrane. When an egg sits in a drink, acids and other chemicals can react with the shell and damage the membrane. If the membrane breaks, water and other substances move in or out by osmosis and diffusion. The egg can swell or shrivel. In cola, the acid reacts with the shell, so the membrane is exposed. That's what I'm testing.",
   "v": "accepted",
   "d": 8.24
  },
  {
   "s": 0,
   "q": 0,
   "a": "I'm choosing membranes because the egg experiment is straightforward. I read the three options. Osmosis with potato needs a balance and sucrose, and food preservation takes ages. Eggs have a shell and an inner membrane that acts like a cell membrane. Soaking eggs in different drinks lets me see damage over a week. I picked cola, water and milk because they're drinks people actually have, and I already have eggs at home. My mam wasn't thrilled about using her good pot but I'll use glasses. I chose it because I can see results without a colorimeter or microscope.",
   "v": "accepted",
   "d": 8.12
  },
  {
   "s": 0,
   "q": 2,
   "a": "Membranes, using eggs. My idea is to soak eggs in different drinks to see which damages them most, because the membrane inside an egg is like a cell membrane and eggs are easy to get.",
   "v": "accepted",
   "d": 8
  },
  {
   "s": 1,
   "q": 2,
   "a": "In my log I have my research question and hypothesis. I recorded the textbook page on membranes and the science fair website, with the URL and 12 January date. I wrote a note that sugar might not be the main factor. I made a table for egg mass before and after. I took a photo of my three glasses with eggs labelled cola, water, milk. I also wrote that I need to keep them in the same place so temperature is fair. My to-do list has kitchen scales and a marker.",
   "v": "accepted",
   "d": 6.36
  },
  {
   "s": 1,
   "q": 1,
   "a": "I found a science fair project online that said cola dissolves eggshells, but it claimed sugar was the main cause. My textbook says the acid, phosphoric acid and carbonic acid, reacts with calcium carbonate. The science fair source didn't separate acid from sugar. It added that I should include a sugary drink without acid, like milk or sugar water, to control for sugar. That changed my thinking: milk has sugar but no acid, so it's a better control than water. I put the website name and date in my log.",
   "v": "accepted",
   "d": 6.24
  },
  {
   "s": 1,
   "q": 0,
   "a": "How do different drinks affect an egg's membranes? I picked it from the membranes topic because eggs are cheap and the changes are visible without special equipment.",
   "v": "accepted",
   "d": 6
  },
  {
   "s": 2,
   "q": 0,
   "a": "My hypothesis is that cola will dissolve eggshells the most because it has the most acid and sugar in it. I will put eggs in cola, water and milk for a week.",
   "v": "revise",
   "d": 2
  },
  {
   "s": 2,
   "q": 2,
   "a": "I need six eggs if I'm repeating, three glasses or containers with lids, 200 ml measuring cylinder, kitchen scales accurate to 0.1 g, cola, water, milk, cling film, marker, paper towels, a phone for photos and my log. I'll buy eggs and cola the day before. I'll ask my teacher if I can use the lab scales for better accuracy. I'll check the glasses don't leak. Safety: wash hands after handling raw eggs and don't eat the eggs afterwards. I'll store the experiment on a shelf away from direct sunlight.",
   "v": "revise",
   "d": 1.36,
   "reason": "Still mixing up acid dissolving the shell (a chemical reaction) with water crossing the membrane – mentor wants one proper osmosis variable."
  },
  {
   "s": 2,
   "q": 1,
   "a": "Day 1: weigh each egg, put one in 200 ml cola, one in water, one in milk in labelled glasses. Cover with cling film. Each day for seven days, I'll take them out, rinse gently with water, pat dry, weigh and take a photo. Then put them back. Error could creep in if I crack an egg, if I don't dry them the same, if room temperature changes, or if I use different amounts of drink. Also the membrane might break when I handle them. I'll use the same scales and same person doing the weighing. I'll repeat each drink with two eggs if I can.",
   "v": "revise",
   "d": 1.24,
   "reason": "Still mixing up acid dissolving the shell (a chemical reaction) with water crossing the membrane – mentor wants one proper osmosis variable."
  },
  {
   "s": 2,
   "q": 0,
   "a": "Eggshells soaked in cola for a week will lose more mass than the ones in water or milk, if the shells all start at the same weight and stay at room temperature. I will weigh each shell at the start and again after seven days.",
   "v": "revise",
   "d": 1
  }
 ],
 "niamh": [
  {
   "s": 0,
   "q": 2,
   "a": "I'm going to set up four bottles with the same yeast and glucose mixture, but add salt at 0%, 2%, 5% and 10%. I'll seal a balloon on each bottle. The yeast ferments and gives off CO2, so the balloon inflates. I'll measure the height of the balloon with a ruler every 5 minutes for 30 minutes. That gives a rate. It's kind of like the yeast balloon demo we did in class, but I'm changing salt and measuring properly. I'll repeat it three times so it's not just one fluke.",
   "v": "accepted",
   "d": 9.36
  },
  {
   "s": 0,
   "q": 1,
   "a": "Right, my topic is food preservation. The biological bit is fermentation by yeast. Yeast is a single-celled fungus and it breaks glucose down into ethanol and carbon dioxide, that's what makes the balloon fill. Salt affects it because salt outside the yeast cell lowers the water potential, so water leaves the yeast by osmosis. That dehydrates the cell and slows its enzymes, so less CO2. That's the same basic reason brining stops food spoiling: microbes can't get the water they need. So I'm testing how salt concentration changes the rate.",
   "v": "accepted",
   "d": 9.24
  },
  {
   "s": 0,
   "q": 0,
   "a": "Food preservation. My granny brines her own bacon and the brief asks how preservation methods actually stop food going off. Yeast is the microbe I can test most easily at school, so I want to see how salt slows it down.",
   "v": "accepted",
   "d": 9
  },
  {
   "s": 1,
   "q": 2,
   "a": "In my log I've a table with dates. 12/09 I read the BBC Bitesize fermentation page. 15/09 I read safefood on water activity. 18/09 I copied a small graph from a food science blog showing salt reducing yeast activity. I wrote the links and download dates. I also have reflections: salt might affect osmosis more than enzymes, and I need to keep temperature, glucose mass and yeast mass the same. I still need one more source on yeast and salt concentration.",
   "v": "accepted",
   "d": 7.36
  },
  {
   "s": 1,
   "q": 1,
   "a": "I found a safefood page and a BBC Bitesize page. One explained salt doesn't just poison microbes; it lowers water activity, so cells can't take in water. Another said preservation is often a 'hurdle' effect with salt, low temperature and drying together. That added to my idea because I thought salt just slowed yeast directly, but really it's about water potential and osmosis. So in my report I'll say salt reduces water available to yeast, not just that it kills them.",
   "v": "accepted",
   "d": 7.24
  },
  {
   "s": 1,
   "q": 0,
   "a": "How does salt concentration affect the rate of yeast fermentation, and what does that tell us about why salting preserves food?  Granny says her mother salted the ham for weeks, so there is proper tradition behind this one.",
   "v": "accepted",
   "d": 7
  },
  {
   "s": 2,
   "q": 2,
   "a": "Materials: dried yeast, glucose, table salt, four plastic bottles, balloons, elastic bands, measuring cylinder, balance, thermometer, water bath, ruler, timer, marker. I'll ask the lab technician on Monday for the yeast, glucose and water bath. I'll bring balloons, bottles and salt from home. Safety: goggles, wash hands, don't taste anything, and open a window because fermentation gives off ethanol fumes. I'll write all this in my log and get my teacher to check the plan before I start.",
   "v": "accepted",
   "d": 5.36
  },
  {
   "s": 2,
   "q": 1,
   "a": "Step by step: label bottles 0, 2, 5, 10. Dissolve the right mass of salt in 100 cm3 warm water, add 5 g glucose and 2 g yeast. Swirl, then stretch a balloon over the neck and seal with an elastic band. Put all bottles in a water bath at 35°C. Measure balloon height with a ruler every 5 minutes for 30 minutes. Repeat three times. Error is most likely at the balloon seal: if it leaks, gas escapes. Also temperature changes, different balloon sizes, or not swirling the same amount. Timing could drift too.",
   "v": "accepted",
   "d": 5.24
  },
  {
   "s": 2,
   "q": 0,
   "a": "Hypothesis: as salt concentration rises, yeast fermentation slows. I will change the salt concentration (0, 2, 5 and 10%) across identical yeast-glucose mixtures in bottles with a balloon sealed on top, measure balloon height every 5 minutes for 30 minutes at 30 degrees in the water bath, and keep yeast amount, glucose, volume and temperature constant.",
   "v": "accepted",
   "d": 5
  },
  {
   "s": 3,
   "q": 2,
   "a": "Yeah, the balloons I brought were cheap and one popped off the bottle. I switched to the same size from the teacher's store. The water bath was set to 40°C but only reached 35°C, so I recorded the actual temperature. The 10% salt didn't dissolve fully at first, so I stirred it longer. I also had to tape a ruler to the wall to get the balloon height consistent instead of holding it. I wrote all that in my log.",
   "v": "accepted",
   "d": 2.86
  },
  {
   "s": 3,
   "q": 1,
   "a": "I've a hardback log with a table: time, balloon height for 0%, 2%, 5%, 10%, and observations like foam and smell. I took a photo of the set-up and photos at 10 and 30 minutes. Tonight I'll write in all the raw heights, note the room was 22°C not 35°C because the water bath wasn't free, and that the 10% balloon hardly moved. I'll get my teacher to sign the page. I also noted one balloon leaked, so I redid that bottle.",
   "v": "accepted",
   "d": 2.74
  },
  {
   "s": 3,
   "q": 0,
   "a": "The 0% and 2% balloons rose fast and steady; 5% was clearly slower; 10% barely moved in 30 minutes. One surprise: the 5% bottle frothed right up the neck but the balloon stayed small – gas was escaping round the neck, so I re-sealed it for the repeat run and logged the change.",
   "v": "accepted",
   "d": 2.5
  },
  {
   "s": 4,
   "q": 2,
   "a": "One 5% trial gave a balloon height of 2.8 cm at 15 minutes, which was higher than the 2% trial at the same time. I think that balloon was already stretched from a previous trial, or that bottle was warmer. I marked it as anomalous on my graph, left it out of the mean, and repeated that trial. The new value was 0.8 cm. I wrote the reason in my log and said it shows why repeats matter.",
   "v": "accepted",
   "d": 0.86
  },
  {
   "s": 4,
   "q": 1,
   "a": "My hypothesis was that as salt concentration rises, yeast fermentation slows. My graph shows 0% balloon height averaged 6.2 cm after 30 minutes, 2% was 4.1 cm, 5% was 1.3 cm and 10% was 0.4 cm. So yes, it supports my hypothesis. The drop wasn't perfectly even, but 10% nearly stopped it. That fits osmosis dehydrating the yeast. I can't say salt kills all microbes, only that it slowed yeast in my test.",
   "v": "accepted",
   "d": 0.74
  },
  {
   "s": 4,
   "q": 0,
   "a": "Balloon height after 30 minutes falls from 6.5 cm at 0% salt to 4.8 cm at 2%, 2.1 cm at 5% and 0.3 cm at 10% – fermentation rate drops as salt rises, roughly halving between 0 and 5%. That matches salt drawing water out of the yeast cells by osmosis, which is exactly why brine preserves food.",
   "v": "accepted",
   "d": 0.5
  }
 ],
 "david": [
  {
   "s": 0,
   "q": 2,
   "a": "I'll extend the class potato chips experiment. Instead of just water and one salt solution, I'll use six sucrose concentrations: 0.0, 0.2, 0.4, 0.6, 0.8 and 1.0 M. I'll cut potato cylinders with a cork borer, trim to equal length, blot dry and weigh. Each cylinder goes into a test tube with 20 ml of its solution for 30 minutes. Then I blot and reweigh. I'll calculate percentage change in mass. I'll repeat each concentration three times and average. That gives me a proper curve to find the isotonic point.",
   "v": "accepted",
   "d": 6.36
  },
  {
   "s": 0,
   "q": 1,
   "a": "Osmosis is the movement of water across a partially permeable membrane from a region of higher water potential to lower water potential. In plant cells, the cell membrane and vacuole membrane are partially permeable. Potato tissue has vacuoles full of sap with dissolved sugars and salts. If I put potato in pure water, water moves in, cells become turgid and mass increases. In strong sucrose solution, water moves out, cells become flaccid or plasmolysed, and mass decreases. The water potential gradient drives it, not active transport. That's what I'm measuring.",
   "v": "accepted",
   "d": 6.24
  },
  {
   "s": 0,
   "q": 0,
   "a": "Osmosis. The brief's stimulus mentions watering plants and sports drinks, and we did potato chips in class – but only in water. I want to do it properly with a range of sucrose concentrations.",
   "v": "accepted",
   "d": 6
  },
  {
   "s": 1,
   "q": 2,
   "a": "My log has the textbook chapter title, author and page numbers, accessed 15 January. I summarised the water potential section. I also have the gardening website URL and date, plus a note: 'fertiliser burn is osmosis, not heat'. I wrote my hypothesis and variables. I made a table for six concentrations with three repeats. I recorded a reflection: I must blot the potatoes before weighing or water on the surface will affect mass. I also noted safety: cork borers are sharp. My to-do list includes getting sucrose from the lab and a potato.",
   "v": "accepted",
   "d": 4.36
  },
  {
   "s": 1,
   "q": 0,
   "a": "My research question is: How does the concentration of sucrose solution affect the percentage change in mass of potato cylinders over 30 minutes? It grew from the brief's mention of watering plants and sports drinks. In class we only did water, so I wanted a full range. The textbook explained water potential, and the gardening site about fertiliser burn made me realise this is the same osmosis idea. I changed my wording from 'how much water enters' to 'percentage change in mass' because that's measurable and comparable. The reading also told me to use equal-sized cylinders.",
   "v": "accepted",
   "d": 4.12
  },
  {
   "s": 1,
   "q": 1,
   "a": "One textbook chapter explains the water potential gradient driving water in or out of plant tissue. A gardening site I found claims fertiliser burns plants by sucking water out – the textbook shows it is osmosis along a gradient, not burning, and that difference helped me frame my variables properly.",
   "v": "accepted",
   "d": 4
  },
  {
   "s": 2,
   "q": 2,
   "a": "I need one large potato, cork borer, scalpel, ruler, blotting paper, six test tubes, test tube rack, 20 ml measuring cylinder, sucrose solutions 0.0, 0.2, 0.4, 0.6, 0.8 and 1.0 M, electronic balance accurate to 0.01 g, timer, labels and my log. I'll get sucrose and glassware from the lab. I'll buy the potato the day before and keep it in the fridge. I'll check the balance is zeroed. Safety: cut away from fingers, wear goggles, and don't eat the potato after chemicals. I'll ask my teacher to supervise.",
   "v": "accepted",
   "d": 2.86
  },
  {
   "s": 2,
   "q": 1,
   "a": "Method: cork-bore six cylinders from one potato, trim each to 4 cm, blot, weigh. Label six test tubes with 0.0–1.0 M sucrose, add 20 ml each. Put one cylinder in each, start timer. After 30 min, remove, blot, reweigh. Calculate percentage change. Repeat three times. Error could come from not blotting equally, potato cylinders varying in diameter, temperature changes, evaporation from tubes, or not timing exactly. Also sucrose concentrations might not be exact if made up wrong. I'll use a ruler and scalpel carefully and keep tubes in a rack at room temperature.",
   "v": "accepted",
   "d": 2.74
  },
  {
   "s": 2,
   "q": 0,
   "a": "Hypothesis: as sucrose concentration rises from 0 to 1.0 M, potato cylinders lose more mass by osmosis. I will change the sucrose concentration (0, 0.2, 0.4, 0.6, 0.8, 1.0 M) and keep cylinder size (same cork borer, 4 cm), time (30 minutes) and temperature constant, measuring percentage change in mass so chips of different starting weights compare fairly.",
   "v": "accepted",
   "d": 2.5
  }
 ],
 "chloe": [
  {
   "s": 0,
   "q": 1,
   "a": "Food spoilage by microbes. Mould spores land on bread and grow if there's moisture and warmth. The mould is a fungus that digests bread using enzymes and absorbs nutrients. Cold temperatures slow down the enzymes and the mould's metabolism, so it grows more slowly. Freezing stops it almost completely because water in the bread freezes and enzymes can't work. But freezing doesn't kill mould, just pauses it. The cold chain keeps food at low temperatures from farm to shop to home. My experiment measures mould growth as an indicator of how well cold preserves bread.",
   "v": "accepted",
   "d": 8.24
  },
  {
   "s": 0,
   "q": 0,
   "a": "I'm choosing food preservation. The brief mentions the cold chain, and I bake bread at home, so I see mould all the time. I picked bread because it's cheap and I can test it at home safely. I'll compare room temperature, fridge and freezer. The other topics would need lab equipment I can't take home. Food preservation also connects to Home Economics and food safety. My Aunt works in a café and said they date-label everything, which made me think about how temperature controls spoilage. I want to see if colder really means slower mould.",
   "v": "accepted",
   "d": 8.12
  },
  {
   "s": 0,
   "q": 2,
   "a": "Food preservation – the cold chain. I want to test how refrigeration slows bread going mouldy: identical slices kept at room temperature, in the fridge and in the freezer, and measured over a week.",
   "v": "accepted",
   "d": 8
  },
  {
   "s": 1,
   "q": 1,
   "a": "The HSE page says keep perishable food in the fridge below 5 °C and follow the cold chain. A food science textbook chapter explains that moulds grow best at 20–30 °C, are slow below 5 °C and inactive when frozen. The HSE page is more about food safety rules, not the biology. It added that I should record fridge and freezer temperatures, not just assume they're right. I borrowed a fridge thermometer. I also found a blog that claimed freezing kills mould, but the textbook says it only stops growth, so I noted that difference.",
   "v": "accepted",
   "d": 5.24
  },
  {
   "s": 1,
   "q": 0,
   "a": "My research question is: How does storage temperature (room temperature, fridge at 4 °C, freezer at -18 °C) affect the visible mould growth on bread squares over seven days? It grew from the brief's cold chain idea. I read a HSE page about food safety and a food science textbook chapter. They both explained that microbial growth slows as temperature drops. I narrowed it to bread because it's a food I can observe at home. I changed from 'how long until mouldy' to 'amount of visible mould each day' so I can record it numerically or with photos.",
   "v": "accepted",
   "d": 5.12
  },
  {
   "s": 1,
   "q": 2,
   "a": "My log has a HSE food safety page and a food science textbook chapter, both with download dates, plus my method notes and hypothesis: colder storage means slower mould growth because the microbes and their enzymes work more slowly. I also recorded that the slices must come from the same loaf on the same day.",
   "v": "accepted",
   "d": 5
  },
  {
   "s": 2,
   "q": 2,
   "a": "I need one sliced loaf, a bread knife or scissors, ruler, six small airtight containers or zip-lock bags, labels, marker, fridge thermometer, phone camera, my log, and a grid transparency to estimate mould area. I'll buy the loaf on day one and cut six equal squares. I'll label each with temperature and repeat number. I'll put two in the fridge, two in the freezer, two at room temperature on a shelf. My plan: get containers from home, ask my teacher if I can borrow a thermometer, and check the fridge temperature the night before. Safety: don't eat the bread, wash hands after handling mouldy bread.",
   "v": "accepted",
   "d": 3.36
  },
  {
   "s": 2,
   "q": 0,
   "a": "Hypothesis: bread stored in the freezer will show the least mould growth, then the fridge, and room temperature will show the most, because colder temperatures slow microbial enzyme activity. Independent variable: storage temperature (room, fridge, freezer). Dependent variable: visible mould growth measured each day as percentage of surface area covered using a grid or rating scale, plus photos. Controlled variables: same loaf, same day, same slice size, same container, same light, same handling. I'll use four squares: room, fridge, freezer and a control in the oven? No, oven is not safe. I'll do three temperatures with two repeats each.",
   "v": "accepted",
   "d": 3.12
  },
  {
   "s": 2,
   "q": 1,
   "a": "Cut four equal squares from one loaf on day zero; one stays at room temperature, one in the fridge, one in the freezer, and one in a sealed dry box at room temperature as a control for moisture. My biggest error risk is judging mould area by eye, so I trace the mould edge onto transparent film each day and count grid squares to get an area.",
   "v": "accepted",
   "d": 3
  },
  {
   "s": 3,
   "q": 2,
   "a": "Yes. I planned to use zip-lock bags, but the first day the bread at room temperature got sweaty inside the bag. That would change moisture and affect mould, so I switched to paper bags for room temperature and kept plastic containers for fridge and freezer. I also found the freezer made the bread hard to handle, so I used tongs. My teacher said that's fine as long as I record it. I wrote in my log: 'Changed room temp containers from plastic to paper on day one because condensation formed.' That's a fair testing issue I had to fix.",
   "v": "accepted",
   "d": 1.86
  },
  {
   "s": 3,
   "q": 1,
   "a": "I'm capturing data in a table in my log: day number, temperature condition, repeat number, mould rating (0–5 scale), estimated area, and a description of colour and texture. I take a photo every day with a ruler in the frame for scale. I write notes about anything unusual, like if one slice got squashed. Tonight I'll record day three photos and ratings. I'll also note the fridge temperature was 4 °C and freezer -18 °C. I'll stick the photos into the log or keep them in a folder. I'll write one sentence about whether it matches my hypothesis so far.",
   "v": "accepted",
   "d": 1.74
  },
  {
   "s": 3,
   "q": 0,
   "a": "By day 5 the room-temperature slice had mould across roughly 22 grid squares, the fridge slice only three small spots, and the freezer slice none at all – though it went soggy during the daily photo check. Unexpectedly the sealed dry box at room temperature moulded slower than the plain room slice, which suggests moisture matters as much as temperature.",
   "v": "accepted",
   "d": 1.5
  }
 ],
 "emma": [
  {
   "s": 0,
   "q": 2,
   "a": "I'll cut potato cylinders with a cork borer, all same length, blot them dry and weigh them. Then I'll put them into sucrose solutions of 0.0, 0.2, 0.4, 0.6, 0.8 and 1.0 M for 30 minutes. After that I'll blot and reweigh each one and calculate the percentage change in mass. I'll plot that against sucrose concentration and find where the line crosses zero. That point is roughly the isotonic concentration, so it tells us the water potential of the potato cells. It's an extension of a class demo but more controlled.",
   "v": "accepted",
   "d": 10.36
  },
  {
   "s": 0,
   "q": 0,
   "a": "I picked osmosis. It's water moving from a high water potential to a low water potential through a partially permeable membrane. I chose it because the brief links it to food preservation like salting fish, and we've the equipment to test it with potato. I did a visking tubing demo before, but not with potato and sucrose. It's measurable by mass, so I can get numbers. Also I want to see the concentration where potato doesn't change mass, because that tells us something about the potato cells.",
   "v": "accepted",
   "d": 10.12
  },
  {
   "s": 0,
   "q": 1,
   "a": "Osmosis – water crossing a partially permeable membrane from a dilute solution to a more concentrated one. I chose it because the brief links it to food preservation like brining, and because we already have the equipment to test it properly with plant tissue.",
   "v": "accepted",
   "d": 10
  },
  {
   "s": 1,
   "q": 2,
   "a": "In my log I've dates and links. 14/09 I read BBC Bitesize osmosis. 16/09 I copied the SAPS potato method. 18/09 I watched a video on water potential. I wrote the sucrose molarities, potato mass, time and temperature. I reflected that I need the same potato, same borer and same blotting method, or the results won't be fair. I also wrote a question: does surface area matter? So I'll keep the cylinders the same size. I still need to check the SEC brief for referencing format.",
   "v": "accepted",
   "d": 8.36
  },
  {
   "s": 1,
   "q": 1,
   "a": "I found a SAPS potato osmosis protocol and a Royal Society of Biology page. One explained water potential in kPa, not just molarity, and said potato tissue has vacuoles, cytoplasm and cell walls. That added to my idea because I thought it was just water in and out, but the cell wall stops the cell bursting and the apoplast matters. Another source said temperature affects membrane permeability, so I'll control temperature. It made me plan repeats and be careful with blotting.",
   "v": "accepted",
   "d": 8.24
  },
  {
   "s": 1,
   "q": 0,
   "a": "How does the concentration of sucrose solution affect the change in mass of potato cylinders, and what does the concentration at which there is no change tell us about the water potential of the potato cells?",
   "v": "accepted",
   "d": 8
  },
  {
   "s": 2,
   "q": 0,
   "a": "As sucrose concentration increases, potato cylinders will lose more mass. I will put chips in six different solutions for an hour and weigh them before and after.",
   "v": "revise",
   "d": 6.5
  },
  {
   "s": 2,
   "q": 2,
   "a": "I need a potato, cork borer, scalpel, ruler, tile, blotting paper, balance, six boiling tubes, test tube rack, 10 cm3 measuring cylinder, sucrose solutions, distilled water, stopwatch, thermometer, labels and marker. I'll bring the potato from home and ask the lab technician for the sucrose solutions. Safety: cut away from fingers with the scalpel, wear goggles, and don't eat the potato. I'll ask my teacher to check the sucrose molarities and have everything labelled before the practical.",
   "v": "accepted",
   "d": 6.36
  },
  {
   "s": 2,
   "q": 1,
   "a": "Method: use a size 5 cork borer, cut 18 cylinders from one potato, trim to 3 cm, blot and weigh each. Label six boiling tubes 0.0 to 1.0 M sucrose and add 10 cm3 of each. Put three cylinders in each tube and start the timer. After 30 minutes, remove them, blot gently and reweigh. Calculate percentage change. Error is most likely from blotting too hard or not the same, potato skin left on, temperature changes, evaporation from tubes, or the balance drifting. Also cylinders drying out while waiting.",
   "v": "accepted",
   "d": 6.24
  },
  {
   "s": 2,
   "q": 0,
   "a": "Hypothesis: as sucrose concentration rises from 0 to 1.0 M, potato cylinders lose more mass by osmosis. I will change the sucrose concentration (0, 0.2, 0.4, 0.6, 0.8, 1.0 M) and keep cylinder diameter (same borer), length (4 cm), time (30 minutes) and temperature (room, recorded) constant, measuring percentage change in mass so chips of different starting weights compare fairly.",
   "v": "accepted",
   "d": 6
  },
  {
   "s": 3,
   "q": 2,
   "a": "The cork borer was blunt, so the first cylinders were ragged. I switched to a sharper one and cut extra. One balance was drifting, so I used the other one. The 0.0 M cylinders floated, so I tapped them down with a clean glass rod. I also changed from one cylinder per tube to three repeats per concentration because I had enough potato and it would make the averages better. I wrote all of that in my log.",
   "v": "accepted",
   "d": 4.36
  },
  {
   "s": 3,
   "q": 1,
   "a": "I've a results table in my log: sucrose M, initial mass, final mass, change in mass, percentage change, average. I took photos of the potato before and after and of the tubes. Tonight I'll write in all the raw masses, note the room was 21°C, and that some cylinders floated so I pushed them down with a glass rod. I'll also note the 1.0 M cylinders felt limp. I'll get my teacher to sign the page as evidence it's my own work.",
   "v": "accepted",
   "d": 4.24
  },
  {
   "s": 3,
   "q": 0,
   "a": "Three runs at each concentration using chips from the same potato, blotted and weighed before and after. Zero molar chips gained about 8% on average, the mass change crossed zero between 0.4 and 0.6 M, and 1.0 M lost about 19%. One 0.6 M chip gained mass instead of losing – I found I had swapped two beakers, so I repeated that run and used only the clean data, with the mix-up noted in my log.",
   "v": "accepted",
   "d": 4
  },
  {
   "s": 4,
   "q": 2,
   "a": "One 0.4 M cylinder lost 11% mass instead of around 3%. I think it was a thinner cylinder or I blotted it too hard. I marked it anomalous, left it out of the mean and used the other two. I repeated that concentration the next day and got -2.8%. I wrote in my log that anomalies can come from potato variation or handling. It made me trust the repeats more.",
   "v": "accepted",
   "d": 2.36
  },
  {
   "s": 4,
   "q": 1,
   "a": "My hypothesis was that as sucrose concentration increases, potato cylinders lose more mass. My results: 0.0 M gained about 8% mass, 0.2 M gained 2%, 0.4 M lost 3%, 0.6 M lost 9%, 0.8 M lost 15%, and 1.0 M lost 21%. So yes, it supports my hypothesis. At about 0.3 M there was no change, which is roughly isotonic to the potato cell water potential. When sucrose was more concentrated, water moved out by osmosis.",
   "v": "accepted",
   "d": 2.24
  },
  {
   "s": 4,
   "q": 0,
   "a": "Mean percentage change in mass falls steadily as concentration rises: +8.2%, +4.6%, +1.1%, −6.3%, −12.8% and −19.4% across the six concentrations. The line crosses zero just above 0.4 M, which estimates the water potential of the potato cells – the point where there is no net water movement between inside and outside.",
   "v": "accepted",
   "d": 2
  },
  {
   "s": 5,
   "q": 2,
   "a": "In the 'Refinements' section after my analysis, I explain how I changed from one trial to three repeats after the anomalous 0.4 M result, and how I controlled blotting after the first attempt. In the method I say I used the same potato and borer. In the conclusion I mention that if I did it again, I'd weigh the cylinders quicker and maybe use a finer balance. That shows how reflections shaped my decisions.",
   "v": "accepted",
   "d": 1.36
  },
  {
   "s": 5,
   "q": 1,
   "a": "I checked my draft against the SEC instructions. The word count is around 1,100, which is probably okay, but I need to check the brief. I have too many images, so I'll only keep clear ones and caption them. My structure is intro, research, method, results, analysis, conclusion, reflections, references. I need to add a reference for any AI use, even spellcheck, and make sure tables are labelled. I'll trim the method a bit.",
   "v": "accepted",
   "d": 1.24
  },
  {
   "s": 5,
   "q": 0,
   "a": "My repeats were close, so the means are reliable, but the zero-crossing is only estimated between two concentrations – more points between 0.2 and 0.6 M would sharpen it. I also assumed all chips came from the same potato; a different batch could shift the estimated water potential. Blotting time was timed consistently after my first run looked too light.",
   "v": "accepted",
   "d": 1
  }
 ]
};
```
