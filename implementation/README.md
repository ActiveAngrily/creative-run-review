# HexCoded Internship Artifact — Implementation Track

This folder is the staged brief and working record for an internship-quality artifact. It is separate from the market-research track in ../research.

## Final status

Stages 0–10 are complete. Stage 9 recorded **Ship/package for the internship demonstration only**; the spreadsheet/native workflow remains the lower-burden operational baseline. Read [`PROJECT-WALKTHROUGH.md`](PROJECT-WALKTHROUGH.md) for a plain-language explanation of the entire project and every stage. Use [`FINAL-HANDOFF.md`](FINAL-HANDOFF.md) for setup, verification, the three-minute demo, fixture provenance, claims boundaries, limitations, and the clean inventory.

## Track boundary

- The research validation gate remains 0/13.
- Work completed here does not validate users, buyers, demand, willingness to pay, product-market fit, or a HexCoded product need.
- Synthetic inputs must be labeled Synthetic. Public inputs must include source, date, licence or usage basis, and limitations.
- Do not use customer data, private company material, account access, credentials, external outreach, or HexCoded APIs unless the user explicitly authorizes them later.
- Do not update the research track from implementation results. Only permissioned primary research can change its gate.

The final artifact is Creative Run Review: a local demonstration for comparing creative-generation attempts, checking objective media constraints, recording human failure judgments, retaining raw retry/credit/time context, and exporting a bounded decision record. It is packaged as internship evidence, not as an official HexCoded product or a validated production workflow.

## How to run a stage

Tell the agent:

> Read implementation/README.md, implementation/handoff.md, implementation/cumulative-report.md, and implementation/stages/stage-XX-*.md completely. Read the research files named by that stage. Start Stage X. Update implementation/handoff.md and implementation/cumulative-report.md when finished.

Run stages in order unless the handoff explicitly records a justified skip. Stages 0–5 are research and definition only. Do not create application code or install dependencies before Stage 5 records Go or Reduce.

## Stage map

| Stage | Phase | Purpose | Gate or output |
|---:|---|---|---|
| 0 | Research | Charter, evidence boundary, success and kill criteria | Track contract |
| 1 | Research | Refresh only the public HexCoded context relevant to the artifact | Current evidence table |
| 2 | Research | Study creative-output comparison, human evaluation, retries, and failure records | Minimum evaluation method |
| 3 | Research | Compare spreadsheets, existing tools, native browser features, and build/no-build alternatives | Alternative decision |
| 4 | Research | Establish technical feasibility, privacy, rights, security, accessibility, and test constraints | Technical decision record |
| 5 | Definition | Select or reject the artifact and freeze the smallest credible specification | Go / Reduce / Stop |
| 6 | Implementation | Create validated fixtures, data contract, and one thin vertical slice | Runnable end-to-end slice |
| 7 | Implementation | Complete only the approved core workflow | Functional artifact |
| 8 | QA | Harden input handling, privacy, accessibility, reliability, and visual quality | Verified release candidate |
| 9 | Evaluation | Run the synthetic demo and compare it with the simplest non-code alternative | Ship / Reduce / Kill |
| 10 | Handoff | Package the artifact, evidence, limitations, demo, and founder-facing explanation | Final internship package |

## Default implementation constraints

- Prefer one static local web application using browser-native APIs.
- Prefer standard HTML, CSS, and JavaScript unless Stage 4 proves that insufficient.
- No backend, authentication, database, telemetry, cloud storage, or live model API by default.
- Keep media local and ephemeral; export only metadata and judgments unless the user explicitly chooses otherwise.
- One runnable check is required for non-trivial calculations or parsing.
- A spreadsheet or native tool winning the comparison is a valid result.

## Files

- handoff.md — persistent status, decisions, Unknowns, and next action.
- cumulative-report.md — cumulative findings and implementation evidence.
- stages/ — one executable brief per stage.
