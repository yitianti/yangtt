# AGENTS.md

Buildless static HTML/CSS/JS course portfolio ("高级网页设计"). No `package.json`, bundler, test suite, lint/typecheck, or CI. Each root `.html` file is a standalone exercise page; verify changes by opening the page in a browser (or serve the root with any static server). There is nothing to build or run.

## Structure

- `index.html` is the only catalog/home page. Every new page must be linked here with a title and one-line description.
- New pages should link back to `index.html` (repo convention recorded in `ytt_prompt.md`).
- Pages are self-contained by default: small ones use inline `<style>`/`<script>`, larger ones split CSS into a same-basename file (`CSS3.html` + `CSS3.css`).
- `dataTy.html` and `JS_obj-fun.html` are JavaScript console exercises; their output is in DevTools, not on the page.
- `data.js` defines `window.STUDENTS` / `window.SUBJECTS`; `starter-level1.html` and `starter-level2.html` load it and are grade-analysis exercises. Their comments reference `target.html`, which is not in this repo.
- Reuse local assets, not new remote CDNs: `cdn/` (Font Awesome, Lucide), `font/` + `font1/` (Alibaba iconfont packages), `icon/` (standalone SVGs), `img/` (shared photos).

## Gotchas

- `GJWY/` is a stale duplicate snapshot with its own `.git` and a different Gitee remote. Do not edit or commit there; all work belongs at the repo root.
- `index.html` links `css3.html` but the actual file is `CSS3.html`. This works on Windows but breaks on case-sensitive hosts (Linux/Gitee Pages). Preserve filename casing and fix the link when touching `index.html`.
- `zwjs1.html` references missing `./css/zwjs1.css` (no styles load). Don't assume its current appearance is intended.
- `svg.html` loads an external `http://at.alicdn.com/...` script despite local icons existing; other pages use vendored assets.
- Files are UTF-8 with Chinese UI text and comments; preserve both.

## Conventions

- From `ytt_prompt.md` (gitignored but present): for ytt-scoped work, prefix CSS classes, IDs, and JS variables with `ytt_`, and append each prompt (time, model, prompt text) to `ytt_prompt.md` instead of overwriting it.
- `skills/frontend-design/SKILL.md` is visual-design guidance for new UI; it is not auto-loaded (not under `.opencode/`), so read it when creating or restyling a page.
- Git: `master` branch, Gitee remote `advanced-web-page`. Existing commits use Chinese messages, sometimes with `feat:` / `初始提交：` prefixes. Do not rewrite the configured remote (it embeds credentials) and do not commit unless asked.
