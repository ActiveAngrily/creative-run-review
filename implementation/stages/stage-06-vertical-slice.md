# Stage 6 — Data Contract, Fixtures, and Vertical Slice

**Status:** Not started
**Phase:** Implementation begins only after Stage 5 Go or Reduce

Read the frozen Stage 5 specification. Inspect all relevant files before editing.

## Objective

Build the thinnest end-to-end slice that proves the selected artifact can work.

## Work

1. Create the application only in the path authorized by Stage 5.
2. Define the smallest validated data contract.
3. Create one clearly synthetic fixture with documented provenance.
4. Implement safe input parsing and one objective media or record check.
5. Render the minimum comparison or decision state.
6. Export the smallest useful decision record.
7. Add one runnable check that fails when the parser or calculation breaks.
8. Record actual commands, outputs, limitations, and deviations.

Prefer native platform features and existing dependencies. Do not add a framework, backend, authentication, telemetry, collaboration, live generation, or integration.

## Required output

Produce a runnable vertical slice and verification evidence. Update implementation/cumulative-report.md and implementation/handoff.md.

## Exit gate

Continue only if the complete thin path works locally with synthetic data and remains smaller than the rejected alternatives.

