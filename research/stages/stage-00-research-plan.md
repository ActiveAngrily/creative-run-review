# Stage 0 — Research Plan

Status: Complete

This stage defines how HexCoded product-operations research will be conducted. It contains no deep research, competitor analysis, or product implementation.

## 1. Core research questions

1. Which recurring, costly, or risky problems do the target users experience in product operations?
2. Who experiences each problem, who owns it, and who can approve or pay for a solution?
3. How do users solve the problem today, and where do current workflows break down?
4. What evidence shows that the problem is frequent, urgent, and important enough to change behavior or budget?
5. Where could HexCoded create a materially better outcome through software, automation, guidance, or a combination?
6. What is the smallest useful intervention: feature, workflow, agent, template, companion tool, or standalone product?
7. What constraints affect adoption: trust, privacy, security, integrations, procurement, skills, or organizational change?
8. What evidence would validate, weaken, or falsify each leading opportunity?

## 2. Target user groups

Research should distinguish the following roles rather than treating “product teams” as one user:

- Product leaders and heads of product: own outcomes, prioritization, and budget.
- Product managers: coordinate discovery, decisions, roadmaps, launches, and stakeholder communication.
- Product operations and program managers: maintain systems, processes, reporting, rituals, and cross-functional coordination.
- Designers and researchers: generate and interpret customer insight, concepts, and usability evidence.
- Engineers and technical leads: assess feasibility, delivery constraints, instrumentation, and maintenance cost.
- Customer-facing and go-to-market teams: provide demand signals, feedback, enablement needs, and launch input.
- Executives, finance, security, legal, and IT: act as economic buyers, approvers, or adoption gatekeepers.

For each opportunity, record the primary user, affected users, champion, buyer, approver, and beneficiary. These may be different people.

## 3. Strong product opportunity

A strong opportunity is a clearly bounded problem experienced by an identifiable user group, with credible evidence of meaningful pain and a reachable path to adoption. It should have:

- a repeated or consequential job to be done;
- a visible current workaround or cost;
- a user who can describe the problem in concrete terms;
- a plausible improvement that is substantially better than the status quo;
- a reachable distribution and adoption path;
- acceptable trust, privacy, security, and integration requirements;
- a feasible first version that can be validated without building the whole product; and
- enough evidence to justify the next research or validation step.

Novelty alone is not a qualification. A high score cannot compensate for an unverified problem, an unreachable buyer, or an unsafe trust boundary.

## 4. Opportunity-scoring framework

Score each opportunity from 1 (weak) to 5 (strong). Use evidence notes beside every score; do not score from intuition alone.

| Criterion | Weight | Scoring question |
|---|---:|---|
| Pain and consequence | 25% | How costly, risky, frustrating, or outcome-limiting is the problem? |
| Frequency and persistence | 15% | How often does it occur, and does it recur across users or teams? |
| Current workaround gap | 15% | How inadequate, manual, fragmented, or expensive is the current solution? |
| User and buyer access | 15% | Can HexCoded reach the user, champion, and economic buyer? |
| Adoption and workflow fit | 10% | Can it fit existing habits without disproportionate change management? |
| Differentiated value | 10% | Is the proposed outcome meaningfully better or faster than alternatives? |
| Feasibility and risk | 10% | Can a credible first version be built and operated within acceptable risk? |

Weighted score = the sum of `(criterion score / 5) × weight`, reported on a 0–100 scale. Also record confidence separately as Low, Medium, or High based on evidence quality and triangulation.

Use these decision bands as prompts, not automatic decisions:

- 75–100: prioritize for validation, if no critical gate fails.
- 55–74: investigate specific gaps before prioritizing.
- 0–54: deprioritize unless new evidence changes the picture.

Critical gates: no opportunity advances solely on a score if the problem is unverified, the user cannot be reached, required data access is unsafe, or the first useful outcome cannot be tested.

## 5. Evidence and source-quality standards

Separate primary evidence from interpretation. Prefer:

