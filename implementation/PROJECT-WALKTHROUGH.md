# Creative Run Review — Complete Project Walkthrough

This document explains the entire HexCoded internship-artifact implementation track in plain language: why the project exists, what was investigated, what was built, what changed at every stage, how the application works, how it was tested, what the final decision means, and what remains unknown.

It covers Stages 0 through 10. The detailed evidence record remains in [`cumulative-report.md`](cumulative-report.md), while the shortest run-and-demo guide is [`FINAL-HANDOFF.md`](FINAL-HANDOFF.md).

## 1. The project in one sentence

**Creative Run Review is a small, local web application that helps a person compare several fictional AI-created image attempts for one brief, while keeping technical checks, human opinions, operational information, uncertainty, and the final decision clearly separate.**

That sentence contains the main design idea. The app does not try to decide which image is universally “best.” It helps a human explain a bounded decision.

For example, imagine three image attempts:

- A01 is technically the right size and a reviewer thinks it fits the brief well.
- A02 loads correctly, but its canvas is 1200 × 900 when the brief requires 1080 × 1080.
- A03 is technically valid, but its credit cost and elapsed time were never supplied.

The app records those as different kinds of information:

- A02 has an objective **Fail** for dimensions and aspect ratio.
- A03 has operational values marked **Unknown**.
- A reviewer may prefer A01, but that preference is a **human judgment**, not an objective fact.
- Selecting A01 means only “selected for this comparison.” It does not mean approved for publication, legally cleared, or the output of a generally superior model.

## 2. Why this project was kept separate from research

The repository contains two tracks:

| Track | Folder | Purpose |
|---|---|---|
| Research validation | `research/` | Investigate users, workflows, evidence, hypotheses, and whether a real opportunity is validated. |
| Internship artifact | `implementation/` | Plan, build, test, evaluate, and package a safe demonstration artifact. |

The research track’s strict validation gate is **0/13**. That means the repository does not contain the primary evidence required to say that a real user problem, buyer, recurring consequence, failed incumbent solution, safe data path, and economic opportunity have been validated.

The implementation track never changed that result. A working demo proves that code can behave as designed. It does not prove that anyone needs it.

An analogy helps:

- Building a good umbrella proves that the umbrella opens, closes, and resists a test spray.
- It does not prove that a particular city has enough rain, that people there want this umbrella, or that they will pay for it.

Similarly, this artifact can prove its own interface and logic. It cannot prove demand, adoption, return on investment, product-market fit, or a HexCoded need.

### Evidence labels used throughout the project

| Label | Plain-language meaning | Example |
|---|---|---|
| **Fact** | Directly supported by a named source or an observed implementation result. | “The pricing page publicly describes credits.” |
| **Inference** | A reasoned interpretation of facts. | “Credit visibility makes a source-labelled credit field relevant.” |
| **Hypothesis** | An idea that still needs testing. | “An AI creative intern might find this record useful.” |
| **Assumption** | Something treated as true so work can proceed, but not verified. | “A current desktop Chromium browser is available.” |
| **Unknown** | Information that is unavailable or not established. | “The real internal decision owner is Unknown.” |
| **Synthetic** | Invented demonstration data. | BR-SYN-001, A01, fictional credits, and fictional judgments. |
| **Public** | Openly available material with its source and limitations recorded. | A public HexCoded pricing page. |
| **Implementation result** | Behavior observed in the app or self-check. | “An unreadable image produces Unknown.” |

These labels were not cosmetic. They prevented the project from turning a polished demonstration into an unsupported business claim.

## 3. What the final application contains

The final artifact is a one-page localhost application in [`app/`](app/).

It has four main regions:

1. **Evidence boundary and brief** — explains that the demo is Synthetic and displays the frozen fictional brief.
2. **Attempt deck** — shows three default attempts and permits up to two more, for a total maximum of five.
3. **Comparison and decision** — summarizes objective states and asks the human operator to select an attempt, reject the set, or hold the decision.
4. **Export and reset** — creates metadata-only JSON, CSV, or Markdown and clears the in-memory session.

### The frozen fictional brief

The brief is `BR-SYN-001`, “Orbit Spring launch tile.” Orbit Spring is an invented kinetic desk sculpture, not a real brand or product.

The creative direction is:

- headline: “MAKE ROOM FOR WONDER”;
- palette: electric violet, warm coral, ivory, and near-black;
- no real people;
- no third-party brand marks; and
- one comparison only, not a general model ranking.

The objective constraints are:

| Constraint | Required value |
|---|---|
| Reported type | JPEG or PNG |
| Browser-observed dimensions | Exactly 1080 × 1080 pixels |
| Aspect ratio | 1:1 with tolerance ± 0.01 |
| Brief file-size limit | At most 5 MiB |
| Technical decode ceiling | 10 MiB |

The 5 MiB brief limit and 10 MiB technical ceiling are different:

- A readable 7 MiB image is over the brief limit, so file size can be **Fail**.
- Because 7 MiB is still below the technical ceiling, the browser may decode it and check its dimensions.
- An 11 MiB file is above the technical ceiling. The app does not decode it, and decode-dependent checks stay **Unknown**.

### The three default Synthetic attempts

| Attempt | File | Technical behavior | Human/operational teaching purpose |
|---|---|---|---|
| A01 — Signal | `attempt-01.png`, 1080 × 1080 | Five objective Pass states | Stronger fictional brief-fit judgment; 12 Synthetic credits and 34 Synthetic seconds. |
| A02 — Pressure | `attempt-02.jpg`, 1200 × 900 | Readability/type/size Pass; dimensions/aspect Fail | Shows that a readable image can still violate the brief; 9 Synthetic credits and 29 Synthetic seconds. |
| A03 — Drift | `attempt-03.png`, 1080 × 1080 | Five objective Pass states | Mixed fictional brief fit, a retry relationship, and Unknown credits/time. |

The fixtures are project-created Synthetic material. They are not actual provider outputs and are not evidence about model performance. Their prompts, provenance, dimensions, sizes, and limitations are documented in [`app/fixtures/README.md`](app/fixtures/README.md).

## 4. The most important design idea: separate different kinds of truth

Many evaluation tools become misleading because they combine unlike things into one score. This project deliberately avoids that.

### Objective checks

These answer narrow questions about file properties:

