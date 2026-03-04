# Copilot instructions (myblog)

## Big picture

- This repo is a **Nuxt 3** blog/portfolio project using Vue 3 + TypeScript.
- It uses a **Nuxt layer structure**:
  - app source entry is in `app/`
  - root project provides shared config/assets/components via `extends: '../'` in `app/nuxt.config.ts`.
- Content is markdown-driven with **@nuxt/content** (`app/content/feel`, `app/content/post`, `app/content/project`).
- There is **no Firebase/Admin SDK/Cloud Functions architecture** in this repo.

## Dev workflows (local)

- Install deps: `npm install`.
- Run dev server: `npm run dev` (uses `nuxt dev ./app --no-clear`).
- Build: `npm run build` (builds from `./app`).
- Preview: `npm run preview`.
- Generate static: `npm run generate`.
- Lint: `npm run lint` / autofix: `npm run lint:fix`.

## Key architecture & conventions

- Main framework configuration lives in root `nuxt.config.ts`; app layer config is in `app/nuxt.config.ts`.
- UI stack includes Tailwind, Headless UI, Nuxt Icon, Color Mode, and custom “Awesome” components/layouts.
- Global component namespaces are configured in `nuxt.config.ts`:
  - `Awesome*` from `components/awesome`
  - `Layout*` from `components/layouts`
- Content pages follow path-based routing from markdown collections (e.g. `/post`, `/feel`, `/project`).
- State management uses Pinia stores under `stores/` (keep store patterns consistent with existing action-based style).
- Shared logic should prefer `composables/*`.

## SSR / routing notes

- SSR is enabled globally (`ssr: true`).
- Route structure is simple content and static pages under `pages/`:
  - `index.vue`, `mycv.vue`
  - `post/*`, `feel/*`, `project/*`
- Dynamic content detail pages use `[slug].vue` and `AwesomeContentDoc`/`ContentList` patterns.

## Styling and theming

- Global styles are loaded from:
  - `assets/scss/_variables.scss`
  - `assets/scss/app.scss`
- Tailwind is the primary utility layer; keep styling aligned with existing utility-first style.
- Color mode is enabled via `@nuxtjs/color-mode` with existing theme behavior.

## Server/middleware notes

- Server-side handlers in this repo are minimal (e.g. `server/cors.ts`) and use Nitro event handlers.
- Middleware exists under `middleware/` (e.g. CORS/redirect helpers).
- Prefer existing lightweight patterns before introducing new backend abstractions.

## Deployment notes

- PM2 config is in `ecosystem.config.cjs` and points to Nuxt server output under `app/.output/server/index.mjs`.
- Existing deployment/run notes are documented in `run.md`.

## When making changes

- Keep changes minimal and consistent with current code style and folder conventions.
- For new UI pieces, prefer existing `Awesome*` and `Layout*` component patterns.
- For new pages that read markdown, follow existing `ContentList` (index) + `AwesomeContentDoc` (detail) structure.
- Avoid introducing Firebase-specific code or assumptions unless the project is explicitly migrated.
