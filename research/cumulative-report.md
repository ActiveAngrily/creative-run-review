# HexCoded Product-Operations Research

## Stage 1 — HexCoded context

**Completed:** 2026-09-07  
**Scope:** Public, verifiable HexCoded product and operating context only. No competitor analysis, product selection, building, or authenticated-account testing.

### Evidence labels

- **Fact** — directly supported by a named source.
- **Inference** — a reasoned interpretation connecting one or more facts; state confidence.
- **Hypothesis** — a testable proposition for later stages.
- **Assumption** — an unverified premise required to proceed; do not present it as evidence.
- **Unknown** — not verified by the public material inspected; absence of evidence is not evidence of absence.

### Current product profile

**Inference — medium confidence.** HexCoded is a two-sided AI creative studio centred on commercial, digital video production: a self-serve product for brands, agencies, creators, and creative teams, plus a supply side of AI, customer-owned, and licensed human actor twins. Its public value proposition is not simply model access; it combines multi-model creation, casting, commercial-rights terms, and a consent-and-payout system for human likenesses.

**Fact — high confidence.** The public site presents four creation entry points: Creative Studio, Talking Actors, Make a custom video, and URL → Ad. It describes Creative Studio as direct access to image and video models for creation, editing, motion, and extension; URL → Ad as turning a product/store link into an ad with a selected actor; the custom-video tool as scripting, casting, and rendering from a plain-language brief; and Talking Actors as selecting a face, entering a script, and generating a video. [Homepage](https://hexcoded.ai/)

**Fact — high confidence.** HexCoded exposes three actor types: generated AI actors, a user/founder's reusable AI twin, and real actors who license their likeness. Real actors are liveness and identity verified, choose allowed/blocked ad categories, can stop future use, and receive earnings for paid uses; already delivered videos remain licensed. [Actor site](https://actors.hexcoded.ai/) · [Actor Licence](https://hexcoded.ai/legal/actor-licence)

**Fact — high confidence.** The customer licence is for paid and organic digital use, websites, and apps; it excludes television, print, outdoor, and other offline uses without a separate agreement. Customers may make light edits but may not re-generate, morph, or re-voice an actor outside HexCoded. [Terms](https://hexcoded.ai/legal/terms)

### Capability map

| Capability | Status | Evidence / boundary |
|---|---|---|
| Multi-model image and video creation | **Fact** | The site advertises 30+ frontier models and publicly lists providers/models across video, image, and edit workflows. The exact number is unstable: a current job listing says 16 models, while the current site says 30+. Treat the catalogue as dynamic, not a fixed promise. [Homepage](https://hexcoded.ai/) · [Pricing](https://hexcoded.ai/pricing) · [Job listing](https://jobs.lever.co/oneimpression/738a8d2e-a51c-4f04-99ac-a91710060a23) |
| Creative Studio | **Fact** | Create, edit, add motion, extend, and switch models mid-project. Logged-in interaction and quality were not tested. [Homepage](https://hexcoded.ai/) · [Pricing](https://hexcoded.ai/pricing) |
| URL → Ad | **Fact** | A user supplies a product/store URL; HexCoded says it reads the link and turns it into an actor-led ad. The extraction, review, and recovery steps are **Unknown**. [Homepage](https://hexcoded.ai/) |
| Custom composer | **Fact** | A plain-language description is intended to produce script, cast, and render in one pass. The degree of user control after generation is **Unknown**. [Homepage](https://hexcoded.ai/) |
| Talking Actors | **Fact** | A user selects an actor, enters a script, and receives video. HexCoded's guide states that short lines and explicit pauses improve performance; it describes customer/founder cloning as a reusable route. [Talking-head guide](https://hexcoded.ai/blog/talking-head-video-without-filming) |
| Actor marketplace and twin operations | **Fact** | Actor discovery, consent receipt, licence, use/category controls, payout dashboard, and stop-new-use mechanism are documented publicly. [Actor site](https://actors.hexcoded.ai/) · [Actor Licence](https://hexcoded.ai/legal/actor-licence) |
| Team / enterprise operations | **Fact** | Team offers pooled credits, unlimited members, shared brand workspace, pooled parallel generation, and central billing. Scale adds custom volume pricing, 4K, usage analytics, SSO/SAML, API access, and forward-deployed creatives. [Pricing](https://hexcoded.ai/pricing) |
| Compliance and data handling | **Fact** | The service has a usage policy, actor-consent workflow, privacy terms, and publisher responsibility for review, ad claims, and applicable AI disclosure. Brand inputs/outputs may be used to improve/train HexCoded models unless the workspace opts out; actor biometrics are excluded from general-model training. [Terms](https://hexcoded.ai/legal/terms) · [Privacy](https://hexcoded.ai/legal/privacy) · [AI-content disclosure](https://hexcoded.ai/legal/ai-disclosure) |
| Node-based workflows, agentic chat, public API/docs, public repositories | **Unknown** | Targeted public-site and web searches did not yield verifiable evidence. Scale advertises API access, but no public API reference, SDK, or integration documentation was found. Do not assume any of these capabilities exist or do not exist. |

### Users and workflows

| Role / segment | Verifiable workflow | Product-operations implication |
|---|---|---|
| Brand, creator, or creative professional | Choose a creation route; provide a URL, reference, template, or brief; cast an actor; generate; review; publish digitally. **Fact**: inputs, casting, and output intent are documented. **Unknown**: exact review, versioning, approval, and publishing states. | The immediate outcome is a publishable creative, not a raw model output. Evidence for collaboration and approval pain belongs in Stage 2. |
| Agency / team | Share a workspace and credit pool, generate in parallel, and use central billing. **Fact**. | Team-plan primitives support multi-user production, but roles, approval controls, auditability, and client handoff are **Unknown**. |
| Enterprise / high-volume brand | Use Scale pricing, volume credits, analytics, SSO/SAML, API access, and possibly a forward-deployed creative. **Fact**. | **Inference — medium confidence:** HexCoded is willing to supplement product gaps with hands-on service for high-value accounts. |
| Licensed actor | Onboard with face/voice materials; complete liveness/identity verification and licence; select acceptable ad categories; appear in the library; track earnings; stop future use if needed. **Fact**. | This is a separate operational workflow with sensitive biometric, rights, payout, and revocation requirements; it should not be collapsed into the brand workflow. |
| Forward-deployed creative | Turn a vague client brief into short-form work in HexCoded, manually patch gaps, maintain the client relationship, and feed friction back to engineering. **Fact** from the employer's public job posting; applicability to all accounts is **Unknown**. [Forward-Deployed Creative listing](https://in.linkedin.com/jobs/view/forward-deployed-creative-at-one-impression-4445333968) | **Fact:** the service-assisted role is publicly documented. **Unknown:** which accounts receive it, its cadence or economics, and whether it validates any product need. |

### Product and operating signals

- **Fact — high confidence.** Pricing is credit-based and billed only for successful renders. India monthly plans shown at capture were Basic ₹1,180/800 credits, Starter ₹5,900/4,000, Pro ₹11,800/9,000, and Max ₹23,600/20,000; Team is ₹5,900 per seat with pooled credits; Scale is custom. Plan credits reset monthly, while top-ups are valid for 12 months. [Pricing](https://hexcoded.ai/pricing)
- **Fact — high confidence.** The public legal and privacy material identifies a concrete operating stack: payment partners, AWS/AWS Rekognition, ElevenLabs, Didit KYC, model vendors, Clerk/Google auth, PostHog/Sentry, and Meta measurement. These are service processors, not evidence of customer-facing integrations. [Privacy](https://hexcoded.ai/legal/privacy)
- **Fact — high confidence.** The official blog is a public learning/update channel with model, prompt, production, elements, and product categories. At capture, the product category surfaced a Sep. 6 guide to talking-head creation; no chronological product changelog was publicly visible. [Blog](https://hexcoded.ai/blog) · [Product category](https://hexcoded.ai/blog/category/product)
- **Fact — medium confidence.** HexCoded links to official Instagram, LinkedIn, and Discord community surfaces from its footer. Their public posts and community discussion were not analysed because no accessible, attributable material was found during this stage.
- **Fact — high confidence.** A current official Lever listing places HexCoded in One Impression's Founders' Office, describes a small Gurugram-based remote team, instructs an intern to make real Creative Studio videos, learn model strengths/costs/failure modes, and bring direct user language back to the team. [AI Generalist Intern listing](https://jobs.lever.co/oneimpression/738a8d2e-a51c-4f04-99ac-a91710060a23)

### Strategic hypotheses for later validation

1. **Hypothesis — medium confidence.** The defensible wedge is consented, commercially licensable human likeness combined with ad production, rather than undifferentiated access to generative models. Validate by asking brand/agency buyers whether clearance and actor consistency change purchase or workflow decisions.
2. **Hypothesis — medium confidence.** Model selection, cost, and output reliability are meaningful workflow burdens. HexCoded's aggregation and the team's stated emphasis on knowing where models fail suggest this; quantify the burden and value of guidance in Stage 2.
3. **Hypothesis — low-to-medium confidence.** The company is expanding from self-serve ad creation toward higher-craft narrative/short-drama and service-assisted production. Its blog and GTM hiring mention short drama/film, while the core legal/product pages remain ad-focused. Establish the primary commercial priority before treating this as strategy.
4. **Hypothesis — medium confidence.** The forward-deployed-creative role is an intentional learning loop: service delivery reveals product gaps that can be turned into roadmap input. Validate through interviews and operating evidence; do not assume it is scalable or permanent.

### Evidence log

| Source | Type / quality | What it supports | Limitation |
|---|---|---|---|
| [HexCoded homepage](https://hexcoded.ai/) — HexCoded, accessed 2026-09-07 | First-party product page — high for stated capabilities | Positioning, toolset, actor types, models, languages, output formats | Marketing claims; no authenticated-use evidence |
| [Pricing](https://hexcoded.ai/pricing) — HexCoded, accessed 2026-09-07 | First-party commercial page — high for displayed plan terms at capture | Plans, credits, team/Scale features, model switching | Dynamic pricing; testimonials, ratings, customer/video totals are vendor claims and were not used as independent proof |
| [Terms](https://hexcoded.ai/legal/terms) and [Privacy](https://hexcoded.ai/legal/privacy) — HexCoded, updated 2026-08-03; [Actor Licence](https://hexcoded.ai/legal/actor-licence) — HexCoded, updated 2026-07-07 | First-party legal/policy material — high for declared rules | Licence boundaries, consent, payouts, data processing, publisher obligations | Not legal advice; operational practice was not independently audited |
| [Actor site](https://actors.hexcoded.ai/) — HexCoded, accessed 2026-09-07 | First-party marketplace page — high for stated actor journey | Actor onboarding, categories, dashboard, earnings, future-use revocation | Promotional; payout volume and actor experience unverified |
| [Talking-head guide](https://hexcoded.ai/blog/talking-head-video-without-filming) — Poojan Advani, 2026-09-06 | First-party editorial guidance — medium/high for stated workflow advice | Actor routes, reuse, apparent constraints of generated performances | Editorial guidance, not controlled performance testing |
| [Official Lever job listing](https://jobs.lever.co/oneimpression/738a8d2e-a51c-4f04-99ac-a91710060a23) — One Impression, accessed 2026-09-07; date not displayed | First-party recruiting source — high for role intent at posting time | Team operating context, model-guidance need, direct-user research emphasis | Job descriptions can be aspirational and time-limited |
| [Forward-Deployed Creative listing](https://in.linkedin.com/jobs/view/forward-deployed-creative-at-one-impression-4445333968) — One Impression via LinkedIn, accessed 2026-09-07 | Employer job posting surfaced by LinkedIn — medium | Hands-on service workflow and product-feedback loop | Third-party surface; not proof of all-customer behaviour |

### Limitations and unresolved questions

- No account was created and no customer, actor, or user was interviewed. Activation, output quality, render reliability, collaboration, retention, and willingness to pay are unverified.
- The public materials do not establish node workflows, agentic chat, public API ergonomics, external integrations, repository activity, a detailed release history, or the internal product roadmap.
- The current model count is inconsistent across public sources and will change; record supported capabilities, not a permanent inventory.
- Actor privacy and rights claims describe declared policy; they do not independently verify consent operations or legal sufficiency in every jurisdiction.
- The homepage's customer volume, output count, rating, and testimonial claims remain vendor assertions and should not be carried forward as market evidence without corroboration.

### Stage 1 handoff (completed)

Proceed to Stage 2 without selecting a product opportunity. Test the four strategic hypotheses against video editors, designers, filmmakers, agencies, and content/social teams; capture their real creation, review, approval, actor/licensing, model-selection, and handoff workflows. Prioritise direct evidence over public claims.

### Change log

- 2026-09-07 — Created the cumulative report and completed Stage 1 product-context research.
- 2026-09-07 — Completed Stage 2 public user/workflow research. The detailed evidence table, source-quality notes, workflow maps, segment comparison, and disconfirmation tests are in `research/stages/stage-02-user-research.md`.

## Stage 2 — User and workflow research

**Completed:** 2026-09-07  
**Scope:** Public evidence about video editors, designers, filmmakers, creative agencies, and content/social-media teams. No product was selected; no competitor analysis, account testing, or implementation was performed.

### Current user/workflow conclusion

**Inference — medium confidence.** The strongest candidate segment for later validation is **creative agencies that repeatedly produce short-form branded video and social campaign variants for clients, with external approval before publishing**. The fit is directional: recurring production/distribution pressure, agency AI use in concepts and storyboards, and repeated review/version/approval friction converge with HexCoded’s documented digital-commercial, agency/team positioning. This is a segment choice for subsequent research—not a product decision, willingness-to-pay claim, or a conclusion that agencies lack adequate current tools.

### Workflow findings

- **Fact — medium confidence.** Video/content teams show recurring production cadence and use AI most often in planning, scripting, ideation, captions, dubbing, and selected asset work. Wistia’s 2026 report surveyed 900+ professionals and analyzed more than 13 million videos; 76% of its sample made at least one video monthly. Reliability, ethics, privacy, and training remain AI hesitations. [Wistia, *State of Video Report: Video Marketing Statistics for 2026*](https://wistia.com/blog/video-marketing-statistics)
- **Inference — medium/high confidence.** The recurring operational burden is not only creation; it is holding a reviewer, comment, decision, and approval state to the right asset version. Editor, design, and marketing communities report sequential review chains, manual cut naming, notes split across messaging/file-sharing tools, and delayed client approvals. These are qualitative, self-selected reports, not prevalence estimates. [Editor review workflow](https://www.reddit.com/r/editors/comments/11g4sqo/efficient_workflows_for_getting_feedback_by/), [editor versioning discussion](https://www.reddit.com/r/editors/comments/1fpl8fw/how_do_you_manage_versioning_between_internal/), [designer feedback forum](https://www.reddit.com/r/web_design/comments/1mmew8w/how_do_you_handle_client_feedback_approvals/), [agency approval-delay discussion](https://www.reddit.com/r/marketing/comments/qulbox/client_ghosting_us_on_content_approval/)
- **Fact — medium confidence.** Agency AI use is substantial but externally published AI work remains constrained. A survey of leaders at 50+ UK/EMEA in-house agencies reported 78% using GenAI and 70% using it for concepts/options/visualization, but only 28% using GenAI-created assets in live external work; copyright/IP was the leading concern. [Creative Review / IHALC and Adobe survey coverage](https://www.creativereview.co.uk/how-in-house-agencies-are-adopting-ai/)
- **Fact — medium confidence.** Interviews with 25+ agencies describe AI as a visual-concept, storyboard, research, and communication aid that still needs human refinement; they also report prompt-control and visual-consistency failures. [Creative Boom agency interviews](https://www.creativeboom.com/insight/special-report-how-design-agencies-are-using-ai-in-2024/)
- **Fact — medium confidence.** In a 16-person qualitative study of professional automotive designers, participants reported need for visual/multimodal inputs, iterative-workflow support, and finer control over prompts and outputs. [Park et al., NordiCHI 2024](https://doi.org/10.1145/3679318.3685370)
- **Fact — medium confidence.** Among 146 independent documentary filmmakers surveyed in 2025, intended GenAI use centered on proposals, research, and previsualization, while inaccurate representation and audience trust were leading concerns. [IDA et al., *Filmmaker Survey: Generative AI and Documentary Film*](https://www.documentary.org/sites/default/files/2025-06/%5BPreliminary%20Findings%5D%20Filmmaker%20Survey_Generative%20AI%20and%20Documentary%20Film.pdf)
- **Fact — medium confidence.** In an open survey of 879 marketing/SEO professionals, 87% reported AI-assisted content creation, 97% edited/reviewed AI content, and 80% manually checked accuracy. This supports a human-QA requirement in its sampled context, not a universal creative-production rate. [Ahrefs, *The State of AI in Content Marketing*](https://ahrefs.com/blog/wp-content/uploads/2025/06/AI-in-Content-Marketing-by-Ahrefs.pdf)

### Repeated pain patterns

1. **Decision flow is production work:** feedback must be tied to the right asset and consolidated into an executable choice.
2. **Approval latency threatens delivery:** sequential stakeholders and unclear ownership create delay even where assets can be produced quickly.
3. **AI accelerates exploration more reliably than finalization:** human review remains necessary for quality, brand, craft, factuality, rights, and disclosure.
4. **Control and continuity create repeat loops:** prompts, references, visual consistency, and output selection need iterative management.
5. **Existing workarounds are fragmented:** review tools, PM boards, manual naming, contracts, deadlines, reminders, and coordinators are used together. This indicates a gap but does not prove a new product should be built.

### Evidence quality and limitations

- Strongest Stage 2 evidence: disclosed-sample surveys (Wistia, IDA, Ahrefs), a peer-reviewed qualitative designer study, and multi-agency interviews. All retain population, sponsor, self-report, or narrow-domain limitations.
- Community posts provide direct workflow detail and paid-tool/workaround signals but are anonymous, self-selected, and sometimes tool-promotional. They corroborate patterns; they do not establish market size, current prices, or willingness to pay.
- No primary interviews, observation, project artifacts, internal workflow metrics, or HexCoded account testing were conducted. The critical next test is whether the candidate agencies find this problem frequent and consequential enough to change behavior or budget.

### Open questions

- Is the root bottleneck a missing tool, or weak decision ownership/process that a contract, deadline, and account lead already solve?
- Is AI used beyond concepts in approved commercial work, and do rights/consent/brand safety materially influence purchase?
- Can HexCoded fit a team’s source-of-truth workflow without integrations, media management, role controls, or audit functions that its public materials do not establish?
- Are content/social teams a higher-frequency, more reachable segment, or is their need mostly text/calendar governance rather than commercial video?
- What concrete evidence would disprove the segment conclusion? Existing stacks resolving the issue cheaply, AI never reaching production, no agency budget/control, or agencies naming another segment as more urgent.

### Recommended next action

Proceed to Stage 3 competitor research, limited to the workflow categories surfaced here (creation, asset/reference context, review/approval, rights/consent, and publishing handoff). Do not select a product. Follow it with 8–12 structured interviews across agency creative/production leads, account leads, editors, client approvers, and social/content leads using recent-project artifacts and time-to-approval data.

## Stage 3 — Competitor and adjacent-workflow research

**Completed:** 2026-09-07  
**Scope:** Public workflow coverage relevant to agencies repeatedly producing short-form branded video and social campaign variants. No account testing, primary interviews, product selection, or implementation.

### Cumulative finding

**Inference — medium confidence.** The Stage 2 candidate workflow is served by a chain of documented specialist layers rather than an obvious vacant category: shared AI creation/context (Runway, LTX Studio, Firefly/Creative Cloud, Kive), visual review and approval (Frame.io, Ziflow), and downstream scheduling/publishing (Canva, Sprout Social). This is evidence against a generic all-in-one workflow thesis. It does not establish that the layers interoperate well, solve client decision ownership, are affordable for a target agency, or leave a persistent enough gap to purchase.

### Workflow-coverage update

| Workflow need surfaced in Stage 2 | Existing documented coverage | Residual question |
|---|---|---|
| Brief/reference intake and reusable creative context | Runway Agent/projects, LTX script/concept/image/video entry, Firefly Boards/linked documents and Creative Cloud Libraries, Kive boards/library, Canva Brand Kits. | Does relevant prompt/reference context survive into the actual client decision, or is a current board/library sufficient? |
| AI creation and campaign-variant iteration | Runway multimodel creation/Agent, LTX storyboard/timeline/flows, Firefly generation, Kive/Canva generation. | Is quality-control/retry cost material once credits, human edits, and acceptable-output rates are measured? |
| Versioning, review, and approval | Frame.io version stacks/comparison/time-coded review; Ziflow version comparison, staged routing, guest reviewers, workflows, and audit; Canva/Sprout approvals at the design/post layer. | Which campaign risk/cadence requires specialist proofing rather than a named owner plus existing tools? |
| Rights, consent, and brand safety | Firefly Content Credentials and a stated commercial-safety approach; Frame.io access controls/watermarks; Ziflow decision/checklist/audit evidence; LTX commercial-use terms. | These are different controls. Does an agency need a campaign-level record of talent consent, claims, licence, provenance, usage, or disclosure that the current stack does not provide? |
| Client handoff/publishing | Frame.io/Ziflow external review; Canva Content Planner and Sprout calendar/approval/direct publishing. | Is the actual break between approved creative and authorized channel post, or is the social tool already the source of truth? |
| Team collaboration/integrations | Runway projects/connectors, Adobe ecosystem, Ziflow API/integrations, Sprout asset imports and permissions. | Would a connector, template, naming rule, or client SLA solve the observed failure more cheaply than a new product? |

### Evidence and pricing note

- **Fact — high confidence for stated capabilities and public terms.** Runway documents shared projects, an Agent, and a new Team plan with pooled credits; LTX documents brief-to-storyboard inputs and commercial tiers; Adobe documents Boards/Libraries/Content Credentials; Kive documents shared boards/library; Frame.io documents comparison, reviewer links, roles, and watermarks; Ziflow documents multi-stage proof workflows/version comparison/integrations; Canva documents Brand Kits/approvals/scheduling; and Sprout documents external approvals, asset imports, and direct publishing. See the source-by-source evidence table in `research/stages/stage-03-competitors.md`.
- **Inference — medium confidence.** Pricing shapes the operating model: generation is credit-metered (Runway, LTX, Kive), proofing permits no-cost external reviewers but charges internal governance/operator capacity (Frame.io, Ziflow), and social publishing can be charged per seat with external approval at a higher plan (Sprout). Do not compare headline prices as equivalent stack costs.
- **Evidence quality limitation.** Most Stage 3 sources are vendor documentation, strong only for stated features/terms. One independent LTX hands-on review and bounded G2/community reports provide qualitative signals; none proves prevalence, ROI, legal sufficiency, willingness to pay, or adoption quality.

### Stage 3 effect on the research direction

1. **Refined, not confirmed:** approval/version friction is not an empty market space. Frame.io and Ziflow are concrete incumbent alternatives; later research must identify why they, existing suites, and process controls fail on a particular campaign handoff.
2. **Preserved:** Stage 2's segment remains a candidate, not a product decision. The Stage 2 pain themes remain plausible but unvalidated by representative agency evidence.
3. **Raised threshold:** separate creative context, decision/version state, publishing authorization, and rights/consent/claims evidence. Do not use “brand safety” as a catch-all.
4. **Disconfirmation first:** accept that an existing connector, configured review workflow, approval SLA, or social calendar could resolve the issue with no new product.

### Stage 3 handoff

Proceed to Stage 4 opportunity discovery without designing a product. Generate only hypotheses tied to one repeated campaign handoff, a named incumbent stack, a measurable consequence, and a reason existing tools/process cannot resolve it. Before selecting any opportunity, conduct the Stage 2/3 interview tests with recent project artifacts: brief/reference, prompt/model/output, proof/version, approver, clearance evidence, final channel post, delay/rework, and current spend.

### Change log

- 2026-09-07 — Completed scoped Stage 3 competitor and adjacent-workflow research. The detailed landscape, coverage matrix, pricing/access analysis, 25-item evidence table, gaps/overlaps, and Stage 4 gates are in `research/stages/stage-03-competitors.md`. No product was selected and no implementation began.

## Stage 4 — Opportunity discovery

**Completed:** 2026-09-08
**Scope:** Narrow, testable handoffs for creative agencies that repeatedly deliver short-form branded video/social variants. Public desk research only; no product selection, account test, interview, design, or implementation.

### Cumulative finding

**Inference — medium confidence.** The strongest remaining questions are not broad-suite gaps. They are (1) whether the exact approved creative can be reliably bound to the authorized social release, (2) whether high-risk campaigns require manual reconciliation of discrete clearance evidence, and (3) whether material claims/restrictions survive into derivatives. Each competes with an existing social/proofing tool, integration, template, or operating rule. No primary evidence yet establishes recurrence, a buyer, or willingness to pay.

**Process-first finding — medium confidence.** An absent client decision owner, late legal involvement, or no approval deadline may explain approval latency more directly than missing software. Treat the approval-owner/SLA test as a valid outcome: if it resolves the delay, do not create a product premise.

### Evidence update

- **Fact — high confidence for stated scope.** C2PA says provenance can be incomplete and does not determine truth, accuracy, or factuality. Meta's 2026 update and TikTok's current help describe channel-specific AI-information/labeling mechanisms for relevant content. These facts distinguish provenance/disclosure from clearance, claims substantiation, consent, and publishing authorization; they do not prove an agency gap. [C2PA](https://spec.c2pa.org/specifications/specifications/2.3/explainer/_attachments/Explainer.pdf) · [Meta](https://about.fb.com/news/2025/02/gen-ai-transparency-metas-ads-products/) · [TikTok](https://support.tiktok.com/en/using-tiktok/creating-videos/ai-generated-content)
- **Directional evidence only.** Recent practitioner reporting describes some agencies/clients adding AI terms to creator arrangements, while an in-house study describes legal approval outlasting rapid generation. Neither is a representative sample of the target agency segment. [Digiday](https://digiday.com/marketing/how-generative-ai-is-changing-creator-contracts-to-prevent-brand-and-copyright-risks/) · [mediasense/WFA](https://www.media-sense.com/reports/in-housing-ai/)

### Opportunity status and next gate

Ten hypotheses were generated and scored with the Stage 0 framework in `research/stages/stage-04-opportunities.md`. H2 (approved creative → authorized post), H3 (higher-risk clearance state), and H4 (restrictions through derivatives) are validation priorities only. H1/H5/H6/H9 require measurement first. H7 is process-first; H8 (generic reference library) and H10 (duplicate actor-rights system) are deprioritized.

Before Stage 5, conduct 8–12 artifact-led interviews across agency production/creative operations, account, editor/AI producer, social publishing, and client brand/legal/rightsholder roles. Require a recently shipped and delayed/rejected campaign with: brief/reference; prompt/model/output where relevant; proof/version; named approver; clearance evidence; final channel post; delay/rework/retry cost; stack/configuration; and budget owner. Advance a hypothesis only if at least three independent agencies show the same handoff, recurrence, consequence, and failed incumbent/process alternative, with one reachable economic path.

### Stage 4 limitations

- No primary interviews, campaign artifacts, account tests, integration tests, or live publishing flows were observed.
- Vendor/product/policy documentation establishes stated behavior, not adoption, sufficiency, legal adequacy, or demand. Practitioner reporting cannot establish prevalence, spend, market size, willingness to pay, or product-market fit.
- The strongest open questions are whether H2 survives normal social-system configuration, whether H3/H4 are genuinely fragmented on high-risk work, and whether H7's decision-owner/SLA rule explains the observed delay.

### Change log

- 2026-09-08 — Completed Stage 4 opportunity discovery. Added a 10-hypothesis handoff map, incumbent/process analysis, provisional ranking, evidence table, disconfirmation tests, and interview-validation gates in `research/stages/stage-04-opportunities.md`. No product was selected and no prototype was built.

## Stage 5 — Opportunity selection

**Completed:** 2026-09-08  
**Outcome:** H2 provisionally selected under a lower, reversible 6/6 gate; strict validation remains 0/13.  
**Scope:** Reassessment of H1–H10 against the Stage 0 scoring framework and critical gates. No new interviews, artifacts, account tests, product definition, prototype, build, or deployment.

### Decision and current recommendation

**Fact — high confidence.** The workspace contains no direct Stage 4 interview record or campaign artifact set. Stages 2–4 explicitly record no primary interviews or project artifacts. The required threshold—8–12 artifact-led interviews and the same narrow handoff shown by at least three independent agencies with recurrence, consequence, an insufficient incumbent/process alternative, and one reachable economic path—has not been met.

**Decision.** Select H2—approved creative → authorized post—as one **provisional research bet**, not a validated opportunity. The choice rests on its narrow boundary, documented adjacent workflow, low-sensitivity synthetic testability, and cheap disconfirmation—not ranking alone. H3 and H4 remain conditional backups; H7 remains the mandatory process-first comparator. Existing stack plus operating discipline remains the default competing explanation.

### Evidence readiness and gate result

| Gate | Stage 5 finding | Result |
|---|---|---|
| Recent user/project evidence | 0 direct interviews and 0 qualifying recent campaign artifact sets in the workspace | **Failed** |
| Recurring handoff with material consequence | No H1–H10 recurrence count or dated target-agency incident | **Failed** |
| Reachable user, champion, and economic path | Stage 4 roles remain assumptions; no buyer or budget owner was reached | **Failed** |
| Existing alternatives shown insufficient | No configured incumbent stack or process rule was observed/tested | **Failed** |
| Safe data, rights, and permissions | No participant-approved access or minimum-data handling test | **Unknown; not passed** |
| First useful outcome testable without a complete product | Manual/process tests are defined, but participant access and value are unverified | **Conditional; not passed** |

The strongest available evidence remains directional Stage 2 user/workflow research, official Stage 3 incumbent documentation, and Stage 4 policy/standards and practitioner reporting. It can order research, but cannot establish demand, market size, willingness to pay, or product-market fit.

### Final conditional ranking

Scores are unchanged from Stage 4 because no new primary evidence exists. They are research-priority scores, not selection scores.

| Rank | Hypothesis | Weighted /100 | Confidence | Stage 5 disposition |
|---:|---|---:|---|---|
| 1 | H2 Approved creative → authorized post | 71 | Low | Provisionally selected for a no-build comparison; not validated |
| 2 | H7 Decision owner/SLA | 67 | Low | Test operating rule; process-first disposition has medium confidence; no software premise |
| 3= | H3 Higher-risk clearance state | 60 | Low | Conditional backup 1 |
| 3= | H4 Claims/restrictions through variants | 60 | Low | Conditional backup 2 |
| 5 | H5 Retry-cost attribution | 59 | Low | Defer pending sprint-level measurement |
| 6 | H1 Decision-ready generation context | 58 | Low | Defer pending proof that context changes decisions |
| 7 | H6 Client AI-policy intake | 55 | Low | Defer; test contract/kickoff rule first |
| 8 | H9 Disclosure/provenance at publication | 51 | Low | Defer; test actual channel requirement and native path |
| 9 | H10 Actor licence visibility on reuse | 50 | Low | Reject duplicate premise; deferral has medium confidence; reopen only on cross-system failure |
| 10 | H8 Generic reference-library lock | 47 | Low | Reject standalone premise; deferral has medium confidence due incumbent coverage |

No score reaches the Stage 0 75-point prioritization band, and every candidate fails at least one critical gate. Detailed evidence notes beside every criterion, the control-boundary matrix, serious-opportunity role reassessment, alternatives, and disconfirmation tests are recorded in `research/stages/stage-05-selection.md`.

### Alternatives and tradeoffs

- **H2:** Canva/Sprout as release source of truth, asset imports, permissions, locked asset/version ID, and a release check may already solve the handoff.
- **H7:** named approver/delegate, SLA, revision cap, and escalation directly test whether authority—not software—is the bottleneck.
- **H3:** legal/DAM records, a risk-tiered minimum checklist, Ziflow audit, and a named clearance owner may be sufficient.
- **H4:** a material-change rule plus current proof/social fields may trigger the required reapproval.
- **H1/H5/H6/H8/H9/H10:** existing boards, usage exports, approved-tool registers, native disclosure, licence links, templates, and operating rules remain valid competitors.

**Inference — medium confidence.** H2 is the best next research question because it is narrow and can be traced with existing release artifacts. Its largest tradeoff is overlap with downstream systems. H3 has higher possible consequence but lower cadence and greater legal/privacy risk. H4 is easier to bound but may reduce to a process rule. H7 provides the cheapest disconfirming test.

### Provisional Stage 6 authorization

Stage 6 may define only a reversible Authorized Release Record template/checklist for synthetic comparison. Do not begin a software build or commercial work. Advance beyond the provisional definition only if at least three independent agencies later show the same failure, recurrence, dated material consequence, incumbent/process insufficiency, safe access, and one reachable economic path. If the existing stack plus operating discipline works, stop without a product.

### Stage 5 limitations

- Evidence outside the supplied repository is unknown and was not counted.
- Published surveys/interviews and practitioner accounts are not substitutes for the required direct artifact-led cases.
- Vendor documentation establishes stated capability only; actual configuration, integration, price paid, adoption, and sufficiency remain unknown.
- Rights/consent, claims substantiation, provenance, disclosure, publishing authority, and version decisions remain separate controls.
- No claim is made about market size, willingness to pay, adoption, retention, or product-market fit.

### Change log

- 2026-09-08 — Completed Stage 5 as an evidence-gated no-selection decision. Recorded evidence readiness, serious-opportunity reassessment, weighted scoring, gate failures, two conditional backups, rejected/deferred alternatives, disconfirmation conditions, and the validation step required before Stage 6.
- 2026-09-08 — Added a lower 6/6 provisional gate, selected H2 as one reversible no-build research bet, and preserved the strict 0/13 validation result.

## Stage 6 — Product definition gate review

**Status:** Complete — provisional minimum H2 definition; no validated product or build authorization  
**Reviewed:** 2026-09-08  
**Evidence-validation rerun:** 2026-09-08 11:25 IST — 0 of 13 gate conditions passed  
**Scope:** Recheck the Stage 5 evidence gate and record a template-level product-definition boundary. No software feature set, architecture, roadmap, production prototype, market-size claim, willingness-to-pay claim, buyer-demand claim, or product-market-fit claim is included.

### Decision and evidence basis

**Fact — high confidence.** No qualifying primary evidence has been added to the supplied workspace since Stage 5. It still contains 0 direct interviews, 0 recent campaign walkthroughs, 0 linked end-to-end artifact traces, 0 configured-stack or process-rule tests, and 0 verified buying paths.

**Fact — high confidence.** Stage 5's strict gate selected no validated opportunity. A later lower-bar amendment provisionally selected H2; H3 and H4 remain conditional backups, and H7 remains the mandatory process-first comparator.

**Inference — high confidence.** The strict evidence gate remains uncleared, so the target user, consequence, buyer, and value remain hypotheses or unknowns. Stage 6 defines only a reversible test boundary and preserves those labels.

**Decision.** Define an **Authorized Release Record** as the minimum no-build H2 boundary: proof/version ID, exact caption/channel, creative decision and approver, publishing authority, scheduled-post ID/time, final-post link, and separate clearance links only where applicable. Preserve **existing stack plus operating discipline is sufficient** as the default comparator and stop if it is equivalent.

### Full workspace evidence audit

**Fact — high confidence.** The 2026-09-08 11:25 IST rerun enumerated the whole workspace and read or inspected every file. Excluding `.git` internals, there were 15 files in three directories: all were Markdown research/control documents, with 0 symlinks and 0 non-Markdown files. No interview, transcript, recording, observation note, campaign artifact, screenshot, export, spreadsheet, experiment log, customer conversation, account test, or configuration record was present.

**Fact — high confidence.** Only `research/cumulative-report.md`, `research/handoff.md`, and `research/stages/stage-06-product-definition.md` were newer than the prior Stage 5 file at the audit snapshot. They contain status and decision synthesis only. Git has 0 tracked files and no commits; Codex checkpoint trees list only the same 15 research paths. The external pasted-text attachment contains instructions, not evidence.

**Fact — high confidence.** The detailed inventory in `research/stages/stage-05-selection.md` records every present path's audit-snapshot modification time, provenance/type, filesystem owner, and evidence limitation, plus every absent primary-artifact class. Filesystem ownership does not establish research authorship, participant permission, rights ownership, or evidence provenance.

**Fact — high confidence.** All 13 gate conditions failed or were not passed. Evidence outside the workspace remains **Unknown**; the audit establishes absence only from the supplied workspace.

**Decision.** Keep the strict evidence gate uncleared while permitting the single provisional H2 definition under the lower 6/6 selection gate.

### Evidence still required

| Requirement | Current state | Evidence needed to pass |
|---|---|---|
| Direct and recent cases | **Fact:** none in the workspace. | 8–12 artifact-led interviews across the Stage 4 agency/client roles, using work shipped in the prior 90 days; include at least two Frame.io/Ziflow users and at least two Canva/Sprout or comparable social-system users. |
| Repeated narrow handoff and consequence | **Fact:** no qualifying H1–H10 case or dated target-agency consequence. | The same failure in recent artifacts from at least three independent agencies, with recurrence and measured rework, chase time, delay/missed slot, rejected output, generation cost, or clearance hold. |
| End-to-end proof | **Fact:** no linked release/clearance trace. | Brief/reference; prompt/model/output where relevant; proof/version and decision; authorized approver; exact asset/caption; final post and publisher; timestamps; and only applicable rights, consent, claims, provenance, and disclosure records. |
| Incumbent/process insufficiency | **Fact:** untested. | Actual stack, plan, configuration, integrations, and manual work; a normal source-of-truth configuration; and H7's named approver/delegate, SLA, revision cap, and escalation on comparable work. |
| Roles and economic path | **Fact:** Stage 5 mappings remain assumptions. | Verified primary user, champion, buyer, approver, beneficiary, budget owner, and at least one reachable path to authorize a change. |
| Safe access | **Unknown:** no participant protocol was tested. | Owner-approved minimum access, redaction, purpose, permissions, retention, and deletion controls. |
| First useful outcome | **Hypothesis:** no-build tests are specified but unobserved. | A participant-run operating test that produces a useful decision or measurable improvement without a complete product. |

Evidence held outside the supplied workspace is **Unknown** and cannot clear the gate until added with provenance.

### Optional strict-validation evidence plan

The detailed plan remains in `research/stages/stage-05-selection.md` §15.6 if the project later seeks validated market evidence. The researcher has declined external recruitment for the present path, so it is not a prerequisite for the synthetic no-build comparison.

For each artifact or observed-only record, capture its path or screen-share status, date/timestamp, source system and export method, provenance, owner, supplier, permissions, redactions, completeness, retention/deletion rule, and limitation. Observe both campaigns end to end, record every system boundary and manual action, quantify consequences, and keep incidents separate from near-misses.

If strict validation is later pursued, test H2 first using the configured social source of truth and locked asset/version/caption/authority record; test H7 next using a named approver/delegate, deadline, revision cap, reminders, and escalation. Investigate H3/H4 only under their preserved conditions.

### Product boundary and alternatives

No segment, user, consequence, buyer, or budget owner is validated. The only authorized shape is a reversible Authorized Release Record template/checklist for synthetic comparison; no software, agent, service offering, integration design, architecture, backlog, roadmap, or production prototype is authorized.

| Option | Stage 6 disposition |
|---|---|
| New product | Not authorized; H2 is provisional only. |
| Existing stack configuration | Default comparator; test one release source of truth and normal incumbent settings first. |
| Process/SLA change | Mandatory H7 comparator; retain it and reject software if it resolves delay. |
| Contract or approval-rule change | Test permitted-tools, decision-authority, release, and material-change rules on comparable work. |
| Template/checklist | Selected first shape: test the minimum H2 release fields against native configuration and H7. |
| Integration/connector | Consider only after a traced two-system failure survives configuration and process tests. |
| Service-assisted workflow | May be used as a bounded, authorized learning method; no scalable service or product demand is inferred. |
| No-build | Valid final outcome if alternatives suffice or the evidence threshold is not met. |

Creative context, decision/version state, publishing authorization, rights/consent, claims substantiation, provenance, and disclosure remain separate controls. The template stores only core decision/version and publishing-authority fields; other controls remain separate links where applicable.

### Validation, kill conditions, and Stage 7 implication

Stage 6 is complete at the provisional-definition level. The strict interview/artifact threshold remains required before any build, launch, buyer, demand, willingness-to-pay, or product-market-fit claim.

Close H2 if the configured social source of truth or a release rule binds the exact approved version, caption, authority, and post. Reject H7 as software if named ownership and SLA reduce delay. Close H3 if legal/DAM/checklist evidence is accepted and retrievable without material reconciliation; close H4 if current fields plus a material-change rule reliably trigger reapproval. Stop any path on isolated or immaterial cases, unsafe access, an unreachable economic path, incumbent preference, or inability to test value without the full product.

Stage 7 may plan only a three-scenario synthetic/tabletop comparison of native configuration, H7 plus a checklist, and the Authorized Release Record. If the record offers no clear distinction, record **existing stack plus operating discipline is sufficient** and stop. Production engineering, launch, sales, pricing, and roadmap planning remain blocked.

### Change log

- 2026-09-08 — Executed Stage 6 as a gate review. The gate remains uncleared, so no product was defined. Recorded missing evidence, scope and control boundaries, alternatives, validation and kill conditions, risks, and the condition for Stage 7.
- 2026-09-08 — Completed a thorough full-workspace evidence-validation rerun. Verified 15 Markdown-only research/control files and no primary evidence corpus, recorded 0 of 13 gate conditions passed, added the concrete recruitment/artifact/observation/incumbent-test plan, and kept Stage 6 and Stage 7 blocked.
- 2026-09-08 — Adopted a lower 6/6 provisional-selection gate, selected H2 as a reversible research bet, and completed its minimum Authorized Release Record definition. The strict gate remains 0/13; no primary evidence, buyer demand, willingness to pay, product-market fit, build, or launch is claimed. Stage 7 is limited to a synthetic alternative comparison.