- Did the browser decode the image?
- Is the reported MIME type JPEG or PNG?
- Are the browser-observed dimensions 1080 × 1080?
- Is the calculated aspect ratio within the allowed tolerance?
- Is the browser-reported file size within 5 MiB?

These checks do not determine visual quality, factuality, rights, consent, provenance, or approval.

### Human judgments

The human rubric asks three questions:

| Question | 0 | 1 | 2 | Other state |
|---|---|---|---|---|
| Brief fit | Misses an explicit requirement | Partly meets it or is uncertain | Meets it for this comparison | Not assessed |
| Craft / legibility | Material visible defect | Mixed or needs revision | Acceptable for this comparison | Not assessed |
| Continuity / coherence | Material inconsistency | Mixed or uncertain | No material issue observed | Not assessed |

These are opinions tied to one brief and one reviewer. The app does not average them or convert them into an objective quality score.

### Operational context

Each attempt may record:

- relationship: original, retry, revision, failed render, or Unknown;
- predecessor attempt ID;
- charged-credit value and unit;
- credit source: Synthetic, observed service display, entered actual, entered estimate, or Unknown;
- credit precision: exact, estimate, range, or Unknown;
- elapsed-time value and unit;
- elapsed-time source and precision; and
- limitation notes.

Blank means Unknown. Zero is allowed when explicitly entered. Negative, non-numeric, `NaN`, and infinite values are rejected or remain Unknown. Values are not normalized across providers and are never used to calculate cost per quality, savings, ROI, or a model ranking.

### Provenance

The record distinguishes:

- Synthetic;
- Public;
- user-owned local; and
- Unknown.

A user-owned declaration means only that the person says local inspection is permitted. It does not prove ownership, consent, legal clearance, or publishing authority.

### Human-owned decision

The available outcomes are:

- `Selected for this comparison`;
- `Rejected set`; or
- `Hold / no decision`.

The app never chooses automatically. Selection requires a specific attempt and rationale. A technical Pass cannot cancel a human concern or another Unknown.

## 5. Pass, Fail, Unknown, and Not applicable

These statuses have strict meanings:

| Status | Meaning | Example |
|---|---|---|
| **Pass** | A valid observed value satisfies a predeclared rule. | Decoded dimensions are 1080 × 1080. |
| **Fail** | A valid observed value contradicts a predeclared rule. | Decoded dimensions are 1200 × 900. |
| **Unknown** | The required evidence is absent, invalid, unreadable, unsupported, unsafe to decode, or unreliable. | The file cannot be decoded, so dimensions are Unknown. |
| **Not applicable** | The property deliberately does not apply. | Video duration for a still image. |

The central safety rule is:

> Missing, unsupported, unreadable, oversized-for-decoding, zero, `NaN`, and `Infinity`-dependent checks never become Pass.

For example, if an image reports `image/png` but the browser cannot decode it:

- reported type is not treated as proof that the file is a valid readable PNG;
- readability is Unknown;
- dimensions are Unknown;
- aspect ratio is Unknown; and
- file-size treatment depends on whether a valid readable observation exists under the frozen rules.

This is deliberately conservative. “We could not check it” is not the same as “it passed.”

## 6. Stage-by-stage walkthrough

## Stage 0 — Define the track before choosing a build

### The question

Stage 0 asked: what artifact could demonstrate thoughtful product and technical work without pretending that research had validated a product opportunity?

### What was done

Five candidate directions were compared:

1. **Release Integrity Checker** — compare approved creative/version/caption/channel information with a scheduled or published record.
2. **Evidence-Gated Research Console** — keep claims, sources, limitations, and gate status in a structured ledger.
3. **Synthetic Authorized Release Record** — keep proof/version, decision, authority, schedule, and final-post identifiers together.
4. **Rights/Consent Evidence Companion** — link permission and licence states without copying sensitive documents.
5. **Creative Run Review** — compare creative attempts using technical checks, human review, operational context, and an explicit decision.

The selection criteria were:

- public-context relevance to HexCoded;
- internship learning and demonstration value;
- local/offline feasibility;
- safety with Synthetic/Public inputs;
- decision learning beyond a basic spreadsheet; and
- reversibility and killability.

The weighted planning scores were:

| Direction | Score /100 | Why it landed there |
|---|---:|---|
| Release Integrity Checker | 68 | Clear boundary, but strongly overlaps existing social/release controls and the parked H2 hypothesis. |
| Evidence-Gated Research Console | 69 | Safe and simple, but less connected to HexCoded’s creative workflow. |
| Synthetic Authorized Release Record | 66 | Already exercised by the separate research track; limited new learning. |
| Rights/Consent Evidence Companion | 56 | Relevant but sensitive, legally bounded, and potentially duplicative. |
| Creative Run Review | **86** | Best connection to the internship’s model-learning context and a safe local demonstration. |

These scores were planning judgments, not user or market evidence.

### The Stage 0 decision

Creative Run Review became the provisional direction. Stage 0 defined its intended outcome, minimum scope, non-goals, safe input classes, demo flow, artifact success criteria, kill criteria, Unknowns, founder learning, and the later stage sequence.

### Important non-goals set immediately

The project would not become a generator, model router, prompt optimizer, automatic aesthetic scorer, media editor, DAM, proofing suite, scheduler, publishing system, rights registry, legal-clearance tool, disclosure engine, telemetry service, team-auth system, or customer product.

### Example of Stage 0 discipline

It would have been easy to say, “HexCoded has many models, so it needs a model-ranking dashboard.” That would invent both a need and a solution. Stage 0 instead allowed only a much smaller claim: a Synthetic local record might be a useful internship demonstration, and later stages must still compare it with no-build.

### Gate and Unknowns

No code was authorized. Unknowns included the real internal workflow, operator, rubric, media scope, provider data, spreadsheet sufficiency, safe retention behavior, and all user/buyer/value questions. The research gate stayed 0/13.

## Stage 1 — Refresh only the public HexCoded context

### The question

Was Creative Run Review still honestly connected to current public facts, or was even that connection speculative?

### Sources reviewed

Eight first-party public sources were recorded with dates and limitations:

1. HexCoded homepage;
2. HexCoded pricing page;
3. Terms of Service;
4. Privacy Policy;
5. AI-Content Disclosure;
6. Actor Licence;
7. Become an Actor page; and
8. One Impression’s public AI Generalist Intern listing.

### What those sources supported

