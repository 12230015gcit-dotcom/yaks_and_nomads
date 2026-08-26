# AGENTS.md

Guidance for AI agents working in this repository. Read this before making changes.

## Repository overview

Fullstack monorepo — Next.js frontend (`apps/web`) + Node.js backend (`apps/server`) + shared packages (`packages/shared`).

- Frontend work happens in `apps/web` (App Router, Tailwind CSS v4, TypeScript).
- Backend work happens in `apps/server`.
- Code shared by both lives in `packages/shared`.

## Frontend commands

Run from `apps/web`:

- `npm run dev` — start the dev server
- `npm run build` — production build (`next build`)
- `npm run typecheck` / `npm run lint` — `tsc --noEmit`

## UI / Design system

Follow the visual system established in `apps/web/app/page.tsx`. This is a warm, editorial travel brand for **Yaks & Nomads** (private Bhutan travel). Match the incumbent world; do not introduce new palettes or layout habits.

### Fonts

- Loaded in `apps/web/app/layout.tsx` via `next/font/google`: **Merriweather** (`--font-merriweather`) and **Lora** (`--font-lora`).
- `font-serif` is the display/editorial face (Georgia fallback); use for all headings, titles, and body copy in feature sections.
- `font-sans` for UI chrome only (menus, labels, footers).
- Headings: `font-serif` with tight `leading-tight`.

### Colors

| Token | Value | Usage |
|---|---|---|
| Brand brown | `#8B5A52` | Category tags, card titles, solid icon buttons, accents |
| Deep brown | `#592A22` | Hover state of solid brown buttons |
| Dark neutral | `#2D2D2D` | Main headings (replaces `slate-900` in newer sections) |
| Card gray | `#E5E5E5` (or `#E0E0E0`, `#DADADA`) | Light gray section backgrounds, tour card container |
| Off-white | `#fcfbfa` | Warm light section backgrounds |
| White | `#FFFFFF` | Card surfaces |
| Body text | `text-slate-600` / `text-gray-700` | Paragraph copy |
| Dark | `slate-900` | Dark hero/feature sections with image overlays |

### Typography patterns

- Category tag / kicker: `text-xs uppercase tracking-widest font-semibold` in `#8B5A52`.
- Section heading: `font-serif text-3xl md:text-4xl`.
- Card title: `font-serif` in `#8B5A52` (e.g. `text-xl`).
- Body copy: `text-sm md:text-base font-serif leading-relaxed` in `slate-600`/`gray-700`.
- Buttons: `text-xs tracking-widest uppercase`.

### Buttons

- **Outline pill**: `rounded-full border px-6 py-2.5 text-xs uppercase tracking-widest`, `border-slate-400 text-slate-800`, hover fills `bg-slate-900 text-white`.
- **Solid pill (arrow)**: `rounded-full bg-[#8B5A52] text-white`, hover `bg-[#592A22]` (e.g. right arrow in carousel controls).
- **Circular controls**: `w-10 h-10 rounded-full` — left arrow outlined (`border bg-white`), right arrow solid brown.

### Cards & layout

- Section containers: `max-w-7xl mx-auto`, outer padding `py-16 px-8 md:px-16` (or `py-24 px-6 md:px-16`).
- Asymmetric layouts: `grid lg:grid-cols-12` — text block ~`lg:col-span-4`, card area `lg:col-span-8`.
- Feature cards: white `bg-white rounded-md shadow-sm`, **portrait image on top** `aspect-[3/4] object-cover` with flush edges, then `p-6` interior with serif title + short description.
- Tour card: light gray container `bg-[#E5E5E5] rounded-sm p-6 md:p-12`. On `md+`, the left image overlaps the card's left edge using `md:-ml-16` + `shadow-xl`; content sits right in `md:col-span-7`.
- Elevation: `shadow-sm` (cards), `shadow-md`, `shadow-xl` (overlapping hero images).

### Responsive behavior

- Mobile (< `md`): stack vertically; images sit within card bounds (negative offsets are `md:`-only).
- Card sliders: use a horizontally scrollable snap row (`overflow-x-auto snap-x snap-mandatory`, `min-w-[260px] snap-start`) that collapses to a grid on `md+` (`md:grid md:grid-cols-2 md:overflow-visible`).
- Grid switchpoints: `md` for card pairs, `lg` for asymmetric section layouts.

### Motion

- Use the existing `FadeIn` component (`apps/web/components/common/FadeIn.tsx`) for scroll-in reveals — `opacity-0 translate-y-8` → `opacity-100 translate-y-0`, 700ms ease-out, with a 150ms `delay` stagger between adjacent blocks.
- Hover states on interactive elements should transition smoothly (`transition-all`).

## File conventions

- Add reusable primitives under `apps/web/components/ui/`, layout components under `apps/web/components/layout/`, feature-agnostic shared ones under `apps/web/components/common/`.
- Keep sections as local function components inside `apps/web/app/page.tsx` unless a component is reused.
- Do not add code comments unless asked.