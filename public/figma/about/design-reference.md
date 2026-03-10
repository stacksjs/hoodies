# Hoodratz Figma Design Reference — About Page

**File**: WP3z9ycJ2jjJbjJZv4lD3l
**Page node**: 223-1316 — "Desktop 1920 | About"
**Canvas size**: 1920 x 2296
**Last fetched**: 2026-03-10

---

## Page Structure (full tree)

```
FRAME: Desktop 1920 | About [223:1316] (1920x2296)
├── ELLIPSE: Ellipse 88 [223:1317] (10x10)             ← decorative, rgb(194,170,168)
├── ELLIPSE: Ellipse 92 [223:1318] (6x6)               ← decorative, rgb(194,170,168)
├── ELLIPSE: Ellipse 86 [223:1319] (10x10)             ← decorative, gradient fill
├── ELLIPSE: Ellipse 109 [223:1320] (10x10)            ← decorative, gradient fill
├── ELLIPSE: Ellipse 107 [223:1321] (10x10)            ← decorative, gradient fill
│
├── GROUP: menu [223:2400] (1920x100)                   ← Navigation
│   ├── RECTANGLE: Rectangle 251 [223:2401] (1920x100) ← bg: linear-gradient white 40%→10%
│   ├── FRAME: Frame 1609 [223:2402] (355x34)          ← nav links
│   │   ├── INSTANCE: menu_item "Home" (Sora/14/400, white)
│   │   ├── INSTANCE: menu_item "About" (Sora/14/400, #F05B88, active w/ underline)
│   │   ├── INSTANCE: menu_item "Roadmap" (Sora/14/400, white)
│   │   └── INSTANCE: menu_item "Merch" (Sora/14/400, white)
│   └── TEXT: "HoodRatZ" [223:2407] (Gilam/20/700, #1E2321, tracking 11.8px, uppercase)
│
├── TEXT: About [223:2345] (621x254)                    ← watermark (Kumbh Sans/205/700, gradient, 60% opacity)
├── ELLIPSE: Ellipse 78 [223:2347] (33x33)             ← decorative, gradient fill
│
├── GROUP: Group 1824 [223:2348] (819x460)             ← "The Hoodratz Story" section
│   ├── TEXT: "About" [223:2351] (98x22)               ← section label (Sora/16/400, #F05B88, uppercase, tracking 9.6px)
│   ├── TEXT: "The Hoodratz story" [223:2349] (447x60) ← heading (Kumbh Sans/48/700, #1E2321)
│   ├── TEXT: description [223:2350] (568x330)          ← body (Sora/16/400, #6D6C6C)
│   │   "Hoodratz are uniquely generated, cute and collectible rats with proof of
│   │    ownership stored on the Solana blockchain. All individual pieces of the
│   │    Hoodratz world have been created by hand and algorithmically generated
│   │    using custom code. There are 165 attributes across 18 categories..."
│   └── GROUP: Group 1819 [223:2352] (183x189)         ← cone/teardrop decorative shape
│
├── GROUP: Group 1823 [223:2267] (463x534)             ← Main character card (tilted)
│   └── GROUP: Group 1812 [223:2268] (463x534)
│       ├── RECTANGLE: card outer border [223:2269] (458x531)
│       ├── RECTANGLE: card inner bg [223:2270] (457x528)
│       ├── GROUP: Mask Group [223:2271] (457x528)      ← character image mask
│       ├── VECTOR: gradient overlay [223:2325] (366x188)
│       ├── TEXT: "Hoodrat #6498" (Sora/13.4/400, #B3B3B3)
│       ├── TEXT: "Minnie" (Sora/16.8/400, #1E2321)
│       ├── RECTANGLE: star bg [223:2328] (42x42, #D5D1EB, rounded)
│       ├── INSTANCE: star icon [223:2329] (20x20)
│       ├── RECTANGLE: character image [223:2330] (312x335)
│       └── GROUP: g892 [223:2331] (412x410)           ← character SVG art
│
├── GROUP: Mask Group [223:1358] (513x513)             ← Circular character gallery
│   ├── ELLIPSE: circle mask [223:1359] (513x513)
│   └── GROUP: Group 1881 [223:1360] (1142x1305)       ← 9 character cards in grid
│       ├── GROUP: Group 1823 [223:1361] (349x403)     ← "Josephine" card
│       ├── GROUP: Group 1878 [223:1613] (349x403)     ← "Josephine" card
│       ├── GROUP: Group 1875 [223:1865] (349x403)     ← "Josephine" card
│       ├── GROUP: Group 1873 [223:2117] (349x403)     ← "Thomas" card
│       ├── GROUP: Group 1879 [223:2142] (349x403)     ← "Thomas" card
│       ├── GROUP: Group 1874 [223:2167] (349x403)     ← "Thomas" card
│       ├── GROUP: Group 1880 [223:2192] (349x403)     ← "Thomas" card
│       ├── GROUP: Group 1876 [223:2217] (349x403)     ← "Thomas" card
│       └── GROUP: Group 1877 [223:2242] (349x403)     ← "Thomas" card
│
├── GROUP: Group (abstract shape) [223:2365] (247x248) ← decorative vectors
│   ├── VECTOR: Vector [223:2366] (162x161)
│   ├── VECTOR: Vector [223:2367] (128x107)
│   ├── VECTOR: Vector [223:2368] (176x147)
│   └── VECTOR: Vector [223:2369] (176x178)
│
├── TEXT: The team [223:2346] (924x254)                 ← watermark (Kumbh Sans/205/700, gradient, 60% opacity)
├── ELLIPSE: Ellipse 108 [223:2360] (10x10)            ← decorative
├── ELLIPSE: Ellipse 120 [223:2370] (9x9)              ← decorative, rgb(213,209,235)
├── ELLIPSE: Ellipse 121 [223:2371] (9x9)              ← decorative, rgb(213,209,235)
│
├── GROUP: Group 1606 [223:2361] (577x208)             ← "The Team" section header
│   ├── TEXT: "The team" [223:2364] (149x22)           ← section label (Sora/16/400, #F05B88, uppercase, tracking 9.6px)
│   ├── TEXT: "Who's behind it all?" [223:2362] (447x60) ← heading (Kumbh Sans/48/700, #1E2321)
│   └── TEXT: description [223:2363] (577x90)           ← body (Sora/16/400, #6D6C6C)
│       "We are a small group of friends with the same vision and goal.
│        Our core principles have always been to deliver the best possible
│        NFT user experience from launch as well as creating collectible
│        art with utility."
│
├── GROUP: Group 1898 — Chris [223:2372] (300x275)     ← Team card
│   ├── RECTANGLE: bg (300x275, #FDFCFB, corner: 30px)
│   ├── TEXT: "Chris" (Kumbh Sans/28/600, #1E2321)
│   ├── TEXT: "CEO" (Sora/16/400, #6D6C6C)
│   ├── RECTANGLE: avatar (80x80)
│   └── INSTANCE: Twitter icon (24x24)
│
├── GROUP: Group 1899 — Avery [223:2378] (300x275)     ← Team card
│   ├── RECTANGLE: bg (300x275, #FDFCFB, corner: 30px)
│   ├── TEXT: "Avery" (Kumbh Sans/28/600, #1E2321)
│   ├── TEXT: "PM" (Sora/16/400, #6D6C6C)
│   ├── RECTANGLE: avatar (80x80)
│   ├── INSTANCE: Twitter icon (24x24)
│   └── INSTANCE: LinkedIn icon (24x24)
│
├── GROUP: Group 1900 — Kyle [223:2385] (300x275)      ← Team card
│   ├── RECTANGLE: bg (300x275, #FDFCFB, corner: 30px)
│   ├── TEXT: "Kyle" (Kumbh Sans/28/600, #1E2321)
│   ├── TEXT: "Developer" (Sora/16/400, #6D6C6C)
│   ├── RECTANGLE: avatar (80x80)
│   ├── INSTANCE: Twitter icon (24x24)
│   └── INSTANCE: LinkedIn icon (24x24)
│
├── GROUP: Group 1901 — Denis [223:2392] (300x275)     ← Team card
│   ├── RECTANGLE: bg (300x275, #FDFCFB, corner: 30px)
│   ├── TEXT: "Denis" (Kumbh Sans/28/600, #1E2321)
│   ├── TEXT: "Design" (Sora/16/400, #6D6C6C)
│   ├── GROUP: avatar group (80x80)
│   └── INSTANCE: LinkedIn icon (24x24)
│
├── GROUP: footer [223:1322] (1920x276)
│   └── GROUP: Group 1850 [223:1323] (1920x276)
│       ├── VECTOR: Rectangle 262 [223:1324] (1920x276)  ← white bg shape
│       ├── RECTANGLE: Rectangle 263 [223:1325] (755x218) ← pink accent block (#F05B88)
│       ├── TEXT: "© 2021 Hoodratz Inc." (Sora/12/400, #B3B3B3)
│       ├── TEXT: "HoodRatZ" (Gill Sans/22.3/400, white, tracking 13.14px)
│       ├── GROUP: Group 1837 — social icons [223:1328] (224x64)
│       │   ├── GROUP: Discord (64x64)
│       │   ├── GROUP: Twitter (64x64)
│       │   └── GROUP: Instagram (64x64)
│       ├── GROUP: Group 1840 — COMPANY links [223:1344] (77x106)
│       │   ├── TEXT: "COMPANY" (Sora/14/400, #6D6C6C, uppercase)
│       │   ├── TEXT: "About" (Sora/12/400, #1E2321)
│       │   └── TEXT: "Roadmap" (Sora/12/400, #1E2321)
│       ├── GROUP: Group 1839 — HOODRATZ links [223:1348] (85x106)
│       │   ├── TEXT: "HOODRATZ" (Sora/14/400, #6D6C6C, uppercase)
│       │   ├── TEXT: "Attributes" (Sora/12/400, #1E2321)
│       │   └── TEXT: "Merch" (Sora/12/400, #1E2321)
│       ├── GROUP: Group 1841 — POLICIES links [223:1352] (238x106)
│       │   ├── TEXT: "POLICIES" (Sora/14/400, #6D6C6C, uppercase)
│       │   ├── TEXT: "Privacy policy" (Sora/12/400, #1E2321)
│       │   ├── TEXT: "Cookie policy" (Sora/12/400, #1E2321)
│       │   └── TEXT: "Connect" (Sora/14/400, #6D6C6C, uppercase)
│       └── TEXT: description (Sora/12/400, #FAE0E9)
```

