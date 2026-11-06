# AGENTS.md

Guidance for AI coding agents (Claude Code, Codex, Cursor, Zed and others) working in this repository. `CLAUDE.md` imports this file.

Personal site for Lance Guyatt (https://lanceguyatt.com). It is a static Astro site styled after the Amiga Workbench (Topaz font, windows, gadgets, Guru Meditation).

## Stack

- Astro 7 (static output), MDX, TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite`. There is no tailwind config file; the theme lives in `src/styles/app.css` (`@theme`) and `src/styles/themes/workbench.css`
- The Topaz font is loaded through Astro's `fonts` API in `astro.config.mjs` (local provider, exposed as `--font-topaz`)
- Alpine.js via `@astrojs/alpinejs`, with its entrypoint at `src/scripts/app.ts` (plugins: ui, focus, async-alpine). Type shims for these plugins live in `src/types/`
- astro-icon (SVGs live in `src/icons/`), astro-seo, @astrojs/sitemap, @playform/compress
- pnpm, Node >= 22 (see `.nvmrc`)
- Vite+ (`vite-plus`) for formatting (Oxfmt) and linting (Oxlint), configured in the `fmt` and `lint` blocks of the root `vite.config.ts`. Astro ignores that file; its own Vite config lives in `astro.config.mjs`

## Commands

- `pnpm dev`: dev server at http://localhost:4321
- `pnpm build` / `pnpm preview`
- `pnpm check`: astro type check
- `pnpm lint` / `pnpm lint:fix`: Oxlint (`vp lint`)
- `pnpm format` / `pnpm format:check`: Oxfmt (`vp fmt`; sorts imports and Tailwind classes)
- `pnpm sync`: regenerate content collection types; `pnpm clean` removes `.astro/` and `dist/`
- `pnpm storybook` / `pnpm build-storybook`: Storybook on port 6006
- Deploy: Netlify (`netlify.toml`) runs `pnpm build`, then builds Storybook into `dist/storybook/` (served at `/storybook/` with `X-Robots-Tag: noindex`). `pnpm surge` is a manual fallback to lanceguyatt.surge.sh

- `pnpm test` / `pnpm test:watch`: Vitest (`vitest.config.ts` wraps Astro's `getViteConfig`). Tests sit next to their source as `*.test.ts`. Render `.astro` components with the Astro Container API, then parse the output with happy-dom: dev rendering adds `data-astro-source-*` attributes, so string matching is brittle. Use `// @vitest-environment happy-dom` for tests of DOM-dependent scripts

Before you finish a change, run `pnpm check && pnpm lint && pnpm format:check && pnpm test`.

## Architecture

- **Content**: collections are defined in `src/content.config.ts`, with zod schemas in `src/schema/index.ts`. `pages` and `work` are MDX glob loaders; `about`, `nav` and `tags` are YAML file loaders in `src/content/`. Changing a schema means updating `src/schema/` and the matching content files
- **Routing**: `src/pages/[...id].astro` renders the `pages` collection and `src/pages/work/` renders the `work` collection. The other files in `src/pages/` are one-off routes: `index`, `404`, `kickstart` (reads the `kickstart` entry from `pages`), `llms.txt.ts`, and the UI playgrounds `menu`, `popover` and `ui`
- **SEO**: the playground pages and `404` pass `noindex` to `Layout` (forwarded to `BaseHead`) and are excluded by the sitemap `filter` in `astro.config.mjs`. When adding a non-public route, do both. `public/robots.txt` points at `sitemap-index.xml`
- **UI layers**:
  - `src/gadgets/`: Amiga-style UI primitives (Window, Requester, Close, Depth, Zoom, …), re-exported from `gadgets/index.ts`
  - `src/components/`: general site UI, re-exported from `components/index.ts`
  - `src/features/`: self-contained modules (`guruMeditation`, `kickstart`, `work`), each with an `index.ts` barrel, a root `.astro` component and optional `components/` and `scripts/`
  - `src/layouts/`: `layout/` (base) and `workbench/`
- **Client JS**: interactive behaviour is Alpine. Lazy components are registered in the `asyncMap` in `src/scripts/app.ts` and loaded on demand by async-alpine; their scripts live in the owning feature folder
- `src/config.ts` holds `SITE`, `SOCIALS` and person metadata; `src/lib/tv.ts` provides `tv` and `cn()`, both built on tailwind-variants v4 with a merge config that knows the custom spacing tokens (`titlebar`, `toasty`). Import `tv`, `cn` and `VariantProps` from `@/lib/tv`, not `tailwind-variants`

## Conventions

- Import through the `@/*` alias (maps to `src/*`)
- Simple gadgets are single `.astro` files; anything with sub-parts gets its own folder with an `index.ts` barrel (`export { default as X } from './X.astro'`), plus a re-export from the parent `index.ts`
- Components type `Props` with `HTMLAttributes<...>`, take `class: className`, merge classes with `cn()` and spread `...rest`
- Oxfmt (`vite.config.ts`): single quotes, no semicolons, 100-character lines, and shorthand Astro attributes (`{canonical}`, not `canonical={canonical}`)
- Imports are sorted into groups: packages and `astro:*` first, then a blank line, then `@/` and relative imports. Don't hand-order them; run `pnpm format`
- Tailwind classes are sorted using the theme in `src/styles/app.css`, in `class` attributes and in calls to `cn()`, `clsx()` and `tv()`. Custom theme utilities (`h-titlebar`, `bg-disk`, `border-action`) sort like built-in ones

## AI files

- `AGENTS.md` (this file): the single source of repo guidance. `CLAUDE.md` only imports it, so edit this file
- `DESIGN.md`: the Workbench design system (tokens and components) in DESIGN.md format. Keep it in step with `src/styles/app.css` when tokens change
- `.claude/settings.json`: shared Claude Code permissions. It allows the `pnpm` check, build and test scripts, and denies `pnpm surge`, `vp migrate`, `vp check` and edits to generated folders
- `src/pages/llms.txt.ts`: generates `/llms.txt` at build time from the `pages` and `work` collections

## Notes

- The README's project structure is partly stale (it lists `src/utils/`, which doesn't exist)
- Storybook (`@storybook-astro/framework`, with `@storybook/addon-a11y`). Its builder uses the empty `.storybook/vite.config.mjs` so it doesn't load the root `vite.config.ts`; Tailwind and the `@` alias are added in `.storybook/main.js`. Stories sit next to their component as `*.stories.ts`; pass slot content through `args.slots` (for example `slots: { default: '<p>…</p>' }`). The framework reads integrations, fonts and Vite plugins from `astro.config.mjs`; `.storybook/preview.js` imports `src/styles/app.css`. Import types with `import type { … }`, not `import { type … }`: under `verbatimModuleSyntax` the inline form leaves a runtime import (for example of `astro/types`), which breaks Storybook's dependency optimiser
- Oxlint checks only the frontmatter and `<script>` blocks of `.astro` files, not the template, and skips `no-unused-vars` there. There are no Astro-specific or markup accessibility lint rules, because Oxlint can't load `astro-eslint-parser`
- Use the `pnpm` scripts rather than other `vp` commands. Don't run `vp migrate`, which rewrites Vite dependencies and imports and can clash with the Vite version Astro pins, or `vp check`, which doesn't understand `.astro` types
- `pnpm` reports an unmet `vite` peer dependency from vite-plus's bundled vitest. This is expected and harmless
- `.zed/settings.json` formats through the Oxc extension's `oxfmt` and `oxlint` language servers. `.astro` files are formatted with `vp fmt --stdin-filepath`
- Don't edit `dist/`, `.astro/` or `.netlify/`; they are generated
