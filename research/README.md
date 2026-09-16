# HexCoded Product Research

Use this folder as the shared brief for a staged research agent.

## How to run a stage

Tell the agent:

> Read `research/model-selection.md`, `research/handoff.md`, and `research/stages/stage-XX-*.md`. Start Stage X. Update `research/handoff.md` when finished.

Run stages in order unless the handoff file says a stage is complete. The agent must not build or deploy anything until explicitly told: **Begin the build phase.**

## Files

- `model-selection.md` — model and effort allocation.
- `handoff.md` — persistent progress tracker and continuation notes.
- `stages/` — one executable prompt per research stage.

