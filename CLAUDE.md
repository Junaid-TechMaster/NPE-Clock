# NPE-Clock — Claude Code Reference

## What This Project Is
Corporate website for **New Precision Engineering (NPE)**, a Pakistani clock manufacturing company founded in 1940. The site showcases their tower clocks, floral garden clocks, and other architectural timepieces, and captures leads via contact forms.

**Live stack:** React 19 + Vite 8 + Tailwind CSS 4 + Framer Motion 12 + React Router 7

---

## Dev Commands
```bash
npm run dev       # start Vite dev server (localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview production build
npm run lint      # ESLint
```

---

## Directory Structure
```
src/
├── App.jsx              # Slim router — only holds dark-mode state + Route wiring
├── main.jsx             # React entry point
├── data/
│   └── index.js         # ALL business data + ALL image imports/exports
├── utils/
│   └── animations.js    # Shared Framer Motion variants (fadeInUp, staggerContainer)
├── components/
│   ├── Navbar.jsx        # Fixed floating pill nav; receives isDarkMode + setIsDarkMode as props
│   ├── Footer.jsx        # 4-col footer with WhatsApp card
│   ├── Icons.jsx         # SVG icons: WhatsAppIcon, FacebookIcon, InstagramIcon, LinkedinIcon
│   ├── SEO.jsx           # react-helmet wrapper
│   └── ScrollToTop.jsx   # Scroll to top on route change (must be inside <Router>)
├── pages/
│   ├── Home.jsx          # 6 sections (see below)
│   ├── About.jsx         # Tabbed intro/mission/vision + 4 stat cards
│   ├── Products.jsx      # 8-product grid with 3D tilt
│   ├── Legacy.jsx        # Founder tabs + awards grid
│   ├── Projects.jsx      # 82-entry installation list with hover image preview
│   └── Contact.jsx       # Full contact form (Formspree)
└── images/
    ├── image1.png  → Tower Clock (towerClockImage)
    ├── image2.png  → Tower Clock 2 (towerClockImage2)
    ├── image3.png  → Floral Garden Clock (FlowerClockImage)
    ├── image4.jpg  → Monumental Clock (MonumentalClockImage)
    ├── image5.png  → Intelligent Clock (IntelligentClockImage)
    ├── image6.jpg  → Skeleton Dial Clock (SkeletonClockImage)
    ├── image7.png  → Hero section image (Herosectionimage)
    └── image8.png  → Legacy/founder image (Legacyimage1)
```

---

## Homepage Sections (Home.jsx) — in order
1. **HeroSlider** — 4 slides with 3D title entrance, auto-advances every 5s
2. **FeaturedProducts** — first 3 products from `products[]`, hover-reveal overlay
3. **ProjectsCarousel** — 5 featured installations, image LEFT / details RIGHT, 3D page-flip between slides, auto every 6s
4. **AwardsInstallations** — 4 stat cards (200+, etc.) + 2 hover-reveal panels
5. **Testimonials** — 4 client quotes, carousel auto every 5s
6. **HomeContact** — Formspree contact form

---

## Data Layer (`src/data/index.js`)
Single source of truth — import everything from here, never directly from `../images/`.

| Export | Type | Used by |
|---|---|---|
| `products` | array[8] | Home, Products |
| `founders` | array[3] | Legacy |
| `installedProjects` | array[82] | Projects |
| `featuredProjects` | array[5] | Home carousel |
| `testimonials` | array[4] | Home |
| `projectImages` | object | Projects hover preview |
| `towerClockImage` … `Legacyimage1` | image URLs | Any page |

### `projectImages` — projects with dedicated hover photos
```js
'Punjab Civil Secretariat Lahore (1951)' → image1.png
'G.H.Q Rawalpindi (1984)'               → image2.png
'Baharia Town Islamabad (2007)'          → image3.png
'NUST EME Islamabad (2022)'             → image6.jpg
'Central Park Lahore (2024)'            → image4.jpg
'New Islamabad International Airport Terminal (2026)' → image5.png
```
All other projects in the list fall back to a default Unsplash clock image on hover.

---

## Design System

| Token | Value |
|---|---|
| Brand yellow | `#EAB308` (Tailwind `yellow-500`) |
| Light bg | `#FFFDF9` |
| Dark bg | `bg-gray-950` |
| Font | System sans-serif (`font-sans`) |
| Heading style | `uppercase tracking-widest font-bold` |

**Dark mode** — class-based (`dark` on `<html>`). Toggled in `App.jsx` via `document.documentElement.classList`. The toggle button lives in `Navbar.jsx` (both desktop and mobile). Pass `isDarkMode` / `setIsDarkMode` props down from App → Navbar.

**Responsive breakpoints** — standard Tailwind: `sm` 640px, `md` 768px, `lg` 1024px. All pages have `pt-28` to clear the fixed navbar. Mobile-first everywhere.

---

## 3D Animation Patterns
All 3D effects use Framer Motion's `transformPerspective` (applied per-element, not on parent):

```jsx
// Card tilt on hover
whileHover={{ rotateX: -5, rotateY: 8, scale: 1.03, transition: { duration: 0.3 } }}
style={{ transformPerspective: 800 }}

// Stat flip entrance on scroll
initial={{ opacity: 0, rotateY: -90 }}
whileInView={{ opacity: 1, rotateY: 0 }}
transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
viewport={{ once: true }}
style={{ transformPerspective: 700 }}

// Section title 3D entrance
initial={{ opacity: 0, rotateX: 20, y: 20 }}
whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
transition={{ duration: 0.7 }}
style={{ transformPerspective: 1200 }}
```

Shared variants live in `src/utils/animations.js` (`fadeInUp`, `staggerContainer`).

---

## Hover Image Preview (Projects Page)
`Projects.jsx` tracks `hovered` (project name string) and `pos` (cursor x/y). A `fixed` Framer Motion div follows the cursor and shows a 160×140 image card. Projects with a key in `projectImages` get a real photo + "Photo" badge; others get the default Unsplash image.

---

## External Services
| Service | Purpose | Config |
|---|---|---|
| **Formspree** `xdabypko` | Contact form backend | `action="https://formspree.io/f/xdabypko"` in Contact.jsx + HomeContact in Home.jsx |
| **Unsplash** | Fallback/placeholder images | Used for Bracket Clocks, Marker, Canister products + hover fallback |

**WhatsApp number:** `+92 300 4455252` → `https://wa.me/923004455252`

---

## Key Stats (used everywhere — keep consistent)
| Stat | Value |
|---|---|
| Founded | 1940 |
| Years active | 80+ |
| Total installations | **200+** |
| Global awards | 2 |
| Latest project year | **2026** |
| First installation | 1951 |

---

## Business Content Summary
- **Company:** New Precision Engineering (formerly Pioneer Watch Co.)
- **Founders:** Waheed-ud-din (1940s–1985) → Nasir-ud-din (1985–2008) → Sami-ud-din (current)
- **Awards:** US Army Recognition 1942–1945 (first 24-hr analogue clock in Asia), Asia Award 1987
- **Products (8):** Tower Clocks, Bracket Clocks, Marker & Silhouette, Skeleton Dial, Floral Garden, Monumental, Canister (Drum), Intelligent & Custom
- **Notable projects:** Punjab Civil Secretariat (1951), GHQ Rawalpindi (1984), Baharia Town (2007), NUST EME (2022), Central Park Lahore (2024), New Islamabad Airport (2026)
