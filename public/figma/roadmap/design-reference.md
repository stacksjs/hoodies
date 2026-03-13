# Roadmap Page - Design Reference

## Source
- Figma File: WP3z9ycJ2jjJbjJZv4lD3l
- Node ID: 223-2408
- URL: https://www.figma.com/design/WP3z9ycJ2jjJbjJZv4lD3l/Hoodratz?node-id=223-2408
- Frame: "Desktop 1920 | Roadmap" (1920x2570)

## Theme Adaptation
Original Figma uses pink theme. Adapted to project purple theme:
- Pink accent #F05B88 → #7b61ff (purple accent)
- Pink gradient dots → purple gradient dots
- Pink timeline line stroke #fae0e9 → lavender rgba(196,181,253,0.5)
- Pink sphere decorations → purple sphere decorations
- Card shadow rgba(245,239,236,1) → rgba(214,209,235,1) (purple-tinted)
- Dot inactive fill #faf3f5 → #ede8ff (light lavender)
- Page background #f9f7f6 → #f4f0fb (project lavender)

## Page Structure

### 1. Hero Section (Group 1824)
- **Watermark**: "Roadmap" text, Kumbh Sans bold ~200px, gradient fill at 60% opacity
- **Label**: "roadmap", Sora 16px, tracking 0.6em, uppercase, accent color
- **Heading**: "Find out what's the plan!", Kumbh Sans 48px bold, #1E2321
- **Subtitle**: "There's a long road ahead, but we like keeping deadlines.", Sora 16px, #6b6b7b
- **Decorations**: Large sphere (left, ~183x190), small sphere (right), diamond icon (right), small ellipses

### 2. Timeline Section (Group 1891)
- **Vertical line**: 1px wide, 1360px tall, stroke color adapted to lavender
- **Container**: Frame 1605, 864px wide, 6 items with 40px gap
- **Each item structure**:
  - Dot: 34x34 circle with checkmark icon inside
  - Number: Sora 16px, accent color (01-06)
  - Date: Sora 14px, #b3b3b3, right-aligned
  - Title: Sora 22px, weight 600, #1e2321
  - Description: Sora 16px, weight 400, #6d6c6c

### 3. Timeline Items (exact Figma content)
1. **01** "First generation drop" - "Launch all 10,000 algorithmically generated Hoodratz to our awesome community." - december 2021
2. **02** "Marketplace integration" - "Buy, sell and trade Hoodratz on nakednft.com and opensea.com" - january 2021
3. **03** "Merch" - "Exclusive Hoodratz merch will be available in our store... Our team has been working on this one a lot so we are sure you will love it!" - February 2021
4. **04** "Lorem ipsum" (card) - Full lorem ipsum paragraph - march 2021
5. **05** "Lorem ipsum" (card) - Shorter lorem ipsum - May 2021
6. **06** "Lorem ipsum" (card) - Shorter lorem ipsum - December 2022

### 4. Card Styling (items 4-6)
- Background: white (#ffffff)
- Border radius: 30px
- Shadow: 6px 30px 100px 5px rgba(245,239,236,1) → adapted to purple tint
- Padding: ~30px internal

### 5. Dot Styling
- **Active (first)**: Radial gradient pink → purple (#b9a6ff → #9b7fff → #7b61ff), white checkmark
- **Inactive (2-6)**: Solid #faf3f5 → #ede8ff, muted checkmark

### 6. Decorative Elements
- **Sphere Group 1819** (left, ~183x190): Radial gradient blob with image texture
- **Sphere Group 1892** (right, ~183x190): Same decoration, mid-page
- **Diamond icon** (id=223:2549, ~73x93): Top-right of hero area
- **Small ellipses**: Various 6-10px circles scattered, colors #c2aa98 and #d5d1eb

## Assets
- /public/figma/roadmap/roadmap-full-page.png - Full page screenshot from Figma
- /assets/diamond-icon.svg - Reused from home page
- Sphere decorations created with CSS gradients (purple-adapted)