---

## Typography

| Element | Font | Size | Weight | Letter Spacing | Text Case | Color |
|---|---|---|---|---|---|---|
| Nav logo | Gilam | 20 | 700 | 11.8px | uppercase | #1E2321 |
| Nav links | Sora | 14 | 400 | 0.14px | — | white (inactive) / #F05B88 (active) |
| Section label | Sora | 16 | 400 | 9.6px (0.6em) | uppercase | #F05B88 |
| Section heading | Kumbh Sans | 48 | 700 | 0.48px | — | #1E2321 |
| Body text | Sora | 16 | 400 | 0.16px | — | #6D6C6C |
| Watermark text | Kumbh Sans | 205 | 700 | 2.05px | — | gradient fill, 60% opacity |
| Team card name | Kumbh Sans | 28 | 600 | 0.28px | — | #1E2321 |
| Team card role | Sora | 16 | 400 | 0.16px | — | #6D6C6C |
| Character card ID | Sora | 13.4 | 400 | 0.13px | — | #B3B3B3 |
| Character card name | Sora | 16.8 | 400 | 0.17px | — | #1E2321 |
| Footer logo | Gill Sans | 22.3 | 400 | 13.14px | uppercase | white |
| Footer links heading | Sora | 14 | 400 | 0.14px | uppercase | #6D6C6C |
| Footer links | Sora | 12 | 400 | 0.12px | — | #1E2321 |
| Footer description | Sora | 12 | 400 | 0.12px | — | #FAE0E9 |
| Copyright | Sora | 12 | 400 | 0.12px | — | #B3B3B3 |

