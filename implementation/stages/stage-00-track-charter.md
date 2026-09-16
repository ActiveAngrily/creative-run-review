# Stage 0 — Internship Artifact Track Charter

**Status:** Not started  
**Active track:** `implementation/` only  
**Phase:** Planning; no application code

## Read completely before acting

Read these implementation files:

- `implementation/README.md`
- `implementation/handoff.md`
- `implementation/cumulative-report.md`
- `implementation/model-selection.md`

Read these research files for context only:

- `research/model-selection.md`
- `research/handoff.md`
- `research/cumulative-report.md`
- `research/stages/stage-00-research-plan.md`
- `research/stages/stage-02-user-research.md`
- `research/stages/stage-03-competitors.md`
- `research/stages/stage-04-opportunities.md`
- `research/stages/stage-05-selection.md`
- `research/stages/stage-06-product-definition.md`
- `research/stages/stage-07-operations.md`

## Branch protection

Before acting, state: **Active track = implementation; allowed write root = `implementation/`.**

- `research/` is read-only context in this stage.
- Do not edit, create, delete, rename, or generate anything under `research/`.
- Do not change the research gate, research handoff, or research cumulative report.
- Do not treat implementation work as primary research evidence.
- Follow the repository-wide rules in `BRANCH-BOUNDARY.md`.

## Objective

Create the operating contract for a bounded internship artifact without reopening or weakening the research conclusion.

The current leading proposal is **Creative Run Review**: a local tool for comparing several AI-generated image/video attempts for one brief, checking objective media constraints, recording human quality/failure judgments, tracking retries/credits/time, and exporting a transparent decision record.

Treat it as a proposal, not a validated product or final decision.

## Required analysis

1. State how this track differs from research validation.
2. Preserve the strict research gate at 0/13 and keep H2 unvalidated.
3. Compare these five directions:
   - Release Integrity Checker
   - Evidence-Gated Research Console
   - Synthetic Authorized Release Record
   - Rights/Consent Evidence Companion
   - Creative Run Review
4. For each direction, record the problem, public evidence, Unknowns, possible internal user, smallest useful artifact, synthetic/public demonstration, complexity, privacy/rights/security/integration risks, founder-demo value, reversibility, and prohibited claims.
5. Define the artifact-selection criteria and a simple decision matrix.
6. Recommend one bounded artifact and define its objective, outcome, minimum scope, non-goals, inputs, demo flow, success criteria, kill criteria, Unknowns, founder learning, and implementation sequence.
7. Keep Facts, Inferences, Hypotheses, Assumptions, Unknowns, and Synthetic assumptions explicitly labeled.

## Allowed evidence and data

- Public HexCoded context already recorded in `research/`.
- Synthetic fixtures clearly labeled `Synthetic`.
- Publicly licensed or user-owned local media with source, date, licence/usage basis, and limitations.
- No customer data, private company material, credentials, account access, HexCoded APIs, or external outreach.

## Required output and write boundary

This stage is strategy only. Do not browse broadly, design screens, write application code, install dependencies, create fixtures, or start Stage 1.

After the analysis is complete, the only permitted tracking updates are:

- `implementation/cumulative-report.md`
- `implementation/handoff.md`

Do not update any file under `research/`. If the user requests a cross-track edit, stop and report the branch conflict.

## Exit gate

Complete only when a later synthetic test or implementation result cannot be mistaken for primary research evidence, and the next stage has a clear Go / Reduce / Stop decision path.