- HexCoded publicly described multi-model image, video, and edit creation.
- The public pages described model switching, a shared credit balance, cost visibility before rendering, and failed-render treatment.
- Team/Scale material mentioned pooled credits, multiple members, usage analytics, and API access at certain plan levels.
- Terms and disclosure pages said AI output may contain errors or artefacts and requires human review.
- Privacy and actor materials showed that brand inputs, outputs, actor likenesses, identity, consent, and payout information can be sensitive.
- The internship listing explicitly emphasized learning what models are good at, what they cost, where they fail, checking output, and selecting an appropriate model.

### What those sources did not support

They did not prove an internal comparison workflow, a missing tool, product demand, a buyer, actual provider quality, account behavior, export availability, or that anyone would use this artifact.

The public model count also differed: the product/pricing pages said 30+ frontier models while the internship listing said sixteen video/image models. That showed why the artifact must not hard-code a supposedly permanent model catalogue.

### Stage 1 decision

Keep Creative Run Review as the provisional candidate. Optional model/provider, retry, credit, and time fields were justified as raw, source-labelled context—not as rankings or economic metrics.

### Example

If a user enters “Model X” and “12 credits,” the app stores exactly those entries with a source and limitation. It does not conclude that Model X is cheaper, better, or more efficient than Model Y.

### Gate and Unknowns

Stage 1 authorized only Stage 2 method research. No code, account, private data, fixture, or integration was created. H2 remained parked and research stayed 0/13.

## Stage 2 — Design an honest evaluation method

### The question

How can several creative outputs be compared without pretending subjective opinion is objective truth?

### The seven-step method

1. Declare one brief, one media family, three to five attempts, a decision-owner label, and objective constraints before inspection.
2. Record each attempt as an attempt—not as proof about a model—with an ordinal, optional provider/model, provenance, and relationship.
3. Run only declared, locally observable checks.
4. Record the fixed human rubric independently.
5. Add compact failure tags and raw operational context.
6. Make a bounded Selected/Rejected/Hold decision with rationale.
7. Export the record without copying media.

### Failure taxonomy

The method separated:

- objective constraint failure;
- human quality judgment;
- Unknown or unsupported result;
- rights or consent concern;
- provenance or disclosure concern;
- process or decision failure; and
- render or retry event.

This matters because these states require different responses. A 1200 × 900 image is a dimension failure. An image that cannot decode is Unknown. A missing decision owner is a process problem. None of those alone proves poor artistic quality or a legal issue.

### Operational definitions

- `retry` counts only an attempt explicitly labelled retry;
- revision and failed render remain different relationships;
- credit/time values remain per attempt;
- source, date, precision, and limitation must be retained;
- Synthetic, observed, estimated, and Unknown values are never totaled together; and
- no currency conversion, ROI, productivity, or cost-per-quality metric is calculated.

### Planned decision record

The future export needed record/version information, the brief, constraints, provenance, attempt identity, each objective check, each human response, failure tags, operational fields, decision, rationale, next action, limitations, and explicit statements about what the record cannot establish.

### Three teaching cases were defined

| Case | Purpose |
|---|---|
| S1 — selection with judgment | Show an image selection based on separate objective checks and human reasoning. |
| S2 — objective failure and Unknown | Show the difference between a valid failed constraint and an unreadable/unsupported observation. |
| S3 — governance and operational uncertainty | Show a Hold when required rights/disclosure or operational context is unresolved. |

No fixture was created in Stage 2; these were method examples only.

### Spreadsheet comparator

The simplest comparator was one row per attempt with columns for constraints, observations, statuses, human rubric, tags, operational provenance, decision, and limitations. If that table preserved the same distinctions with equal or lower effort, no-build should win.

### Stage 2 decision

The method was considered coherent enough to take into an alternatives comparison. No software was authorized.

## Stage 3 — Ask whether software should exist at all

### The question

What is the cheapest existing way to produce the intended record?

### Alternatives considered

- spreadsheet/CSV plus native local file information;
- native browser/local file information by itself;
- existing experiment trackers and adjacent creative-review tools;
- a folder and naming convention;
- a small local Creative Run Review app; and
- a final no-build outcome using the spreadsheet/native baseline.

### Comparison result

The planning matrix used nine criteria scored 0–2: one-brief coverage, objective/human separation, Unknown/provenance, retry/credit/time, local/Synthetic fit, effort, privacy exposure, clear export, and reversibility.

| Alternative | Score /18 | Main finding |
|---|---:|---|
| Spreadsheet/CSV + native information | **18** | Could manually represent the entire method. |
| Native browser/local files alone | 9 | Supplies some file properties but no complete decision record. |
| Existing trackers/review tools | 6 | Publicly documented coverage was partial; configuration and access remained Unknown. |
| Folder naming convention | 12 | Helps identity but cannot hold the full decision. |
| Small local app | 15 | Could constrain omissions but adds build and maintenance burden. |
| No-build table outcome | **18** | Same sufficient table method with no new software surface. |

### Stage 3 decision

The no-build spreadsheet/CSV plus native-information baseline won. The recommendation was **Reduce** further technical work and do not assume an application was needed.

The possible app distinction—constrained fields that make omissions and Unknowns harder to hide—remained Unknown.

### Example

A spreadsheet can have columns named `dimensions_status`, `human_brief_fit`, and `credit_source`. That is enough to store the information. The app would only earn its existence if making those distinctions visible and enforced created a better internship demonstration.

### Scope removed or deferred

Video-first support, broad codecs, provider catalogues, rankings, routing, generation, media storage, automatic scoring, analytics, collaboration, approval/publishing, rights decisions, accounts, APIs, databases, and customer framing were excluded.

## Stage 4 — Check technical feasibility and trust boundaries

### The question

If an app were later allowed, what is the smallest technically safe form it could take?

### Public platform facts reviewed

Browser documentation established that:

- file inputs expose files chosen by the user;
- the HTML `accept` attribute is a chooser hint, not validation;
- image dimensions are available only after successful decode and may be zero when unavailable;
- video metadata is much more dependent on containers, codecs, and browser support;
- media duration can be `NaN` or `Infinity`;
- object URLs retain references and should be revoked;
- live regions can announce dynamic status; and
- `prefers-reduced-motion` can respect reduced-motion preferences.

### Technical decision

The no-build table remained sufficient. The only acceptable future app path was reduced to:

