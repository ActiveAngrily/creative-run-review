# Branch Boundary Policy

This repository contains two separate work tracks:

| Track | Folder | Purpose |
|---|---|---|
| Research | `research/` | Public research, evidence validation, hypotheses, and the strict 0/13 gate |
| Internship artifact | `implementation/` | Bounded artifact planning, implementation, QA, and founder handoff |

## Active-track rule

Before doing any work, declare one active track: `research` or `implementation`.

### When the active track is `implementation`

- Read access to `research/` is allowed for context.
- Write access is limited to `implementation/` and its own tracking files.
- Never edit, delete, rename, or generate files under `research/`.
- Never update the research gate, cumulative report, handoff, or stage files from implementation results.

### When the active track is `research`

- Read access to `implementation/` is allowed only when relevant.
- Write access is limited to `research/` and its own tracking files.
- Never edit, delete, rename, or generate files under `implementation/`.
- Never use implementation results as primary research evidence or to change the 0/13 gate.

## Required safety check

1. State the active track and its allowed write root before editing.
2. Inspect the target path and confirm it is inside that root.
3. If a requested change would touch the other track, stop and report the conflict.
4. Keep synthetic, public, and primary evidence labels separate.
5. Check the final diff for cross-track changes before finishing.

## Important limitation

This Markdown policy controls agent behavior; it does not create operating-system permissions. The shared workspace technically allows both folders to be edited. True read-only enforcement requires separate filesystem permissions, users, or worktrees, which are not being configured here.
