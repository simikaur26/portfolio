# Simi Kaur Portfolio — Claude Code Briefing

## Project Overview
This is a personal portfolio for Simi Kaur, a product designer. Built with Next.js 16 (App Router), TypeScript, Tailwind v4, and Framer Motion. Deployed to Vercel at simi-kaur.com, connected to GitHub at github.com/simikaur26/portfolio.

## Stack
- Next.js 16.2.6 with App Router and Turbopack
- TypeScript
- Tailwind v4 (uses @theme inline and @layer components — NOT Tailwind v3 config)
- Framer Motion for animations
- MDX support (though case studies are built as .tsx pages, not MDX)
- Font: Outfit (Google Fonts, loaded via next/font)
- Node v26, npm 11

## CRITICAL: Git
Always use /usr/bin/git, NOT git. Homebrew Git is broken on this machine.
Videos (*.mp4) are in .gitignore — never commit them.

## Project Structure
- app/ — Next.js App Router pages
  - page.tsx — homepage (HomeIntro + WorkSection)
  - layout.tsx — root layout with Nav and Footer
  - sample-csi/page.tsx — Sample CSI case study
  - compare-formulas/page.tsx — Compare Formulas case study
  - acorns/page.tsx — Acorns case study
  - about/page.tsx — About page
  - photography/page.tsx — Photography page
- components/ — all reusable components
- public/ — static assets
  - homepage/ — case study card thumbnails
  - sample-csi/ — Sample CSI images
  - compare-formulas/ — Compare Formulas images
  - acorns/ — Acorns images
  - about/ — About page assets (photos, photography folder)
  - figma.svg, claude.svg, chatgpt.svg, granola.svg, gemini.svg — shared tool logos at root
  - logo.svg — SK logo at root

## Design System (globals.css)

### Colors (@theme inline)
- --color-navy: #1B2D4F (Sample CSI accent)
- --color-blue: #6494CE (Compare Formulas accent)
- --color-acorns: #6EC739 (Acorns accent)
- Background: #F2F1F0 (off-white, used everywhere)
- Primary text: #232323
- Secondary text: #363636
- Border/divider: #BBBDBC
- Terracotta: #993C1D (homepage/About accent)