- current desktop Chromium on localhost;
- JPEG/PNG only;
- optional user-selected local files;
- browser-observed name/type/size/dimensions/aspect;
- in-memory state only;
- metadata-only export; and
- no dependencies or network.

Video automation was deferred because format/container/codec support would expand uncertainty and testing burden.

### Data flow

```text
Synthetic or permitted local description
    → manual brief and attempt fields
    → optional local JPEG/PNG chosen by the user
    → in-memory browser observation
    → separate objective/human/operational/Unknown record
    → explicit metadata-only export
```

### Trust boundaries

- No directory scanning, path capture, camera access, background collection, or drag-and-drop requirement.
- No `localStorage`, `sessionStorage`, IndexedDB, Cache Storage, service worker, database, or server log.
- No EXIF parsing, file-signature proof, transcoding, upload, remote fetch, or media export.
- Object URLs must be revoked when replaced, after failure, on clear, and on unload where applicable.
- Unsupported or invalid properties remain Unknown.
- Export must omit media bytes, `File` objects, paths, object URLs, decoded pixels, and hidden runtime state.

### Minimum data contract drafted

The planned record included:

- schema and review identity;
- brief and constraints;
- attempt identity and relationship;
- runtime-only file reference;
- visible file observations;
- individual objective checks;
- human rubric;
- raw retry/credit/time context;
- provenance and separate governance concerns;
- human decision; and
- export metadata.

### Accessibility requirements drafted

Native labelled controls, semantic headings, keyboard operation, visible focus, literal text statuses, associated errors, a polite live region, no required drag/drop or hover, meaningful preview alternatives, no autoplay, and reduced-motion support were made minimum requirements.

### Required future self-check

At minimum it had to prove:

- 1024 × 1024 against a 1:1 rule can Pass in the generic feasibility example;
- absent/unreadable observations are Unknown; and
- zero, `NaN`, or `Infinity` cannot become Pass.

The later frozen brief changed the actual application dimensions to 1080 × 1080.

### Stage 4 decision

Stop a custom app by default and retain the table. Stage 5 could override that only for a specific, bounded internship demonstration and only if all safety and Unknown rules were frozen.

## Stage 5 — Make the build decision and freeze the specification

### The question

Should the project stop at a spreadsheet, build a reduced artifact, or build the proposed local app?

### Decision

Stage 5 recorded **Go** for a polished local application.

This did not mean the app beat a spreadsheet operationally. It meant the internship goal explicitly valued a convincing interactive technical artifact. The app could demonstrate local decoding, constrained states, accessibility, cleanup, validation, and structured exports in a way a plain table would not demonstrate as clearly.

### Four-way internship comparison

The matrix weighted demo/storytelling, clarity, complete method coverage, interactive technical learning, local safety, delivery effort, and reversibility.

| Alternative | Score /100 | Decision |
|---|---:|---|
| Spreadsheet/native baseline | 70 | Mandatory comparator and cheapest record. |
| Polished dynamic local app | **94** | Selected for the internship demo. |
| Reduced local app | 81 | One-day fallback. |
| Stop/no-build | 47 | Valid only if hard boundaries failed. |

Again, these were internship-planning scores, not market evidence.

### Frozen architecture

- One locally hosted single-page web application.
- Vanilla HTML, CSS, and JavaScript.
- In-memory client state.
- No framework, package manager, build system, backend, database, authentication, telemetry, remote assets, upload, service worker, Appwrite, cloud sync, or live API.
- Current desktop Chromium on localhost as the supported demonstration environment.

### Frozen scope

- One fictional brief: `BR-SYN-001`.
- Exactly three default Synthetic JPEG/PNG fixtures.
- Two optional additional cards, for five total maximum.
- Local JPEG/PNG selection and preview.
- Browser-native readability, reported type, dimensions, aspect ratio, and file-size checks.
- Three-part human rubric and approved failure tags.
- Raw retry/credit/time fields with source, precision, and limitation.
- Selected/Rejected set/Hold decision with rationale and next action.
- Metadata-only JSON, CSV, and Markdown export.
- Clear-session behavior and object-URL cleanup.
- One dependency-free assertion self-check.

### Approved failure tags

- brief mismatch;
- visible technical defect;
- composition/legibility;
- text rendering;
- unexpected model behavior;
- other; and
- none observed.

These are human labels, not automated diagnoses.

### UI states and regions

The page had to support empty, checking, ready, Pass, Fail, Unknown/unsupported, Not assessed, validation error, selected, rejected-set, Hold, export success/error, and cleared states.

It deliberately excluded accounts, settings, dashboards, modals, notifications centers, loading skeletons, and multi-screen navigation.

### Objective rules frozen in detail

1. Readability Pass only after successful decode.
2. Reported type Pass only when the MIME is allowed and the image decodes; disallowed present type can Fail; absent/unreliable/unreadable stays Unknown.
3. Dimensions compare positive finite browser-observed values with 1080 × 1080.
4. Aspect ratio is calculated only from positive finite width and height and compared with 1.0 ± 0.01.
5. File size compares a finite browser-reported value with 5 MiB; above 10 MiB is not decoded.
6. Not applicable is used only for a deliberately irrelevant property.
7. No status offsets another status or a human concern.

### Export calculations and validation frozen

- Attempt count: 3–5.
- Retry count: attempts explicitly labelled retry only.
- No totals across incompatible operational sources/units.
- Numbers must be finite and non-negative.
- Blank means Unknown; entered zero is retained.
- JSON is canonical nested output.
- CSV is one row per attempt.
- Markdown is the human-readable record.
- All formats preserve Unknowns, limitations, sources, and decisions and escape special characters.

### One-day reduction and one-week maximum

The one-day fallback kept only three attempts, preview/checks, human rubric, decision/rationale, Markdown export, clear, and self-check.

The one-week maximum added the complete 3–5-card workflow, full states, operational provenance, all three exports, polished layout, accessibility, and cleanup. Anything not explicitly named was discarded.

### Success and kill conditions

The artifact would succeed if one Synthetic brief could be completed end to end; supported checks were deterministic; Unknowns stayed Unknown; evidence types stayed separate; the human made the decision; all three metadata-only exports passed; no network/dependency/persistence appeared; accessibility basics passed; and Stage 9 could honestly compare it with the sheet.

