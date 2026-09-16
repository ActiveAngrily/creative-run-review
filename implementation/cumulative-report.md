# HexCoded Internship Artifact — Cumulative Implementation Record

## Executive summary

**Current status:** Stages 0–10 complete. Stage 10 packages the frozen polished, dynamic, image-only local Creative Run Review workflow with reproducible setup, verification, fixture provenance, a three-minute demo, evidence boundaries, decision history, a founder message, and a clean inventory. The bounded decision remains **Ship for the internship demonstration only**.

**Current recommendation:** **Ship** the completed frozen artifact as an internship demonstration, while keeping the **spreadsheet/CSV plus native local-file-information** workflow as the mandatory no-build comparator. This is a packaging decision for the demo, not evidence that the app is needed or superior in real work.

This is a proposal for an internship artifact, not a validated product. The research track remains separate: its strict validation gate is **0/13**, H2 remains unvalidated and parked, and no implementation result can change that gate.

## Evidence labels and claim rules

- **Fact** — directly supported by a named source or an observed implementation record.
- **Inference** — a reasoned interpretation of facts; confidence must be stated.
- **Hypothesis** — a testable proposition about a workflow, user, or solution; not established.
- **Assumption** — an unverified premise needed to proceed; never present it as evidence.
- **Unknown** — information not available in the supplied record.
- **Synthetic** — invented input, identifier, scenario, or result used only to exercise the artifact.
- **Public** — openly available source or media, with source, date, licence/usage basis, and limitations recorded.
- **Implementation result** — behavior demonstrated by the artifact or a runnable check; not user, customer, buyer, demand, or market evidence.

Rules for this track:

1. Use only existing public-context research, clearly labelled Synthetic inputs, or later user-owned/openly licensed local inputs.
2. Keep facts, inferences, hypotheses, assumptions, unknowns, and synthetic assumptions visibly separate.
3. Do not use implementation results as primary research evidence or as a reason to update `research/`.
4. Never claim that HexCoded needs, wants, uses, would buy, or would benefit from the artifact.
5. Never claim user validation, customer validation, demand, willingness to pay, product-market fit, cost reduction, time reduction, risk reduction, legal clearance, rights clearance, or publishing authority from a demo.
6. Keep rights/consent, claims substantiation, provenance, disclosure, creative context, decision/version state, and publishing authorization as separate controls.
7. Do not use customer data, private HexCoded material, credentials, account access, HexCoded APIs, or external outreach under the current authorization.

## Track objective and boundary

**Internship-track objective — decision:** demonstrate disciplined product judgment and technical ability by defining, and only if later approved building, the smallest inspectable artifact that helps compare AI-creative attempts and explain a selection decision using safe Synthetic/Public inputs.

The track should answer an artifact question:

> Can a small local record make one creative-run decision clearer and more auditable than a folder, chat thread, or spreadsheet, without requiring private media, cloud upload, credentials, or a new production system?

This is deliberately narrower than a product thesis. It is allowed to end with a spreadsheet, native browser workflow, or **no-build** result.

### Difference from the research-validation track

| Track | What it can establish | What it cannot establish here |
|---|---|---|
| Research validation | With permissioned primary evidence, whether a recurring problem, reachable roles, consequences, alternatives, safe access, and economic path meet the strict research gates. | No implementation demo can substitute for those conditions. |
| Internship artifact | Whether a bounded artifact can represent a decision, run deterministic checks, preserve labels, and produce a useful Synthetic/Public demonstration. | It cannot validate users, customers, buyers, demand, willingness to pay, product-market fit, or a HexCoded product need. |

**Fact:** the research validation gate remains 0/13. **Fact:** H2 remains unvalidated and parked after the Synthetic Stage 7 research result. **Decision:** this track may use H2-related public context to compare directions, but may not reopen, weaken, or clear H2.

## Public-context basis

The following are facts recorded in the supplied research files, used only to establish relevance:

- HexCoded publicly presents multi-model image and video creation, actor-led creative routes, credit-based pricing, and team/enterprise creative workflows. (`research/cumulative-report.md`)
- HexCoded's official internship listing emphasizes learning model strengths, costs, and failure modes. (`research/cumulative-report.md`)
- Public practitioner, survey, and vendor evidence describes AI-assisted creative exploration, human review, iterative output selection, and approval/version work. (`research/stages/stage-02-user-research.md`)
- Public vendor documentation covers adjacent creation/context, proofing, approval, and social publishing layers. (`research/stages/stage-03-competitors.md`)
- The research record says those sources establish surrounding workflow relevance, not an unmet HexCoded need, adoption, or buyer demand.

These are public-context facts and inferences, not primary evidence for the implementation artifact.

## Artifact-selection criteria

Score each candidate from 1 (weak) to 5 (strong). Scores are implementation-planning judgments, not research evidence.

1. **HexCoded public-context relevance** — tied to a documented public capability or internship learning objective.
2. **Internship learning/demo value** — teaches a concrete workflow or judgment and produces an inspectable founder demo.
3. **Bounded local/offline feasibility** — can be tested without backend, authentication, cloud storage, live model APIs, or new dependencies by default.
4. **Synthetic/public safety** — can demonstrate the idea without customer data, credentials, sensitive rights records, or unclear media rights.
5. **Decision learning beyond a spreadsheet/native tool** — makes a meaningful comparison possible; a candidate may score low if no-build is the likely answer.
6. **Reversibility and killability** — can be discarded without migration, operational lock-in, or sunk integration work.

Hard stops override scores: unsafe data access, a required private integration, a legal/rights claim the artifact cannot substantiate, inability to test the first outcome without a full product, or Stage 5 not recording Go/Reduce.

## Direction comparison

### 1. Release Integrity Checker

- **Problem/workflow — Hypothesis:** an approved creative version, caption, channel, and authorized publisher can diverge before a scheduled or published post. The workflow is `proof decision → release fields → scheduled post → final post`.
- **HexCoded relevance — Inference, low confidence:** HexCoded's generated creative is upstream of the social-release boundary described in research H2. This is adjacency, not evidence of a HexCoded failure.
- **Public evidence support — Fact:** public documentation covers versioned proofing and social approval/publishing layers. **Inference:** the seam is coherent enough to test. H2 remains unvalidated and parked; no source shows a recurring exact-release failure.
- **Unknown:** actual social source of truth, immutable identifiers, configuration, bypass permissions, mismatch frequency, consequence, manual-check burden, and whether a naming rule or H7 process fixes it.
- **Possible internal user — Hypothesis:** social/content lead, account lead, or creative-operations coordinator who reconciles approved work with publishing.
- **Smallest useful artifact:** a local two-record comparison that checks approved versus scheduled asset/version, caption, channel, authority, and final-post identifiers, then records Pass/Hold/Unknown.
- **Synthetic/public demonstration:** Synthetic normal release plus Synthetic approved-v4/scheduled-v3 mismatch held before publication. No real post, account, or client material.
- **Technical complexity — Inference:** Low to medium if it accepts metadata only; medium if it must parse local media or integrate with proofing/social systems. Integration is out of scope for Stage 0.
- **Privacy, rights, security, and integration risks:** release links may expose private campaigns; authority can be mistaken for approval; stale duplicate state can create more errors; credentials or APIs must not be collected; rights and disclosure cannot be inferred from a match.
- **Founder/demo value — Inference:** crisp demonstration of a real control boundary and of when configuration/process beats software, but it overlaps heavily with the research H2/Synthetic Authorized Release Record.
- **Reversibility and kill criteria:** high; kill if a configured native source of truth, naming/import rule, or H7 resolves the case, or if the checker only duplicates state without a decision benefit.
- **Claims that must not be made:** it prevents wrong posts, verifies legal/rights clearance, grants publishing authority, proves H2, reduces release errors, or validates demand.

### 2. Evidence-Gated Research Console

- **Problem/workflow — Hypothesis:** public and Synthetic claims can be mixed with assumptions or weak evidence, making a research decision appear stronger than its provenance supports. The workflow is `claim → source/provenance → label → gate → decision record`.
- **HexCoded relevance — Inference, low confidence:** it supports disciplined product and internship decision-making, but it is not a documented HexCoded creative workflow.
- **Public evidence support — Fact:** the research track defines source-quality, claim-label, and validation-gate rules. **Inference:** the research process could be represented in a local ledger. This is process evidence, not product demand evidence.
- **Unknown:** actual research-team workflow, current tools, burden of maintaining another ledger, owner, review cadence, and whether Markdown or a spreadsheet already suffices.
- **Possible internal user — Hypothesis:** research, strategy, product-operations, or internship reviewer.
- **Smallest useful artifact:** a local evidence/claim table with provenance, date, limitation, claim state, confidence, and pass/fail gate status.
- **Synthetic/public demonstration:** use selected openly cited research records plus Synthetic unsupported claims; show that an unproven claim remains Unknown and cannot clear a gate.
- **Technical complexity — Inference:** Low; mostly structured text/CSV and deterministic label checks.
- **Privacy, rights, security, and integration risks:** false precision may create confidence; copying private research can breach boundaries; links can change; mixing this with `research/` could corrupt the strict gate; no private source or external connector is allowed.
- **Founder/demo value — Inference:** strong evidence discipline and low build risk, but weak direct connection to HexCoded's creative operations and limited artifact novelty.
- **Reversibility and kill criteria:** very high; kill if a Markdown table or spreadsheet is equally clear or if it encourages a second research system.
- **Claims that must not be made:** it validates the market, clears 0/13, proves a research conclusion, or represents a HexCoded user need.

### 3. Synthetic Authorized Release Record

- **Problem/workflow — Hypothesis:** a compact record may keep approved version, caption, decision, authority, schedule, and final post together at the proof-to-publish boundary.
- **HexCoded relevance — Inference, low confidence:** it is directly adjacent to research H2 and the Stage 6–7 Synthetic exercise, but that research exercise narrowed and weakened H2 and found no distinct software premise under its Synthetic assumptions.
- **Public evidence support — Fact:** public proofing and publishing systems expose separate workflow layers. **Fact:** research Stage 7 constructed three Synthetic cases and concluded that existing stack plus operating discipline was sufficient for those cases only. Neither is primary evidence.
- **Unknown:** whether a real team needs a joined record, whether it duplicates a source of truth, whether native fields can enforce it, and whether H7 explains the actual problem.
- **Possible internal user — Hypothesis:** account/social lead or release coordinator.
- **Smallest useful artifact:** one row/card per intended post with linked identifiers, decisions, authority, schedule, final link, and applicable separate clearance links.
- **Synthetic/public demonstration:** Synthetic normal, version-mismatch, and delayed-decision cases; compare native fields, H7 checklist, and the record. No real release trace.
- **Technical complexity — Inference:** Low as a template/checklist; not a software build under this stage.
- **Privacy, rights, security, and integration risks:** sensitive campaign links, stale duplicate state, false authority, accidental copying of contracts/rights records, and pressure to become a scheduler or legal system.
- **Founder/demo value — Inference:** demonstrates restraint and control separation; lower distinctiveness because research already ran the bounded Synthetic comparison.
- **Reversibility and kill criteria:** very high; kill if native configuration or H7 gives the same result, which is the current Synthetic working result.
- **Claims that must not be made:** it validates H2, proves release integrity, grants approval/rights, prevents publishing errors, or shows a product opportunity.

### 4. Rights/Consent Evidence Companion

- **Problem/workflow — Hypothesis:** a producer may need to retrieve permission and scope for actor, likeness, voice, music, stock, territory, category, duration, or reuse before a generated derivative is released.
- **HexCoded relevance — Inference, low confidence:** HexCoded publicly documents actor consent, licence, category controls, payouts, and future-use controls. That makes rights a relevant trust boundary, but also creates a high risk of duplicating an existing capability or handling sensitive material.
- **Public evidence support — Fact:** public HexCoded legal/actor materials describe declared consent/licence operations; public research describes rights/IP, privacy, ethics, and disclosure concerns. **Inference:** a redacted evidence companion is conceivable. No evidence shows a recurring cross-system failure.
- **Unknown:** actual rights workflow, owner, jurisdiction, legal sufficiency, revocation handling, safe access, retention, whether contracts/biometrics are involved, and whether existing licence links/checklists suffice.
- **Possible internal user — Hypothesis:** producer, talent coordinator, rights/legal operations, or forward-deployed creative.
- **Smallest useful artifact:** a redacted, link-based permission matrix with scope/status/owner/expiry/revocation fields; no copied identity, biometric, contract, or rights documents.
- **Synthetic/public demonstration:** Synthetic actor/asset reuse cases with allowed and blocked categories, territory/expiry, revocation, and Unknown legal sufficiency; public terms used only as context.
- **Technical complexity — Inference:** Medium to high if it handles real documents, permissions, or integrations; low for a Synthetic link/status table. Real rights work is outside current authorization.
- **Privacy, rights, security, and integration risks:** highest of the five; sensitive personal/biometric data, confidential contracts, unlawful over-collection, incorrect legal conclusions, stale permissions, revocation failure, and integration/authentication risk.
- **Founder/demo value — Inference:** shows careful separation of consent, licence, and publishing controls, but a high-risk artifact with weak evidence of a distinct need.
- **Reversibility and kill criteria:** high only while Synthetic/redacted; kill immediately if safe minimum-data access cannot be defined, if legal judgment is required, or if existing actor-licence controls are sufficient.
- **Claims that must not be made:** it verifies consent, grants rights, provides legal clearance, guarantees permitted use, or establishes a HexCoded rights-system gap.

### 5. Creative Run Review

- **Problem/workflow — Hypothesis:** when several AI-generated attempts answer one brief, a producer needs to compare them against objective media constraints and human quality/failure judgments while understanding retries, credits, and time. The workflow is `brief/constraints → attempts → objective checks → human judgments → retry/cost/time summary → decision record`.
- **HexCoded relevance — Inference, medium confidence:** this is the closest direct fit to public HexCoded multi-model image/video creation, credit-based pricing, and the official internship emphasis on model strengths, costs, and failure modes. Public workflow research supports iterative selection and human review. It still does not establish internal use or need.
- **Public evidence support — Fact:** public research records multi-model creation, credit metering, AI-assisted creative iteration, and human QA. **Inference:** a comparison artifact is relevant to the internship learning objective. No public source proves that a new tool is required.
- **Unknown:** actual internal comparison workflow, rubric, media scope, model/credit fields, retry economics, decision owner, whether a spreadsheet is sufficient, acceptable retention, and how much objective metadata is locally available.
- **Possible internal user — Hypothesis:** forward-deployed creative, AI producer, creative-operations lead, or intern learning model behavior.
- **Smallest useful artifact:** one local review record for one brief and 3–5 attempts, with optional local media, required constraints, deterministic checks available in the browser, human judgment fields, retry/credit/time entries, a selected/no-decision outcome, and metadata-only export.
- **Synthetic/public demonstration:** a fictional brief with Synthetic image/video attempt metadata and clearly labelled outcomes, including at least one objective constraint failure and one human-quality/failure judgment. Later public media must carry source/date/licence/usage basis/limitations; no private HexCoded or customer material.
- **Technical complexity — Inference:** Medium. A metadata-first version is bounded; local image/video metadata, browser codec support, export, and ephemeral file handling require feasibility work. No live generation or model integration is needed.
- **Privacy, rights, security, and integration risks:** local media may contain confidential or unclear-rights material; browser file APIs and codec support vary; human judgments are subjective; objective checks can be mistaken for quality or legality; credits/time may be self-entered; no upload, credentials, telemetry, or model API by default.
- **Founder/demo value — Inference, medium confidence:** high because it shows a concrete creative-operations learning loop, separates objective checks from judgment, exposes retry/cost tradeoffs, and can honestly end in a no-build conclusion.
- **Reversibility and kill criteria:** high if metadata-first and local; kill if a spreadsheet is equally clear, objective checks are unreliable across the selected media, the record becomes a DAM/review/scheduler, or it cannot be tested without private inputs.
- **Claims that must not be made:** it improves generation quality, identifies the best model generally, saves time/credits, reduces retries, validates a HexCoded workflow, proves internal adoption, or establishes demand/value.

## Decision matrix

Scores use the six criteria above: relevance 20%, internship learning/demo value 25%, bounded feasibility 15%, Synthetic/Public safety 15%, decision learning beyond a basic table 15%, and reversibility 10%. These are **Inference — low confidence** because no internal user or primary workflow evidence is available.

| Direction | Relevance /20 | Learning /25 | Feasibility /15 | Safety /15 | Decision learning /15 | Reversible /10 | Total /100 | Readout |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| Release Integrity Checker | 4/5 = 16 | 3/5 = 15 | 4/5 = 12 | 3/5 = 9 | 2/5 = 6 | 5/5 = 10 | **68** | Clear boundary, but high overlap with native release controls and H2. |
| Evidence-Gated Research Console | 2/5 = 8 | 3/5 = 15 | 5/5 = 15 | 5/5 = 15 | 2/5 = 6 | 5/5 = 10 | **69** | Safe and cheap, but not close to the creative workflow. |
| Synthetic Authorized Release Record | 4/5 = 16 | 2/5 = 10 | 5/5 = 15 | 4/5 = 12 | 1/5 = 3 | 5/5 = 10 | **66** | Already exercised in research; likely no distinct new learning. |
| Rights/Consent Evidence Companion | 5/5 = 20 | 2/5 = 10 | 2/5 = 6 | 1/5 = 3 | 3/5 = 9 | 4/5 = 8 | **56** | Relevant but too sensitive and insufficiently differentiated. |
| **Creative Run Review** | **5/5 = 20** | **5/5 = 25** | **3/5 = 9** | **4/5 = 12** | **4/5 = 12** | **4/5 = 8** | **86** | **Recommended provisional direction; must still survive Stage 5 and the no-build comparator.** |