---

## Color Palette

| Name | Value | Usage |
|---|---|---|
| Page background | #F9F7F6 | Main page bg (warm beige) |
| Dark | #1E2321 | Primary text |
| Muted | #6D6C6C | Secondary text, footer link headings |
| Accent (pink) | #F05B88 | Section labels, active nav, footer accent block |
| Lavender | #D5D1EB | Star icon bg, decorative ellipses |
| Card bg | #FDFCFB | Team card backgrounds |
| Card corner radius | 30px | Team card border-radius |
| Footer pink | #F05B88 | Footer accent block |
| Footer desc text | #FAE0E9 | Footer description text |
| Copyright gray | #B3B3B3 | Copyright text, character card IDs |
| Decorative ellipse warm | rgb(194,170,168) | Some decorative dots |
| Decorative ellipse cool | rgb(213,209,235) | Some decorative dots |

### Differences from Home Page
| Property | Home Page | About Page |
|---|---|---|
| Page background | #F4F0FB (lavender) | #F9F7F6 (warm beige) |
| Accent color | #7B61FF (purple) | #F05B88 (pink) |
| Footer accent block | #5E3EA2 (deep purple) | #F05B88 (pink) |
| Nav logo font | Gill Sans/22.3/400 | Gilam/20/700 |
| Card bg | #FFFFFF | #FDFCFB |

