# CLAUDE.md

Guidance for the development agent working on this project. Treat the **Definition of Done** as the bar for every task.

## What this is

The landing site for Saoi (`saoi.ie`): one static page that says what Saoi and Saoirse are and points to the app, showcase, docs, MCP endpoint, API and source. No backend, no router, no data fetching. Copy is in Chris's voice: direct, plain, no marketing words, no em dashes. Never mention any employer.

| Concern       | Choice                                                                               |
| ------------- | ------------------------------------------------------------------------------------ |
| Stack         | Vite + React + TypeScript (strict, `noUncheckedIndexedAccess`), Tailwind v4          |
| Tests         | Vitest + Testing Library                                                             |
| Lint / format | oxlint, Prettier with `prettier-plugin-tailwindcss`                                  |
| Hosting       | GitHub Pages via Actions on push to `main`, custom domain `saoi.ie` (`public/CNAME`) |
| Backend       | None                                                                                 |
| Node          | `.nvmrc` = 24                                                                        |

All outbound URLs live in `src/links.ts`. Palette is the Demo Bank teal, defined in `src/index.css`.

## Operating philosophy: lean surface, high floor

1. Keep the surface lean. No speculative features, abstractions, or dependencies.
2. Keep the floor high. Strict types, tests, lint, CI gates and accessibility apply from the first commit.

When these tension, craft wins.

## Definition of Done

- [ ] `npm run typecheck`, `npm run lint`, `npm run format:check`, and `npm run test` all pass.
- [ ] New or changed logic has tests (behavior, not implementation detail).
- [ ] UI is keyboard-navigable and accessible (landmarks, link names, focus, contrast). Checked at 390px and 1280px.
- [ ] No secrets in client code.
- [ ] Commit follows Conventional Commits. The diff is focused.

If you can't satisfy an item, say so explicitly.
