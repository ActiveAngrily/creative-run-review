# Stage 8 — Hardening, Accessibility, and QA

**Status:** Not started
**Phase:** Verification and polish

Read the frozen specification and the complete artifact.

## Objective

Make the existing minimum safe, understandable, accessible, and reliable without expanding it.

## Verify

1. Malformed JSON, wrong file types, oversized inputs, missing fields, duplicate IDs, and unsupported media.
2. Calculation edge cases, including zero accepted attempts and zero charged credits.
3. Object-URL cleanup, media removal, explicit clearing, and absence of silent uploads.
4. No network requests, telemetry, credentials, or hidden persistence.
5. Keyboard navigation, visible focus, labels, error association, contrast, reduced motion, and media alternatives.
6. Empty, loading, error, edited, and exported states.
7. Supported browser behavior.
8. Synthetic/provenance labeling and prohibited-claim review.
9. Visual layout at the minimum supported viewport.
10. All runnable checks and the exact command/output record.

Fix root causes in shared paths. Do not add abstraction, configuration, or dependencies for hypothetical future use.

## Required output

Record defects found, fixes, checks, remaining limitations, and release-candidate status in implementation/cumulative-report.md. Update implementation/handoff.md.

## Exit gate

Complete only when the artifact passes its defined checks and remaining limitations are safe and explicit.

