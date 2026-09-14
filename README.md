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
| `#/student/stage/:n` | Next question, answer box, mentor review panel ("What's working" / "Before you move on"), revise or accept |
| `#/student/answers` | Export preview under SEC report headings + AI use reference + Copy page |
| `#/teacher/board` | Pinned hand-raised queue, filter chips, ~8 student cards with status dots |
| `#/teacher/student/:id` | Profile: progress, last 3 submissions, full answers (every stage, every question, full text, verdicts), advice box, Authentication evidence log, View as student |
| `#/teacher/student/:id/as-student` | Read-only view of that student's stage map exactly as they see it |
| `#/teacher/student/:id/as-student/stage/:n` | Read-only stage view: their question, full answer and the review they received \u2013 no action buttons |
| `#/settings` | OpenRouter key (optional live AI) and demo-data reset |

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
- **Optional live AI:** in Settings, paste an OpenRouter API key (stored only in `localStorage`, never committed or sent anywhere except `openrouter.ai`). Submissions then go to `https://openrouter.ai/api/v1/chat/completions` with model `deepseek/deepseek-v4.1-flash`. The system prompt encodes the product's mentor rules (ask, never write; output JSON `{verdict, strengths[], nextQuestion}`). On any failure the app silently falls back to the canned script.

## State and the two-tab round-trip

All state is `localStorage`, keys prefixed `h1_`:

- `h1_persona`, `h1_student_geography`, `h1_student_biology` – student progress, answers, attempts, hand state, teacher messages and the activity log.
- `h1_roster` – the teacher's 8-student demo roster; the two "live" entries (Ava, Jake) are re-synced from the student state every time the teacher board renders, so raising a hand as the student changes the teacher board instantly.
- `h1_openrouter_key` – optional API key.

Sending advice from the teacher profile writes a message into the live student's state; the student's home shows it as a banner and fires a toast (live across tabs via the `storage` event). Sending advice also clears the raised hand. **Reset demo data** in Settings restores the seeded state for repeatable demos.

## Cost per student (estimate)

DeepSeek V4.1 Flash on OpenRouter is priced at about **$0.15 per million input tokens** and **$0.60 per million output tokens**. A full project involves roughly 150 review-and-next-question calls; at roughly 1,000 input and 200 output tokens per call that is about $0.04 of AI cost per project. Even at ten times that usage it stays well under €1 per student. Figures are estimates, not a quote.