It would be reduced or killed if unsupported media became Pass, data left the page improperly, exports contained media/runtime references, a dependency/backend/account/private input became necessary, accessibility could not be fixed within scope, the project grew into a different product, the one-week maximum failed, or the app was no clearer as an internship demo than the spreadsheet.

### Stage 5 gate

Stage 6 was explicitly authorized to build only the frozen artifact. Stage 5 itself created no code or fixtures.

## Stage 6 — Build the vertical slice

### What was created

The application was implemented in [`app/`](app/) with:

- `index.html` — semantic one-page structure;
- `styles.css` — visual system, responsive grid, focus, status styling, and reduced motion;
- `app.mjs` — in-memory state, rendering, local-file handling, decision UI, downloads, and cleanup;
- `logic.mjs` — pure classification, validation, record-building, and serialization logic;
- `self-check.mjs` — dependency-free assertions;
- an app README;
- a fixture provenance README; and
- exactly three Synthetic raster fixtures.

### What the vertical slice could do

- Load the three fixtures for BR-SYN-001.
- Add two empty attempt cards and stop at five.
- Replace a fixture with a permitted local JPEG/PNG.
- Create an in-memory object-URL preview.
- Display browser-observed file properties and five separate statuses.
- Record human ratings, notes, tags, provider text, relationships, credits, and elapsed time.
- Require a human-owned Selected/Rejected/Hold outcome and rationale.
- Export metadata-only JSON, CSV, or Markdown.
- Clear state and release active object URLs.

### Self-check coverage

The initial self-check covered:

- exact-square Pass;
- non-square Fail;
- missing, unreadable, unsupported, and oversized states;
- zero, `NaN`, and `Infinity` dependencies;
- operational parsing;
- retry counting;
- serializer escaping;
- explicit Unknown and limitation preservation; and
- exclusion of `File`, object URLs, paths, media bytes, decoded pixels, previews, and hidden runtime state.

### Browser verification

The app loaded through a local Python HTTP server in Chromium. The default flow produced:

- A01: five Pass;
- A02: Pass readability/type/size and Fail dimensions/aspect; and
- A03: five objective Pass with operational Unknowns.

Supported import, wrong reported type, unreadable content, negative operational input, all decision outcomes, the five-card maximum, export actions, clear-session, responsive layout, keyboard focus, labels, reduced motion, and a clean console were exercised.

### Stage 6 limitations

Other browsers, assistive-technology usability, smaller-than-768-pixel layouts, all malformed-image variants, process-level memory reclamation, browser download placement, a real workflow, a real rubric, and user preference remained Unknown.

The runtime did not expose a separate verifiable switch to the requested Stage 6 model allocation, so no model-switch claim was made.

## Stage 7 — Stabilize the frozen core

### The question

Did the Stage 6 implementation faithfully satisfy the frozen requirements, or did it contain subtle defects?

### Defects corrected

1. **Automatic decision problem.** The session previously appeared to select A01 automatically. It was changed to start at Hold/no decision with empty rationale and no visible selected-attempt control.
2. **Stale preview/provider state.** Starting a local replacement now clears the previous fixture preview and invented Synthetic provider label.
3. **Hidden provider field.** The optional model/provider value became a visible labelled exact-entry field. It still has no ranking role.
4. **Whitespace numeric parsing.** Whitespace-only operational input stays Unknown rather than becoming numeric zero.
5. **Validation persistence.** Invalid finite/non-negative errors survive rerenders through `aria-invalid` and are announced politely.
6. **Provenance fallback.** An empty non-Synthetic attempt exports permitted use as Unknown rather than a Synthetic-fixture statement.
7. **CSV completeness.** CSV gained the frozen input limitation, permitted-use statement, retry count, and summary note.
8. **Documentation accuracy.** A prior statement claimed URL revocation on attempt removal, but the frozen UI has no removal control. Documentation was corrected to replacement, decode failure, clear, and unload.

### Verification performed

- Syntax and self-check passed.
- Default, supported, failed-constraint, unsupported, and unreadable flows worked.
- Provider and human inputs were retained.
- Negative values failed; whitespace became Unknown; entered zero was preserved with source/precision.
- Selected, Rejected set, and Hold showed the correct controls.
- JSON/CSV/Markdown actions announced exports.
- Five-card ceiling held.
- Clear reset to three empty cards and fifteen Unknown checks; a tested active URL was revoked.
- At 768 CSS pixels, the layout had no horizontal overflow.
- Keyboard focus, labels, semantic regions, literal statuses, live messages, and reduced motion remained present.

### An important scope conflict was resolved

The generic Stage 7 brief mentioned older ideas such as video, 2–6 attempts, totals, persistence, save/reload, and print. Its own instructions said the Stage 5 frozen artifact should govern. Therefore the implementation stayed image-only, 3–5 attempts, without totals, persistence, save/reload, or print.

This was a good example of scope control: later generic wording did not silently override the explicit build gate.

## Stage 8 — Harden and test the release candidate

### Root-cause fixes

Two remaining shared defects were found:

1. **Allowed type plus unsupported decode.** An allowed MIME with an unsupported decoder state was incorrectly labelled Fail. It now remains Unknown until a readable image exists. A known disallowed reported type remains Fail.
2. **Visually implicit selected attempt.** When the Selected outcome was chosen, the dropdown looked like A01 was selected even though stored state was empty and export correctly blocked. A first option, `Choose an attempt`, made the required human selection explicit.

The self-check gained an assertion for the first case.

### QA performed

- JavaScript syntax and the self-check passed.
- A fresh Chromium localhost load showed exactly three default fixtures.
- Supported PNG import produced five Pass states, changed provenance to user-owned local, and cleared stale provider metadata.
- A CSS file produced reported-type Fail plus decode-dependent Unknowns.
- A deliberately unreadable `.png` produced five Unknowns and no preview.
- Oversized behavior was covered in pure logic and did not decode above 10 MiB.
- Two cards could be added; the button disabled at five.
- At five cards, all 139 form controls had labels, generated IDs were unique, and all `aria-describedby` targets resolved.
- Negative credit showed `aria-invalid`, visible error copy, and a live announcement.
- Explicit zero remained a real value with source and precision.
- Selected required an explicit attempt; Rejected set and Hold retained no selected attempt.
- JSON, CSV, and Markdown export actions announced success.
- Serializer checks confirmed media/runtime exclusion.
- Clear returned to three cards, Hold, no preview, and fifteen Unknowns; a local-file test announced one revoked object URL.
- At 768 CSS pixels, content width remained inside the viewport.
- Tab focus reached the skip link with a 3-pixel visible outline.
- Literal text statuses, preview alternatives, reduced-motion CSS, and error associations were present.
- No console errors were observed.
- Static review found no network, telemetry, persistence, remote-asset, form-action, or credential path.
- The fixture folder ended with exactly the three approved images and its README.

