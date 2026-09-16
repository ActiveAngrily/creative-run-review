# Stage 7 — Core Implementation

**Status:** Not started
**Phase:** Implementation

Read the Stage 5 specification, Stage 6 implementation evidence, and every file in the artifact before editing.

## Objective

Complete only the minimum workflow approved at the build gate.

For Creative Run Review, the expected boundary is:

1. One brief at a time.
2. Two to six local image or video attempts.
3. Objective file, dimension, aspect-ratio, and duration checks where supported.
4. Fixed human rubric and short failure taxonomy.
5. Manually entered model/source, charged credits, render time, and edit minutes.
6. Attempt totals and one selected candidate with a required reason.
7. Validated save/reload and printable decision summary.
8. Synthetic and provenance labels in every relevant state.

If Stage 5 selected another artifact, follow its frozen boundary instead.

## Constraints

- Keep media local and do not persist it silently.
- Do not automate subjective or legal decisions.
- Do not hard-code volatile model catalogues or pricing.
- Do not add unapproved settings, dashboards, roles, or future integrations.
- Reuse the Stage 6 check and add only the smallest checks required by new non-trivial logic.

## Required output

Produce the functional minimum artifact, verification evidence, and an updated decision/Unknown log. Update implementation/cumulative-report.md and implementation/handoff.md.

## Exit gate

The approved happy path, error path, save/reload path, and calculation path must work before hardening begins.