1. Direct user interviews, observation, usability sessions, support conversations, and first-party usage or workflow data.
2. Official documentation, public filings, product documentation, security/privacy documentation, and original research.
3. Reputable surveys or industry research with a disclosed method, sample, date, and limitations.
4. Expert commentary and practitioner writing when the author, context, and incentives are clear.
5. Search snippets, unsourced posts, vendor claims, and anecdotal comments only as leads, never as decisive evidence.

Every source record should include title, author or organization, date, URL or location, source type, relevant claim, method or provenance, limitations, and the research question it informs. Prefer recent sources for changing facts, but retain older foundational sources when still applicable.

Triangulate important claims across at least two independent sources or methods where practical. Label vendor claims, self-reported behavior, small samples, and unverified anecdotes. Do not convert market-size claims or stated intentions into proof of willingness to adopt or pay.

## 6. Definitions and scope boundaries

- Feature: a bounded capability inside an existing product; it improves one part of a larger experience.
- Workflow: a repeatable sequence of tasks, decisions, people, and tools that produces an outcome; it may use several products.
- Agent: software that interprets context and takes or recommends multi-step actions toward a goal, usually with permissions, tools, and human oversight.
- Template: reusable structure or starting content that helps a user perform a known task; it does not by itself execute the workflow.
- Companion tool: a focused utility that supports an existing product or workflow without needing to replace the system of record.
- Product: a coherent, adopted offering with a defined user, recurring value, operating model, distribution, support, and usually an independent value proposition.

These are hypotheses about solution shape, not a hierarchy of ambition. The research should select the smallest form that solves the validated problem.

## 7. Cumulative report structure

Maintain one cumulative report across stages with this outline:

1. Executive summary and current recommendation.
2. Research scope, definitions, and stage status.
3. Target users, roles, and contexts.
4. Research questions and methods.
5. Evidence log and source-quality notes.
6. Problem and workflow findings.
7. Opportunity cards and scoring table.
8. Alternatives and competitor context, only when the relevant stage begins.
9. Selected opportunity and rationale.
10. Product shape, operating model, and risks.
11. Validation plan and decision gates.
12. Limitations, unresolved questions, assumptions, and change log.

Each major claim should link to its evidence and carry a confidence label. Preserve superseded conclusions in the change log rather than silently rewriting history.

## 8. Expected research limitations

The work may be limited by small or convenience samples, self-report bias, survivorship and selection bias, access to internal workflow data, changing AI and product practices, vendor marketing, regional or company-size differences, limited observation of sensitive work, and uncertainty about willingness to pay. Public evidence may describe what organizations say rather than what users consistently do. Scoring will therefore support prioritization, not establish market truth.

## 9. Rules for claims and uncertainty

Use these labels consistently:

- Fact: directly supported by an identified source or observed record. Cite it and avoid overstating scope.
- Inference: a reasoned interpretation that connects one or more facts. State the reasoning and confidence.
- Hypothesis: a testable proposition about a user, problem, behavior, or solution. Define what evidence would support or falsify it.
- Assumption: an unverified premise required to proceed. Make it explicit, assign an owner or test, and do not present it as evidence.
- Unknown: information not currently available or not yet investigated. Convert it into a research question where useful.

Do not use “users need,” “the market wants,” “will pay,” or “is best” without labeling the supporting evidence and uncertainty. When sources conflict, report the conflict, explain the likely scope or methodological difference, and keep the conclusion qualified. Never resolve uncertainty by silently upgrading an inference or assumption to a fact.

## 10. Initial unknowns

- Which product-operations user group has the highest unmet need and easiest access?
- Which workflows are sufficiently frequent and consequential to justify intervention?
- What current tools and workarounds are actually used in practice?
- Which problems are acute enough to create budget or behavior change?
- What data, permissions, and integrations would a useful solution require?
- What trust, privacy, security, and governance constraints are non-negotiable?
- Which solution shape best fits the first validated problem?
- What distribution path can reach both the user and buyer?
- What evidence would disqualify the leading opportunities?

## Stage 1 handoff

Stage 1 should investigate the HexCoded context and problem space using the questions and evidence standards above. It should establish the relevant product-operations landscape, recurring workflows, terminology, and evidence gaps. It should not select a final product, build anything, or perform deep competitor research; competitor analysis belongs to Stage 3.
