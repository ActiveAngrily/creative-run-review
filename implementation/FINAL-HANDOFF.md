# Creative Run Review — Final Internship Handoff

**Track status:** Complete through Stage 10  
**Artifact decision:** **Ship/package for the internship demonstration only**  
**Evidence boundary:** Synthetic implementation evidence; research validation remains **0/13**

Creative Run Review is a dependency-free localhost demonstration for comparing exactly three default—and at most five total—image attempts against one fictional brief. It keeps browser-observed checks, human judgments, operational values, provenance, Unknowns, and the final human decision separate. It is not an official HexCoded product or a production recommendation.

## Quick start

Requirements: Python 3, Node.js, and a current desktop Chromium browser.

From the repository root, verify the pure logic:

```sh
node implementation/app/self-check.mjs
```

Expected result:

```text
Creative Run Review self-check passed.
```

Start the local static server:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory implementation/app
```

Open `http://127.0.0.1:4173/`. Do not open `index.html` directly because the browser loads JavaScript modules over HTTP. Stop the server with `Ctrl-C`.

## Three-minute demo script

**0:00–0:30 — Boundary and brief.** Point out `SYNTHETIC DEMO · BR-SYN-001`, the fictional Orbit Spring brief, the local/no-upload/no-persistence statement, and the rule that unavailable evidence remains `Unknown`.

**0:30–1:15 — Three attempts.** Show A01 Signal with five objective Pass states; A02 Pressure with Pass readability/type/size and Fail dimensions/aspect; and A03 Drift with five objective Pass states but Unknown credits and elapsed time.

**1:15–1:50 — Evidence separation.** Show that objective checks, human ratings/notes, retry relationship, raw credit/time values, source/precision labels, and provenance occupy separate sections. Note that the app computes no combined score and ranks no model.

**1:50–2:20 — Human decision.** Change the outcome to `Selected for this comparison`, choose A01, and use this rationale:

> A01 meets all five browser checks and the strongest human fit; A02 fails the square constraints, while A03 has an Unknown operational record. Select A01 for this comparison.

Enter a next action such as `Complete human content review before any use.` Emphasize that selection does not grant approval or publishing authority.

**2:20–2:40 — Export.** Trigger JSON, CSV, and Markdown. Each action should announce a metadata-only export. The serializers exclude media bytes, object URLs, paths, file handles, decoded pixels, and hidden runtime state.

**2:40–3:00 — Reversibility.** Clear the session. The page should return to three empty attempts, fifteen objective Unknown states, no previews, and `Hold / no decision`. Any active local-file object URLs are revoked; prior downloads remain under the operator’s control.

## Expected Synthetic result

| Attempt | Objective result | Separate human/operational context |
|---|---|---|
| A01 · Signal | Five Pass | Stronger Synthetic brief-fit judgment; 12 credits / 34 seconds, Synthetic/exact |
| A02 · Pressure | Dimensions and aspect Fail; three Pass | Mixed Synthetic human judgment; revision; 9 credits / 29 seconds, Synthetic/exact |
| A03 · Drift | Five Pass | Mixed Synthetic human judgment; retry; credits and elapsed time Unknown |

The bounded walkthrough selects A01. The app does not call it a generally “best” attempt or rank its invented provider.

## One-page explanation

**Problem framing.** Public context makes iterative creative generation, human review, and credit/retry awareness relevant to an internship demonstration, but no primary evidence establishes a HexCoded workflow or unmet need. The artifact therefore answers only a technical communication question: can one local record make a Synthetic creative-run decision legible without mixing objective observations, subjective judgment, or uncertainty?

**Artifact behavior.** The fixed `BR-SYN-001` brief declares JPEG/PNG, 1080 × 1080, 1:1 ± 0.01, and ≤ 5 MiB constraints, with a separate 10 MiB decode ceiling. Three labelled Synthetic fixtures load by default; two additional local-attempt cards may be added. Permitted local JPEG/PNG files receive in-memory previews and browser-native readability, reported-type, dimensions, aspect-ratio, and file-size observations. Missing, unsupported, unreadable, oversized-for-decoding, zero, `NaN`, or `Infinity` dependencies remain `Unknown`, never Pass. The operator records human judgments, operational context, and a Selected/Rejected set/Hold decision with rationale, then explicitly exports metadata-only JSON, CSV, or Markdown.

**Technical choices.** The implementation is one static page using vanilla HTML, CSS, and JavaScript. It has no dependency, package manager, build step, backend, database, authentication, Appwrite, persistence, service worker, telemetry, remote asset, upload, live API, or model call. A single dependency-free Node self-check covers classification, operational parsing, retry counting, serializer escaping, Unknown preservation, limitations, and exclusion of media/runtime keys.

**Privacy and rights boundary.** Local files stay in the active browser page through revocable object URLs. Exports contain metadata and human entries only. A filename, reported MIME type, decoded dimensions, preview, or permitted-use declaration does not prove identity, ownership, consent, legal clearance, provenance completeness, disclosure compliance, approval, or publishing authority. Customer media, private HexCoded material, credentials, actor/biometric data, account data, and external outreach were not used.

**Reversibility.** The app persists nothing. Replacing a local file, decode failure, page unload, or clear-session releases the applicable object URL. Clear-session removes in-page state; deleting the local folder removes the artifact. The app cannot delete prior downloads or certify browser/process-memory reclamation.

## Build-versus-spreadsheet decision and kill history