### Watermark Gradient
```
linear-gradient(~135deg, gradient stops with 60% opacity)
Same gradient style as Home page but applied to "About" and "The team" watermarks
```

### Menu Background Gradient
```
linear-gradient(top-left to bottom-right,
  rgba(255, 255, 255, 0.4) 0%,
  rgba(255, 255, 255, 0.1) 100%
)
```

---

## Fonts Required (Google Fonts)

```
Kumbh Sans: 600, 700
Sora: 400
Gilam: 700 (nav logo — may need self-hosting)
Gill Sans: system font (Gill Sans, Gill Sans MT, Calibri, sans-serif) — footer logo
```

---

## Exported Assets (in public/figma/about/assets/)

| File | Source Node | Format | Description |
|---|---|---|---|
| full-page-reference.png | 223:1316 | PNG | Full page render at 0.5x scale |
| character-card.svg | 223:2267 | SVG | Main tilted character card "Minnie" (463x534) |
| character-card.png | 223:2267 | PNG | Main tilted character card at 2x |
| character-gallery-circle.svg | 223:1358 | SVG | Circular masked gallery of 9 character cards (513x513) |
| character-gallery-circle.png | 223:1358 | PNG | Circular gallery at 2x |
| cone-shape.svg | 223:2352 | SVG | Cone/teardrop decorative shape (183x189) |
| abstract-shape.svg | 223:2365 | SVG | Abstract decorative vectors (247x248) |
| team-chris.png | 223:2372 | PNG | Team card — Chris, CEO (300x275) at 2x |
| team-avery.png | 223:2378 | PNG | Team card — Avery, PM (300x275) at 2x |
| team-kyle.png | 223:2385 | PNG | Team card — Kyle, Developer (300x275) at 2x |
| team-denis.png | 223:2392 | PNG | Team card — Denis, Design (300x275) at 2x |

---

## Section Details

