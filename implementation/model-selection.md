# Internship Artifact — Model Selection

This allocation is for the separate internship-artifact track in `implementation/`.
It does not change the research track in `research/` or its strict validation gate of 0/13.

## Branch boundary

| Folder | Purpose | Can change the 0/13 research gate? |
|---|---|---:|
| `research/` | Public research, evidence validation, hypotheses, and opportunity gates | Only permissioned primary evidence collected under the research rules |
| `implementation/` | Bounded internship artifact, technical learning, synthetic demo, and founder handoff | No |

Never copy synthetic scenarios, implementation tests, or artifact usage into the research evidence record. Never treat the artifact as a HexCoded product, validated opportunity, or customer evidence.

## Recommended allocation

| Stage | Work | Model | Reasoning effort | Use it for |
|---:|---|---|---|---|
| 0 | Track charter | GPT-5.6 Luna | Medium | Define scope, evidence labels, gates, non-goals, and kill criteria |
| 1 | HexCoded public-context refresh | GPT-5.6 Terra | High | Recheck only public facts relevant to the artifact |
| 2 | Evaluation-method research | GPT-5.6 Terra | High | Define the smallest human rubric, failure taxonomy, and measurement rules |
| 3 | Alternatives and no-build comparison | GPT-5.6 Luna | Medium | Compare spreadsheet, native browser, existing tools, and a small app |
| 4 | Technical feasibility and risk | GPT-5.6 Terra | High | Check local media handling, privacy, rights, security, accessibility, and testing |
| 5 | Artifact definition and build gate | GPT-5.6 Sol | Extra High | Freeze the minimum scope and decide Go / Reduce / Stop |
| 6 | Data contract and vertical slice | GPT-5.6 Terra | High | Build the smallest validated end-to-end slice after a Go or Reduce decision |
| 7 | Core implementation | GPT-5.6 Terra | High | Complete only the approved workflow |
| 8 | Hardening and QA | GPT-5.6 Terra | High | Test input handling, privacy, accessibility, calculations, and error states |
| 9 | Demo and falsification | GPT-5.6 Luna | Medium | Run the synthetic demo and compare against the simplest non-code alternative |
| 10 | Final handoff | GPT-5.6 Sol | Extra High | Package the artifact, evidence limits, demo, and founder-facing explanation |

## If these models are unavailable

Use GPT-5.6 Terra with High reasoning for the whole track. Do not claim that a model was switched unless the platform actually shows or confirms the switch.

## Model-choice rules

- Model selection is an execution preference, not evidence about the artifact or HexCoded.
- Use the smallest model that can safely handle the stage.
- Do not use a stronger model to compensate for missing evidence, private access, or an unclear premise.
- Stages 0–5 are planning and research only; no application code before Stage 5 records Go or Reduce.
- Stages 6–10 remain bounded implementation work. They cannot validate users, buyers, demand, willingness to pay, product-market fit, or a HexCoded product need.
- If a spreadsheet or native browser feature is sufficient, stop there.

## Current recommendation

Start with **GPT-5.6 Luna, Medium reasoning** for `implementation/stages/stage-00-track-charter.md`. The task is scope-setting and evidence-boundary design, not difficult implementation.
