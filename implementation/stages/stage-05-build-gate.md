# Stage 5 — Artifact Definition and Build Gate

**Status:** Not started
**Phase:** Final definition; no implementation

Read all completed implementation stages and the current research handoff.

## Objective

Select, reduce, or stop the artifact and freeze the smallest credible specification before code.

## Required definition

1. Project objective and bounded internal or user-facing outcome.
2. Supported public evidence and every remaining Unknown.
3. Primary operator as a hypothesis, never an invented user fact.
4. One end-to-end demo flow.
5. Minimum screens or states and user actions.
6. Exact input, output, data, and validation fields.
7. Objective checks versus human judgments.
8. Calculations and their definitions.
9. Synthetic/openly licensed fixtures and provenance.
10. Explicit non-goals.
11. Privacy, rights, security, accessibility, reliability, and integration boundaries.
12. One runnable check for each non-trivial parser or calculation path.
13. Artifact success criteria and kill criteria.
14. A one-day reduction, one-week maximum, and discarded future scope.
15. Short founder-facing explanation and claims that must not be made.

## Decision

Record exactly one:

- Go — the custom artifact has a distinct, bounded demonstration outcome.
- Reduce — implement a smaller artifact, script, or spreadsheet.
- Stop — existing tools or evidence boundaries make implementation unjustified.

## Required output

Write the frozen specification and decision into implementation/cumulative-report.md. Update implementation/handoff.md.

Do not write code or create application fixtures.

## Exit gate

Stage 6 is authorized only on Go or Reduce. A score alone cannot override privacy, access, evidence-honesty, or no-build gates.