The matrix selects a direction for internship learning, not a market opportunity. A lower-scoring no-build option is always allowed to win after Stage 5.

## Recommended artifact contract

### Selected direction

**Creative Run Review — provisional.** A local/offline comparison record for several AI-generated attempts for one brief. It is an artifact proposal, not a validated product and not an implementation authorization.

### User-facing or internal outcome

**Hypothesis:** an internal creative producer/operations user can explain why one attempt was selected, rejected, or left undecided by pointing to:

- the same brief and required constraints;
- the compared attempts and their source metadata;
- repeatable objective media checks;
- separate human quality/failure judgments;
- retries, charged credits, and elapsed time as entered facts or estimates; and
- a dated decision record with Unknowns and limitations.

The immediate audience is an internship/founder reviewer or internal creative workflow, not a customer-facing product user.

### Minimum scope after a later Go/Reduce decision

- One review per brief; 3–5 attempts; one media family per review (image **or** video) to keep comparison meaningful.
- Metadata-first local import with optional local media; no upload, account, model API, generation, or persistent cloud storage.
- Brief constraints entered explicitly, such as expected type, dimensions/aspect ratio, duration where applicable, file readability, and other deterministic properties available locally. Unsupported checks must return Unknown, not Pass.
- Attempt metadata: attempt ID, model/provider if known, prompt/reference note if intentionally supplied, creation timestamp if known, retry number, charged credits if known, elapsed time if known, source/rights label, and limitations.
- Objective checks kept separate from human fields: machine-check status, human quality/failure ratings, reason tags, confidence, and free-text rationale.
- A compact failure taxonomy only: brief mismatch, technical constraint, visual/audio quality, temporal/continuity issue, text/rendering issue, unexpected model behavior, rights/consent Unknown, or other. These are recording categories, not automated diagnoses.
- One selected attempt, a no-decision state, or a rejected set; rationale and next action; no “best model” conclusion.
- Export of metadata and judgments to a transparent human-readable record such as JSON/CSV/Markdown. Export must not silently copy media or sensitive evidence.

### Explicit non-goals

This artifact is not a generator, model router, prompt optimizer, automatic quality scorer, semantic evaluator, media editor, DAM, proofing suite, scheduler, publishing system, rights/consent registry, legal-clearance system, claims verifier, provenance validator, disclosure engine, telemetry service, team-auth system, customer product, or all-in-one creative platform.

It will not infer quality, legality, consent, ownership, truth, approval, publishing authority, or product value from a file or score. It will not use real customer/actor material, private HexCoded systems, credentials, external outreach, or live APIs under the current authorization.

### Synthetic and public inputs

- **Synthetic:** fictional brief, invented attempt IDs, invented model/provider values where needed, invented retry/credit/time entries, fictional media or generated placeholders, and Synthetic human judgments.
- **Public:** only openly available media with source, access date, licence/usage basis, and limitations recorded. Public media is not automatically suitable for commercial use.
- **User-owned local:** allowed only in a later authorized stage with explicit ownership/permission and retention/deletion rules.
- **Never assumed:** public evidence does not establish internal HexCoded workflow; Synthetic outcomes do not establish a real model's performance or a real team's preference.

### Expected demo flow

1. State the evidence boundary and show a fictional brief with explicit constraints.
2. Load 3–5 Synthetic attempts or permitted public/user-owned local examples.
3. Run available deterministic checks and label unavailable checks Unknown.
4. Enter separate human quality/failure judgments without presenting them as automated truth.
5. Show retry count, charged credits, and elapsed time as Synthetic, observed, or Unknown—not blended.
6. Compare attempts, choose one, reject all, or record no decision with rationale.
7. Export the decision record with timestamps, provenance labels, Unknowns, and limitations; confirm media remains local/ephemeral unless explicitly exported.
8. Compare the result with the simplest spreadsheet/native-browser workflow and record **Continue**, **Reduce**, or **Kill**.

### Artifact-level success criteria

The artifact passes its Stage 0 contract only if a later approved implementation/demo can:

1. Complete one Synthetic brief with at least three attempts end to end.
2. Produce repeatable deterministic results for the checks it claims to support; report unsupported or unreadable media as Unknown/Hold rather than inventing a result.
3. Keep machine checks, human judgments, retry/credit/time entries, and evidence labels separate.
4. Preserve the source/date/licence or Synthetic basis and limitations for each input.
5. Export a readable decision record containing the brief, attempt identities, checks, judgments, decision, rationale, timestamps, and Unknowns.
6. Avoid uploading media, storing credentials, requiring authentication, or duplicating private rights/claims material.
7. Show at least one failure case and one pass/acceptable case without claiming that the artifact prevented a real-world failure.
8. Be understandable in a short founder demo and comparable with a spreadsheet or native browser feature.

These are artifact behavior criteria, not user-outcome or business-success criteria.

### Kill criteria

Kill or reduce the direction if any of the following occurs:

- a spreadsheet, native browser workflow, or existing creative tool records the same decision with equal or lower effort;
- Stage 5 records Stop, or does not record Go/Reduce;
- the comparison needs live model APIs, private systems, credentials, or cloud upload;
- local media metadata or constraint checks are unreliable for the chosen scope;
- human judgments are presented as objective quality or legal/rights determinations;
- retry/credit/time data cannot be provenance-labelled and would create false economic precision;
- the scope expands into a DAM, proofing tool, scheduler, rights system, model router, or analytics product;
- the exported record is not more transparent than the source table/folder;
- no permitted Synthetic/Public/user-owned input can demonstrate the workflow safely; or
- a later authorized real-work test cannot be defined without over-collecting sensitive data.

## What a founder would learn

**Implementation learning — not market evidence:**

- which attempt-level facts can be checked deterministically in a local browser and which remain human judgment or Unknown;
- how model/provider metadata, retries, charged credits, and time can be recorded without pretending they are comparable or causal;
- whether an honest decision record is clearer than an unstructured folder or spreadsheet for the Synthetic case;
- where objective constraints, subjective quality, rights/consent, provenance, disclosure, and publishing decisions must remain separate;
- whether a metadata-first, no-upload artifact is technically feasible and appropriately bounded; and
- whether the right founder recommendation is Continue, Reduce, or Kill.

It would not tell the founder that HexCoded needs the artifact, that any internal user would adopt it, or that a market exists.

## Persistent Unknowns after Stage 0

- HexCoded's actual internal creative-run workflow, tools, model catalogue, evaluation rubric, and decision owner.
- Whether an internal producer, forward-deployed creative, or intern would use this record.
- Whether a spreadsheet, folder convention, native browser API, or existing experiment tracker is sufficient.
- Which image/video constraints are reliably available locally across selected file formats/codecs.
- Whether retry/credit/time fields are complete, comparable, and decision-relevant.
- Whether one media family is enough or whether a later approved scope needs both image and video.
- Whether media can remain ephemeral while metadata and judgments are exported safely.
- Whether objective checks change a decision rather than merely decorate a record.
- Whether any real workflow has recurrence, consequence, a reachable owner, safe access, or economic value.
- Any user, customer, buyer, demand, willingness-to-pay, adoption, retention, ROI, or product-market-fit fact.

## Realistic later implementation sequence

1. **Stage 1 — public-context refresh:** verify only the public HexCoded context relevant to this artifact; do not browse private systems or reopen research conclusions.
2. **Stage 2 — evaluation-method research:** complete. The method fixes a per-brief workflow, a small human rubric, objective-check Unknown rules, a failure taxonomy, and measurement/provenance rules.
3. **Stage 3 — alternatives:** compare a spreadsheet, native browser features, existing experiment trackers, and a small local artifact.
4. **Stage 4 — technical feasibility:** test local media handling, privacy, rights, security, accessibility, export, and a one-check validation strategy; no production build.
5. **Stage 5 — build gate:** record **Go**, **Reduce**, or **Stop**. No code before Go/Reduce.
6. **Stage 6 — data contract and vertical slice:** create only approved Synthetic fixtures and a thin runnable slice if authorized.
7. **Stage 7 — core workflow:** implement only the frozen minimum comparison and export path.
8. **Stage 8 — hardening/QA:** verify input handling, unsupported media states, privacy, accessibility, calculations, and error paths.
9. **Stage 9 — demo/evaluation:** run the Synthetic demo and compare directly with the simplest non-code alternative; record Ship/Reduce/Kill for the artifact, never research validation.
10. **Stage 10 — handoff:** package the reproducible artifact, evidence labels, limitations, demo flow, and founder-facing explanation.

## Founder-facing explanation

“I’m proposing a small local Creative Run Review artifact, not a new HexCoded product. It would put several attempts for one brief beside their objective media checks, human failure judgments, retry/credit/time notes, and a transparent selection record. The first test is Synthetic and must beat—or honestly lose to—a spreadsheet or existing workflow; it cannot validate demand or change the research gate.”

## Stage 1 — Current public HexCoded context refresh

**Scope:** Current, attributable public evidence only, accessed 2026-09-09. No account was created; no private system, customer data, credential, HexCoded API, external outreach, application code, fixture, or prototype was used.

### Current public-context evidence table