- Stage 3 selected spreadsheet/CSV plus native local file information as the cheapest sufficient record.
- Stage 5 authorized the app only because a polished interactive artifact could demonstrate evidence separation and constrained Unknown behavior; it did not authorize a product.
- Stage 9 repeated the same Synthetic rows in an unsaved spreadsheet/native-style table. The table reached the same A01 decision with lower setup burden and greater reversibility.
- Stage 9 nevertheless recorded **Ship** for the internship package because the app produced a clearer guided demonstration and stronger visible guardrails. The spreadsheet/native method remains the operational baseline.
- Kill/reduce remains the correct future response if the artifact is presented as a production workflow, needs private/cloud/integration scope, misclassifies Unknown as Pass, exports media/runtime state, or loses its demonstrative clarity advantage.

## Claims that must not be made

Do not claim that the artifact:

- is an official HexCoded product or reflects a verified HexCoded workflow;
- validates a user, customer, buyer, demand, willingness to pay, adoption, ROI, or product-market fit;
- improves output quality, saves time or credits, reduces retries, or identifies a generally superior model;
- proves file signatures, factuality, legality, consent, ownership, provenance, disclosure, approval, or publishing authority;
- is production-ready, security-certified, accessibility-certified, deletion-certified, or tested across all browsers and malformed media; or
- changes the separate research result, its parked H2 hypothesis, or the **0/13** strict gate.

## Known limitations, assumptions, and Unknowns

- The brief, fixtures, providers, ratings, credits, times, failures, and decision are Synthetic.
- Current desktop Chromium on localhost is the supported demonstration environment. Other browsers/devices and layouts below 768 CSS pixels remain unverified.
- Assistive-technology usability, every malformed JPEG/PNG variant, the safe device-memory ceiling, process-level memory reclamation, and browser download placement remain Unknown.
- No real operator, accepted rubric, workflow owner, provider/credit/time semantics, comparative human effort, error rate, preference, or artifact value was validated.
- The spreadsheet comparator was a transient tabletop record, not a saved or accessibility-tested workbook.
- Downloaded exports remain outside app-managed cleanup.
- The recommended Stage 10 model allocation was GPT-5.6 Sol with Extra High reasoning; the runtime exposed no separate verifiable switch result, so no switch is claimed.

## Fixture provenance and integrity

The three fixtures were created for this project on 2026-09-09 using the built-in ImageGen tool and normalized locally with macOS `sips`. They contain an invented product/brand and no external reference image, real person, actor, trademark, customer, or factual performance claim. Full prompts and limitations are in [`app/fixtures/README.md`](app/fixtures/README.md).

| File | Format / dimensions | Bytes | SHA-256 |
|---|---|---:|---|
| `attempt-01.png` | PNG, 1080 × 1080 | 1,605,765 | `d7151d51184140136a87c6ac8ddc1ed016c70dd4622f4bf59a70f5ee3bca677b` |
| `attempt-02.jpg` | JPEG, 1200 × 900 | 358,476 | `8d2aed65e501a99463a7fcbef264b6a81c979f3dafe1e0d0cedb1a856420c198` |
| `attempt-03.png` | PNG, 1080 × 1080 | 1,531,733 | `6d84f546ce5afea8e13eed8396d883f5edb196e2114b63de7ce86f0f78082987` |

## Clean package inventory

| Path | Purpose |
|---|---|
| `implementation/FINAL-HANDOFF.md` | Final setup, demo, explanation, boundaries, decision history, provenance, and inventory |
| `implementation/README.md` | Track boundary, final status, and stage map |
| `implementation/model-selection.md` | Non-evidentiary model-allocation guidance |
| `implementation/handoff.md` | Final stage state and persistent decisions |
| `implementation/cumulative-report.md` | Full Stage 0–10 evidence and decision record |
| `implementation/stages/stage-00-*.md` through `stage-10-*.md` | Original staged execution briefs |
| `implementation/app/index.html` | Semantic one-page interface |
| `implementation/app/styles.css` | Responsive visual system, focus, and reduced-motion behavior |
| `implementation/app/app.mjs` | In-memory application state, rendering, local-file handling, export actions, and cleanup |
| `implementation/app/logic.mjs` | Pure classification, validation, decision-record, and serializer logic |
| `implementation/app/self-check.mjs` | Dependency-free runnable verification |
| `implementation/app/README.md` | Minimal application run instructions |
| `implementation/app/fixtures/README.md` | Synthetic fixture provenance, prompts, usage basis, and limitations |
| `implementation/app/fixtures/attempt-01.png` | A01 Synthetic Pass fixture |
| `implementation/app/fixtures/attempt-02.jpg` | A02 Synthetic failed-constraint fixture |
| `implementation/app/fixtures/attempt-03.png` | A03 Synthetic Pass/operational-Unknown fixture |

No generated build directory, dependency manifest, lockfile, cache, temporary test payload, account configuration, credential, or external-service artifact belongs to the package.

## Founder-facing message

> Creative Run Review is a deliberately small local internship demonstration, not a product claim. It shows three fictional creative attempts beside browser-observed constraints, separate human judgments, raw retry/credit/time context, explicit Unknowns, and a human-owned decision export. The same decision fits in a spreadsheet with less setup, so the spreadsheet remains the operational baseline; the app is worth shipping only as the clearer interactive demonstration. It uses no account, backend, upload, persistence, telemetry, or private material, and it cannot change the research gate of 0/13.

## Final state

Stages 0–10 are complete. The artifact is reproducible from the commands above, the bounded decision is **Ship for the internship package**, `research/` remains read-only and unchanged, and no further implementation stage is authorized by this track.