### Per-Case-Study Accent System
Each case study sets --case-accent on its top-level wrapper:
- Sample CSI: style={{ "--case-accent": "var(--color-navy)" }}
- Compare Formulas: style={{ "--case-accent": "var(--color-blue)" }}
- Acorns: style={{ "--case-accent": "var(--color-acorns)" }}
Headings DO NOT inherit --case-accent (they are #232323). Only buttons, banners, side nav active state, and other accent elements use var(--case-accent).

### Type Scale (@layer components)
- text-h1: 70px / 88.2px / Bold (700)
- text-h2: 58px / 73.1px / Bold (700)
- text-h3: 52px / 65.5px / Medium (500)
- text-h4: 44px / 55.4px / Bold (700)
- text-h5: 32px / 40.3px / Bold (700)
- text-h6: 28px / 37px / Bold (700)
- text-body: 18px / 28px / Light (300), #232323
- text-label-l1: 22px / 27.7px / Regular (400)
- text-label-l1-medium: 22px / 27.7px / Medium (500)
- text-label-l2: 18px / 23.6px / Regular (400)
- text-label-l3: 15.6px / 19.7px / Regular (400)
- text-eyebrow: 16px / 20.2px / Regular (400) / UPPERCASE / letter-spacing 18% / color #888780
- text-button: 21.9px / 32.8px / Regular (400)

### Key Design Rules
- NEVER add border-radius to images in code — all exported images have their own rounded corners
- Content column: max-width 930px, centered, px-16 padding
- Hero is full-bleed (breaks out of the 930px column)
- Turbopack disk cache is disabled in next.config.ts (prevents stale CSS)
- If CSS changes don't appear: stop dev server (Ctrl+C), restart with npm run dev

## Component Library (all in /components, registered in mdx-components.tsx)

### Layout/Structure
- Nav — site-wide nav bar (in layout.tsx), static (not sticky), logo.svg at 60px, Work/About Me/Resume/LinkedIn links
- Footer — "use client", copy email button (simikaurb26@gmail.com), LinkedIn/Photography/Goodreads links, credit line
- CaseStudyNav — sticky side nav for case studies, dot-grows-to-line active state, uses --case-accent for active color, appears after hero scrolls out of view

### Case Study Components
- Hero — full-screen hero with centered title banner (uses var(--case-accent) for banner background), optional logo above banner, two side images peeking from bottom corners OR centered hero image, ChevronDown bounce, parallax scroll on images, live preview link with optional icon. Needs "use client".
- ContextBlock — Timeline/Role/Team/Tech Stack columns + overview paragraph. Tech Stack renders logo chips (40×40px rounded squares). Shared logos at public root.
- SectionHeader — eyebrow (text-eyebrow, #888780) + heading (text-h* style, #232323). Both props, eyebrow optional.
- CaseImage — full-width image with optional caption. No border-radius added in code.
- TwoUp — two equal images side by side with per-image captions. Mobile stacks.
- ThreeUp — three equal images side by side with per-image captions. Mobile stacks.
- BeforeAfter — two images with "Before"/"After" labels. Uses TwoUp internally.
- RefinementBlock — large muted number (navy at 50% opacity) + body-size heading + optional BeforeAfter below.
- CaseVideo — autoplay/muted/loop/controls video player. Videos are hosted on Vimeo (not local) — use FigmaEmbed with Vimeo src for video embeds.
- FigmaEmbed — responsive iframe for Figma prototypes and Vimeo videos. Uses padding-top aspect ratio technique.
- EmphasisLine — centered text between two grey rules (#BBBDBC), 50px inset both sides, Regular weight, #363636.
- QuoteCluster — row of five 185×185px angled sticky-note quote cards with pastel colors.
- Button — layered push-back hover effect. Black border (#232323) on front card, --case-accent offset block behind. Text color prop (default #232323). Needs "use client" or pure CSS hover.
- OutcomeBanner — static raised card (same layered style as Button but full width). Black border, --case-accent offset block. White text inside (overrides heading color). Not interactive.
- DesignChallenge — raised card with icon + "Design Challenge" H6 label + body text. Black border, --case-accent offset block. Icon at 48×48px. design-challenge-icon.svg is at /compare-formulas/design-challenge-icon.svg.
- FeatureScreenshot — text left (~1/3) + image right (~2/3), stacked blocks. No shadow on image container.
- GroupedPoints — data-driven groups with heading + two-column item rows. Items can use emoji OR imageSrc for icon.
- WorkSection — Grid of CaseStudyCard components. Row 1: Acorns (full-width, col-span-2, layout="horizontal"). Row 2: Sample CSI + PML (side-by-side, layout="vertical"). Accepts optional "exclude" prop to filter out current page's card. Has id="work" anchor.
- CaseStudyCard — Card with #FBFBFB background, natural shadow (0 4px 24px rgba(0,0,0,0.08)), border-radius 16px, no offset block, no border. Framer Motion whileHover: scale 1.012, y -6, deeper shadow. Spring transition (stiffness 150, damping 22, mass 1). Two layouts: "vertical" (default) — video top (260px height) + text bottom, 24px gap; "horizontal" — text left (45%) + video right (55%), h-315px. Props: company, heading, description, videoSrc, videoPosition, layout, fullWidth, href. Needs "use client".
- Bio — short/long toggle with terracotta highlight fade-in on long text. Photo left, text right. Needs "use client".
- ShelfDisplay — About page interactive shelf. Three shelves × 2 objects on left, spotlight shelf on right. Click object → animates to spotlight using Framer Motion layoutId. Six objects: Camera, Logo (/logo.svg), Bread, DJ Board, Menu, Books. Modals with photo placeholders and links. Needs "use client".
- HomeIntro — six full-screen scroll sections with Framer Motion animations and pop-up illustrations. First-time vs returning visitor detection via localStorage. Section 1 has word assembly animation. Needs "use client".

## Case Studies Built
1. /sample-csi — Sample CSI (accent: navy #1B2D4F). Vimeo videos for research-overview, final-outcome, ai-feature. Live preview: https://amulyavw02.github.io/samplecsi/
2. /compare-formulas — Compare Formulas / PML (accent: blue #6494CE). PML logo at 186×52.76px. No live preview link.
3. /acorns — Acorns (accent: green #6EC739). Acorns logo at 186×40px. Figma embed for final outcome. Figma preview icon instead of GitHub.

## Pages Built
- / — Homepage: HomeIntro (6 screens) + WorkSection (3 cards: Sample CSI, Compare Formulas, Acorns)
- /about — About page: Bio (with photo) + ShelfDisplay
- /photography — Photography page: masonry grid of 36 photos with lightbox on click
- /sample-csi, /compare-formulas, /acorns — Case studies

## Still To Build
- Anand case study (/anand)
- Fourth WorkSection card (Anand)
- Nav links: Work → /#work, About Me → /about, LinkedIn → [URL needed]
- Stellantis "More Projects" section
- Mobile responsiveness polish pass
- Animation polish pass

## Conventions & Gotchas
- Dynamic colors from props CANNOT use interpolated Tailwind classes — use inline styles or CSS variables
- Event handlers (onMouseEnter etc.) require "use client" — prefer pure CSS hover with Tailwind group-hover when possible
- CSS changes not showing? Restart dev server — Turbopack cache issue
- large video files will break git push — videos stay local only, never commit *.mp4
- Next.js Image component needs explicit width/height or fill prop
- Scroll-to-top on navigation: ScrollToTop component in layout.tsx using useLayoutEffect
- Page always starts at top: CaseStudyCard has onClick window.scrollTo(0,0)
- Smooth scroll: scroll-behavior: smooth on html in globals.css
- Section anchor offset: scroll-margin-top on section wrappers for side nav jumps