### Stage 8 release status

The frozen artifact became a release candidate within the internship scope. JSON remained export-only, so malformed JSON import was not an application surface. Individual attempt removal remained intentionally absent.

Other browsers, assistive-technology usability, malformed-file breadth, process memory, download placement, safe memory ceiling, actual workflow, rubric, and value remained Unknown.

## Stage 9 — Run the demo and try to falsify the build

### The question

Was the app actually a clearer internship demonstration than the cheapest spreadsheet/native alternative, or should it be reduced or killed?

### Exact demo result

The frozen BR-SYN-001 flow loaded:

- A01 with five Pass checks and stronger fictional human fit;
- A02 with two objective Fails;
- A03 with five Pass checks but Unknown operational values; and
- Hold/no decision as the safe starting outcome.

The operator changed the outcome to Selected, explicitly chose A01, entered a rationale that separately named A01’s checks/human fit, A02’s objective failures, and A03’s operational Unknown, then triggered JSON, CSV, and Markdown metadata-only export actions and cleared the session.

The measured automated interaction timings were:

- decision-field entry: 33 ms;
- three export actions: 165 ms;
- clear-session: 43 ms; and
- dependency-free self-check: 0.11 seconds wall time during that run.

These were automation timings, not human task-time or savings claims.

### Spreadsheet/native comparison

The same rows were repeated in a transient, unsaved spreadsheet-style record. It selected A01 for the same reasons.

| Dimension | App | Spreadsheet/native baseline |
|---|---|---|
| Clarity | Guided brief → attempts → decision flow | Understandable, but grouping depends on careful columns |
| Burden | Requires localhost and card entry | Lowest setup burden |
| Transparency | Persistent evidence boundary and visible source/limitations | Can hold the same information if entered carefully |
| Unknown preservation | Constrained literal states | Possible, but relies on operator discipline/formulas |
| Export usefulness | JSON, CSV, and Markdown with a tested whitelist | CSV/table is simple and portable |
| Accessibility basics | Observed labels, focus, semantics, live region, reduced motion | Not audited; remains Unknown |
| Reversibility | No persistence and explicit clear | Most reversible because there is no build/runtime |

### Stage 9 decision

**Ship/package the existing app for the internship demonstration only.**

The table still won on setup burden and reversibility and reached the same decision. The app earned Ship because the internship artifact needed to demonstrate constrained behavior, technical implementation, accessibility basics, local image inspection, Unknown preservation, and transparent exports in a guided interface.

This was not a production adoption recommendation. If the question had been “what should a real team use today?”, the no-build table remained the baseline because no real workflow had been observed.

## Stage 10 — Package the final handoff

### What was added or updated

- [`FINAL-HANDOFF.md`](FINAL-HANDOFF.md) became the single founder-facing entry point.
- [`README.md`](README.md) gained the final track status and handoff link.
- [`app/README.md`](app/README.md) gained final run/check guidance and a link back to the handoff.
- `cumulative-report.md` and `handoff.md` were marked complete through Stage 10.

No application code, fixture, feature, dependency, deployment, account, publication, or external message was added.

### What the final handoff contains

- minimal setup and run instructions;
- exact self-check command and expected output;
- fixture provenance, sizes, dimensions, and SHA-256 hashes;
- a timed three-minute demo script;
- expected Synthetic results;
- a one-page explanation of the framing, behavior, technical choices, privacy/rights boundary, and reversibility;
- claims that must not be made;
- limitations, assumptions, and Unknowns;
- build-versus-spreadsheet and kill history;
- founder-facing message;
- clean package inventory; and
- final closed-track state.

### Final verification

- `logic.mjs` and `app.mjs` passed Node syntax checks.
- The self-check passed in 0.09 seconds in the final packaging run.
- The documented Python localhost command loaded the application in a fresh Chromium tab.
- A01 selection, the documented rationale, Markdown metadata-only export announcement, and clear-to-fifteen-Unknowns were reproduced.
- Static scanning found no network or persistence path.
- Fixture formats, dimensions, sizes, and hashes matched the package record.
- The implementation package contained 26 files and no build directory, dependency manifest, lockfile, cache, temporary test payload, credential, or account configuration.
- Only implementation documentation changed during packaging; `research/` remained untouched.

### Final state

Stages 0–10 are complete. No later implementation stage exists. The project was not deployed or published, and HexCoded was not contacted.

## 7. How the code works

### File responsibilities

| File | Responsibility |
|---|---|
| `app/index.html` | Semantic page skeleton, brief, main regions, decision controls, export/reset controls, and live region. |
| `app/styles.css` | Studio-style visuals, responsive attempt grid, status presentation, focus styling, and reduced-motion behavior. |
| `app/app.mjs` | In-memory state, rendering, events, local file decoding, object URLs, decisions, downloads, and cleanup. |
| `app/logic.mjs` | Pure rules for observations, operational parsing, retry counts, export records, and JSON/CSV/Markdown serializers. |
| `app/self-check.mjs` | One dependency-free assertion suite for the non-trivial pure logic. |
| `app/fixtures/*` | Three Synthetic images and their provenance record. |

The separation between `app.mjs` and `logic.mjs` is practical:

- `app.mjs` handles browser behavior and visible state.
- `logic.mjs` handles rules that can be tested without opening a browser.

For example, “is an aspect ratio within tolerance?” belongs in pure logic. “Show the updated status card and announce it in the live region” belongs in the browser layer.

### State lifecycle

```text
Page opens
  → three Synthetic attempts are loaded
  → operator may replace a fixture or add up to two cards
  → browser observes file properties in memory
  → pure logic creates independent statuses
  → operator enters human and operational information
  → operator makes a bounded decision
  → serializer builds a metadata-only snapshot
  → explicit download action creates JSON, CSV, or Markdown
  → clear/reset removes page state and releases active object URLs
```

