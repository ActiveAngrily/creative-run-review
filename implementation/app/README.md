# Creative Run Review

Final dependency-free demo project using the fixed Synthetic brief `BR-SYN-001`. The complete three-minute script, fixture hashes, evidence limits, decision history, and package inventory are in [`../FINAL-HANDOFF.md`](../FINAL-HANDOFF.md).

Run from the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory implementation/app
```

Open `http://127.0.0.1:4173/` in a current desktop Chromium browser. Do not open `index.html` directly: browser ES modules require an HTTP origin.

Run the dependency-free pure-logic check:

```sh
node implementation/app/self-check.mjs
```

The app uses only local HTML, CSS, JavaScript, and the three clearly labelled Synthetic fixtures. It makes no external request and stores no session data.

Expected self-check output:

```text
Creative Run Review self-check passed.
```

The supported demonstration environment is current desktop Chromium on localhost. JSON, CSV, and Markdown exports contain metadata and judgments only; local media remains in browser memory and is excluded from every export.

## Frontend copy guidance

The frontend copy was reviewed on 2026-09-16 using these sources:

- [GOV.UK: Use clear language](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/) — short sentences, familiar words, and active voice.
- [GOV.UK Design System: Button](https://design-system.service.gov.uk/components/button/) — sentence-case labels that describe the action.
- [GOV.UK Design System: Error message](https://design-system.service.gov.uk/components/error-message/) — clear, specific errors that explain how to fix the problem.
- [W3C WAI: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) and [Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) — descriptive labels and useful announcements that do not interrupt the reviewer.
- [Nielsen Norman Group: Concise, Scannable, and Objective](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/) — brief, factual copy organized for scanning.

The rewrite applies the guidance without copying source wording. It keeps all frozen status terms, warnings, and evidence boundaries.