| ID | Source, organization/author, date, and type | Directly supported Public Fact | Relevance to Creative Run Review | Confidence and limitations | What remains Unknown |
|---|---|---|---|---|---|
| P1 | [HexCoded — The AI creative studio](https://hexcoded.ai/) — HexCoded; accessed 2026-09-09; first-party product page | HexCoded publicly advertises 30+ frontier models across image, video, and edit categories; Creative Studio can create, edit, add motion, and extend. The page names four creation routes: Creative Studio, Talking Actors, Make a custom video, and URL → Ad. | Supports a bounded image-or-video attempt record and optional model/provider/category metadata. It does not establish that a separate review tool is needed. | **High** for the page's stated offering; marketing copy and catalogue tiles are dynamic and unauthenticated. | Which models are available to a given account; output history, comparison UI, review flow, exports, and actual model quality. |
| P2 | [HexCoded Pricing — plans, credits & render costs](https://hexcoded.ai/pricing) — HexCoded; accessed 2026-09-09; first-party commercial/product page | The page publicly lists current video, image, and edit providers/models; says Creative Studio can switch models mid-project; uses one credit balance across models and quality; displays exact cost before render; says failed renders are free; and lists shared credit pools, pooled parallel generation, team members, usage analytics, and Scale API access by plan. It gives illustrative credit ranges, not a stable cost guarantee. | Direct public basis for recording model/provider, retry count, entered charged credits, and elapsed time as separate, dated metadata. Supports a no-integration, metadata-first artifact rather than a model router. | **High** for stated plan terms at access time; pricing, model catalogue, plan gates, credit cost, and feature names can change. The page's customer testimonials and volume claims are not used as evidence. | Actual cost for any attempt; whether credits, retries, or analytics export are available to a user; team collaboration behavior; API documentation or authorization; and whether this data changes a real decision. |
| P3 | [Terms of Service](https://hexcoded.ai/legal/terms) — HexCoded / Anycast Technology Private Limited; last updated 2026-08-03, accessed 2026-09-09; first-party legal terms | The service generates AI ad videos from supplied product links, references, templates, and actors; models are operated by HexCoded/vendors and are not exposed to users. Credits are charged on successful generations, including a render a user dislikes. Output may contain errors/artefacts and publishers must review before use. Brand inputs and outputs may be used to improve/train the service unless the workspace opts out. | Supports recording human review separately from technical checks and treating retries/credits as source-labelled facts, not satisfaction or quality measures. It reinforces the local/no-upload boundary for the internship artifact. | **High** for declared contractual terms; not legal advice or proof of implementation practice. | Actual input retention/opt-out execution, product review states, output export behavior, data available to a user, and any real workflow consequence. |
| P4 | [Privacy Policy](https://hexcoded.ai/legal/privacy) — HexCoded / Anycast Technology Private Limited; last updated 2026-08-03, accessed 2026-09-09; first-party privacy policy | HexCoded states that brand product links/content/references, workspace/team information, and usage data are processed; actors' face/voice, identity, consent, and payout data are sensitive; brand inputs/outputs may train/improve the service unless opted out; the service uses model vendors, analytics/observability, and primarily U.S. hosting. | Confirms that later artifact stages must keep media local/ephemeral, avoid private or actor material, avoid credentials, and export only metadata/judgments unless explicitly authorized. | **High** for stated policy; it does not prove technical enforcement, data flows for a given account, or legal sufficiency. | Whether any candidate input is safe to use; workspace opt-out state; actual retention/export behavior; and the artifact's future security review requirements. |
| P5 | [AI-Content Disclosure](https://hexcoded.ai/legal/ai-disclosure) — HexCoded / Anycast Technology Private Limited; last updated 2026-07-07, accessed 2026-09-09; first-party policy | HexCoded says output may contain errors or artefacts, requires review before use, relies on provider safety filters, adds no separate quality-verification badge, and places applicable platform/law disclosure on the publisher. | Confirms that Creative Run Review may record a human judgment and an applicable disclosure status as separate inputs, but must not claim automated quality verification, legal clearance, or disclosure compliance. | **High** for the stated policy; not a guarantee about individual output, provider filters, or platform/legal requirements. | Any actual disclosure requirement for a later demonstration, whether a real output is safe/suitable, and who owns a release decision. |
| P6 | [Actor Licence](https://hexcoded.ai/legal/actor-licence) — HexCoded / Anycast Technology Private Limited; last updated 2026-07-07, accessed 2026-09-09; first-party legal terms | The licence describes verified consent, permitted digital use, restricted alteration of an actor's face/voice outside HexCoded, future-use stopping, and the continued licence for already delivered content. | Keeps the selected artifact out of actor/rights administration. If an attempt ever includes a real actor, rights/consent must remain an owner-controlled external reference or Unknown—not a model quality field. | **High** for stated licence terms; not legal advice or proof that any individual asset is cleared. | Whether a specific actor, output, derivative, territory, or channel is permitted; no rights data is authorized for this artifact. |
| P7 | [HexCoded — Become an Actor](https://actors.hexcoded.ai/) — HexCoded; accessed 2026-09-09; first-party actor-program page | The page states that actors choose permitted ad categories, review a licence, can revoke new use, and track earnings; it also describes verification. | Reinforces the Stage 0 decision not to select a rights/consent companion and not to put actor identity, licence, or payout data into Creative Run Review. | **Medium-high** for stated program behavior; promotional page, no account or actor workflow was inspected. | Actual actor workflow, enforcement, rights scope, privacy behavior, payout accuracy, and relevance to an internal comparison workflow. |
| P8 | [AI Generalist Intern](https://jobs.lever.co/oneimpression/738a8d2e-a51c-4f04-99ac-a91710060a23) — One Impression; publication date not shown, accessed 2026-09-09; official job listing | The role asks an intern to make real Creative Studio videos across video and image models, learn where models break, know what each is good at/costs/where it falls over, check AI output, and select the appropriate model. The listing currently says sixteen video/image models, while the public product/pricing pages say 30+ frontier models. | Strongest direct public connection to an internship artifact that records attempt-level model behavior, failure notes, human checks, and credits/time without declaring a universal model ranking. | **High** for role intent at posting time; job listings are time-limited and aspirational, not evidence of a current internal workflow, user need, or implementation authorization. | Actual role responsibilities, model set, internal rubric, data availability, product access, and whether any artifact would be used or valued. |

### What changed from Stage 0 assumptions

- **Fact:** The public context continues to support multi-model image/video creation, credit-based generation, and human output review. The working direction remains honestly connected to public facts.
- **Fact:** The current pricing page makes the connection more specific: it publicly states model switching mid-project, a cross-model credit balance, pre-render cost visibility, failed-render treatment, image/video/edit categories, and Team/Scale signals.
- **Fact:** The current pricing FAQ names **Marketing Studio** alongside URL→Ad and Creative Studio, while the homepage instead names **Make a custom video**. Their relationship and exact workflow are **Unknown**; neither is a Stage 1 artifact requirement.
- **Fact:** The public model-count mismatch persists: the homepage/pricing page says 30+ frontier models, while the live internship listing says sixteen video/image models. Treat all model/provider lists as dated snapshots, never as a hard-coded artifact catalogue.
- **Inference — medium confidence:** The refreshed evidence strengthens the case for recording optional raw model/provider, retry, credit, and time fields. It does not strengthen the case for a new system, a model ranking, or a customer-facing product.
- **No change:** H2 remains unvalidated and parked; the research validation gate remains 0/13; the no-build/spreadsheet comparator remains mandatory.

### Relevance and later-scope constraints

**Facts from public evidence:** Creative Studio's stated image/video/edit modes, mid-project model switching, and visible pre-render credits support a single-brief comparison record. Public terms and disclosure policy require human review and say AI output can contain errors or artefacts. Public privacy and actor material define sensitive boundaries.

**Inferences — medium confidence:**

- Creative Run Review remains the best Stage 0 candidate because it can represent the public model-selection learning loop without becoming a generator, model router, dashboard, or rights system.
- Model/provider, retry, charged-credit, and time fields should remain optional, source-dated, and clearly marked as observed, entered estimate, Synthetic, or Unknown. They must not produce a general “best model,” ROI, or savings claim.
- Objective media checks may assess only locally observable file properties. Human review must remain separate from machine checks, safety filters, rights, claims, provenance, disclosure, and publishing authorization.

**Hypotheses (not established):**

- A forward-deployed creative, creative-operations user, or intern could find a local comparison record useful for explaining a selection decision.
- A compact failure taxonomy and a selected/no-decision outcome could make the Synthetic demonstration clearer than an unstructured folder or spreadsheet.

**Assumptions for later stages:**

- A later approved demo can use only Synthetic, openly licensed, or user-owned local inputs with a recorded source/date/licence-or-usage basis/limitation.
- Local files can remain ephemeral and metadata-only export can avoid copying media, prompts, actor details, contracts, claims, credentials, or private HexCoded data.
- A spreadsheet/native browser workflow is the primary comparison, not an implementation fallback.

**Synthetic assumptions:** none were created in Stage 1. Any later fictional brief, attempt ID, model value, retry/credit/time value, quality judgment, or outcome must be labelled Synthetic and cannot represent actual HexCoded performance.

**Implementation results:** none. No code, fixture, screen, dependency, prototype, integration, account test, or media check was created or run.

### Constraints and risks that affect the later artifact scope

1. **Dynamic catalogue and pricing:** never hard-code a provider list, model count, plan, credit cost, or feature gate as a durable fact. Store provenance and date if any value is later entered.
2. **No inferred cost/quality relationship:** a successful but disliked render can consume credits; a failed render may be free. Credit count is not a quality, satisfaction, or economic-impact measurement.
3. **Human review boundary:** HexCoded's public terms/policy say output can have errors/artefacts and must be reviewed. The artifact may record a human decision; it must not claim automated quality verification.
4. **Privacy boundary:** do not load private brand references, workspace material, account data, prompts, or generated content from HexCoded. Use local Synthetic/Public/user-owned data only after the relevant gate.
5. **Actor and rights boundary:** exclude actor likeness, biometrics, consent receipts, licences, payout data, and legal conclusions. A rights/consent state is at most an external owner-controlled link or Unknown in a later permitted scope.
6. **Disclosure and release boundary:** disclosure, claims, provenance, creative decision, and publishing authorization are distinct. Creative Run Review will not decide or certify any of them.
7. **Integration boundary:** public Scale API access and Team/analytics signals do not authorize or require an integration. Public API documentation, authenticated behavior, export formats, and permissions remain Unknown.

### Updated open questions

- What is the smallest defensible human rubric for brief fit, visible technical defects, visual/audio quality, continuity, and Unknown state?
- Which objective properties are consistently readable locally for one selected media family, and which must be shown as Unsupported/Unknown?
- How should a later artifact distinguish an observed credit/time value, a user-entered estimate, and a Synthetic value without false precision?
- Does a spreadsheet or native browser workflow already provide the same comparison trace with lower burden?
- Does public mid-project model switching mean a comparison is useful, or only that multiple models are available? Actual workflow value remains Unknown.
- Is any public media usable for a safe demonstration, with a licence/usage basis that does not imply commercial permission?
- What role, if any, would own a later comparison record, and can that question be investigated without private data or outreach?
- What local retention/deletion behavior and accessibility constraints should Stage 4 validate before any media is handled?

### Stage 2 recommendation

**Decision:** Proceed to Stage 2 only. Define the minimum evaluation method for one media family at a time: a short human rubric, a compact failure taxonomy, provenance/status labels, and the difference between deterministic metadata checks and human judgment. Compare every proposed field with a spreadsheet/native alternative. Do not design screens, create fixtures, inspect accounts, or implement code.

### Authorization statement

**No implementation authorization was created.** Stage 1 is public-context research and does not authorize code, fixtures, screens, dependencies, prototypes, model access, or integrations.

**No research validation was created.** The research validation gate remains **0/13**; H2 remains unvalidated and parked. This public refresh cannot establish users, customers, buyers, demand, willingness to pay, product-market fit, adoption, or a HexCoded need.

## Stage findings

| Stage | Finding | Evidence status | Decision |
|---:|---|---|---|
| 0 | Operating contract completed; Creative Run Review recommended provisionally; five directions compared; strict research boundary preserved | Implementation planning + public-context research only; no primary evidence | Proceed to Stage 1; no code |
| 1 | Current public HexCoded context refreshed: multi-model image/video/edit signals, mid-project switching, credit signals, human-review boundary, privacy/rights/disclosure constraints, and internship model-learning context | First-party public sources only; no primary workflow evidence or implementation result | Proceed to Stage 2; no code |
| 2 | Minimum evaluation method for one brief and 3–5 attempts: fixed rubric, metadata-only checks, distinct failure states, labelled retry/credit/time fields, and no-build comparator | Existing public evidence only; no implementation result or primary workflow evidence | Proceed to Stage 3; no code |
| 3 | Six alternatives compared; no-build spreadsheet/native workflow selected as cheapest sufficient method | Implementation-planning judgment only; no implementation or user result | Proceed to reduced Stage 4 feasibility review; no code |
| 4 | Browser-native, image-only local handling found feasible within strict Unknown, privacy, accessibility, and export boundaries | Public technical documentation and planning inference; no runnable result | Proceed to Stage 5 gate; no code |
| 5 | **Go** for a frozen polished, dynamic, local image-only Creative Run Review demo; spreadsheet retained as comparator | Internship-artifact planning decision only; no product/research validation | Stage 6 authorized on explicit start; only frozen scope |
| 6 | Frozen dependency-free vertical slice implemented and verified with exactly three Synthetic JPEG/PNG fixtures, local in-memory inspection, separate judgments/operations, metadata-only exports, explicit Unknowns, and clear-session cleanup | Implementation result only; no product or research validation | Complete; Stage 7 may begin only on explicit authorization and has not started |
| 7 | Frozen core workflow audited, minimally corrected, and verified end to end; no new feature or Stage 8 hardening scope added | Implementation result only; no product or research validation | Complete; Stage 8 may begin only on explicit authorization and has not started |
| 8 | Frozen release candidate hardened and verified across input, export, accessibility, layout, and cleanup paths | Implementation result only; no product or research validation | Complete; Stage 9 evaluated the artifact |
| 9 | Synthetic demo completed; no-build spreadsheet/native comparison repeated; bounded Ship decision recorded with limits and Unknowns | Implementation result only; no product or research validation | **Ship** internship artifact; Stage 10 may begin only on explicit authorization |
| 10 | Final reproducible internship package completed with setup, verification, fixture provenance/hashes, demo script, one-page explanation, claim limits, Unknowns, build-versus-spreadsheet history, founder message, and clean inventory | Implementation packaging only; no product or research validation | **Complete; track closed** |

## Current candidate set

1. **Creative Run Review** — recommended provisional artifact.
2. Release Integrity Checker — adjacent but high-overlap fallback.
3. Evidence-Gated Research Console — safe process fallback.
4. Synthetic Authorized Release Record — already covered by research's Synthetic comparison.
5. Rights/Consent Evidence Companion — high relevance but high-risk and potentially duplicative.
6. No-build or spreadsheet — mandatory comparator and valid final outcome.

## Change log

- 2026-09-09 — Stage 0 completed in the implementation track. Recorded the operating contract, research boundary, evidence and claim rules, five-direction comparison, decision matrix, provisional Creative Run Review recommendation, minimum scope, non-goals, Synthetic/Public inputs, demo flow, artifact success and kill criteria, Unknowns, founder learning, later sequence, and founder-facing explanation. No application code, dependencies, fixtures, screens, or research-track changes.
- 2026-09-09 — Implementation track was scaffolded with Creative Run Review as a provisional working direction, H2 parked, research gate preserved at 0/13, and research/implementation write boundaries kept separate.
- 2026-09-09 — Stage 1 completed. Refreshed only attributable first-party HexCoded and One Impression public context; recorded eight sources, the current model/credit/review/privacy/rights/disclosure signals, changes from Stage 0, artifact constraints, and updated Unknowns. No research validation, code, fixture, screen, dependency, account access, private data, or cross-track change was created.
- 2026-09-09 — Stage 6 completed. Built and verified the frozen localhost Creative Run Review vertical slice under `implementation/app/` with three clearly labelled Synthetic raster fixtures, browser-native checks, separate human and operational records, JSON/CSV/Markdown metadata exports, object-URL cleanup, accessibility basics, and one dependency-free self-check. No dependency, backend, persistence, external API, private data, research validation, research-track change, or Stage 7 work was created.
- 2026-09-09 — Stage 7 completed. Audited and minimally corrected the frozen core workflow: removed automatic selection, cleared stale fixture preview/provider metadata on replacement, exposed optional provider entry, fixed whitespace numeric parsing and persistent/announced validation state, corrected permitted-use fallback, and completed CSV provenance/summary fields. Reverified the full local flow, exports, cleanup, keyboard/semantic basics, and self-check. No dependency, new feature, private data, research change, or Stage 8 work was created.
- 2026-09-09 — Stage 8 completed. Fixed the allowed-type/unsupported-decode classification and the visually implicit Selected-attempt state; reverified the frozen localhost flows, five-attempt ceiling, metadata-only exports, clear-session revocation, labels/focus/reduced motion, 768-pixel layout, no-network/no-persistence boundary, and console. No dependency, new feature, private data, research change, or Stage 9 work was created.
- 2026-09-09 — Stage 9 completed. Ran the frozen Synthetic demo and repeated the A01 decision in the spreadsheet/native-style no-build comparator. Recorded Ship for the internship demonstration only, with the spreadsheet retained as the lower-burden operational baseline. No code, dependency, private data, research change, or Stage 10 work was created.
- 2026-09-09 — Stage 10 completed. Added the final founder-facing handoff, refreshed the two run/status READMEs, reverified the self-check, localhost demo, fixture integrity, no-network/no-persistence boundary, package inventory, and cross-track write boundary, and closed the implementation track. No application feature, dependency, private data, deployment, publication, outreach, research change, or later-stage work was created.

## Stage 2 — Minimum Creative Run Review evaluation method

**Status:** Complete — research and planning only. No application code, fixture, screen, spreadsheet, dependency, model access, account, private system, customer data, or external outreach was used.

### 1. Evaluation-method objective and boundary

**Decision:** use one fixed, per-brief comparison method for **three to five attempts from one media family** (`image` or `video`, never a cross-family aesthetic ranking). Its purpose is to produce a transparent Synthetic/Public decision record, not a general model score, publishing decision, quality certification, legal finding, or product claim.

The method separates what can be observed from a local file from what a human reviewer says about the attempt. A result can be `Selected for this comparison`, `Rejected`, or `Hold / no decision`; none means approved for publication or generally best.

### 2. Public evidence basis

No new external source was used in Stage 2. The method relies on the following already-recorded public evidence; their original evidence records remain in the named Stage 1/Research files.

| Source, organization/author, date, and type | Directly supported Public Fact | Relevance to the method | Confidence and limitation |
|---|---|---|---|
| [HexCoded Pricing](https://hexcoded.ai/pricing) — HexCoded; accessed 2026-09-09; first-party pricing/product page | The page describes multi-model image/video creation, mid-project model switching, credit visibility before render, and failed-render treatment. | Supports optional, dated raw provider/model, charge, and retry fields; it does not support an economic or quality comparison. | **High** for statements at access time; catalogue, pricing, plan behavior, and account data are dynamic and untested. |
| [HexCoded Terms of Service](https://hexcoded.ai/legal/terms) and [AI-Content Disclosure](https://hexcoded.ai/legal/ai-disclosure) — HexCoded / Anycast Technology Private Limited; updated 2026-08-03 and 2026-07-07 respectively; accessed 2026-09-09; first-party policy/legal sources | HexCoded states outputs can contain errors/artefacts, need review, and do not receive a separate quality-verification badge; publishers retain applicable claims/disclosure responsibility. | Requires human judgment to remain separate from metadata and keeps rights, claims, disclosure, and publishing authority out of an objective-check Pass. | **High** for stated policy; neither source proves an individual output's quality, legal status, or workflow. |
| [State of Video Report: Video Marketing Statistics for 2026](https://wistia.com/blog/video-marketing-statistics) — Lisa Marinelli, Chiara Hoogervorst, and Sam Balter / Wistia; 2026-04-22; vendor survey plus platform analysis | The report describes AI use across pre-production and selected creation tasks, with reliability, privacy, ethics, training, resources, and cost as stated concerns. | Supports the need to record human review and raw operational context without treating either as universal performance evidence. | **Medium-high** for its disclosed audience and method; not a HexCoded workflow study or a causal result. |
| [We Are Visual Thinkers, Not Verbal Thinkers!](https://doi.org/10.1145/3679318.3685370) — Park et al.; 2024-10; peer-reviewed qualitative study | Sixteen professional automotive designers reported needs for visual/multimodal input, iteration support, and prompt/output control. | Supports a bounded comparison of attempts and a short, human-led assessment, not a universal rubric or a model ranking. | **Medium** for this small, industry-specific qualitative sample; no frequency, cost, or adoption finding. |
| [How design agencies are actually using AI in 2024](https://www.creativeboom.com/insight/special-report-how-design-agencies-are-using-ai-in-2024) — Tom May / Creative Boom; 2024-02-27; professional agency interviews | Interviewed agencies described human refinement alongside control and visual-consistency limitations. | Supports the explicit human-quality and continuity fields. | **Medium** for reported interviewee experience; purposive/fast-changing evidence, not prevalence or need proof. |

**Facts:** the cited sources describe metered creation, iterative creative work, and human review in their stated scopes. **Inference — medium confidence:** a fixed small rubric plus separately labelled operational metadata is a defensible artifact method. **Hypothesis:** an internal creative producer, operations user, or intern would find the resulting record clearer than an unstructured folder or spreadsheet. That is not established.

### 3. Minimum comparison workflow

1. **Declare the comparison before inspection.** Record a brief ID, media family, three to five candidate attempt IDs, one decision owner label, and only the objective constraints that matter for this brief. Do not alter a constraint after inspecting an attempt; if it must change, version the brief and start a new comparison.
2. **Enter each attempt as an attempt, not a model result.** Record its attempt ordinal, optional provider/model exactly as supplied, source class, and whether it is an original, retry, revision, failed render, or Unknown relation. A failed render is not a rejected creative output.
3. **Run only declared, locally observable checks.** Record each check separately as `Pass`, `Fail`, `Unknown`, or `Not applicable`; preserve the observed value and check basis.
4. **Record one human review independently.** The reviewer rates the attempt against the fixed rubric, gives a short evidence note, and may select `Not assessed`. The record does not average or convert one reviewer's rating into objective truth.
5. **Record failure/concern tags and operational context.** Apply the compact taxonomy below. Preserve retries, charges, and elapsed time with source and uncertainty rather than combining them into a performance score.
6. **Make a bounded comparison decision.** Select one attempt for this comparison, reject it from this comparison, or hold/no-decision. Give a rationale that names objective status, human judgment, and material Unknowns separately.
7. **Export the record without media.** The later artifact may export only the record and labels. It must not silently copy media, prompts, rights evidence, credentials, or private material.

### 4. Smallest human rubric

Use a single named reviewer and the same three questions for every attempt in that one review. Each applicable question is rated `0`, `1`, or `2`; `Not assessed` is distinct from `0`.

| Human question | 0 | 1 | 2 | Boundary |
|---|---|---|---|---|
| **Brief fit** | Does not meet an explicit creative requirement. | Partly meets it or reviewer is uncertain. | Meets it for this bounded comparison. | A human interpretation of the stated brief; not semantic verification. |
| **Observable craft / legibility** | Material visible/audible defect for the stated use. | Mixed, minor defect, or revision likely. | Acceptable for the stated comparison. | Human judgment; not a technical metadata check or release approval. |
| **Continuity / coherence** | Material inconsistency in the medium. | Mixed or uncertain. | No material issue observed by this reviewer. | `Not applicable` for an image if temporal continuity is not in scope; does not assess factuality, rights, safety, or provenance. |

For video, the reviewer may note audio as part of `Observable craft / legibility` only if the brief requires audio. For images, `Continuity / coherence` can be `Not applicable`. A note must identify the observed reason, not assert a model defect or universal quality ranking.

### 5. Objective-check categories and Unknown rules

The minimum checks are file-property checks only, and only when the brief declares them:

| Media family | Potential local checks | What is never inferred |
|---|---|---|
| Image | Readability; media type; pixel width/height; aspect ratio; file size if the brief sets a limit. | Visual quality, text correctness, brand fit, ownership, consent, provenance completeness, disclosure, or publication authority. |
| Video | Readability; media type; pixel width/height; aspect ratio; duration; file size if the brief sets a limit. | Temporal quality, audio quality, factuality, rights, consent, provenance completeness, disclosure, or publication authority. |

Rules:

- `Pass` only when an available observed value satisfies a predeclared constraint.
- `Fail` only when an available observed value contradicts a predeclared constraint—for example, an observed 8-second duration against a declared 10-second minimum.
- `Unknown` when the file cannot be read, the property is unavailable, the format/browser does not support the check, the value's source is missing, or the constraint has no reliable comparison basis. Unsupported is always `Unknown`, never `Pass`.
- `Not applicable` only when the brief deliberately does not require the property—for example, duration for an image. It is not a substitute for unavailable evidence.
- A pass does not offset a human-quality concern, a governance concern, or an Unknown elsewhere.

### 6. Compact failure taxonomy and required distinctions

| Record state | Use when | Required treatment |
|---|---|---|
| **Objective constraint failure** | An observed local property fails a predeclared constraint. | Name the failed property and observed/expected value. Do not label it a quality, rights, or model failure. |
| **Human quality judgment** | A reviewer rates brief fit, craft/legibility, or continuity/coherence at `0` or `1`. | Preserve reviewer, rating, note, and assessment limit. Do not call it objective truth. |
| **Unknown / unsupported result** | A required check, source, relationship, or assessment cannot be made. | Record why it is Unknown; it cannot become Pass by absence of evidence. |
| **Rights / consent concern** | A relevant owner-controlled rights, likeness, licence, or consent status is missing, Pending, or concerning. | Hold or link to the external owner-controlled evidence when later authorized. Do not adjudicate legality or clearance. |
| **Provenance / disclosure concern** | Origin/edit history, source label, or applicable disclosure decision is missing, incomplete, or uncertain. | Keep it separate from ownership, truth, consent, and approval. Do not validate provenance or decide a channel rule. |
| **Process / decision failure** | The brief changed after review, criteria were missing, the decision owner/rationale is absent, or selected status conflicts with the recorded basis. | Hold/no-decision until the record is corrected; do not diagnose a person, team, or system. |
| **Render / retry event** | The generation did not yield an inspectable attempt, or a subsequent attempt is explicitly linked to another. | Record source evidence and relation. Do not collapse it into a rejected output or automatic cost/quality signal. |

### 7. Retry, charged-credit, elapsed-time, and uncertainty rules

Record raw per-attempt values; do not produce a cost-per-quality score, model ranking, ROI, saving, or productivity claim.

| Field | Minimum recording rule |
|---|---|
| Attempt/retry | `attemptOrdinal`; relation of `original`, `retry`, `revision`, `failed render`, or `Unknown`; optional predecessor ID. A relation is `Unknown` unless evidenced or explicitly entered. |
| Charged credits | Amount and unit exactly as shown or entered; status of `observed service display`, `entered actual`, `entered estimate`, `Synthetic`, or `Unknown`; source/date; and whether the entry reflects a successful render, failed render, or unknown billing outcome. No currency conversion or cross-provider normalization. |
| Elapsed time | Start and ready timestamps only if available, plus derived elapsed duration and precision; otherwise `entered estimate`, `Synthetic`, or `Unknown`. It measures that attempt's stated interval, not human labor, throughput, or a service-level claim. |
| Uncertainty | Every non-Synthetic operational field carries source class, captured/entered date, precision (exact/range/estimate), and a limitation note. Never total observed, estimated, and Synthetic values together. |

### 8. Decision-record format and claim-label rules

The later export should be a transparent Markdown/CSV/JSON-equivalent record with these sections, not a hidden score:

1. record version, review ID, date, reviewer, and decision-owner label;
2. brief ID/text/version, media family, predeclared constraints, and comparison boundary;
3. input provenance for each attempt: `Synthetic`, `Public`, `user-owned local` only if later authorized, or `Unknown`, with source/date/licence-or-usage basis/limitation where Public;
4. attempt identity, relationship, optional model/provider exactly-as-entered, and data-source status;
5. each objective check with expected/observed value, status, basis, and limitation;
6. each human-rubric response with reviewer, rating, note, and `Not assessed` where relevant;
7. failure/concern tags, retry/credit/time entries, uncertainty labels, and separate rights/provenance/disclosure states;
8. comparison outcome (`Selected for this comparison`, `Rejected`, or `Hold / no decision`), short rationale, and next action; and
9. limitations, Unknowns, and an explicit statement that the record neither grants approval nor proves quality, legality, consent, ownership, provenance completeness, disclosure compliance, publishing authority, user value, or model performance.

Claim labels are mandatory: **Fact** for a named public source or observed file property; **Inference** for a reasoned readout; **Hypothesis** for a possible user/workflow outcome; **Assumption** for an unverified method condition; **Unknown** for unsupported information; **Synthetic assumption** for invented demo content; and **Implementation result** only for later verified artifact behavior. Implementation results cannot be primary research evidence.

### 9. Synthetic demonstration cases

No fixtures were created. A later permitted demonstration should use invented labels and values only, visibly marked **Synthetic assumption**:

| Case | Fictional comparison | What it exercises | Required outcome |
|---|---|---|---|
| S1 — selection with judgment | One fictional square image brief and three invented image attempts. | Predeclared dimensions/aspect checks plus different human brief-fit/craft notes. | Select one only for this Synthetic comparison; do not infer a generally better model. |
| S2 — objective failure and Unknown | One fictional short-video brief and three invented video attempts: one declared duration/aspect failure, one unreadable/unsupported value, and one inspectable candidate. | `Fail` versus `Unknown`, and the separate human rubric. | The unreadable/unsupported attempt remains Unknown/Hold, not Pass; the objective failure is not called a quality or legal failure. |
| S3 — governance and operational uncertainty | One fictional image or video brief with three invented attempts, including unknown rights/disclosure status and mixed Synthetic credit/time provenance. | Separate rights/provenance/disclosure concerns and raw operational labels. | Hold/no-decision if the stated comparison depends on the unresolved concern; never derive economics or clearance. |

Each case uses a single media family and no actual model behavior, provider pricing, person, actor, brand, customer, or publishing activity.

### 10. Spreadsheet/native-tool comparator

**Comparator to test in Stage 3:** one manual spreadsheet table plus native OS/browser file information. It needs only one row per attempt and columns for the declared constraints, observed properties, check status, three human-rubric cells, tags, retry/credit/time provenance, decision, and limitations. Basic formula or manual comparison is sufficient; no automation is presumed.

The later comparison asks whether this table can: preserve the same `Pass`/`Fail`/`Unknown` distinctions; show the human note and decision rationale; keep source/uncertainty labels visible; export/share the record; and do so with equal or lower entry burden. If yes, choose no-build. This is a comparator design only; no spreadsheet was created.

### 11. Artifact-level evaluation criteria

A later approved artifact passes this Stage 2 method only if it can:

1. complete a labelled Synthetic review for one brief and three to five same-family attempts;
2. preserve declared constraints before evaluation and produce separate `Pass`, `Fail`, `Unknown`, and `Not applicable` states;
3. keep all unsupported or unreadable required checks at `Unknown`, never Pass;
4. retain the three-question human rubric, reviewer note, and `Not assessed` state without calling the output objective truth;
5. preserve failure taxonomy, retry relation, charge/time provenance, uncertainty, and explicit limitations without converting them into a model or business metric;
6. retain separate rights/consent, provenance, disclosure, and process states; and
7. export a readable metadata-only decision record that can be compared directly with the spreadsheet/native workflow.

These are artifact-method checks, not evidence of user benefit, demand, adoption, ROI, a HexCoded need, or research validation.

### 12. Kill criteria

Stop or reduce Creative Run Review if:

- the spreadsheet/native comparison preserves the same decision record with equal or lower effort;
- a reliable local property check cannot be bounded to one media family or reports unsupported data as Pass;
- the rubric is not reproducible enough to distinguish a human note from an asserted fact;
- charge/time/retry entries invite false precision or require model/provider normalisation;
- safe demonstration requires private media, credentials, account access, cloud upload, actor/rights material, or a live integration;
- rights, consent, provenance, disclosure, or publishing authority would have to be inferred from metadata; or
- the scope expands into generation, routing, DAM, proofing, scheduling, rights administration, legal clearance, analytics, or a customer product.

### 13. Stage 2 labels, assumptions, and Unknowns

**Facts:** existing public evidence supports only the stated availability of metered multi-model creation, iterative work, and human review in its cited scopes. **Inferences — medium confidence:** a per-brief, metadata-first method is safer than automated aesthetic or governance conclusions. **Hypotheses:** an internal creative producer, operations user, or intern may find the record useful, and it may be clearer than a folder or table. **Assumptions:** a later Synthetic case can predeclare constraints and use one reviewer; browser/OS metadata will expose some simple properties for a selected media family; metadata-only export can avoid copying media. **Synthetic assumptions:** all future briefs, attempt IDs, provider/model names, scores, values, costs, timings, and outcomes. **Implementation results:** none.

**Open Unknowns:** the real internal workflow, decision owner, accepted rubric, whether review must cover image or video first, which formats/properties are reliably available locally, actual provider billing/elapsed-time semantics, public-media suitability and licence, local retention/accessibility behavior, spreadsheet sufficiency, and any user, buyer, demand, willingness-to-pay, adoption, ROI, or product-market-fit fact.

### 14. Recommendation for Stage 3 and authorization boundary

**Recommendation:** proceed only to Stage 3. Compare the defined spreadsheet/native-browser method, folder convention, and documented existing review/creation tools against this proposed record; decide whether any later artifact adds a distinct, lower-burden control. Do not create the spreadsheet, fixtures, screens, or code during that research.

**No implementation authorization was created.** Stage 2 does not authorize code, fixtures, dependencies, screens, private data, accounts, integrations, or Stage 3 implementation.

**No research validation was created.** The research gate remains **0/13**, unchanged. H2 remains unvalidated and parked. The research Stage 7 result remains Synthetic; it is not altered by this method. No user, customer, buyer, demand, willingness-to-pay, product-market-fit, adoption, ROI, observed workflow, or HexCoded need is claimed.

## Stage 3 alternatives decision

### 1. Objective, method, and evidence boundary

**Objective:** identify the cheapest sufficient way to conduct the Stage 2 comparison method for one brief and three to five attempts using only local or clearly labelled Synthetic inputs. This is an implementation-planning comparison, not a product decision, workflow observation, or validation exercise.

**Scoring method:** each criterion below is scored `0` (not supported or would require an unsupported assumption), `1` (manual, partial, or uncertain), or `2` (can support the bounded method as stated). Total /18 is a planning judgment about the supplied Synthetic/local scope. It is not market evidence, a product ranking, a user score, or evidence of HexCoded need.

**Facts:** Stage 2 defines a manual one-brief / three-to-five-attempt record with distinct local-property checks, human judgments, uncertainty labels, and metadata-only export. Public incumbent documentation records stated creation, project, review, version-comparison, approval, and publishing capabilities in different products. The research Stage 7 tabletop result is Synthetic and concludes only that existing stack plus operating discipline covers its invented cases.

**Public evidence:** no new sources were used. This decision relies on the already-attributed public documentation in research Stage 3: Runway and LTX for project/creation context; Adobe Firefly and Kive for shared reference/version context; Frame.io and Ziflow for visual comparison/review routing; and Canva and Sprout for approvals/publishing. Those sources support vendors' stated capabilities only. They do not show any target configuration, adoption, sufficiency, privacy posture, output quality, or need for a new tool.

**Inferences — medium confidence:** a table can represent every required Stage 2 field without custom software; native local file information can supply some observed properties when a selected format exposes them; and a second record is unjustified unless it removes a material manual-control burden that the table cannot. These are bounded planning inferences, not observed results.

**Hypotheses:** a later internal or internship review may find a constrained local record easier to complete or inspect than a table; a small local artifact may reduce transcription or status errors. Neither has been tested.

**Assumptions:** a later permitted Synthetic comparison may use one media family, a predeclared constraint set, a single reviewer, and a conventional local table/CSV; browser or OS file information exposes at least some simple properties for the chosen file; and the operator can retain source and limitation labels manually.

**Unknowns:** actual HexCoded workflow, roles, file formats, system plans/configurations, expected export, accessibility needs, operator burden, local retention behavior, and every user, customer, buyer, demand, willingness-to-pay, adoption, ROI, product-market-fit, or HexCoded-need fact.

**Synthetic assumptions:** any later brief, attempt, filename, property value, rating, model/provider label, retry, credit, elapsed time, decision, and demo result will be invented and visibly labelled.

**Implementation results:** none. No spreadsheet, folder structure, account, fixture, screen, application, or prototype was created or tested.

### 2. Detailed alternatives comparison

#### A. Spreadsheet or CSV workflow

- **Workflow and minimum fields:** one row per attempt for the brief ID/version, attempt ID and relation, source class, declared constraints, observed properties, `Pass`/`Fail`/`Unknown`/`N/A`, three human-rubric ratings and notes, concern tags, retry/credit/time source fields, decision/rationale, and limitations. A separate brief header or first row can hold the review boundary.
- **Checks, judgment, and records:** native OS/browser information is manually transcribed for the bounded objective checks; human ratings remain manual; raw retry/credit/time fields retain their source and precision; CSV provides a transparent metadata-only export and a visible provenance/Unknown trail.
- **Privacy, accessibility, and reliability:** it can stay local and store metadata rather than media. Accessible labels, keyboard operation, formula behavior, and CSV escaping are not yet tested. Manual entry and copied values are its chief reliability limits.
- **Burden and risks:** lowest setup/maintenance and technical complexity; no dependency or integration is needed. It can become inconsistent, be overwritten, hide a formula assumption, or invite false precision. It does not establish rights, consent, legality, provenance completeness, disclosure, authority, or quality.
- **Synthetic/Public demonstration, learning, and reversibility:** use an invented one-brief/three-attempt table and export the rows. It shows whether the method itself is coherent and leaves no custom product claim. It is immediately reversible: stop if manual entry is ambiguous, errors cannot remain visible, or a native/local method cannot expose a required property as `Unknown`.
- **Claims that must not be made:** that a spreadsheet is used by HexCoded, solves a real workflow, is accessible/reliable in practice, reduces effort, or is sufficient for anyone beyond this defined Synthetic record.

#### B. Native browser features and local files

- **Workflow and minimum fields:** local file selection plus OS/browser property inspection can supply a file identity and some observed media values; it still needs a separate manual record for the brief, constraints, ratings, concerns, retry/credit/time, decision, and provenance labels.
- **Checks, judgment, and records:** it can assist only deterministic readability/type/dimensions/aspect/file-size/duration checks where the selected environment exposes them. It does not retain human judgment, retries, billing context, a decision rationale, or a portable decision record by itself.
- **Privacy, accessibility, and reliability:** potentially local and low-data, but browser decoding and OS metadata vary by file, format, browser, and assistive technology. An unavailable property is `Unknown`; it must never become Pass through a missing display.
- **Burden and risks:** minimal setup but high dependence on environment behavior; no account or integration is required. Common failure modes are unsupported codecs, misleading filename/type labels, missing duration, browser differences, and an operator mistaking file metadata for proof of quality, rights, consent, provenance, disclosure, or authority.
- **Synthetic/Public demonstration, learning, and reversibility:** inspect invented metadata values only, or a later authorized openly usable local media file; record every unavailable result as `Unknown`. It helps bound what a no-build record can truthfully check. It is immediately reversible: stop treating it as an objective-check source if its selected media family cannot expose the declared properties.
- **Claims that must not be made:** that native metadata verifies quality, model behavior, legality, ownership, consent, provenance completeness, disclosure compliance, publishing authority, or reliable support for all media.

#### C. Existing experiment/model-evaluation trackers and adjacent creative-review tools

- **Workflow and minimum fields:** public material documents partial equivalents: Runway/LTX projects and creative context; Frame.io/Ziflow comparison and review routing; and other documented creation, asset, approval, or publishing surfaces. A complete Stage 2 record would still require a brief boundary, explicit `Unknown` labels, human-rubric notes, raw retry/credit/time source classes, and a metadata-only decision export. Whether any named plan supplies all of these is Unknown.
- **Checks, judgment, and records:** stated tools may support assets, versions, comments, and decisions; public evidence does not establish their ability to perform the defined local property checks or retain the required uncertainty semantics. Human judgment can be captured as comments/decisions only where a configured tool permits it; retry/credit/time support is partial, provider-specific, or Unknown.
- **Privacy, accessibility, and reliability:** accounts, storage, sharing, plan gates, permissions, retention, and integrations would need separate approval and assessment. Public vendor statements do not prove the actual security, accessibility, data residency, or reliability of a target configuration.
- **Burden and risks:** setup and maintenance are higher than the local baseline because plan/configuration/account questions must be resolved. Risks include cloud retention, permissions, copied media, role ambiguity, subscription/credit changes, duplicate state, integration drift, and treating a documented feature as a proven workflow.
- **Synthetic/Public demonstration, learning, and reversibility:** do not open accounts or trials. Use only the existing public capability record to map partial coverage and compare the required fields conceptually. This is useful for identifying that a custom suite should not be assumed necessary. Stop this alternative for the artifact if a safe, no-account way cannot preserve the exact record or if it would require external access.
- **Claims that must not be made:** that any vendor is sufficient/insufficient, cheaper, safer, more reliable, adopted by HexCoded, or a substitute for rights, consent, provenance, disclosure, or publishing authorization.

#### D. Folder and naming convention

- **Workflow and minimum fields:** a local folder per brief and a stable attempt naming pattern can keep media identities, attempted order, and perhaps a manual retry relation. It still lacks declared constraints, observed values, separate human ratings, source/precision labels, outcome rationale, and an exportable decision record unless paired with a text/table record.
- **Checks, judgment, and records:** it can support source-file retrieval and reduce ambiguous identifiers but provides no objective check, human-rubric, credit/time, or provenance/Unknown record on its own.
- **Privacy, accessibility, and reliability:** local folders avoid cloud upload when used locally. Filenames can be inaccessible, inconsistent, duplicated, stale, misleading, or expose sensitive detail; directory behavior and indexing are environment dependent.
- **Burden and risks:** low technical burden, but manual naming discipline is fragile and filenames are a poor place for changing judgment or operational context. It risks filename-as-truth, lost linkage, unnoticed duplicate attempts, and accidental sensitive-data exposure.
- **Synthetic/Public demonstration, learning, and reversibility:** invented IDs such as `BR-SYN-01__A01` could illustrate identity and relation without making media. It tests only an organizational support control, not a decision method. It is immediately reversible: stop if a table is still required for the decision or names cannot preserve a clear attempt lineage.
- **Claims that must not be made:** that naming proves version, origin, ownership, review, approval, attempt order, or a real workflow improvement.

#### E. Small local Creative Run Review artifact

- **Workflow and minimum fields:** it could constrain the Stage 2 schema to one brief, three to five attempts, one media family, local property statuses, separate human ratings, concern tags, raw operational context, and a metadata-only export.
- **Checks, judgment, and records:** its only plausible distinction is reducing manual omission/transcription through constrained status fields and one consistent decision record. The proposed scope cannot automate aesthetic truth, rights/consent, provenance/disclosure, billing, workflow authority, or provider comparison.
- **Privacy, accessibility, and reliability:** a local/no-upload design could reduce data exposure, but implementation behavior, local retention, accessibility, file decoding, export correctness, and error handling remain Unknown until a later authorized feasibility review. A custom record can itself create a second, stale source of truth.
- **Burden and risks:** higher setup, maintenance, technical complexity, and testing burden than the table. Risks include scope expansion into generation, DAM, review, rights, analytics, routing, or integration; silently treating unsupported media as Pass; and duplicating data that native tools already retain.
- **Synthetic/Public demonstration, learning, and reversibility:** only after a later gate, a fictional three-attempt image-first record could test whether constrained entry and export actually differ from the table. It would demonstrate artifact behavior only. Kill it when the table has equal/lower burden, a required local check is not reliable, the record needs media upload/accounts, or it does not make limitations more visible.
- **Claims that must not be made:** that it is a product, required by HexCoded, superior to a spreadsheet, secure, accessible, accurate, adopted, or evidence of any model, user, or business outcome.

#### F. No-build outcome

- **Workflow and minimum fields:** retain the spreadsheet/CSV record plus native local file information, with an optional folder convention only for file identity. The minimum fields are exactly the Stage 2 schema; no additional application surface is introduced.
- **Checks, judgment, and records:** the table records separate objective statuses, human judgment, raw retry/credit/time context, Unknowns, provenance labels, and the decision. Native tools contribute only observed local properties. This deliberately does not depend on a cloud tracker or custom automation.
- **Privacy, accessibility, and reliability:** it has the smallest data and permission surface because it can remain local and metadata-first. Spreadsheet accessibility and exact local-file support remain assumptions that a later technical feasibility gate must examine.
- **Burden and risks:** it is the least complex option, but still has manual-entry, stale-file, and unsupported-format risks. It must retain `Unknown` rather than papering over those limits.
- **Synthetic/Public demonstration, learning, and reversibility:** a labelled fictional one-brief record can demonstrate the complete method without a fixture or account. It teaches whether the record's distinctions are understandable before any software exists. It is fully reversible: keep the table, reduce its fields, or stop if no bounded check can be supported safely.
- **Claims that must not be made:** that this proves a real incumbent stack is sufficient, a real team uses the process, or there is no product opportunity. It is sufficient only as the cheapest planning baseline for the defined Synthetic/local exercise.

### 3. Alternatives matrix

| Alternative | One brief / 3–5 attempts | Objective ≠ human judgment | Unknowns + provenance | Retry / credit / time | Local / Synthetic | Low effort / complexity | Low privacy / security exposure | Clear export | Reversible | Total /18 | Planning rationale |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Spreadsheet/CSV + native local file information | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **18** | Manual representation covers the complete defined schema; native tools supply only available property observations. |
| Native browser/local files alone | 1 | 0 | 0 | 0 | 2 | 2 | 2 | 0 | 2 | **9** | Useful input to checks, but no structured human, operational, or export record. |
| Existing trackers / adjacent review tools | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | **6** | Public coverage is partial; account, plan, permission, and exact-schema support are Unknown. |
| Folder and naming convention | 1 | 0 | 1 | 1 | 2 | 2 | 2 | 1 | 2 | **12** | Helps identity and local organization, but requires another record for the actual decision. |
| Small local Creative Run Review artifact | 2 | 2 | 2 | 2 | 2 | 0 | 2 | 2 | 1 | **15** | Could enforce the schema, but adds custom build/maintenance without demonstrated lower burden. |
| No-build outcome (table + native information; optional naming) | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | **18** | Same method as the table baseline with no new software surface; this is a disposition, not a second technical system. |

The equal top scores do not mean two separate solutions are tied: the no-build outcome adopts the spreadsheet/CSV plus native-information baseline. Scores describe defined-method coverage, not observed effectiveness.

### 4. Decision and revised boundary

**Selected alternative:** **no-build spreadsheet/CSV + native OS/browser file information**, optionally assisted by a folder naming convention for local attempt identity. This is the cheapest sufficient option for a fictional/local record because every Stage 2 field is manually representable and no custom control has yet shown a distinct benefit.

**Is the spreadsheet/native baseline already sufficient?** **Inference — medium confidence:** it is sufficient to represent the Stage 2 method for the constrained Synthetic/local exercise. It is not proven sufficient, usable, or lower-effort in an actual workflow.

**Does Creative Run Review add a meaningful distinction?** **Unknown.** A hypothetical local artifact could constrain fields and reduce omissions, but that distinction is neither demonstrated nor needed for the current bounded exercise. Existing public tools may cover overlapping capabilities, but their actual sufficiency is also Unknown.

**Recommendation:** **Reduce** further technical-feasibility work. Do not proceed with a local Creative Run Review application. The smallest Stage 4 comparator, if separately authorized, is an **image-first, no-build spreadsheet/native baseline** that checks only whether the selected local environment can truthfully expose the few predeclared file properties, retain the Stage 2 labels, and export a metadata-only record without upload or account access. This is a recommendation only; Stage 4 has not started.

**Revised Creative Run Review boundary if revisited:** one local, metadata-only record for a fictional image brief and three to five fictional attempts; predeclared dimensions/aspect/readability constraints; manual human rubric; `Unknown` preserved; raw, source-labelled retry/credit/time; and text/CSV decision export. It must first beat the baseline on visible omission control without adding media retention, upload, accounts, integrations, or a second source of truth.

**Removed or deferred scope:** video-first support; broad format/codec coverage; provider/model catalogues or comparisons; model routing or generation; prompts/references/media storage; preview, editing, visual side-by-side UX, automatic scoring, formula-driven rankings, credit normalization, aggregate analytics, dashboards, team collaboration, approval/publishing, rights/consent/claims/provenance/disclosure determinations, account/API/cloud integrations, authentication, databases, and any customer/product framing.

### 5. Artifact-level success, kill conditions, risks, and next gate

**Artifact-level success criteria for the reduced comparator:**

1. A clearly labelled Synthetic one-brief / three-to-five-attempt image record can retain every Stage 2 required distinction.
2. Every unsupported property remains `Unknown`; no field or filename creates a false Pass.
3. Objective values, human ratings, concerns, retry/credit/time source classes, outcome, rationale, and limitations remain separately visible in a metadata-only export.
4. The record does not contain media, credentials, private material, rights evidence, or inferred authority.
5. A reviewer can compare the result with an optional minimal local-artifact concept without an asserted speed, quality, or business benefit.

**Kill criteria:** select permanent no-build or stop the artifact path if the table preserves the same decision record with equal/lower effort; the selected local environment cannot expose a required property without ambiguity; any needed safe demonstration requires private data, cloud upload, credentials, broad permissions, or copied sensitive evidence; the record invites false precision or rights/provenance/quality claims; or the proposed artifact expands beyond the narrowed boundary.

**Founder/demo learning value — inference:** the low-cost learning is whether the distinction itself can be made legible: declared constraint versus human judgment versus Unknown, plus an auditable reason for a Synthetic selection or hold. It does not answer whether anyone wants, adopts, or pays for it.

**Updated open questions:** Which image format and locally available property path can be checked without an unsupported result? Can a plain metadata-only table/export remain accessible and clear? Is constrained entry materially less error-prone than manual table entry? Do any later permitted Public inputs have a documented usage basis? What real workflow, role, burden, configuration, privacy rule, or outcome would justify further work? All remain Unknown.

**No implementation authorization or research validation was created.** No application code, fixture, spreadsheet, screen, dependency, account, integration, or prototype was created. The research validation gate remains **0/13**; H2 remains unvalidated and parked; and the research Stage 7 result remains Synthetic and untouched.

## Stage 4 technical-feasibility decision

### 1. Decision, boundary, and evidence labels

**Technical decision: Reduce.** A no-build, metadata-first spreadsheet/CSV record is technically feasible without any new software. If a later Stage 5 decision explicitly retains a small local artifact, browser-native APIs are sufficient only for an **optional, image-first** inspection path: one user-selected JPEG or PNG at a time, limited to file name/type/size and browser-observed decode/dimensions/aspect ratio. Video inspection, broad format support, and media export are not feasible within the same low-risk scope and are excluded.

This is a technical boundary, not product validation. It does not establish a user, customer, buyer, demand, willingness to pay, adoption, ROI, HexCoded need, model performance, workflow improvement, or the advantage of a custom artifact over the no-build baseline.

**Facts:** browser-native file inputs expose a user-selected `FileList`; `accept` is only a chooser hint, not validation. Browser image and video elements expose selected properties only after successful decoding/metadata availability; unavailable image dimensions can be `0`, unavailable video dimensions can be `0`, and media duration can be `NaN` or `Infinity`. Object URLs must be revoked when no longer needed. Accessibility primitives for live error/status messages and reduced-motion preferences are broadly available.

**Inferences — medium confidence:** a static local artifact can use these native primitives without a dependency or backend, provided it does not promise exact encoded media metadata beyond browser-observed values. JPEG/PNG is a lower-risk first family than video because video containers and codecs introduce additional browser support uncertainty. The no-build table remains lower burden because it has no runtime or storage surface.

**Hypotheses:** a constrained local form might prevent a manual omission that a table permits. This has not been tested and is not a technical result.

**Assumptions:** a later local artifact can run in one selected current desktop browser; it can avoid every network call and persistent browser store; it can show a no-media synthetic record; and a user who later supplies media has authority to inspect it locally.

**Unknowns:** the selected demo browser/version, actual device-memory behavior, browser decoding behavior for a real file, exact supported file-size ceiling, accessibility usability, public-media usage basis, the value of constrained entry over a table, and all real workflow/value facts.

**Synthetic assumptions:** all future brief text, identifiers, media labels, observed values, ratings, retry/credit/time values, decisions, and self-check inputs are invented unless individually recorded as Public or user-owned local under a later authorization.

**Implementation results:** none. No browser experiment, file decode, self-check, static application, spreadsheet, fixture, or export was created or run.

### 2. Public technical evidence

| Source | Organization / access date / type | Directly supported Fact | Relevance | Confidence and limitation | Remaining Unknown |
|---|---|---|---|---|---|
| [MDN: `<input type="file">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file) and [MDN: `accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/accept) | MDN contributors; accessed 2026-09-09; technical reference | A file input exposes selected files through `files`; `accept` guides the chooser but does not validate a selected file. | Supports local, user-initiated selection and the need for separate runtime validation. | High for documented web-platform behavior; no artifact/browser test occurred. | Whether a chosen target browser exposes the requested media's usable metadata. |
| [MDN: `HTMLImageElement.naturalWidth`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/naturalWidth) | MDN contributors; accessed 2026-09-09; technical reference | Browser-exposed intrinsic image width is `0` when unavailable; the value can be density-corrected and browser processing can affect it. | Requires the record to call this a browser-observed value, not universal file-pixel proof. | High for API semantics; does not establish exact encoded dimensions for every device/file. | Whether an intended JPEG/PNG yields reliable values in the selected environment. |
| [MDN: `HTMLMediaElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) and [MDN: `HTMLVideoElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement) | MDN contributors; accessed 2026-09-09; technical reference | Metadata becomes available through media events; `duration` can be `NaN` or `Infinity`; video width/height can be `0` when unavailable; `canPlayType()` returns `probably`, `maybe`, or an empty string. | Establishes codec/metadata uncertainty and why automatic video checks are deferred. | High for documented API behavior; no guarantee that a container/codec will load, decode, or yield a usable value. | Actual browser/codec behavior for any video input. |
| [MDN: `URL.revokeObjectURL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL_static) and [MDN: blob URLs](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/blob) | MDN contributors; accessed 2026-09-09; technical reference | Object URLs created for blobs should be revoked after use to release the reference; active object URLs can retain underlying data. | Supports an in-memory-only local-media rule and cleanup requirement. | High for API lifecycle guidance; browser/process memory outside an artifact's control is not eliminated. | Exact in-memory lifetime on the target environment and user handling of downloaded exports. |
| [MDN: `aria-live`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) and [MDN: `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion) | MDN contributors; accessed 2026-09-09; accessibility reference | Live regions can announce dynamic status/errors to assistive technology; the reduced-motion media feature exposes a user preference to minimize non-essential motion. | Supports accessible error/Unknown states and a no-animation default. | High for documented primitives; no assistive-technology testing occurred. | Actual accessibility of a future implementation and the needs of any actual user. |

**Existing public context:** the earlier HexCoded and workflow sources remain relevant only to the internship-artifact context. They do not change this technical decision or establish a workflow, a need, or a reason to build.

### 3. Reduced data flow and trust boundary

The only recommended flow is deliberately one-way and local:

`Synthetic/Public/user-owned local description → manual brief/constraint/attempt fields → optional user-selected local JPEG/PNG → in-memory browser observation → explicit objective/human/Unknown record → user-initiated metadata-only CSV or JSON download`

| Boundary | Permitted behavior | Prohibited behavior / treatment |
|---|---|---|
| Local input | A user may enter Synthetic metadata, or later select one local JPEG/PNG per attempt. File name, reported type, byte size, and successful browser-observed dimensions may be recorded only when relevant. | No directory scan, path capture, drag-and-drop requirement, camera capture, background reading, or automatic collection. A filename is not provenance or rights evidence. |
| In-memory handling | Hold the selected `File` and any object URL only for the active browser session/inspection. Revoke object URLs on replacement, removal, or clear. | No `localStorage`, `sessionStorage`, IndexedDB, Cache Storage, Origin Private File System, service worker, persistence, or hidden retention. Browser/process memory is not represented as deletion certification. |
| Objective observation | Predeclare a check; record only a successfully observed value and its browser/source limitation. | Do not parse EXIF, infer encoded-pixel truth, fabricate a missing value, or turn unreadable/unsupported media into `Pass`. Unsupported, error, `0`, `NaN`, `Infinity`, absent type, or unavailable source becomes `Unknown`. |
| Export | Export only user-confirmed metadata and judgments through an explicit download action. Exclude object URLs, file handles/paths, media bytes, previews, decoded data, and raw hidden metadata. | No automatic export, upload, sync, share link, print service, email, clipboard transfer, backend, authentication, telemetry, analytics, live model API, or remote fetch. |
| Optional media export | **Not supported.** Source media stays outside the record. | No ZIP/media download, preview capture, thumbnail extraction, transcode, attachment, or file copying. Any future request changes the trust boundary and requires a new gate. |

The artifact cannot guarantee deletion of a downloaded export; it can only avoid app-managed persistence and state that the user controls any downloaded copy.

### 4. Minimum data contract

The contract is metadata-first and works without a selected file. All fields must carry a claim/source class where appropriate; a null/unavailable value is not a default pass.

| Section | Minimum fields | Validation / boundary |
|---|---|---|
| Record | `schemaVersion`, `reviewId`, `createdAt`, `reviewBoundary`, `limitations[]` | Reject unsupported schema versions; keep `reviewId` synthetic or locally generated; do not use an account identity. |
| Brief and constraints | `briefId`, brief version/text, `mediaFamily` (`image` only if file inspection is enabled), and predeclared check rules (`property`, comparator, expected value/unit, required flag) | One brief; 3–5 attempts; compare only declared properties. No implicit quality or legal rule. |
| Attempt identity | `attemptId`, ordinal, relationship (`original`, `retry`, `revision`, `failed-render`, `Unknown`), optional predecessor ID, input class (`Synthetic`, `Public`, `user-owned-local`, `Unknown`) | Unique IDs; ordinal 1–5; a relationship is `Unknown` without an evidenced/entered basis. |
| Optional file observation | user-visible file label, reported MIME/type, byte size, source (`browser-observed`), decode state, width/height/aspect ratio only after successful image decode | Retain no file/path/object URL in export. `file.type` and extension are hints, not content proof. A failed/unsupported decode has no observed dimensions. |
| Objective checks | check ID, expected/observed values, observation source, status (`Pass`, `Fail`, `Unknown`, `N/A`), limitation | `Pass`/`Fail` require a finite, compatible observed value and a declared rule. `N/A` applies only to a deliberately irrelevant property. Every other absence/error is `Unknown`. |
| Human judgment | reviewer label, brief fit / craft-legibility / continuity-coherence rating (`0`, `1`, `2`, `Not assessed`), short note | Human ratings remain subjective and cannot be converted into a model ranking or objective fact. A reviewer label should avoid unnecessary personal data. |
| Retry, credit, and time | retry relation; credit amount/unit/source class/date/precision/limitation; start/ready timestamps or entered duration/source class/precision/limitation | Numeric values must be finite and non-negative. Do not total or normalize observed, estimate, Synthetic, and Unknown values, or derive ROI/cost-quality conclusions. |
| Provenance and separate concerns | input class; for Public: source URL/title, access date, licence/usage basis, limitation; for user-owned local: declarative usage basis and limitation; rights/consent, provenance, disclosure statuses kept separate | A link, label, metadata, or user statement is not proof of ownership, legality, consent, provenance completeness, disclosure compliance, or authority. If unavailable, record `Unknown`. |
| Decision | `Selected for this comparison`, `Rejected`, or `Hold / no decision`; rationale; decision limitation/next action | Require an explicit rationale. The decision is only for the stated Synthetic/local comparison and grants no approval or publication authority. |

### 5. Local-media decision and unsupported behavior

| Capability | Stage 5 candidate scope | Decision and failure behavior |
|---|---|---|
| Image file type/readability | One file at a time; JPEG/PNG only if a Stage 5 target-browser check succeeds | File picker filtering is a hint. Accept no automatic claim until successful image decode; a mismatch, missing type, error, or unreadable file is `Unknown`, not `Fail` for quality and not `Pass`. |
| Image dimensions/aspect ratio | Browser-observed intrinsic width/height after successful decode | Record as browser-observed, with a limitation. Compute aspect ratio only from finite positive dimensions; otherwise `Unknown`. Do not call it definitive encoded-pixel metadata. |
| File size | Browser-exposed byte size | Compare only if the brief predeclares a byte limit and the value is finite. No size threshold is frozen now: the first local-media implementation must set and document one after target-browser memory testing; otherwise leave media optional. |
| Video type/readability/dimensions/duration | No automatic video inspection | **Deferred/omitted.** Containers and codecs create decoder/metadata uncertainty. A manually entered video field may exist only with source/limitation labels; it cannot become an automatically checked result. |
| General unsupported media | Any unselected, malformed, encrypted, unreadable, non-image, or browser-unavailable file | Preserve attempt identity and set every dependent automatic property to `Unknown`; show a readable reason and permit a metadata-only Hold/no-decision record. Do not retry the file, convert it, upload it, install a parser, or infer a value. |

### 6. Privacy, rights, security, and retention rules

1. **Excluded inputs:** customer media, private HexCoded material, actor/biometric data, confidential briefs, credentials, account exports, API keys, cookies, and authenticated product data are prohibited.
2. **Public media:** before any later use, record title/URL, publisher, access date, licence or permitted-use basis, and limitation. “Publicly reachable” alone is not permission. An unclear basis remains `Unknown`; use Synthetic metadata instead.
3. **User-owned local media:** require an explicit user statement that local inspection is permitted for the stated purpose. This does not establish ownership, legal clearance, consent, disclosure, or authority; record the limitation rather than adjudicating it.
4. **Sensitive metadata:** minimize free text, file names, reviewer labels, URLs, prompt fragments, timestamps, and costs because each may expose a project/person. Do not collect absolute paths, contacts, account names, location, or embedded raw file metadata.
5. **No persistence by design:** do not write an app store, cache, database, cookie, server log, telemetry event, or service-worker cache. Provide a clear action that removes in-page records and revokes object URLs; disclose that browser/session memory and user-downloaded exports are outside the artifact's deletion control.
6. **Accidental-upload controls:** no `fetch`, `XMLHttpRequest`, `WebSocket`, form submission target, remote font/script/image, analytics, or model request. A future static page must make its no-network behavior inspectable and must not add a dependency that changes it without a new gate.
7. **Control separation:** file metadata and internal labels never prove quality, legality, consent, ownership, provenance completeness, disclosure compliance, publishing authority, or a cleared right to use media.

### 7. Accessibility requirements

These are required design constraints if any application is later authorized; they are not implementation results.

- Use native keyboard-operable file and form controls with visible focus, explicit `<label>` text, grouped fields/legends, and an ordered record structure that can be read without a preview.
- Give every check/status text such as `Pass`, `Fail`, `Unknown`, or `Not applicable`; icons and color may reinforce but never be the sole distinction.
- Present a plain-language reason for `Unknown`, unsupported type, decode error, invalid number, and missing required context. Associate field-level errors with their controls and announce non-disruptive updates through a polite live region.
- Use semantic headings, table headers, text alternatives for any optional preview, and no required drag/drop, hover, visual comparison, autoplay, or audio cue.
- Default to no animation; if any non-essential state transition is later introduced, honor `prefers-reduced-motion: reduce`.
- Test keyboard-only flow, screen-reader reading order/status announcements, zoom/reflow, contrast, and the no-preview path before any later demo. No accessibility test has occurred in this stage.

### 8. Reliability, validation, and required future self-check

**Deterministic validation strategy:** validate the record before calculation/export; treat all external/user-entered values as untrusted; allow only defined enums; require IDs/constraints before a decision; and retain a limitation with every non-observed field. Never use truthy/falsy checks for numeric observations: `0`, `NaN`, `Infinity`, missing values, and incompatible units require distinct treatment.

| Risk | Required behavior |
|---|---|
| Malformed/unsupported file or decode failure | Preserve the attempt and reason; set dependent checks to `Unknown`; never crash, upload, transcode, or pass it. |
| Invalid dimensions/aspect ratio | Require finite positive width/height before division; no division by zero; otherwise `Unknown`. |
| Invalid duration | Require finite, non-negative duration before comparing; `NaN`/`Infinity` are `Unknown`; automatic video comparison remains out of scope. |
| Retry/credit/time numbers | Accept only finite non-negative numbers with declared units/source/precision; reject unparseable values rather than silently coercing them. Do not normalize providers or create totals across evidence classes. |
| Export integrity | Export a versioned, metadata-only snapshot with explicit `Unknown`/limitations. Block export if schema/required fields are invalid; do not include `File`, object URL, path, media bytes, or hidden state. |
| Clear/reset | Remove in-page metadata and release object URLs; make no deletion claim about an already downloaded export. |

**Required smallest runnable self-check if a Stage 5 Go/Reduce authorizes implementation:** one dependency-free assertion-based JavaScript check, colocated with the classification/calculation logic. It must prove at minimum that (a) finite 1024×1024 against a declared 1:1 requirement returns `Pass`; (b) an unreadable/absent observation returns `Unknown`; and (c) zero, `NaN`, or `Infinity` cannot become `Pass`. This requirement is recorded only; no code or test was created or run.

### 9. Complexity, dependencies, and non-goals

| Need | Native/local approach | Decision |
|---|---|---|
| Record entry, labels, validation, table, CSV/JSON text export | Standard HTML, CSS, and JavaScript; browser `File`, `Blob`, and object URL APIs if a later app is selected | No dependency, backend, database, authentication, telemetry, or build system is justified. |
| JPEG/PNG optional observation | User-selected `File` plus browser image decode and browser-observed dimensions | Feasible only within the reduced scope and after a target-browser self-check. |
| Video/container/codec metadata across formats | Browser video events and decoder support are variable; robust parsing needs broader test coverage or a parser dependency | Omit. No dependency, backend, transcode, or codec fallback is authorized. |
| Exact EXIF/container fields, orientations, raw encoded dimensions, thumbnails, contact sheets, side-by-side playback | Would need parsers, image/video processing, or a much larger UX and test surface | Omit. |
| Durable sharing, collaboration, permissions, public links, source synchronization, live generation/billing | Would require accounts, storage, APIs, backend infrastructure, retention/security review, and integration tests | Omit. |

**Explicit technical non-goals:** video-first or multi-codec support; EXIF/container parsing; raw media or thumbnail export; previews/playback/editor tools; automatic visual/aesthetic scoring; prompt/model generation/routing; model/provider ranking; billing integration or cost analytics; source-control/account integrations; cloud data, authentication, telemetry, collaboration, approval/publishing workflows; rights/consent/claims/provenance/disclosure validation; and any claim that static local behavior is equivalent to deletion, security certification, or product readiness.

### 10. Stage 5 Go / Reduce / Stop criteria and recommendation

**Recommendation for Stage 5: Stop a custom application by default; retain the no-build baseline.** Stage 4 establishes that a small technical path is possible, not that it is worth building. Stage 5 may record a bounded **Reduce** only if every condition below is frozen without expanding scope:

1. The artifact remains one Synthetic/local image brief, three to five attempts, metadata-first, with no media export, accounts, upload, persistence, integration, or video automation.
2. A single named current desktop browser/environment is selected; a tiny browser-native self-check demonstrates successful JPEG/PNG observation and the mandated `Unknown` behavior without a dependency.
3. The data contract, no-network/no-persistence rule, explicit clear behavior, and metadata-only export exclusions are accepted unchanged.
4. Keyboard/non-color/Unknown/error requirements are part of the minimum implementation acceptance criteria.
5. Stage 5 can state a specific, non-market demonstration distinction over the table—such as preventing a defined omission—without asserting a time, quality, or business benefit. If it cannot, retain the table and do not build.

**Go only if** the five Reduce conditions are met and Stage 5 explicitly chooses a static, dependency-free, image-only vertical slice with the single runnable self-check. This would be a technical demonstration authorization only; it would not validate research or a product.

**Stop** if the no-build table remains equally clear; an image property cannot be observed reliably on the selected browser; a requirement introduces a second source of truth, private data, upload, retention, credentials, broad permissions, video parsing, dependency/backend complexity, or a claim beyond the defined record. Unsupported media must remain metadata-only `Unknown` rather than forcing scope expansion.

**Research boundary:** no implementation authorization or research validation was created. The strict research gate remains **0/13**; H2 remains unvalidated and parked; and the research Stage 7 no-build result remains Synthetic and untouched.

## Stage 5 artifact definition and build gate

### 1. Build-gate decision

**Decision: Go.** Authorize a polished, dynamic, locally hosted Creative Run Review demonstration under the frozen specification in this section.

This decision reconsiders Stage 4's “stop by default” recommendation because the internship objective now explicitly includes building a polished dynamic demo. The spreadsheet remains cheaper and capable of representing the same fields. The app earns a Go for a different, bounded reason: it can make the separation between objective checks, human judgments, operational context, and Unknowns visible and interactive; demonstrate browser-native local image inspection; enforce required record states; and produce a convincing inspectable technical artifact.

The Go decision is not evidence of a user problem, product need, adoption, demand, willingness to pay, ROI, or superiority over a spreadsheet in real work. It authorizes an internship demonstration only.

### 2. Evidence and claim labels

**Facts:** Stages 2–4 defined the evaluation method, retained the spreadsheet/native workflow as the no-build baseline, and established a browser-native JPEG/PNG feasibility boundary. The repository currently contains planning Markdown only and no application code, package manifest, dependency, fixture, or implementation result.

**Public evidence:** no new external source was added in Stage 5. Existing HexCoded public sources support only the relevance of multi-model creative attempts, credit signals, failure learning, and human review. Existing browser documentation supports the technical feasibility boundary. Neither establishes a real workflow need or a reason to build.

**Inferences — medium confidence:** a guided interactive interface can communicate the method and its evidence boundaries more clearly in a short internship demonstration than a wide spreadsheet; dynamic validation and export provide credible technical learning even when the spreadsheet remains the cheaper operational method.

**Hypothesis:** an AI creative intern, producer, or creative-operations reviewer could act as the primary operator. No actual operator, role owner, or workflow has been observed.

**Assumptions:** the demo runs in a current desktop Chromium-based browser served from localhost; three Synthetic images are sufficient for the default walkthrough; browser-native JPEG/PNG decoding and object URLs work in that environment; and a one-week maximum is enough for the frozen scope.

**Unknowns:** real HexCoded workflow and ownership; whether any person would prefer the app; whether the interface is clearer or faster in practice; exact browser/device memory limits; behavior for every valid or malformed JPEG/PNG; public-media usage suitability; and every customer, buyer, demand, willingness-to-pay, adoption, ROI, or product-market-fit fact.

**Synthetic assumptions:** the brief, brand, attempt images, IDs, model/provider labels, prompts, retries, credits, elapsed times, ratings, failures, and decision outcomes in the demo are fictional.

**Implementation results:** none. Stage 5 created no code, fixture, screen, test, export, or runtime observation.

### 3. Four-way comparison matrix

Scores are 1–5 planning judgments weighted for the internship objective: demo/storytelling 25%, clarity of checks versus judgments/Unknowns 20%, complete method coverage 15%, interactive technical learning 15%, local/privacy fit 10%, delivery effort 5%, and reversibility 10%. They are not market evidence or measured user outcomes.

| Alternative | Demo /25 | Clarity /20 | Coverage /15 | Technical learning /15 | Local safety /10 | Delivery /5 | Reversible /10 | Total /100 | Decision |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Spreadsheet/native local baseline | 3/5 = 15 | 3/5 = 12 | 5/5 = 15 | 1/5 = 3 | 5/5 = 10 | 5/5 = 5 | 5/5 = 10 | **70** | Mandatory comparator; cheapest sufficient record. |
| **Polished dynamic local app** | **5/5 = 25** | **5/5 = 20** | **5/5 = 15** | **5/5 = 15** | **4/5 = 8** | **3/5 = 3** | **4/5 = 8** | **94** | **Selected for the internship demo.** |
| Reduced local app with fewer fields/features | 4/5 = 20 | 4/5 = 16 | 3/5 = 9 | 4/5 = 12 | 5/5 = 10 | 4/5 = 4 | 5/5 = 10 | **81** | One-day fallback; omits part of the requested learning loop. |
| Stop/no-build | 1/5 = 5 | 2/5 = 8 | 2/5 = 6 | 1/5 = 3 | 5/5 = 10 | 5/5 = 5 | 5/5 = 10 | **47** | Valid if implementation violates a hard boundary; not selected now. |

The app does not replace or invalidate the spreadsheet. The matrix selects the stronger internship demonstration while retaining the spreadsheet for Stage 9 falsification.

### 4. Frozen objective, operator, and outcome

**Objective:** demonstrate, in one local interactive flow, how three to five AI-image attempts for one fictional brief can be compared without collapsing browser-observed constraints, human quality judgments, operational metadata, or unsupported facts into one score.

**Primary operator — Hypothesis:** an AI creative intern or producer reviewing image attempts. The immediate audience is an internship/founder reviewer, not a customer or production user.

**Approved outcome:** the operator can inspect the fixed Synthetic brief, import or replace local JPEG/PNG attempts, see objective statuses update, enter separate human judgments and retry/credit/time context, choose an attempt or Hold/no-decision, and explicitly export a metadata-only decision record.

### 5. Frozen minimum application specification

#### Architecture

- Locally hosted, single-page web application served on loopback/localhost.
- Standard HTML, CSS, and JavaScript only; no framework, package manager, build system, or runtime dependency.
- Interactive client-side state held in memory. `localStorage` is omitted from the minimum build. If later requested, it may hold metadata only behind explicit opt-in and clear controls; it is not secure storage and would require a new scope decision.
- No remote fonts, scripts, images, analytics, fetches, API calls, service worker, backend, database, authentication, cloud sync, Appwrite, or paid hosting.
- Target environment for Stage 6/7: current stable desktop Chromium on localhost. Other browsers may work but are not supported claims until tested.

#### Fixed Synthetic brief

Define, but do not create during Stage 5, one fictional brief:

- ID: `BR-SYN-001`.
- Fictional campaign: a square launch tile for an invented product/brand with no real person, actor, trademark, customer, or factual performance claim.
- Creative requirements: one supplied headline, one visual mood/palette direction, and no real people or third-party brand marks.
- Objective requirements: JPEG or PNG; exactly 1080 × 1080 browser-observed dimensions; 1:1 aspect ratio; maximum brief file size 5 MiB.
- Technical safety ceiling: reject image decoding above 10 MiB per file; preserve the attempt and set decode-dependent checks to `Unknown`.

Stage 6 may create exactly three clearly labelled Synthetic raster attempts for the default walkthrough. The app permits adding/replacing attempts up to five total. The fixtures cannot represent actual model output or a real brand.

#### One-page regions and states

Use one route and one page—no dashboard hierarchy or multi-screen navigation:

1. **Evidence boundary and brief:** persistent `Synthetic demo` label, fictional brief, objective constraints, and what the app cannot establish.
2. **Attempt deck:** three default cards and up to two additional cards, each with local image input/preview, file observations, objective statuses, human rubric, failure tags, and retry/credit/time metadata.
3. **Comparison and decision:** side-by-side status summary, outstanding Fail/Unknown indicators, human-selected outcome, rationale, and next action. The app never auto-selects or calls an attempt “best.”
4. **Export and reset:** explicit JSON/CSV/Markdown download actions and a clear-session action that removes in-page state and revokes object URLs.

Required visible states are empty, checking, ready, objective Pass, objective Fail, Unknown/unsupported, human Not assessed, validation error, selected, rejected-set, Hold/no-decision, export success/error, and cleared. No loading skeleton, account state, notification centre, modal workflow, or settings area is approved.

### 6. Core user flow

1. Open the localhost app and read the persistent Synthetic/evidence boundary.
2. Review the fixed fictional brief and predeclared objective constraints.
3. Load the three approved Synthetic images or select local JPEG/PNG files for three to five attempt cards.
4. For each file, show an in-memory preview and record reported type/size plus browser-observed readability, dimensions, and aspect ratio. Unsupported values remain `Unknown`.
5. Enter the three human rubric judgments and a short evidence note; add only the approved failure tags.
6. Enter attempt relationship and optional raw credit/time values with source and uncertainty labels.
7. Compare cards. Explicitly select one for this comparison, reject the set, or choose Hold/no-decision. Require a rationale and expose every Fail/Unknown beside it.
8. Download a metadata-only JSON, CSV, or Markdown decision record through a user action.
9. Clear the session, remove previews/state, and revoke object URLs. The app makes no deletion claim about downloaded exports or browser/process memory.

### 7. Design-quality and accessibility requirements

“Polished” means a coherent, deliberate interface—not more features.

- Use a single studio-style visual system with local/system typography, a restrained neutral palette plus one accent, consistent spacing/radii, and clear hierarchy between brief, attempt deck, and decision summary.
- Make objective checks and human judgments visually distinct through headings, layout, icon plus text, and explanatory copy. Never rely on color alone.
- Use responsive attempt cards: a comparison grid on wide screens and readable vertical reflow on narrow screens. Optimize the demo for desktop; preserve function at 768 CSS pixels or wider.
- Keep image previews consistently framed without cropping away content; expose file/attempt labels in text. Preview alternative text identifies the attempt but does not pretend to describe image content.
- Use native labelled controls, semantic headings/regions, fieldsets/legends, visible focus, logical keyboard order, touch targets, table/card labels, and error associations. No required drag/drop, hover, pointer gesture, or visual-only interaction.
- State changes and export/errors must be announced through a polite live region. `Pass`, `Fail`, `Unknown`, `Not applicable`, and `Not assessed` must remain literal text.
- Default to restrained transitions; honor `prefers-reduced-motion` and provide no autoplay, audio, flashing, parallax, or decorative continuous motion.
- Include concise empty/error/Unknown copy and a persistent statement that checks do not prove quality, legality, consent, ownership, provenance completeness, disclosure compliance, approval, or publishing authority.

### 8. Local data flow, privacy, and retention boundary

`Synthetic fixture or user-selected local JPEG/PNG → browser File/object URL in memory → browser-observed metadata + human entries in client state → explicit metadata-only export`

- Local images never leave the browser. Object URLs are revoked when a file is replaced, an attempt is removed, the session is cleared, or the page is unloaded.
- Image bytes, object URLs, absolute paths, file handles, decoded pixels, thumbnails, and raw embedded metadata are excluded from exports.
- Export is explicit and user-controlled; no automatic download, share, clipboard, print service, upload, or synchronization.
- `localStorage` is not used in the minimum scope. If introduced later, it is metadata-only, optional, clearly disclosed, clearable, and never described as private or secure.
- Customer media, private HexCoded material, credentials, account/API data, actor/biometric material, confidential briefs, rights evidence, and publishing records are prohibited.
- Public media is outside the first demo. Any later Public input must record title/URL, organization, access date, licence/usage basis, and limitation; public availability alone is not permission.
- A later user-owned local input requires an explicit permitted-use declaration. That declaration is not proof of ownership, consent, legal clearance, provenance, disclosure, or publishing authority.

### 9. Frozen minimum data contract

| Section | Required fields | Rules |
|---|---|---|
| Review | `schemaVersion`, `reviewId`, `createdAt`, `updatedAt`, `evidenceBoundary`, `limitations[]` | Versioned; no account/user identity. Evidence boundary is visible and exported. |
| Brief | `briefId`, title, text, version, creative requirements, `allowedReportedTypes`, `targetWidth`, `targetHeight`, `targetAspectRatio`, `aspectTolerance`, `maxBriefBytes` | Fixed Synthetic brief in first build; constraints cannot silently change after inspection. |
| Attempt identity | `attemptId`, ordinal, label, input class (`Synthetic`, `Public`, `user-owned local`, `Unknown`), optional model/provider exactly as entered, source limitation | Unique ID; ordinal 1–5; model/provider never enters an aggregate rank. |
| In-memory file reference | active `File` and object URL | Runtime only; never persisted or exported. |
| File observation | user-visible file name, reported MIME type, byte size, decode state, browser-observed width/height/aspect ratio, observation source/limitation | No path, EXIF, hash, inferred model, rights, or origin. File name is metadata and can contain sensitive text. |
| Objective check | property, expected value/unit, observed value/unit, status (`Pass`, `Fail`, `Unknown`, `N/A`), reason, source, limitation | Pass/Fail require a declared rule and valid observation. Missing/unsupported/unreadable is Unknown. |
| Human judgment | reviewer label, brief fit, craft/legibility, coherence (`0`, `1`, `2`, `Not assessed`), note, failure tags | No average, overall quality score, or automatic selection. Ratings are human judgments only. |
| Operational context | relationship (`original`, `retry`, `revision`, `failed render`, `Unknown`), optional predecessor; credit value/unit/source/precision/note; elapsed value/unit/source/precision/note | Finite non-negative values only. Keep raw values; no provider normalization, ROI, productivity, or cost-quality calculation. |
| Input provenance | source class; for Public only: title/URL/organization/access date/licence-or-usage basis/limitation; user-owned declaration if applicable | Provenance fields record claims/basis, not validation. Unknown remains explicit. |
| Decision | outcome (`Selected for this comparison`, `Rejected set`, `Hold / no decision`), optional selected attempt ID, rationale, next action, decision limitations | Human action only. Selection does not grant approval or publishing authority. |
| Export | export format/version/date and the complete metadata record | Exclude media/runtime references; preserve explicit Unknowns and limitations. |

Approved failure tags: `brief mismatch`, `visible technical defect`, `composition/legibility`, `text rendering`, `unexpected model behavior`, `other`, and `none observed`. Tags are human labels, not diagnoses. Rights/consent, claims, provenance, disclosure, approval, and publishing status are not app fields in the first build; their exclusion is stated in the boundary copy.

### 10. Objective-check and Unknown rules

1. **Readability:** `Pass` only after successful browser image decode. No file, decode error, technical size rejection, or unsupported input produces `Unknown`, not Fail or Pass.
2. **Reported file type:** `Pass` only when the reported MIME is JPEG/PNG and decode succeeds; `Fail` when a present reported type is outside the brief allowance; `Unknown` when the type is absent/unreliable or the file is unreadable. This is a reported-type check, not file-signature proof.
3. **Dimensions:** compare positive finite browser-observed width/height with 1080 × 1080. Exact match is `Pass`; a valid mismatch is `Fail`; unavailable/invalid values are `Unknown`.
4. **Aspect ratio:** calculate `width / height` only for positive finite values. Compare with target `1.0` using frozen tolerance `0.01`; within tolerance is `Pass`, outside is `Fail`, unavailable/invalid is `Unknown`.
5. **Brief file size:** compare finite browser-reported bytes with 5 MiB. At or below is `Pass`; above is `Fail`; missing/invalid is `Unknown`. Above the separate 10 MiB technical ceiling, do not decode and set decode-dependent checks to `Unknown`.
6. **Not applicable:** use only when a declared property intentionally does not apply. It is never a fallback for missing evidence.
7. A Pass cannot offset a human concern or another Unknown. The app shows statuses independently and never computes a combined score or ranking.

### 11. Retry, credit, time, and export calculations

- Attempt count is constrained to 3–5.
- Retry count is the count of attempts explicitly labelled `retry`; revisions and failed renders remain separate categories.
- Credit and elapsed values remain per attempt. The interface may group identical units/source classes for display but must not combine differing units, source classes, or precision. No currency conversion or cost-per-quality metric.
- Numeric inputs must be finite and non-negative; blank means Unknown, not zero.
- JSON is the canonical nested export. CSV is one row per attempt with review/brief/decision context repeated as needed. Markdown is the human-readable decision record. All three must preserve Unknown, source, limitation, and decision fields and escape delimiter/control characters.

### 12. Required runnable self-check

Stage 6 must create one dependency-free assertion-based self-check for all non-trivial pure logic. One command must verify at minimum:

1. 1080 × 1080 against the frozen dimensions and 1:1 ratio returns Pass.
2. A valid non-square observation returns Fail for the relevant constraints.
3. absent, unreadable, zero, `NaN`, and `Infinity` observations return Unknown and can never become Pass.
4. blank, negative, and non-finite credit/time values are rejected or remain Unknown; zero is retained as an explicit finite value when entered.
5. retry count includes only `retry`, not `revision`, `failed render`, or `Unknown`.
6. JSON/CSV/Markdown exports contain the required Unknown/limitation state, escape quotes/commas/newlines/pipes correctly, and exclude `File`, object URL, media bytes, paths, and hidden runtime state.

The self-check is an implementation requirement, not a Stage 5 result or research evidence.

### 13. Explicit non-goals and discarded scope

The approved first build excludes video; audio; GIF/SVG/HEIC/WebP; broad codec/format support; EXIF/container/signature parsing; hashing; image editing; contact sheets; media export; model APIs or generation; prompt optimization; model ranking; automatic aesthetic/semantic/factual/safety scoring; accounts; authentication; backend/database; Appwrite; cloud sync; uploads; telemetry; collaboration; comments; approval/publishing workflows; rights/consent/legal clearance; claims/provenance/disclosure validation; notifications; analytics dashboards; paid hosting; mobile-app packaging; browser extensions; and production-readiness, security-certification, deletion-certification, or workflow-benefit claims.

No abstraction, dependency, API, persistence layer, or configuration system may be added “for later.”

### 14. One-day reduction and one-week maximum

**One-day reduction:** fixed Synthetic brief; exactly three Synthetic/local JPEG/PNG attempts; local preview; readability/type/dimensions/aspect/file-size statuses; three human rubric fields; select/reject/Hold plus rationale; Markdown export; clear-session action; and the single self-check. Omit add/remove attempts, CSV/JSON, detailed provenance, optional model/provider, and operational source/precision fields until the core path is correct.

**One-week maximum:** the complete frozen specification in this section—three to five attempts, polished responsive state design, all objective/error/Unknown states, human rubric/failure tags, retry/credit/time provenance fields, JSON/CSV/Markdown export, accessibility acceptance checks, and hardened local cleanup. Anything not named here is discarded future scope.

### 15. Artifact success and kill criteria

**Success for the internship artifact:**

1. A reviewer can complete the fixed Synthetic brief with three attempts in a short end-to-end local demo.
2. Image import/preview and the five objective checks behave deterministically for supported fixtures, and every unsupported/unreadable dependency is Unknown.
3. Objective checks, human judgments, operational context, and source/Unknown labels are visibly and structurally separate.
4. The operator—not the app—makes a selected/rejected/Hold decision and records rationale.
5. Explicit JSON/CSV/Markdown exports are readable, metadata-only, and pass the self-check.
6. The build has no runtime dependency, external request, backend, account, persistence, telemetry, or media export.
7. Keyboard-only operation, non-color status, focus/error/Unknown messaging, reduced motion, and no-preview fallback pass later QA.
8. Stage 9 can compare the same Synthetic case with the spreadsheet baseline and honestly record Ship, Reduce, or Kill.

**Kill or reduce the build if:** unsupported media becomes Pass; images or metadata leave the local page without explicit export; exported output contains media/runtime references; a backend, account, Appwrite, cloud service, dependency, paid hosting, private data, or live API becomes necessary; accessibility basics fail without a bounded fix; the scope expands into a generator, model ranking, rights/legal, approval/publishing, or collaboration product; the one-week maximum cannot cover the frozen core; or Stage 9 finds the app adds no clearer internship demonstration than the spreadsheet.

### 16. Stage 6 authorization

**Authorized: Yes, on an explicit Stage 6 start.** Stage 6 may create under `implementation/` only:

- the dependency-free local HTML/CSS/JavaScript vertical slice;
- exactly three clearly labelled Synthetic JPEG/PNG fixture attempts for `BR-SYN-001`;
- the frozen data-contract representation and metadata-only export path; and
- one dependency-free runnable self-check covering the specified pure logic.

Stage 6 may not install dependencies, access private/customer/HexCoded systems or data, create accounts, call model APIs, upload media, add persistence, start Stage 7, or modify `research/`. If the vertical slice cannot satisfy the frozen local/Unknown/export rules, Stage 6 must record Reduce or Stop rather than expanding scope.

### 17. Founder-facing explanation

“I’m building Creative Run Review as a polished local internship demonstration, not because research proved a product need. A spreadsheet can hold the same fields and remains the no-build comparator. The app's bounded value is demonstrative: it makes local image checks, human judgments, retry/credit/time context, Unknowns, and a transparent decision export visible in one interactive flow. It uses fictional inputs, no accounts or backend, and cannot change the 0/13 research gate.”

### 18. Authorization and research statement

Stage 5 created **no application code, fixture, screen, dependency, runtime test, account, integration, or implementation result**. It only froze the specification and recorded Go.

The research validation gate remains **0/13**. H2 remains unvalidated and parked. The research Stage 7 result remains Synthetic. Future implementation behavior is artifact evidence only and cannot be used as primary research evidence or to claim users, demand, willingness to pay, product-market fit, adoption, ROI, or a HexCoded need.

## Stage 6 — Data contract, fixtures, and vertical slice

**Status: Complete.** The frozen Stage 5 build was implemented without reopening the build decision or starting Stage 7.

### Delivered artifact

- One locally hosted single-page application under `implementation/app/`, built with vanilla HTML, CSS, and JavaScript and no dependency, package manager, build system, backend, database, persistence, remote asset, telemetry, upload, or live API.
- Fixed fictional brief `BR-SYN-001`, three default attempts, and exactly three clearly labelled Synthetic raster fixtures: two PNG files and one JPEG file. The app permits two additional empty local-attempt cards, preserving the frozen 3–5 attempt range without adding fixtures.
- Local JPEG/PNG selection through labelled native file controls, explicit permitted-use acknowledgement for selected local files, in-memory object-URL previews, and browser-native observations for readability, reported type, decoded dimensions, aspect ratio, and file size.
- Objective checks, human rubric judgments, operational retry/credit/time context, provenance/source labels, and uncertainty/precision labels remain separate. No combined quality score, model ranking, normalized cost, ROI, or automatic selection exists.
- Human-owned `Selected for this comparison`, `Rejected set`, and `Hold / no decision` outcomes with rationale, next action, and visible Fail/Unknown context.
- Explicit metadata-only JSON, CSV, and Markdown serializers and download controls. Their export whitelist excludes `File` objects, object URLs, paths, file handles, media bytes, decoded pixels, previews, and hidden runtime state while retaining explicit Unknowns, sources, and limitations.
- Clear-session handling resets the three default cards to empty Unknown states and revokes active object URLs. Replacement, decode failure, and page unload paths also revoke their active URLs. Attempt removal is not part of the frozen interface.
- Semantic regions/headings, native labelled controls, skip link, visible keyboard focus, icon plus literal status text, polite live announcements, readable error/Unknown copy, responsive cards, and reduced-motion handling.

### Verification record

**Dependency-free self-check:** `node implementation/app/self-check.mjs` passed. It covers the frozen pure logic for a supported exact-square Pass, failed constraints, missing/unreadable/unsupported/oversized inputs, zero/`NaN`/`Infinity` dependencies, non-negative operational parsing, retry counting, all three serializers, Unknown preservation, limitation preservation, escaping, and runtime/media-key exclusion. `node --check` passed for `logic.mjs` and `app.mjs`.

**Localhost and rendered interface:** the app loaded successfully from `python3 -m http.server 4173 --bind 127.0.0.1 --directory implementation/app` in the in-app Chromium browser. The normal desktop view and a 768 CSS-pixel responsive view were inspected. The default cards were readable and visually separated objective checks from human judgments. Keyboard Tab exposed the skip link with a visible solid focus outline; the accessibility tree exposed the labelled controls and regions; no browser console errors were observed.

**Default Synthetic flow:** A01 produced five objective Pass states; A02 produced Pass for readability, reported type, and size plus Fail for dimensions and aspect ratio; A03 produced five objective Pass states while intentionally preserving Unknown operational values. Human judgments remained independent.

**Local-file states:** importing the supported PNG produced five Pass states after decode. Importing a reported `text/css` file produced a reported-type Fail and Unknown decode-dependent checks. Importing an unreadable `.png` payload produced five Unknown states. Adding attempts stopped at the frozen five-attempt maximum. A negative operational value was rejected, marked invalid, announced, and blocked export.

**Decision, export, and cleanup:** all three decision outcomes were exercised and the selected-attempt control appeared only for the selected outcome. JSON/CSV/Markdown serializers were checked by the runnable self-check, and each browser export action reported creation of a metadata-only record. The in-app browser did not expose a download-event/file-location handle, so browser file placement remains unobserved; no claim is made about it. Clear-session reset the interface to three attempts, Hold/no decision, fifteen objective Unknowns, zero previews, and announced that one active image object URL was revoked.

### Limits, assumptions, and Unknowns

- **Assumption:** current stable desktop Chromium on localhost is the demonstration environment. Other browsers, assistive-technology usability, narrow mobile layouts below the frozen 768 CSS-pixel target, browser/process memory reclamation, and all malformed-image variants remain unverified.
- **Unknown:** whether a real reviewer finds this clearer or lower-burden than the spreadsheet/native comparator; no real operator, workflow, rubric owner, model/provider semantics, credit semantics, elapsed-time method, or acceptable memory ceiling has been validated.
- Filename, reported MIME type, browser dimensions, and declared permitted use remain metadata/claims, not file-signature, quality, EXIF, ownership, consent, provenance, legal clearance, disclosure, approval, or publishing-authority validation.
- Synthetic fixture visuals and all default labels, model/provider strings, credits, times, judgments, notes, and decisions are fictional demonstration inputs. They are not observed model performance.
- The requested Stage 6 allocation was GPT-5.6 Terra with High reasoning. This runtime exposed no separate verifiable model-switch result, so no model-switch claim is recorded.

### Gate disposition

The Stage 6 artifact path works within the frozen scope, so Stage 6 is complete. **Stage 7 may begin only after a new explicit authorization; it was not started here.** The research validation gate remains **0/13**, H2 remains unvalidated and parked, and the research Stage 7 result remains Synthetic and untouched. These implementation results cannot validate users, demand, adoption, ROI, product-market fit, or a HexCoded need.

## Stage 7 — Core implementation stabilization

**Status: Complete.** The Stage 6 artifact was inspected end to end and only defects in the frozen core were corrected. No Stage 8 hardening work or new product capability was added.

### Core corrections

- **Human-owned decision:** the session now starts at `Hold / no decision` with no rationale. The selected-attempt control is hidden, and export remains blocked until the operator enters a rationale. This removes the prior automatic A01 selection.
- **Replacement integrity:** starting a permitted local replacement now clears the previous fixture preview. Replacing a Synthetic fixture also clears its invented provider label, preventing stale media or Synthetic metadata from appearing beside a user-owned local input.
- **Frozen provider field:** the existing optional model/provider value is now exposed as a labelled text control and remains exactly as entered. It is never scored, normalized, or ranked.
- **Operational validation:** whitespace-only input is `Unknown`, not recorded zero. Invalid finite/non-negative validation survives card rerenders through `aria-invalid`, and invalid/recovered states receive polite live-region announcements.
- **Export provenance:** an empty non-Synthetic attempt now exports permitted use as `Unknown`, not as a Synthetic-fixture statement. CSV now carries the already-frozen input limitation, permitted-use statement, retry count, and summary note in addition to the existing complete objective/source/decision context.
- **Documentation correction:** Stage 6 had stated that a removed-attempt path revoked URLs. The frozen interface has no removal control; the record now accurately limits revocation coverage to replacement, decode failure, clear session, and page unload.

No file was added to the final artifact. `index.html`, `app.mjs`, `logic.mjs`, `self-check.mjs`, and the app README were minimally updated; the visual system and the three fixture files were preserved unchanged.

### Verification record

**Static and pure logic:** `node --check implementation/app/logic.mjs`, `node --check implementation/app/app.mjs`, and `node implementation/app/self-check.mjs` passed. The check now also proves whitespace-only operational input remains Unknown, non-Synthetic permitted-use fallback remains Unknown, and CSV retains the added provenance/summary fields. The existing Pass/Fail/Unknown, oversized, zero/`NaN`/`Infinity`, retry, escaping, and media/runtime exclusion assertions continue to pass.

**Default flow:** localhost loaded successfully with exactly three Synthetic fixture cards and three images. A01 retained five Pass checks; A02 retained readability/type/size Pass plus dimensions/aspect Fail; A03 retained five objective Pass checks and operational Unknowns. The safe default was Hold/no decision with empty rationale and no visible selected-attempt control; attempted export was visibly and politely blocked until rationale entry.

**Imports and state:** the supported local PNG decoded to five Pass states and changed the input label to `user-owned local`; its prior invented provider value cleared. A reported `text/css` import produced type Fail plus four Unknown states, no preview, and no stale provider. An intentionally unreadable `.png` payload produced five Unknown states, no preview, and a clear live announcement. The temporary test payload was deleted after the check. Two additional empty cards could be added; the control then disabled at five total.

**Human, operational, decision, export, and cleanup:** a provider label, human rating, and human evidence note were entered successfully. Negative credit produced `aria-invalid=true`, visible error copy, and a polite announcement; whitespace recovery became Unknown; explicit zero remained recorded with its source and precision. Selected, Rejected set, and Hold/no-decision all showed the correct selected-attempt visibility. JSON, CSV, and Markdown actions each announced a metadata-only export; serializer assertions verify that Unknowns and limitations remain and that media/runtime data is absent. Clear session reset to three empty cards, fifteen objective Unknown states, Hold/no decision, no preview, and announced revocation of one active object URL.

**Rendered/accessibility regression check:** the existing visual direction remained intact. At 768 CSS pixels the attempt deck rendered as two 352-pixel columns with no horizontal overflow. The normal narrow view reflowed to one column. Keyboard Tab focused the skip link with a visible three-pixel outline. All 85 current input/select/textarea controls had associated labels; the page retained semantic landmarks/headings, a polite live region, literal status text, and a `prefers-reduced-motion` rule.

### Scope reconciliation, limitations, and Unknowns

The generic repository Stage 7 brief refers to video, 2–6 attempts, totals, persistence, reload, print, and other pre-freeze concepts. Its own instruction defers to the Stage 5 selected artifact. The frozen Stage 5 specification and the explicit Stage 7 request therefore govern: image-only, 3–5 attempts, no totals, no persistence/save/reload, and metadata-only JSON/CSV/Markdown export. No prohibited save/reload path was implemented merely to satisfy obsolete generic wording.

- **Assumption:** current stable desktop Chromium on localhost remains the supported demonstration environment.
- **Unknown:** behavior in other browsers and devices, assistive-technology usability, process-level memory reclamation, all malformed JPEG/PNG variants, and whether the artifact is clearer or lower-burden than the spreadsheet/native comparator.
- **Unknown:** real workflow owner, accepted rubric, provider/model meaning, credit and elapsed-time semantics, suitable browser memory ceiling, user value, adoption, and any economic outcome.
- Browser-reported metadata, human entries, and permitted-use declarations remain bounded observations or claims; none proves file signatures, quality, rights, consent, legal clearance, provenance, disclosure, approval, or publishing authority.
- The requested Stage 7 allocation was GPT-5.6 Terra with High reasoning. This runtime exposed no separate verifiable model-switch result, so no model-switch claim is recorded.

### Gate disposition

The frozen happy path, required error/Unknown paths, operational calculation/validation path, exports, and cleanup path work. Persistence/save/reload remains intentionally prohibited by the frozen scope. **Stage 8 may begin only after a new explicit authorization; it was not started here.** The research validation gate remains **0/13**, H2 remains unvalidated and parked, and the research Stage 7 result remains Synthetic and untouched. These implementation results cannot validate users, demand, adoption, ROI, product-market fit, or a HexCoded need.

## Stage 8 — Hardening, accessibility, and QA

**Status: Complete — release candidate within the frozen internship-artifact scope.** Stage 8 hardened and verified the existing local Creative Run Review core without adding a feature, dependency, persistence path, network request, or Stage 9 work.

### Defects found and fixed

- **Unsupported-decode classification:** `classifyObservation()` previously labelled an allowed reported MIME as `Fail` whenever the decoder reported `unsupported`. That would overstate an unreadable/unsupported observation. It now returns `Unknown` for an allowed reported type until a readable image exists; a known disallowed reported type remains the separate reported-type `Fail`.
- **Selected-decision clarity:** the Selected control displayed A01 visually when the stored selection was empty, while export correctly blocked the record. It now starts with `Choose an attempt`, so the required human selection is visible and explicit.

### Verification record

- `node --check implementation/app/logic.mjs`, `node --check implementation/app/app.mjs`, and `node implementation/app/self-check.mjs` passed; the self-check now asserts the allowed-type/unsupported-decode `Unknown` state in addition to the existing Pass/Fail/Unknown, oversized, zero/`NaN`/`Infinity`, operational, retry, serializer, escaping, limitation, and media/runtime-exclusion cases.
- In a fresh current Chromium localhost tab, the default flow loaded exactly three Synthetic JPEG/PNG fixtures for `BR-SYN-001`: A01 and A03 showed five Pass checks; A02 showed two declared constraint Fails; default decision was Hold/no decision.
- A bundled PNG imported locally with five Pass checks, cleared stale Synthetic provider metadata, and showed the `user-owned local` label. A local CSS file produced reported-type Fail plus four decode-dependent Unknown checks. A temporary unreadable `.png` payload produced five Unknown checks and no preview; the payload was deleted after the test. Oversized handling is covered by the runnable shared-logic check; it does not decode above the frozen 10 MiB ceiling.
- Two cards could be added, then the five-attempt cap disabled the control. At five cards, all 139 input/select/textarea controls had labels, generated IDs were unique, and every `aria-describedby` reference resolved. Invalid negative credit announced an error; explicit zero credit was retained with its entered source and exact precision. Rejected set and Hold both retained zero selected attempts; Selected required the visible explicit selection.
- JSON, CSV, and Markdown actions each announced a metadata-only export. This in-app browser did not expose a download event, so final browser file placement remains unobserved; serializer assertions verify exclusion of media bytes, object URLs, paths, file handles, decoded pixels, and hidden runtime state.
- Clear session reset to three empty Unknown cards, Hold/no decision, no preview, and announced revocation of one active object URL. The frozen interface intentionally has no individual removal control; replacement, decode failure, clear session, and page unload retain the applicable cleanup paths.
- At 768 CSS pixels, the two-column attempt deck had `scrollWidth` 753 against viewport width 768. Keyboard Tab reached the skip link with `:focus-visible` and a 3px outline; literal status text, preview alternatives, error associations, and the reduced-motion rule remained present. No console errors occurred.
- Static review found no `fetch`, XHR, WebSocket, EventSource, telemetry, browser-store, service-worker, remote asset, form-action, or credential path in the application. The fixture directory ends with exactly the three approved Synthetic raster attempts.

### Scope, limitations, and release disposition

- JSON is export-only in the frozen workflow, so malformed JSON input is not an application surface. Duplicate IDs are not importable; generated DOM IDs were checked at the five-card maximum.
- The supported claim remains current desktop Chromium on localhost. Other browsers/devices, assistive-technology usability, all malformed JPEG/PNG variants, process-level memory reclamation, observed download placement, safe memory ceiling, real workflow ownership, accepted rubric, provider/credit/time semantics, comparison burden versus spreadsheet/native workflow, user value, adoption, and economic outcome remain Unknown.
- Research remains read-only and unchanged. The strict research gate is **0/13**; H2 remains unvalidated and parked. This implementation result is not market, user, quality, rights, consent, provenance, disclosure, approval, or publishing-authority evidence.

**Gate disposition:** the frozen release candidate passes its defined Stage 8 checks with the stated limitations. **Stage 9 may begin only on a new explicit request; it has not started.**

## Stage 9 — Demo, alternative comparison, and falsification

**Status: Complete — Ship (internship artifact only).** This stage ran the frozen Synthetic Creative Run Review flow and repeated the same bounded decision with a transient spreadsheet/native-style record. No application feature, dependency, persistence, upload, telemetry, API, authentication, live data, or Stage 10 work was added.

### Frozen demo evidence

**Inputs:** fixed fictional brief `BR-SYN-001` (“Orbit Spring launch tile”); exactly three preloaded Synthetic raster attempts; and the frozen constraints JPEG/PNG, browser-observed 1080 × 1080 px, 1:1 ± 0.01, ≤ 5 MiB, with a 10 MiB decode ceiling. The fixture observations were:

| Attempt | Browser-observed objective result | Human/operational context |
|---|---|---|
| A01 · Signal (`attempt-01.png`) | Readability, reported type, dimensions, aspect, and size: **Pass** | Brief fit 2; craft/legibility 2; synthetic 12 credits / 34 seconds |
| A02 · Pressure (`attempt-02.jpg`) | Readability/type/size: **Pass**; dimensions/aspect: **Fail** | Brief fit 1; craft/legibility 1; synthetic revision, 9 credits / 29 seconds |
| A03 · Drift (`attempt-03.png`) | All five objective checks: **Pass** | Brief fit 1; retry; credits and elapsed time: **Unknown** |

**Observed run:** the page loaded with three fixture cards, literal Pass/Fail/Unknown states, independent human fields, and default `Hold / no decision`. The selected outcome was changed to `Selected for this comparison`, A01 was explicitly selected, and the following rationale was entered: “A01 meets all five browser checks and the strongest human fit; A02 fails the square constraints, while A03 has an Unknown operational record. Select A01 for this comparison.” The next action recorded was to complete human content review before any use. JSON, CSV, and Markdown actions each announced a metadata-only export. Clear session returned the page to three empty cards, fifteen objective `Unknown` states, `Hold / no decision`, no preview, and a message that zero active object URLs were revoked after the selected demo state had already been cleared.

**Measured automation timings:** 33 ms to enter the decision fields, 165 ms for the three export actions, and 43 ms for clear-session. The dependency-free self-check completed in 0.11 seconds wall time. These are tool-run timings, not human reading or task-time measurements; human burden remains Unknown.

### No-build spreadsheet/native comparison

The same rows were repeated as a transient, unsaved spreadsheet-style table using the browser-observed values above. No spreadsheet file, account, or additional application was created. The table selected **A01** with the same rationale because it preserves the five independent objective statuses, the human-fit distinction, and A03’s operational `Unknown` without a combined score.

| Evaluation dimension | Frozen app observation | Spreadsheet/native-style observation | Result |
|---|---|---|---|
| Artifact clarity | Guided brief → attempts → comparison → decision flow; literal statuses and separate sections remain visible. | Same fields can be made clear in rows, but the operator must preserve grouping and decision guidance manually. | App clearer for a short demonstration; table remains understandable. |
| Burden | Requires a localhost page and card-level entry, but constrains the 3–5-attempt shape. | Lowest setup and no runtime; manual entry and consistency are the operator’s responsibility. | Table lower burden; no measured user-time advantage for either. |
| Transparency | Persistent evidence boundary, independent checks, human labels, operational source/precision, limitations, and rationale are visible together. | Transparent when the same columns and labels are retained; easier to omit context accidentally. | App has stronger visible guardrails; table can represent the same record. |
| Unknown preservation | Missing/unsupported/unreadable/invalid dependencies remain literal `Unknown`; clear-session returns all empty checks to `Unknown`. | `Unknown` is representable as a cell value, but preservation depends on disciplined entry and formulas. | App stronger by constraint; table is semantically sufficient. |
| Export usefulness | JSON, CSV, and Markdown metadata-only actions; serializer self-check proves runtime/media exclusions. Browser download placement was not observable. | CSV/table is immediately portable and easy to inspect; no app whitelist was tested because no file was created. | App offers more presentation formats; table is simpler to move. |
| Accessibility basics | Native labels, semantic headings/regions, literal status text, polite live region, visible keyboard focus, reduced-motion CSS, and 768-pixel reflow were observed. | Native spreadsheet/browser controls likely provide basic keyboard semantics, but this comparison did not run an accessibility audit. | App evidence is observed; table accessibility is Unknown. |
| Reversibility | No persistence; explicit clear resets in-memory state and revokes active object URLs. Downloaded copies remain user-controlled. | No build, runtime, or media state; discard the unsaved table. | Table is most reversible; app remains locally disposable. |

### Bounded decision

**Decision: Ship/package the existing Creative Run Review artifact as an internship demonstration.** The evidence for Ship is limited to the artifact question: in a short local walkthrough, the app makes the separation between browser observations, human judgment, operational uncertainty, and a human-owned decision more legible than an unstructured table. The no-build table reaches the same A01 decision with lower setup burden and remains the appropriate operational baseline. Ship therefore means “package this frozen demo for the internship review,” not “adopt it,” “replace a spreadsheet,” or “build a product.”

This is a bounded **Ship**, not a claim of model quality, user demand, workflow improvement, cost/time savings, privacy certification, portability, or production readiness. No real operator, spreadsheet user, customer, HexCoded workflow, or model output was observed.

### Limitations, assumptions, and Unknowns

- All inputs, labels, credits, elapsed times, ratings, and the selected rationale are Synthetic. They are not model-performance or workflow evidence.
- The no-build comparator was an in-memory/tabletop repetition, not a saved Numbers/Sheets workbook or a measured native-browser task. Comparative human effort, error rate, preference, and accessibility remain Unknown.
- Automated interaction timings exclude reading, interpretation, typing variability, and any human review time. Browser export file placement was not observable, although the serializer self-check passed.
- Current desktop Chromium on localhost is the supported demonstration environment. Other browsers/devices, assistive-technology usability, all malformed media variants, process-level memory reclamation, and downloaded-copy handling remain Unknown.
- `Unknown` remains the correct state for unsupported, unreadable, missing, oversized-for-decoding, zero, `NaN`, and `Infinity`-dependent checks; no Unknown was converted to Pass during this run.
- The artifact does not establish quality, factuality, legality, consent, ownership, provenance completeness, disclosure compliance, approval, publishing authority, users, demand, adoption, ROI, product-market fit, or a HexCoded need.

### Gate disposition

Stage 9 is complete with the single bounded **Ship** decision above. The research gate remains **0/13**, H2 remains unvalidated and parked, and `research/` remains untouched. **Stage 10 did not start; it may begin only after a new explicit authorization.**

## Stage 10 — Final internship package and handoff

**Status: Complete — implementation track closed.** Stage 10 packages the existing frozen Creative Run Review release candidate; it does not add or alter application behavior. The Stage 9 decision remains **Ship for the internship demonstration only**.

### Final package

- Added `implementation/FINAL-HANDOFF.md` as the single founder-facing entry point. It contains minimal setup and stop instructions, the verification command and expected result, a timed three-minute demo script, expected Synthetic outcomes, a concise problem/behavior/technical/privacy/reversibility explanation, explicit prohibited claims, limitations and Unknowns, the build-versus-spreadsheet and kill history, fixture provenance and SHA-256 values, a clean inventory, the founder message, and the closed final state.
- Updated `implementation/README.md` with the final Stage 10 status and a direct handoff entry point.
- Updated `implementation/app/README.md` from its Stage 7 label to the final artifact name, retained the minimal localhost and self-check commands, and linked the final handoff.
- Preserved the application source, visual system, data contract, self-check, and three raster fixtures unchanged. No generated build output, dependency manifest, lockfile, cache, temporary payload, credential, account configuration, or external-service artifact was added.

### Reproducibility and verification

- `node --check implementation/app/logic.mjs` and `node --check implementation/app/app.mjs` passed.
- `node implementation/app/self-check.mjs` returned `Creative Run Review self-check passed.` in 0.09 seconds wall time. Its existing assertions retain the frozen Pass/Fail/Unknown, oversized, zero/`NaN`/`Infinity`, operational validation, retry, escaping, limitation, and metadata-only runtime/media-exclusion coverage.
- The documented `python3 -m http.server 4173 --bind 127.0.0.1 --directory implementation/app` command served the package successfully. A fresh current desktop Chromium tab loaded the fixed `BR-SYN-001` brief and exactly three Synthetic fixtures with A01 all Pass, A02 dimensions/aspect Fail, and A03 operational Unknowns.
- The handoff demo was reproduced: Selected was changed explicitly to A01, the documented rationale and next action were entered, Markdown announced a metadata-only export, and clear-session returned to three empty cards, fifteen objective Unknown states, no previews, and Hold/no decision.
- Static scanning found no `fetch`, XHR, WebSocket, EventSource, persistent browser store, service worker, beacon, remote URL, or form-action path in application HTML/CSS/JavaScript.
- Fixture inspection confirmed PNG 1080 × 1080, JPEG 1200 × 900, and PNG 1080 × 1080. The recorded SHA-256 values match the packaged files.

### Final evidence boundary and Unknowns

All fixture content, identifiers, provider labels, ratings, credits, elapsed values, and decision content remain Synthetic. The spreadsheet/native comparison remains a transient no-build baseline, not a measured user study. Current desktop Chromium on localhost is the supported demonstration environment; other browsers/devices, assistive-technology usability, every malformed media variant, safe device-memory ceiling, process-level memory reclamation, browser download placement, real workflow ownership, accepted rubric, human burden, preference, adoption, and economic value remain Unknown.

The package cannot establish quality, factuality, file signatures, legality, consent, ownership, provenance completeness, disclosure compliance, approval, publishing authority, users, customers, demand, willingness to pay, ROI, product-market fit, or a HexCoded need. The recommended Stage 10 allocation was GPT-5.6 Sol with Extra High reasoning; this runtime exposed no separate verifiable model-switch result, so no switch is claimed.

### Exit gate

The artifact can be run, checked, demonstrated, cleared, and understood from the final handoff without an account, dependency install, build step, network service, or private input. The research validation gate remains **0/13**, H2 remains unvalidated and parked, and `research/` remains read-only and unchanged. **Stages 0–10 are complete; there is no later implementation stage and no deployment, publication, outreach, or external handoff was performed.**