Nothing is silently persisted. Reloading the page starts a new session.

### Why object URLs matter

A browser can create a temporary URL that points to a local `File` object in memory. That lets an `<img>` show a preview without uploading the image.

However, the temporary URL keeps a reference alive. The app therefore revokes it when the file is replaced, decoding fails, the session is cleared, or the page unloads. This is resource cleanup, not a certified deletion guarantee.

### How export safety works

The export is built from an explicit metadata record rather than serializing the whole application state.

That distinction prevents accidental leakage. Runtime state may contain a `File` object or object URL, but the export whitelist contains only fields such as:

```json
{
  "attemptId": "A01",
  "inputClass": "Synthetic",
  "reportedType": "image/png",
  "objectiveChecks": [
    { "property": "dimensions", "status": "Pass" }
  ],
  "humanJudgment": {
    "briefFit": "2"
  }
}
```

It does not include image bytes, object URLs, file handles, absolute paths, decoded pixels, previews, or hidden state.

### Why there is only one self-check

The project deliberately has one small dependency-free check instead of a test framework and dozens of files. It is enough to fail when the important pure logic breaks.

It covers the dangerous boundaries:

- false Pass from missing or invalid evidence;
- incorrect dimensions/aspect classification;
- bad numeric parsing;
- incorrect retry counting;
- broken escaping; and
- accidental runtime/media leakage into exports.

The command is:

```sh
node implementation/app/self-check.mjs
```

## 8. How to run the final project yourself

From the repository root:

```sh
node implementation/app/self-check.mjs
```

Expected output:

```text
Creative Run Review self-check passed.
```