### Navigation (menu, 1920x100)
- Semi-transparent white gradient background (40%→10% opacity)
- "HoodRatZ" logo: Gilam 20px bold, #1E2321, tracking 11.8px, uppercase
- Nav links: Home, **About** (active, pink #F05B88 with underline indicator), Roadmap, Merch
- Inactive links: Sora 14px, white
- Active link: Sora 14px, #F05B88 with bottom underline/dot

### About Section (Group 1824, 819x460)
- "About" watermark text: Kumbh Sans 205px, gradient fill, 60% opacity
- Label: "ABOUT" (Sora 16px, #F05B88, uppercase, letter-spacing 9.6px)
- Heading: "The Hoodratz story" (Kumbh Sans 48px bold, #1E2321)
- Body: Long description about Hoodratz (Sora 16px, #6D6C6C, 568px wide)
  - Mentions: 165 attributes, 18 categories, 10,000 minted, Solana blockchain
- Cone/teardrop decoration (183x189) positioned to the right

### Character Card (Group 1823, 463x534)
- Tilted/rotated card showing "Minnie" character
- Double-border card frame (outer + inner rectangles)
- Character image with gradient overlay at bottom
- Card info: "Hoodrat #6498" (muted) + "Minnie" (dark)
- Star icon in purple circle (42x42, #D5D1EB background)
- Positioned overlapping the About section

### Character Gallery Circle (Mask Group, 513x513)
- Circular clipping mask (513px diameter)
- Contains a 3x3 grid of smaller character cards (349x403 each)
- Cards feature "Josephine" and "Thomas" characters
- Each mini-card has: character image, name, ID, star icon
- Creates a collage/mosaic effect within the circle

### Abstract Shape (Group, 247x248)
- 4 overlapping vector shapes creating an abstract decorative element
- Positioned between the About and Team sections

### The Team Section (Group 1606, 577x208)
- "The team" watermark text: Kumbh Sans 205px, gradient fill, 60% opacity
- Label: "THE TEAM" (Sora 16px, #F05B88, uppercase, letter-spacing 9.6px)
- Heading: "Who's behind it all?" (Kumbh Sans 48px bold, #1E2321)
- Body: Description about the team (Sora 16px, #6D6C6C)

### Team Member Cards (4x, 300x275 each)
- Card style: #FDFCFB background, 30px border-radius
- Layout: avatar (80x80 circle) + name + role + social icons
- Members:
  1. **Chris** — CEO (Twitter)
  2. **Avery** — PM (Twitter + LinkedIn)
  3. **Kyle** — Developer (Twitter + LinkedIn)
  4. **Denis** — Design (LinkedIn)
- Name: Kumbh Sans 28px semibold, #1E2321
- Role: Sora 16px, #6D6C6C
- Social icons: 24x24

### Footer (1920x276)
- Same structure as Home page footer
- Key difference: accent block is pink (#F05B88) instead of purple (#5E3EA2)
- "HoodRatZ" logo: Gill Sans 22.3px, white, tracking 13.14px
- Description: Sora 12px, #FAE0E9
- Social icons: Discord, Twitter, Instagram (64x64 circles)
- Link columns: COMPANY (About, Roadmap), HOODRATZ (Attributes, Merch), POLICIES (Privacy, Cookie) + Connect
- Copyright: "© 2021 Hoodratz Inc. All right reserved" (Sora 12px, #B3B3B3)

---

## Figma API Info

- **File ID**: WP3z9ycJ2jjJbjJZv4lD3l
- **Page node**: 223-1316
- **Figma link**: https://www.figma.com/design/WP3z9ycJ2jjJbjJZv4lD3l/Hoodratz?node-id=223-1316
- **API base**: https://api.figma.com/v1
- **Endpoints used**:
  - `GET /files/{fileId}/nodes?ids=223-1316&depth=10` — node tree + styles
  - `GET /images/{fileId}?ids={nodeIds}&format=svg` — SVG export
  - `GET /images/{fileId}?ids={nodeIds}&format=png&scale=2` — PNG export at 2x
