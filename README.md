# Yaks & Nomads

Fullstack monorepo — Next.js frontend + Node.js backend + shared packages.

## Structure

```
.
├── apps/
│   ├── web/                 # Next.js (React) frontend
│   │   ├── app/             # App Router pages & layouts
│   │   ├── components/
│   │   │   ├── ui/          # Reusable UI primitives (buttons, inputs)
│   │   │   ├── layout/      # Navbar, footer, sidebar, wrappers
│   │   │   └── common/      # Feature-agnostic shared components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utilities, API client, config
│   │   ├── services/        # API/service layer calls
│   │   ├── public/          # Static assets (images, fonts)
│   │   ├── styles/          # Global styles / design tokens
│   │   └── tests/           # Frontend tests
│   │
│   └── server/              # Node.js backend (Express/Fastify)
│       └── src/
│           ├── config/      # Env vars, db connection
│           ├── controllers/ # Request handlers
│           ├── models/      # DB models/schemas
│           ├── middlewares/ # Auth, validation, error handling
│           ├── routes/      # API route definitions
│           ├── services/    # Business logic
│           ├── utils/       # Helpers
│           ├── validations/ # Input validators
│           └── seeders/     # DB seed scripts
│
├── packages/
│   ├── shared/              # Code shared between web & server
│   │   └── src/
│   │       ├── types/       # Shared TypeScript types
│   │       ├── constants/   # Shared constants
│   │       └── utils/       # Shared utilities
│   ├── eslint-config/       # Shared ESLint config
│   └── tsconfig/            # Shared TypeScript configs
│
└── docs/                    # Project documentation
```

## Conventions

- Frontend work lives in `apps/web`
- Backend work lives in `apps/server`
- Shared code lives in `packages/shared`
- Follow component naming: PascalCase for components, camelCase for utilities

## Frontend

### Tech Stack

- Next.js (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Embla Carousel (via custom wrapper)
- Lucide React icons

### Commands

Run from `apps/web`:

```bash
npm install       # install dependencies
npm run dev       # start dev server on http://localhost:3000
npm run build     # production build
npm run start     # start production server
npm run lint      # lint with ESLint
npm run typecheck # tsc --noEmit
```

### Routes

| Route | Description |
|---|---|
| `/` | Homepage — hero, featured tours, trip details, values, testimonials, CTA, FAQ |
| `/about` | About page — hero, story, mission, team, statistics, values |
| `/itinerary` | Royal Highland Festival itinerary — hero, overview, gallery, features, accordion, other tours |
| `/itinerary/cultural-mask-dances` | Cultural Mask Dances tour page |
| `/itinerary/bhutan-monastery-tour` | Bhutan Monastery Tour page |
| `/itinerary/traditional-weaving-heritage` | Traditional Weaving Heritage tour page |
| `/itinerary/[slug]` | Dynamic tour detail pages (fallback for any tour slug) |
| `/contact` | Contact form with trip selection |
| `/faq` | FAQ accordion with search and filter |
| `/privacy-policy` | Privacy policy page |
| `/booking-terms` | Booking terms & conditions page |

### Design System

| Token | Value | Usage |
|---|---|---|
| Brand brown | `#8B5A52` | Category tags, card titles, solid icon buttons, accents |
| Deep brown | `#592A22` | Hover state of solid brown buttons |
| Dark neutral | `#2D2D2D` | Main headings |
| Card gray | `#E5E5E5` | Light gray section backgrounds |
| Off-white | `#fcfbfa` | Warm light section backgrounds |
| White | `#FFFFFF` | Card surfaces |

### Fonts

- **Cormorant Garamond** (`--font-seasons`) — headings, display/editorial text
- **Merriweather** (`--font-merriweather`) — body copy, descriptions
- **Lato** (`--font-lato`) — UI chrome, buttons, labels

### Components

| Component | Location | Description |
|---|---|---|
| `FadeIn` | `components/common/FadeIn.tsx` | Scroll-in reveal animation (opacity + translateY) |
| `Header` | `components/layout/Header.tsx` | Responsive navbar with mobile drawer |
| `NavigationDrawer` | `components/common/NavigationDrawer.tsx` | Full-screen mobile navigation overlay |
| `Carousel` | `components/core/carousel.tsx` | Embla-based carousel with autoplay support |

### Key Features

- **Tour Pages**: 4 dedicated tour pages (Royal Highland Festival, Cultural Mask Dances, Bhutan Monastery Tour, Traditional Weaving Heritage) with shared structure: hero, trip overview, gallery, features grid, itinerary accordion, other tours carousel
- **Other Tours Carousel**: Auto-slides every 5 seconds, excludes current tour, pointer-events managed for invisible slides
- **Image Hover**: Photos scale to 1.15x on hover with 500ms transition
- **Testimonial Autoplay**: Happy Travelers section auto-slides every 5 seconds
- **Responsive**: Mobile-first with breakpoints at `md` (768px) and `lg` (1024px)
- **Accessibility**: ARIA labels on interactive elements, keyboard navigation support

## Backend

_(To be implemented)_

## Environment Variables

_(To be documented)_
