# Stage 4 — Opportunity Discovery

**Status:** Complete (public desk research and hypothesis framing; no interviews, account tests, product selection, or implementation)
**Completed:** 2026-09-08
**Scope:** Creative agencies that repeatedly deliver short-form branded video and social variants for clients. This tests handoffs in the Stage 3 stack; it does not assume an all-in-one agency platform or define a product.

## Method and decision boundary

Stage 2 supplies directional evidence of recurring video work, AI-assisted exploration, human review, and fragmented feedback. Stage 3 establishes that creation/context (Runway, LTX, Adobe/Firefly, Kive), proofing (Frame.io, Ziflow), and social activation (Canva, Sprout) already have documented coverage. Thus a missing field on a public product page is not evidence of a missing market category.

New sources were checked on 2026-09-08. [C2PA](https://spec.c2pa.org/specifications/specifications/2.3/explainer/_attachments/Explainer.pdf) states that provenance can be incomplete and does not determine truth, accuracy, or factuality. [Meta](https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/) documents current AI-information labels for relevant GenAI ad images/video and third-party standard-signal detection; [TikTok](https://support.tiktok.com/en/using-tiktok/creating-videos/ai-generated-content) requires labeling realistic AI-generated images, audio, and video. These are policy/technical facts—not proof of global legal requirements or agency demand. [Digiday's 2025 agency reporting](https://digiday.com/marketing/how-generative-ai-is-changing-creator-contracts-to-prevent-brand-and-copyright-risks/) and the [mediasense/WFA in-house study](https://www.media-sense.com/reports/in-housing-ai/) offer bounded leads on client AI terms and approval delay, not prevalence evidence for this target segment.

## 1. Opportunity landscape

```text
brief / references / client AI policy
  → generation and retry loop
  → proof / version review
  → approved master → channel variants → authorized post
  → reuse of human/talent-led asset

H1: generation context → decision-ready proof
H5: retry loop → attributable production cost
H6: contract/policy → permitted tool/model/input
H3: proof → client/legal/brand clearance state
H7: proof → named decision owner and deadline (process first)
H4: cleared master → claim/restriction-safe derivatives
H2: approved asset → exact authorized social post
H9: export/post → disclosure/provenance handling
H10: actor licence → campaign reuse; H8: generic reference lock before generation
```

**Inference — medium confidence.** Only continuity failures that persist across a named, configured stack and have a measured consequence deserve validation. The strongest *research* candidates are H2 (proof-to-publish integrity), H3 (higher-risk clearance state), and H4 (restrictions through derivatives). No candidate has primary evidence of an unmet need, buyer, or willingness to pay.

**Process-first finding — medium confidence.** Late legal/client input and absent decision ownership can create exactly the symptoms of an integration failure. Frame.io, Ziflow, and Sprout already supply review/routing controls; the WFA study's reported “AI in minutes, legal in a week” contrast reinforces that software cannot create authority. H7 is a disconfirmation path, not a software premise.

| Group | Hypotheses | Stage 4 treatment |
|---|---|---|
| Validate before considering any product shape | H2, H3, H4 | Specific cross-system handoffs with possible measurable consequences; no primary demand evidence. |
| Conditional: measure first | H1, H5, H6, H9 | Information may be useful, but public evidence does not show it is required, material, or unsolved by process/integration. |
| Process-first or rejected as a new-product premise | H7, H8, H10 | H7 is decision ownership/SLA; H8 has strong incumbent coverage; H10 overlaps HexCoded's documented actor/licence workflow. |

## 2. Opportunity hypothesis table

“Coverage” means documented public capability in Stage 3, not sufficiency. Buyer/approver roles are working assumptions, never verified procurement facts.

| ID | Specific user and recurring job | Exact handoff; current tools/workaround; incumbent coverage | Unresolved, evidence, and confidence | Frequency/consequence; ownership | Why an incumbent/process may solve it; disconfirmation |
|---|---|---|---|---|---|
| H1 | Agency producer/editor: turn a chosen AI-assisted cut into a client decision. | Brief/reference/prompt/model/output → Frame.io/Ziflow proof. Runway/LTX/Firefly/Kive → proof; producer pastes notes or sends deck/link. Upstream context and proofing are each covered. | Does an approver need prompt/model/output history, or brief + rendered proof? Stage 2 E2/E3/E6/E8/E10 plus Stage 3 C1–C18 support the seam only. **Hypothesis; medium-low.** | Only when AI reaches review; measure regenerated outputs, revision rounds, coordinator time. User: producer; champion: creative ops; assumed buyer: production lead/principal; approver: client creative/brand. | Proof template plus brief/output link or current board may suffice. Close if reviewers decide reliably without reconstructed generation context. |
| H2 | Social/creative-operations lead: release many approved video variants accurately. | Approved master/channel variant → Canva/Sprout scheduled post. Account lead manually checks filename/link/caption/status. Proof and social endpoints are covered. | Does creative approval actually separate from publishing authority after normal configuration? Stage 2 E11–E14; Stage 3 C12–C25. **Hypothesis; medium-low.** | Recurrent only with variants; measure manual checks, late swaps, near-misses, missed slots. User/champion: social or account lead; assumed buyer: agency ops/client social; approver: client publisher. | Canva/Sprout, a locked source of truth, naming, or import may solve it. Close if a recent campaign reliably binds exact asset, caption, approver, and post. |
| H3 | Producer/creative-ops lead on paid, actor-led, regulated, or claims-sensitive work: assemble release evidence. | Asset + proof → client/legal/brand clearance → publish. Vendor terms, contracts, DAM/folders, email, credentials, Ziflow audit; components cover different controls. | Which record is actually required: consent, licence, stock/music, claim support, provenance, disclosure, territory, client permission? Stage 2 E1/E7/E9; Stage 3 C4/C8–C9/C15–C18; C2PA. **Hypothesis; medium-low.** | Do not assume every post needs it; measure clearance holds/rejected output/reconciliation. User: producer; champion: legal ops; assumed buyer: client marketing/legal or agency principal; approvers: client legal/brand/rights owner. | Legal/DAM/checklist/contract could be enough. Close if three high-risk campaigns have retrievable, accepted records without reconciliation. |
| H4 | Account/creative-ops lead: preserve material claims and restrictions while adapting a cleared video. | Cleared master/claim decision → copy, caption, locale, channel variants → post. Ziflow, Creative Cloud/Canva, social approval, manual copied notes. | Do claims/restrictions actually drift and can current metadata/templates carry them? Stage 2 E1/E11–E14; Stage 3 proof/social controls; FTC claims guidance. **Hypothesis; low.** | Measure material variant changes/re-review/holds, not cosmetic resizes. User: account/ops; champion: traffic; assumed buyer: agency ops/client campaign; approver: client legal/brand. | A material-change rule, template, or Ziflow checklist may solve it. Close if current status fields trigger predictable reapproval. |
| H5 | AI producer/studio lead: manage recurring variants within a production estimate. | Brief/output selection → retries → budget. Runway/LTX/Kive/HexCoded credits plus spreadsheet/producer judgment; central token/model control is emerging. | Are retries material versus human editing/media, and is cross-tool data better than usage exports? Stage 3 C2–C5/C11 plus current agency-token reporting. **Hypothesis; low.** | Measure planned/actual renders/credits, reject cause, edit time, estimate change. User: AI producer; champion: production head; assumed buyer: agency principal/finance; approver: campaign budget owner. | Vendor exports/project code/spreadsheet may suffice. Close if cost is predictable/negligible or current reports drive action. |
| H6 | Account/creative-ops lead: ensure client restrictions reach makers before generation. | Contract/client policy → brief → allowed tool/model/input/output. Current workaround: clause/email/approved-tools list/client legal. | Is failure a missing control or a one-time policy/kickoff rule? Stage 2 rights concern; limited agency reports of AI clauses/model constraints. **Hypothesis; medium-low.** | Only where policy varies; measure late rules and discarded/rerouted work. User: account ops; champion: legal ops; assumed buyer: principal/procurement; approver: client legal/security/brand. | Brief field + kickoff/approved-tools register is cheaper. Close if a stable rule reaches makers reliably. |
| H7 | Account lead: obtain one accountable client/brand/legal decision by a date. | Proof → reviewers/decision owner → consolidated accept/reject. Ziflow/Sprout routing, reminders, approval matrix, account escalation, SLA. | Does delay remain after ownership is fixed? Stage 2 E2/E11/E12; Stage 3 C12–C19/C24–C25; WFA process signal. **Process hypothesis; medium.** | Measure days late, chase time, scope creep, missed slot separately from tool access. User/champion: account lead; assumed buyer: principal/client sponsor; approver: empowered client owner. | Named delegate, deadline, revision cap, escalation are the first answer. Close software premise if SLA removes delay. |
| H8 | Creative director: reuse correct brief/reference during AI ideation. | Brief/brand references → generation. Firefly Boards/Libraries, Runway projects/Brand Kits, LTX, Kive, Canva already cover it. | Is any observed loss a capability gap rather than adoption discipline? Stage 2 supports fidelity/control; Stage 3 C1–C11/C20–C21 show overlap. **Rejected standalone premise; medium.** | Could recur, but no distinct cost/buyer is established. | Existing board/library + required brief link is default. Reopen only if three agencies show persistent loss after adopting it. |
| H9 | Social publisher/compliance coordinator: release realistic AI-assisted video with appropriate disclosure/provenance handling. | AI asset → export/edit → post/ad. Firefly/C2PA, platform disclosure/labels, release checklist. | Which channel/client requirement applies, does metadata survive, who decides? Meta/TikTok policy and C2PA support the distinction; Stage 3 lacks delivery-path evidence. **Hypothesis; low.** | Restrict to relevant realistic AI media; measure lost signal/held post, not auto-labels. User: publisher; champion: social ops; assumed buyer: client social; approvers: client legal/brand. | Platform-native disclosure/checklist may suffice. Close if existing export/publish flow meets actual requirements. |
| H10 | Producer/talent coordinator: confirm permitted human/actor use for new campaign variants. | Talent licence/consent → generated variant → reuse. HexCoded actor licence/controls, client contracts, rights folders, proof. | Does cross-system reuse need more than the existing licence? Stage 1 actor evidence and Stage 2 rights concern; no agency failure shown. **Rejected adjacent premise; low.** | Only actor-led reuse; consequences could be clearance hold/risk but incidence is unknown. Champion: production/legal ops; assumed buyer: principal/client legal; approver: rights owner/client legal. | Licence link + reuse checklist is default; risks duplicating HexCoded. Reopen only after repeated cross-system verification failure. |

### Qualification fields (not a feature design)

This is a comparative research note, not a commitment to build. “Placement” names the narrow workflow layer that would need validating; “test burden” refers to validating the hypothesis, not prototype scope.

| ID | Why now / HexCoded relevance | Possible placement if validated | Alternatives and differentiated outcome to prove | Test burden / demo value / key risk |
|---|---|---|---|---|
| H1 | More AI-assisted options make selection/context salient; HexCoded exposes multi-model generation but public review continuity is unknown. | Inside creation context or a companion handoff to proofing. | Proof template, board, or deep link; prove less context reconstruction, not more prompt data. | Medium / medium / client may not want or need generation details. |
| H2 | Repeated social variants make release integrity plausible; HexCoded is upstream of the social system. | Adjacent release handoff, not a scheduler replacement. | Canva/Sprout/current calendar; prove exact approved asset/copy/authority reaches post with less reconciliation. | Medium / high / integration and source-of-truth overlap. |
| H3 | Client AI terms and platform transparency heighten scrutiny for selected high-risk work; HexCoded's actor/rights posture is relevant but incomplete for campaign clearance. | Adjacent, risk-tiered campaign evidence handoff. | Legal/DAM/checklist/Ziflow audit; prove record retrieval/reconciliation rather than legal judgment. | High / medium / sensitive data, legal responsibility, low cadence. |
| H4 | Variant volume can multiply material-copy changes; HexCoded is only one source asset path. | Adjacent clearance-to-derivative handoff. | Material-change rule and existing proof/social status; prove restriction survival on material changes. | Medium / medium / may be a template/process problem. |
| H5 | Credits/tokens are explicit operating costs; HexCoded's own credit model makes the question adjacent to its use. | Inside studio reporting or a narrow production companion. | Vendor usage export/project code/spreadsheet; prove a decision changes when costs are attributed. | Low-medium / medium / cost may be immaterial or incomparable across models. |
| H6 | Client terms and model/data restrictions are emerging; HexCoded's tools/terms make constraint visibility relevant. | Inside brief intake or a policy-to-maker companion. | Contract clause/approved-tools list/kickoff; prove policies are dynamic and repeatedly missed. | Medium / low / legal/security buyer and policy liability. |
| H7 | Approval delay is already documented; HexCoded fit is indirect. | No product placement until process test fails. | Approval matrix, SLA, delegate, escalation, existing routing; prove process leaves a specific technical failure. | Low / low / software would conceal an ownership problem. |
| H8 | Context capabilities are already available; HexCoded fit is generic only. | None while rejected. | Existing board/library/Brand Kit; would need a clearly superior outcome after adoption discipline. | Low / low / undifferentiated incumbent overlap. |
| H9 | Platform labels make some release checks current; HexCoded can supply source context but channels own disclosure. | Adjacent platform-release check, if any. | Native platform labels/self-disclosure/checklist; prove a real required signal is lost. | Medium / low / policy varies and metadata is not clearance. |
| H10 | HexCoded's consented actors make this strategically adjacent, but it may already be core coverage. | None beyond existing licence workflow unless crossing systems fails. | Actor licence link/reuse checklist/client rights process; prove a gap not a duplicate rights registry. | High / low / rights scope, sensitive data, legal overlap. |

## 3. Workflow pain-to-opportunity map

| Handoff | Observed or plausible pain | Candidate opportunity | Default non-product response | Gate before it stays live |
|---|---|---|---|---|
| Brief/reference → generation | Off-brand or inconsistent output; context is reconstructed. | H1 only where lost context changes a review decision; H8 is rejected generically. | Existing board/library, required brief link, proof description. | Same loss recurs after the standard and creates dated rework. |
| Policy/contract → maker | A restriction arrives late; work is rerouted or rejected. | H6 policy intake/routing. | Contract clause, approved-tool list, kickoff/legal owner. | Rules vary across clients and are repeatedly missed after the rule. |
| Generation → retry loop | Producers cannot attribute retry cost to an asset or estimate. | H5 cost attribution. | Usage export, project code, planned/actual spreadsheet. | Actual retry cost changes a delivery or budget decision. |
| Generation → proof | Client sees a cut but lacks relevant selected-output context. | H1 decision-ready context. | Brief link + rendered proof + selected-output note. | Context must be reconstructed and changes an approval. |
| Proof → decision | Conflicting notes, late reviewers, or no accountable client choice. | H7, explicitly process-first. | Named approver/delegate, SLA, revision cap, escalation; current routing. | Delay persists after ownership/process are fixed. |
| Proof → clearance | Consent, rights, claims, provenance, and disclosure live in distinct records. | H3 higher-risk clearance state. | Risk tier/checklist, legal/DAM links, client release rule. | High-risk campaigns repeatedly require manual reconciliation. |
| Cleared master → derivatives | A material copy/claim/restriction change is not re-reviewed. | H4 restriction propagation. | Material-change rule and existing proof/social status. | Material derivatives lose restriction state or cause a hold. |
| Approved creative → post | Approved asset/copy, publishing authority, and scheduled post may not match. | H2 release integrity. | One social source of truth, locked asset ID, existing import/configuration. | Exact-release mismatch persists with an operational consequence. |
| Export → platform disclosure | Required disclosure or signal may be unknown/lost on a platform-specific path. | H9, a policy-specific question. | Native label/self-disclosure and release checklist. | An actual requirement repeatedly fails in the existing flow. |
| Licence → reuse | Talent/actor permission must be checked for new use. | H10 is rejected unless cross-system traceability fails. | Licence link and reuse checklist. | Existing licence evidence cannot support a recurring reuse decision. |

## 4. Incumbent coverage and overlap analysis

| Area | Existing documented coverage | What remains an unknown rather than a gap | Implication |
|---|---|---|---|
| Reference and generation context | Runway projects/Brand Kits, LTX input modes, Firefly Boards/Libraries, Kive boards, Canva Brand Kits. | Whether a specific agency applies the available context consistently. | Do not build generic brief/reference management (H8). |
| Version-specific review and approval | Frame.io version stacks, comparison, comments and roles; Ziflow proof versions, staged routing, audit, integrations. | Whether a proof needs generation history; whether current routing is configured or the client owns a decision. | H1/H7 must beat a proof template or an approval matrix first. |
| Social approval and publication | Canva approvals/planner; Sprout calendar, approvals/external approvers, permissions, imports, publishing. | Whether an approval status is bound to the exact asset/caption/channel release. | H2 is viable only as a demonstrated boundary failure, not another scheduler. |
| Governance-adjacent controls | Firefly/C2PA provenance, Frame.io access/watermark, Ziflow checklist/audit, vendor commercial-use terms, contracts. | Whether a campaign needs joined consent, licence, claim, disclosure, territory, and client-authority evidence. | H3/H4 need a risk-tiered artifact test; never call this single category “brand safety.” |
| Cost controls | Credit-based generation plans/usage and some agency central model/token governance. | Actual cost of rejected variants compared with labor and media spend. | H5 is an instrumentation question before it is a product question. |
| Client/process governance | Existing review routing, contracts, SLAs, account escalation. | Whether a client will delegate authority or honor a deadline. | Treat H7 as a process fix unless proven otherwise. |

**Overlap conclusion — inference, medium confidence.** H1–H6 and H9 are possible continuity failures between mature layers, not vacant product categories. H7 is likely organizational; H8 and H10 are insufficiently differentiated. Any future intervention must demonstrate why an existing integration, template, contract, or process rule fails on the same campaign handoff.

## 5. Provisional opportunity ranking

Scores use the Stage 0 weighted formula: pain/consequence 25, frequency 15, current-workaround gap 15, user/buyer access 15, adoption fit 10, differentiated value 10, feasibility/risk 10. They prioritize research, not a product. Low gap/differentiation scores intentionally reflect incumbent coverage.

| Rank | Hypothesis | Pain | Frequency | Gap | Access | Fit | Differentiation | Feasibility | Weighted /100 | Confidence | Readout |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---|---|
| 1 | H2 Approved creative → authorized post | 4 | 4 | 3 | 4 | 3 | 3 | 3 | 71 | Medium-low | Best narrow software question; must defeat existing social source-of-truth explanation. |
| 2 | H7 Decision owner/SLA | 4 | 4 | 1 | 4 | 4 | 1 | 5 | 67 | Medium | Strong process test, not a software recommendation. |
| 3= | H3 Higher-risk clearance state | 5 | 2 | 3 | 2 | 2 | 3 | 2 | 60 | Medium-low | Potential consequence is high; cadence, buyer access, and sensitive-data risk unproven. |
| 3= | H4 Claims/restrictions through variants | 4 | 3 | 2 | 3 | 3 | 2 | 3 | 60 | Low | Advance only for material claim/restriction changes. |
| 5 | H5 Retry-cost attribution | 3 | 3 | 2 | 3 | 4 | 2 | 4 | 59 | Low | Simple to measure; meaningful production waste unproven. |
| 6 | H1 Decision-ready generation context | 3 | 3 | 2 | 4 | 3 | 2 | 3 | 58 | Medium-low | Need proof that upstream context changes an approval. |
| 7 | H6 Client AI-policy intake | 4 | 2 | 3 | 2 | 3 | 2 | 2 | 55 | Medium-low | A stable contract/kickoff rule may handle it. |
| 8 | H9 Disclosure/provenance at publication | 3 | 2 | 3 | 3 | 2 | 2 | 2 | 51 | Low | Policy fact is real; agency failure and demand are not. |
| 9 | H10 Actor licence visibility on reuse | 4 | 2 | 1 | 3 | 3 | 1 | 2 | 50 | Low | Risks duplicating HexCoded's documented controls. |
| 10 | H8 Generic reference-library lock | 3 | 3 | 1 | 2 | 3 | 1 | 3 | 47 | Medium | Deprioritize: existing context capability is broad. |

**Critical gates:** None has primary evidence of repeated unmet need, a confirmed buyer, safe required data access, or a first useful outcome. H2–H4 are interview priorities only; Stage 5 must not select on score alone.

## 6. Evidence table

| ID | Source and type | Direct support | Evidence quality and limitation |
|---|---|---|---|
| S2-1 | [Wistia, *State of Video 2026*](https://wistia.com/blog/video-marketing-statistics) — vendor survey/platform analysis; Stage 2 E1 | Recurring video production and AI use through creation tasks. | Medium-high for its disclosed sample; not agency-only or a handoff-prevalence study. |
| S2-2 | [Creative Review on IHALC/Adobe agency survey](https://www.creativereview.co.uk/how-in-house-agencies-are-adopting-ai/) — Stage 2 E7 | AI use for concepts/options is broader than live external asset use; IP concern matters. | Medium; 50+ UK/EMEA in-house leaders, not independent agencies or purchase evidence. |
| S2-3 | [Creative Boom agency interviews](https://www.creativeboom.com/insight/special-report-how-design-agencies-are-using-ai-in-2024/) — 25+ agency interviews; Stage 2 E8 | Human refinement, prompt control, and visual consistency remain work. | Medium, qualitative and 2024; workflow texture, not prevalence. |
| S2-4 | Stage 2 E2/E3/E5/E11/E12/E14 practitioner/guidance sources | Version context, feedback consolidation, approval latency, and review workload. | Directional, often self-selected; not market-size or willingness-to-pay evidence. |
| S3-1 | [Stage 3 evidence table](/Users/activelymac/Documents/ChatGPT/one_impressions_assignment/research/stages/stage-03-competitors.md) — C1–C25 official product/help/pricing | Layered coverage of context, creation, proofing/routing, social approval/publishing, and commercial models. | High for stated product behavior; not adoption, legal sufficiency, ROI, or end-to-end integration quality. |
| S4-1 | [C2PA Content Credentials explainer](https://spec.c2pa.org/specifications/specifications/2.3/explainer/_attachments/Explainer.pdf) — specification body, accessed 2026-09-08 | Provenance can be incomplete and does not establish truth/accuracy/factuality. | High for specification scope; does not identify agency demand or resolve legal rights. |
| S4-2 | [Meta ads AI-transparency update](https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/) — platform update, updated 2026-06-01 | AI-information labels for relevant GenAI ad images/video and third-party standard-signal detection. | High for Meta's stated approach; channel/region behavior can change and is not a general disclosure law. |
| S4-3 | [TikTok AI-generated-content help](https://support.tiktok.com/en/using-tiktok/creating-videos/ai-generated-content) — official help | Label requirement for realistic AI-generated image, audio, and video; self- and C2PA-related auto-label behavior. | High for stated TikTok policy; no application to every channel/campaign. |
| S4-4 | [FTC advertising substantiation FAQ](https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business) — U.S. regulator | Objective advertising claims need evidence before an ad runs. | High for U.S. guidance; not legal advice, global law, or agency-workflow evidence. |
| S4-5 | [Digiday: AI changing creator contracts](https://digiday.com/marketing/how-generative-ai-is-changing-creator-contracts-to-prevent-brand-and-copyright-risks/) — practitioner reporting, 2025-03-24 | Some agencies/clients report AI clauses, consent requests, and pipeline transparency needs. | Medium-low; small attributed set of executives, not representative. |
| S4-6 | [mediasense/WFA, *In-Housing AI*](https://www.media-sense.com/reports/in-housing-ai/) — 30+ company mixed-method study, 2025-11-05 | Legal approval may outlast rapid generation. | Medium; global in-house companies, not the target agency sample. |
| S4-7 | [Digiday: agency AI-token economics](https://digiday.com/marketing/agencies-grapple-with-economics-of-a-new-marketing-currency-the-ai-token/) — practitioner reporting, 2026-03-04 | Agency pricing/budget treatment of AI tokens is developing. | Medium-low; no measured retry cost or short-form-video sample. |

## 7. Disconfirmation tests

| Hypothesis | Minimum recent-campaign test | Advance only if | Deprioritize if |
|---|---|---|---|
| H1 | Compare one approved and one rejected AI-assisted proof: brief, references, prompt/model/output, proof comments, decision. | Context was reconstructed, changed the decision, and recurred. | Brief + proof was enough, or a proof template/link fixes it. |
| H2 | Trace master through all social variants to scheduled/published post; inspect asset ID, caption, approver, authority, and manual checks. | Exact approved release cannot be identified reliably and causes chase/rework/near miss. | Current calendar/source of truth binds asset, copy, authority, and post. |
| H3 | For three high-risk assets, trace redacted policy/contract, talent/asset terms, claims support, disclosure decision, proof, and final post. | Required records are manually reconciled repeatedly and a named owner sees value. | Existing legal/DAM/checklist record is retrievable and accepted. |
| H4 | Compare a cleared master with three material derivatives; identify changed claims/restrictions and reapproval. | Restrictions are lost/rechecked manually across material variants. | Current variant fields and a material-change rule work. |
| H5 | Log a sprint: planned/actual credits/renders, reject cause, edit time, and client estimate. | Cost changes budget/estimate/delivery and cannot be read from current exports. | Cost is negligible/predictable or current report is sufficient. |
| H6 | Walk contract/client policy to actual tool/model/input choice on two clients. | Rule arrives late or is missed after a normal kickoff/checklist. | Approved-tools/kickoff process reaches makers reliably. |
| H7 | Apply named approver/delegate, deadline, revision cap, and escalation to two comparable reviews. | Delay remains after ownership is fixed and is a specific cross-system failure. | Delay falls; retain the operating rule, not software. |
| H8 | Require current board/library plus brief link for one campaign. | Reference loss still recurs with measurable rework. | The standard fixes it; close H8. |
| H9 | Test one relevant realistic-AI post per platform: export path, credential state, disclosure decision, final label. | Actual requirement is repeatedly lost/unrecoverable. | Native label/disclosure/checklist meets the requirement. |
| H10 | Trace a reused human/actor asset: licence scope, consent, category, client approval, final use. | Existing records cannot support recurring reuse. | Existing licence/checklist covers the decision. |

## 8. What Stage 4 changes—and does not change—from Stage 3

### Changes

- Splits “approval/versioning” into H1 generation-to-decision context, H2 proof-to-authorized-release integrity, H3 clearance state, H4 restriction propagation, and H7 decision ownership. They are not one feature request.
- Adds a concrete publishing-policy boundary: Meta/TikTok make disclosure handling relevant to certain realistic AI media, while C2PA confirms why provenance cannot equal clearance or accuracy. H9 remains low confidence because the agency failure is unobserved.
- Elevates H7: test an approval owner/SLA before software. Recent reporting is consistent with a process bottleneck, but does not prove it for this segment.
- Deprioritizes generic reference management, another generic approval system, and a duplicate actor-rights system.

### Does not change

- The target is still a **candidate** segment. No market size, willingness to pay, or product-market fit is established.
- The Stage 3 conclusion remains: existing tools cover much of the workflow. This stage has not found a broad agency-platform, review-tool, DAM, scheduler, or legal-system opening.
- No final product, feature set, build, prototype, deployment, or purchase recommendation follows.

## 9. Interview-validation plan for the strongest hypotheses

Conduct **8–12 artifact-led interviews, 45–60 minutes each**, before Stage 5. Recruit only agencies that shipped at least one client-facing short-form video/social campaign in the last 90 days. Include lower-risk organic social and higher-risk paid, human/actor-led, claims-sensitive, or cross-market work.

| Role | Target | Hypotheses most informed |
|---|---:|---|
| Creative/production or creative-operations lead | 3 | H1–H6, H10 |
| Account/client-service lead | 2 | H2, H4, H6, H7 |
| Editor or AI producer | 2 | H1, H5 |
| Social/content lead or publisher | 2 | H2, H4, H9 |
| Client brand/legal approver or talent/rights owner | 1–3 | H3, H4, H6, H9, H10 |

Do not recruit only AI enthusiasts or HexCoded users. Include at least two teams using Frame.io or Ziflow and at least two using Canva or Sprout (or a directly comparable social system), so the incumbent test is meaningful.

Ask each participant to walk through one recently shipped and one delayed/rejected campaign, with redacted material where necessary:

1. Brief, references, client AI policy/contract clause, and named approval matrix.
2. Prompt/reference/model/output history for any AI-assisted asset, including rejected and selected outputs.
3. Proof/version links, comments, final decision, and the person authorized to decide.
4. Only the relevant clearance material: talent/asset licence, claims support, territory/use restriction, disclosure decision, and policy.
5. Final channel-specific file, caption, scheduled/published post, disclosure/label state, and publishing authority.
6. Timestamped delay, rework, renders/credits, coordinator time, missed slot, rejected output, or clearance hold; request numbers/ranges, not impressions.
7. Actual tools, plan tier, configuration/integrations, manual reconciliation, spend owner, and the cheapest change they would try first.

Core prompts: “Show the moment work left one system and entered another”; “what was retyped, relinked, or inferred?”; “who could make the decision?”; “would a link, template, integration, contract clause, or SLA have prevented it?”; and “what event in the last 90 days had a dated consequence?”

Advance any hypothesis to Stage 5 only if **at least three independent agencies** show the same narrow handoff in recent artifacts, with recurrence, a concrete consequence, and a failed/insufficient incumbent or process alternative. At least one must identify a reachable champion and economic path. Low cadence, no consequence, or a cheap configuration/process fix closes the hypothesis.

## 10. Implications for Stage 5 selection

Stage 5 should select nothing until interviews clear the gates. If H2 is supported, compare it directly with the existing social system as source of truth. If H3/H4 are supported, keep the question to the minimum high-risk campaign record and protect sensitive legal/talent data. If H7 is supported, document and test the operating rule rather than invent software.

If leading hypotheses are disconfirmed, Stage 5 should explicitly record that the existing stack plus operating discipline is sufficient and stop. Do not broaden into an all-in-one agency platform. The next action is the artifact-led interview set, then re-score using primary evidence.

## Limitations and strongest open questions

- No agency, client approver, legal reviewer, publisher, or HexCoded user was interviewed; no live account, integration, export path, paid plan, or campaign artifact was tested.
- Vendor documentation proves stated capability only. Platform/regulatory material names selected policy constraints; it is not global legal advice, legal sufficiency, or a buyer signal.
- Agency/practitioner reports are directional. They do not establish frequency, spend, market size, willingness to pay, or product-market fit.
- The strongest open questions are whether H2 persists after normal social configuration, whether H3/H4 records are genuinely fragmented on high-risk campaigns, and whether H7 ownership/process explains the delay.

## Change log

- 2026-09-08 — Completed opportunity discovery: mapped 10 narrow handoff hypotheses, incumbent/process alternatives, provisional Stage 0 scores, evidence quality, disconfirmation tests, and an artifact-led interview plan. No opportunity or product was selected; no design, build, deployment, or prototype was created.