Then start the local server:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory implementation/app
```

Open:

```text
http://127.0.0.1:4173/
```

Use a current desktop Chromium browser. Do not open `index.html` directly because browser JavaScript modules require an HTTP origin.

Stop the server with `Ctrl-C`.

## 9. A guided example from beginning to end

1. Read the fixed brief and constraints.
2. Notice that A01 and A03 pass all five objective checks.
3. Notice that A02 loads successfully but fails dimensions and aspect ratio.
4. Compare the separate human notes: A01’s headline and product hierarchy are stronger for this fictional brief; A03 is technically valid but its hierarchy is less immediate.
5. Notice that A03’s credits and elapsed time remain Unknown. Do not silently treat them as zero.
6. Change the decision from Hold to Selected.
7. Explicitly choose A01.
8. Enter this rationale:

   > A01 meets all five browser checks and the strongest human fit; A02 fails the square constraints, while A03 has an Unknown operational record. Select A01 for this comparison.

9. Enter `Complete human content review before any use` as the next action.
10. Export JSON, CSV, or Markdown. The media remains outside the record.
11. Clear the session. The three cards return to empty Unknown states and the decision returns to Hold.

The lesson is not “A01 is the best AI image.” The lesson is “for this fictional brief, this reviewer made this bounded choice for explicitly separated reasons.”

## 10. Accessibility behavior included in the artifact

The project preserved accessibility basics throughout implementation:

- semantic headings and regions;
- a skip link;
- native form controls;
- explicit labels and fieldsets;
- visible keyboard focus;
- logical keyboard order;
- literal Pass, Fail, Unknown, and Not assessed text;
- status meaning that does not rely on color alone;
- error messages associated with invalid controls;
- polite live-region announcements for dynamic results;
- preview alternative text that identifies the attempt without inventing an image description;
- responsive reflow at the frozen 768 CSS-pixel target;
- no required drag/drop, hover, autoplay, audio, flashing, or parallax; and
- `prefers-reduced-motion` support.

Stage 8 verified DOM labels, unique IDs, error references, focus appearance, reflow, and reduced-motion CSS. It did not complete testing with actual assistive-technology users, so full accessibility usability remains Unknown.

## 11. Privacy, rights, security, and retention boundaries

### What the app does

- Reads only files the user explicitly chooses.
- Keeps selected images in the active browser page.
- Creates revocable in-memory preview URLs.
- Exports metadata and judgments only after a user action.
- Provides an explicit clear-session action.

### What it does not do

- No upload or network request.
- No API or model call.
- No authentication or account.
- No backend, database, Appwrite, cookie, local storage, IndexedDB, cache, or service worker.
- No telemetry, analytics, or beacon.
- No EXIF extraction, hashing in the app, signature verification, thumbnail export, transcode, or media copy.
- No customer media, private HexCoded material, credentials, actor/biometric data, confidential briefs, contracts, or rights evidence.

### Important limitation

“Local” does not mean “certified secure.” The browser and operating system control process memory, downloaded files, caches outside the app’s design, and device security. The app can avoid creating persistence and revoke its references; it cannot issue a deletion or security certification.

## 12. Why the spreadsheet still matters

The spreadsheet was never a weak fallback. It was the strongest no-build baseline from Stage 3 onward.

A table can represent every important field:

| attempt | dimensions_status | brief_fit | relationship | credits | credit_source | decision |
|---|---|---:|---|---:|---|---|
| A01 | Pass | 2 | original | 12 | Synthetic | Selected |
| A02 | Fail | 1 | revision | 9 | Synthetic | Not selected |
| A03 | Pass | 1 | retry | Unknown | Unknown | Not selected |

That table reaches the same bounded A01 decision.

The app’s contribution is not unique data. It is presentation and constraint:

- predeclared rules are visibly grouped;
- objective and human sections are difficult to confuse;
- missing values become explicit Unknowns;
- selected state requires an explicit attempt;
- validation and live messages guide the operator;
- local decoding demonstrates browser-native technical work; and
- export rules are executable and tested.

For real operations, the spreadsheet may still be the better choice because it has less setup and no custom runtime. For an internship demonstration, the app communicates and demonstrates the method more effectively. That is why the final decision is deliberately narrow.

## 13. What was deliberately not built

No future-looking features were added merely because they sounded useful. The following stayed out of scope:

- video, audio, GIF, SVG, HEIC, WebP, broad codec support, or container parsing;
- EXIF parsing, file signatures, raw encoded-dimension proof, hashes inside the app, thumbnails, contact sheets, or transcoding;
- image editing, playback, generation, prompts, prompt optimization, model routing, or live model APIs;
- automatic aesthetic, semantic, factual, safety, rights, or legal scoring;
- overall quality scores, automatic selection, or model rankings;
- provider catalogues, hard-coded prices, cost normalization, ROI, or analytics dashboards;
- persistence, save/reload, accounts, authentication, backend, database, Appwrite, cloud sync, or collaboration;
- comments, approval routing, publishing, scheduling, notifications, or integrations;
- rights/consent registries, claims validation, provenance validation, disclosure decisions, or publishing authorization;
- media export, ZIP creation, clipboard transfer, email, print service, or public share links;
- mobile app packaging, browser extensions, production hosting, or deployment; and
- customer-product, security-certification, accessibility-certification, or product-readiness claims.

These omissions are part of the project’s quality. Each avoided feature protects the clear purpose and trust boundary.

## 14. What the project proves

The implementation evidence supports these bounded statements:

- A vanilla local web page can represent one brief and three to five attempts.
- Browser-native image decoding can support the declared JPEG/PNG checks in the tested Chromium environment.
- The five objective statuses behave deterministically for the approved fixtures and tested error states.
- Unsupported, unreadable, missing, oversized, zero, `NaN`, and `Infinity` dependencies can be prevented from becoming Pass.
- Human judgments, operational context, provenance, and objective checks can remain visibly separate.
- A human can make a Selected/Rejected/Hold decision with rationale.
- JSON, CSV, and Markdown serializers can preserve Unknowns and limitations while excluding media/runtime state.
- The local session can reset and active object URLs can be revoked.
- The frozen application can remain dependency-free, network-free, and persistence-free.
- Basic semantic, keyboard, focus, label, live-region, reduced-motion, and responsive behaviors can be implemented and inspected.
- The artifact can provide a clearer internship demonstration than an unstructured table while honestly admitting that the table has lower operational burden.

## 15. What the project does not prove

It does not prove:

- that HexCoded uses or needs this workflow;
- that a real user has this problem;
- that the problem recurs or causes a material consequence;
- that a buyer, budget, or willingness to pay exists;
- demand, adoption, retention, ROI, savings, productivity, or product-market fit;
- that A01 came from or outperformed a real model;
- that one provider is better, cheaper, faster, or more reliable;
- that browser metadata proves a file’s signature or embedded metadata;
- visual quality, truth, factual accuracy, brand suitability, or safety;
- ownership, consent, legal clearance, provenance completeness, disclosure compliance, approval, or publishing authority;
- production readiness, security certification, deletion certification, or complete accessibility;
- support across every browser, device, image, malformed file, or memory condition; or
- any change to the research track’s 0/13 gate or parked H2 hypothesis.

## 16. Remaining assumptions and Unknowns

The final package still has honest gaps:

- The real HexCoded creative-run workflow and tools are Unknown.
- The real operator, decision owner, rubric owner, and accepted rubric are Unknown.
- Whether anyone would prefer the app over a spreadsheet is Unknown.
- Human task time, error rate, learning value, and burden were not measured.
- Provider/model labels, credit semantics, billing outcomes, and elapsed-time methods in real work are Unknown.
- The selected current desktop Chromium environment worked; other browsers and devices remain unverified.
- Layout below 768 CSS pixels was outside the frozen support claim.
- Usability with screen readers and other assistive technologies remains untested.
- Every possible malformed JPEG/PNG variant was not tested.
- The correct safe device-memory ceiling remains an assumption, even though 10 MiB is the frozen technical guard.
- Process-level memory reclamation after URL revocation cannot be certified.
- The in-app browser did not expose final download placement; serializer content was verified instead.
- A user’s handling of downloaded exports is outside app control.
- Public-media licensing suitability was not established because the final demo uses Synthetic fixtures.
- No primary research evidence was created, so every user, buyer, demand, adoption, and economic question remains Unknown.

## 17. The main lessons from the ten stages

### Lesson 1: A working app and a validated product are different things

The strongest recurring discipline was to separate implementation evidence from market evidence. The app works. The product opportunity is unvalidated. Both statements can be true at once.

### Lesson 2: Unknown is a real result

Many systems treat missing data as success or zero. This project treats Unknown as first-class information. That prevents false confidence.

### Lesson 3: Human judgment should be visible, not disguised as math

Brief fit and craft are important, but turning one reviewer’s opinion into a universal score would be misleading. The app preserves the reviewer and explanation instead.

### Lesson 4: The cheapest alternative deserves serious respect

The spreadsheet matched the decision and remains the lower-burden baseline. The app was shipped for demonstrative clarity, not because software automatically wins.

### Lesson 5: Scope control is technical quality

Avoiding video, persistence, integrations, dashboards, and production features kept the artifact testable and honest. Small scope made deeper validation possible.

### Lesson 6: Privacy begins with architecture

The easiest upload to secure is the upload that does not exist. The easiest database to govern is the database that was never added. Local, in-memory behavior reduced the trust surface.

### Lesson 7: Exports need an allowlist

Building a metadata record intentionally is safer than serializing whatever happens to be in runtime state. That design prevents accidental media or object-URL leakage.

### Lesson 8: Accessibility is part of the minimum, not decorative polish

Labels, focus, error association, live announcements, non-color statuses, and reduced motion were kept through all fixes. They were never traded away for a smaller diff.

### Lesson 9: A build gate prevents momentum from becoming justification

Stages 0–4 could investigate and reduce the idea without writing code. Stage 5 had to explicitly record Go before implementation began.

### Lesson 10: A final package must explain why the artifact should and should not exist

The project closes with both sides visible: the app is a good internship demonstration; the spreadsheet remains a simpler operational answer; and neither validates a product opportunity.

## 18. Final project outcome

The implementation track completed all Stages 0–10.

The final decision is:

> **Ship Creative Run Review as a frozen internship demonstration only. Keep the spreadsheet/native workflow as the lower-burden operational baseline.**

The app is reproducible, locally runnable, dependency-free, and supported by a single comprehensive self-check. It demonstrates careful state design, validation, browser-native file handling, accessibility basics, metadata-only export, cleanup, and evidence discipline.

It was not deployed, published, connected to a live API, given an account system, or presented to HexCoded. `research/` remained read-only and unchanged. The research gate remains **0/13**, H2 remains unvalidated and parked, and no implementation result changes that.

For the exact run command and three-minute presentation, continue with [`FINAL-HANDOFF.md`](FINAL-HANDOFF.md). For the complete stage evidence and decision log, see [`cumulative-report.md`](cumulative-report.md).
