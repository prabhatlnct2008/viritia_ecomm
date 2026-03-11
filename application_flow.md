# Viritia Website — Full Application Flow, Product Spec, and AI Build Document

## 1. Purpose of this document

This document is the complete build specification for the **Viritia** website.

It is written so that:

* another AI can use it to build the website end to end,
* a developer can implement it directly,
* the brand owner can update product images and key visuals without rewriting code,
* the site can be deployed easily on **Vercel**,
* the website can function as a **frontend-only premium storefront and Meta ads landing destination** for validating order demand.

This spec intentionally **avoids backend scope for now**. The initial version should be optimized for:

* premium visual perception,
* fast page loads,
* strong conversion from Meta ads traffic,
* WhatsApp-led order capture,
* cart-based browsing without login,
* easy asset swapping through JSON.

---

## 2. Product objective

### Primary objective

Build an **ultra-premium, luxury-feeling, trust-building bedsheet brand website** for Viritia that can receive traffic from Meta ads and convert visitors into:

* WhatsApp purchase inquiries,
* product interest submissions,
* cart intent,
* contact form leads.

### Secondary objective

Create a structure that is easy to scale later into:

* checkout,
* backend inventory,
* order management,
* CMS,
* CRM sync,
* performance analytics.

### Current release philosophy

This release is **not a full ecommerce backend**.

This release is a **high-conviction premium storefront MVP** with:

* luxury brand pages,
* collections page,
* product detail pages,
* client-side cart,
* WhatsApp purchase CTA,
* inquiry capture,
* size guide,
* trust and brand-story sections.

---

## 3. Recommended implementation stack

Although the original brief referenced React + Vite + Base44, the best implementation for the current use case is:

### Recommended stack for Vercel

* **Framework:** Next.js 14+ with App Router
* **Frontend:** React
* **Styling:** Tailwind CSS
* **UI primitives:** shadcn/ui where useful
* **Animation:** Framer Motion
* **Icons:** Lucide React
* **State:** React Context + useReducer or Zustand for cart/UI state
* **Data source:** local JSON / TypeScript config files
* **Images:** files stored in `/public` and referenced via a JSON image registry
* **Deployment:** Vercel

### Why Next.js is preferred over Vite here

* Better fit for Vercel deployment
* Cleaner routing for Home / Collections / Product / About / Contact
* Easier image optimization with `next/image`
* Better performance for paid ad landing traffic
* Simpler future expansion into SEO pages, PDPs, blog/content, and server features
* Better separation of route-level layout and section-level components

### No backend for now

Do **not** include backend-specific scope in this implementation.
Avoid:

* auth,
* admin panel,
* database setup,
* inventory sync,
* payment gateway,
* order service,
* user accounts,
* backend file storage,
* API-first architecture unless needed later.

### Current data persistence approach

* Product data: local JSON
* Asset/image mapping: local JSON
* Cart: browser localStorage or session-based persisted client state
* Contact form: frontend-only UI spec for now; submission handler can later be wired to email/form service
* WhatsApp CTA: direct deep link with prefilled message

---

## 4. Positioning and brand feel

The website must feel:

* **ultra premium**,
* calm,
* refined,
* editorial,
* hotel-luxury inspired,
* minimal but not plain,
* warm and sophisticated,
* modern Indian luxury rather than flashy mass-market ecommerce.

### Emotional cues to evoke

* quiet luxury
* comfort with status
* elevated domestic living
* softness and elegance
* trust in quality and craftsmanship
* premium gifting value

### Visual personality

The design should feel like a blend of:

* luxury hospitality brand
* premium interior decor brand
* fashion editorial restraint
* premium D2C home label

### Important caution

The site must **not** feel like:

* a discount bedding marketplace,
* generic Shopify template,
* cluttered ecommerce catalog,
* overly colorful Amazon-style listing experience,
* feature-heavy dashboard.

---

## 5. Design system

## 5.1 Fonts

Use:

* **Cormorant Garamond** for headings, luxury display text, section titles, hero lines
* **Inter** for body copy, buttons, labels, metadata, navigation, tables, forms

### Typography behavior

* Headlines should have generous line height and editorial rhythm
* Serif display type should be used sparingly and elegantly
* Body text should be clean, modern, and highly readable
* Section labels should use uppercase tracking for premium feel

### Suggested type scale

* Hero headline: 56–76px desktop, 34–44px mobile
* Page headline: 44–60px desktop, 30–38px mobile
* Section headline: 34–48px desktop, 26–32px mobile
* Card title: 24–30px
* Body: 16–18px
* Small metadata: 12–14px with tracking

---

## 5.2 Brand colors

Use the original palette as the system foundation.

| Token       |       Hex | Usage                                 |
| ----------- | --------: | ------------------------------------- |
| Gold        | `#C5A572` | accents, CTA backgrounds, highlights  |
| Gold Light  | `#D4BC94` | soft premium text on dark backgrounds |
| Charcoal    | `#2C2C2C` | primary text, footer, dark sections   |
| Cream       | `#FAFAF8` | main page background                  |
| Warm Gray   | `#8A8579` | secondary text                        |
| Light Beige | `#F5F3EF` | alternate backgrounds                 |
| Border      | `#E8E6E1` | strokes, separators, cards            |
| White       | `#FFFFFF` | cards, overlays, light surfaces       |

### Additional useful shades

These can be derived in implementation:

* Charcoal soft: `#3A3A3A`
* Dark background richer tone: `#262626`
* Muted gold border: `rgba(197,165,114,0.28)`
* Overlay black: `rgba(20,20,20,0.45)`

---

## 5.3 Surfaces and mood

### Light pages

* Cream background
* Dark serif headlines
* Gold accent words
* Generous whitespace
* Soft beige section alternation

### Dark sections

Used selectively for emphasis:

* footer
* core values area
* selected CTA strips
* brand mood blocks

Must feel warm, not harsh.

---

## 5.4 Layout system

* Max width: `1280px` (`max-w-7xl` equivalent)
* Section padding desktop: `80px–120px` vertical
* Section padding mobile: `48px–72px`
* Horizontal padding mobile: `24px`
* Horizontal padding desktop: `48px`
* Grid gaps must be generous
* Avoid dense layouts

### Border radius

* cards: subtle, `10–16px`
* buttons: mostly square-soft or lightly rounded, not playful pill everywhere
* image containers: refined rounding where needed, but many editorial sections can remain sharp-edged

### Shadows

Very restrained.
Use only soft ambient shadows where useful.
Luxury is created more through spacing, imagery, typography, and composition than through obvious shadows.

---

## 5.5 Motion style

Use motion only to support polish.

### Allowed motion

* fade-up on section entry
* subtle image scale on hover
* soft transitions for tabs/filters
* cart drawer slide-in
* carousel transitions
* button hover shift
* sticky header state transition

### Avoid

* bouncy motion
* aggressive parallax
* over-animated cards
* flashy loaders
* dramatic transforms

---

## 6. Information architecture

## 6.1 Primary routes

### Public routes

* `/` — Home
* `/collections` — Product listing / collection browsing
* `/collections/[slug]` — optional category landing pages later, not required in v1
* `/product/[slug]` — Product detail page
* `/about` — Our Story / brand page
* `/contact` — Contact / inquiry page
* `/cart` — Cart page

### Support sections within pages

* size guide section on collections page
* testimonials section on about page
* packaging section on about page
* trust strip on PDP

---

## 6.2 Navigation structure

### Header

Fixed header with premium behavior.

Menu items:

* Home
* Collections
* Our Story
* Contact
* Cart icon/button with item count

### Header behavior

* Initially transparent over hero where appropriate
* Transitions to cream/light solid on scroll
* Compact sticky behavior allowed
* On mobile: hamburger menu with refined slide-over panel

### Footer

Must include:

* Viritia logo
* tagline: **Soft Spaces. Beautiful Living.**
* short brand description
* Explore links: Home, Collections, Our Story, Contact
* Connect block: Made with love in India, Established 2014
* optional copyright

---

## 7. Application flow overview

## 7.1 Meta ads entry flows

Primary acquisition assumption: users come from Meta ads.

### Ad click landing options

Traffic may land on:

* Home page
* Collections page
* Direct product detail page
* Contact page for inquiry-driven campaign

### Recommended media buying usage

* Broad brand ads → Home
* collection-focused ads → Collections with filter preselected
* product creative ads → direct PDP
* WhatsApp inquiry ads → PDP or Contact page

---

## 7.2 Main customer journeys

### Journey A — browse to WhatsApp purchase

1. User lands on Home or PDP from Meta ad
2. User explores luxury visuals and trust signals
3. User visits product page
4. User reviews images, features, price, delivery trust strip
5. User clicks **Buy on WhatsApp**
6. WhatsApp opens with prefilled message
7. User continues conversation manually

### Journey B — browse multiple items then cart

1. User lands on Collections
2. Filters by collection
3. Opens product page
4. Adds product to cart without login
5. Continues browsing
6. Opens cart
7. Adjusts quantity or clears cart
8. Clicks WhatsApp checkout/inquiry CTA from cart

### Journey C — premium inquiry

1. User lands on Contact or About
2. Builds trust via story, stats, testimonials
3. Fills inquiry form
4. Submission success state shown
5. Team follows up manually later

### Journey D — quality validation

1. User lands on About page from ad or nav
2. Reads story, brand identity, Viritia difference, stats, testimonials, packaging, core values
3. Goes to Collections or Contact

---

## 8. Pages and detailed specifications

# 8.1 Home page (`/`)

## Goal

Introduce the brand, communicate premium quality, surface collections, and push users toward Collections, PDPs, WhatsApp inquiry, or Contact.

## Home page section order

Recommended order:

1. Header
2. Hero section
3. Featured collections / brand category entry
4. Signature value proposition section
5. Featured products / curated selection
6. Brand values / quality markers
7. Testimonial / social proof section
8. Premium packaging / gifting signal
9. CTA band
10. Footer

### Optional note

If creative direction strongly mirrors the screenshots, Home can remain simpler than About. But for ad conversion, Home should include more direct commercial pathways than a pure editorial page.

---

## Home section 1 — Hero

### Purpose

Immediate luxury brand impression.

### Content

* brand logo top-left in header
* hero image or image blend
* eyebrow text, optional
* hero headline, e.g. luxury editorial headline
* supporting subcopy
* CTA button: **Explore Collections**
* secondary CTA: **Shop via WhatsApp** or **View Bestsellers**

### Design requirements

* cinematic, warm, softly lit imagery
* overlay must keep text readable but not kill image richness
* serif headline with one line highlighted in gold italic or gold accent styling

### Interaction

* CTA scrolls or routes to `/collections`

---

## Home section 2 — Featured collections

### Purpose

Quick category entry.

### Collections to show

* Timeless Solids
* Print Story
* Soft Embroidery

### Card contents

* category image
* category title
* 1-line descriptor
* CTA text: Explore Collection

### Interaction

Each card goes to `/collections?collection=timeless-solids` or equivalent query state.

---

## Home section 3 — Brand value / signature quality block

### Purpose

Communicate why Viritia feels superior.

### Example items

* 100% pure cotton or premium fabric story
* luxury weave quality
* meticulous stitching
* elegance for modern Indian homes
* softness + durability + timeless design

### Visual style

Can be 3 or 4 editorial cards or icon-led blocks.

---

## Home section 4 — Featured products

### Purpose

Drive product discovery quickly.

### Display

Show 4–8 featured products from local JSON.

Each card should show:

* product image
* collection label
* name
* color/size summary
* selling price
* strikethrough MRP if available
* add to cart button
* view details button or clickable card

---

## Home section 5 — Social proof

Could be either:

* single large editorial quote, or
* 3-card testimonial strip.

Use the premium tone already present in the mockups.

---

## Home section 6 — CTA section

### Goal

Strong action close.

### Copy style

Examples:

* Experience the Viritia difference
* Discover soft spaces made beautiful

### CTA

* Explore Our Collections
* Shop on WhatsApp

---

# 8.2 Collections page (`/collections`)

## Goal

Act as the main product browsing environment.

## Important update

The old modal-based product detail approach is replaced.
**Clicking a product should open a dedicated Product Detail Page.**
No modal should be used for primary detail browsing in v1.

## Section order

1. Header
2. Page hero/title
3. Filter tabs
4. Product grid
5. Optional sticky toolbar or top controls
6. Size guide section
7. Footer CTA / footer

---

## Collections hero

### Content

* eyebrow text
* page heading such as: Premium Bedsheets for Timeless Living
* supporting luxury line

### Tone

Elegant, minimal, airy.

---

## Filter tabs

### Collections tabs

* All
* Timeless Solids
* Print Story
* Soft Embroidery

### Future optional filters

Not required now, but structure data so they can be added later:

* Size
* Sheet type
* Color family
* Price range

### Behavior

* selected state visually premium, dark or gold-accented
* filter changes client-side
* URL query sync recommended for sharable ad links

Example:

* `/collections?collection=print-story`
* `/collections?collection=timeless-solids&size=king`

---

## Product grid cards

### Required card contents

* main product image
* collection badge
* sheet type badge
* product name
* color + size line
* selling price
* MRP strikethrough
* subtle hover state

### Card interaction

* whole card clickable to PDP
* quick add button optional
* must not open modal

### Product card design notes

* imagery should dominate
* text should be restrained and premium
* pricing should be clearly visible but not discount-store styled
* product labels should look curated, not marketplace-like

---

## Size guide section

Include a dedicated section lower on the collections page.

### Table columns

* Size
* Bedsheet
* Pillow Covers

### Required rows

* Single — 60 x 90 inches (152 x 228 cm) — 18 x 27 inches (46 x 69 cm)
* Queen — 90 x 100 inches (228 x 254 cm) — 18 x 27 inches (46 x 69 cm)
* King — 108 x 108 inches (275 x 275 cm) — 18 x 27 inches (46 x 69 cm)

### Design

* premium, airy table
* light background card
* fine dividers
* strong readability

---

# 8.3 Product Detail Page (`/product/[slug]`)

## Goal

This is the most important conversion page.
It must feel premium, trustworthy, and conversion-ready.

## PDP layout

Recommended desktop layout:

* left: image gallery/carousel
* right: product details, price, trust strip, CTAs

Recommended mobile layout:

* carousel first
* details below
* sticky CTA area optional

---

## PDP section structure

1. Breadcrumbs
2. Main product gallery
3. Product title/details block
4. Features list
5. Delivery info strip
6. CTA area
7. Additional info / care / size / details
8. Related products

---

## Breadcrumbs

Example:

* Home / Collections / Timeless Solids / Cloud Blue Premium

---

## Image carousel

### Required

* multi-image swipeable gallery
* arrow navigation
* dot indicators
* mobile swipe support
* thumbnail rail optional on desktop

### Content source

Must use the product's image key array from JSON registry.

### Behavior

* first image is hero image
* clicking arrows cycles images
* dots show active slide
* image zoom on hover optional, but subtle

---

## Product details block

### Required fields

* Product name
* Collection
* SKU
* Size
* Color
* Thread count
* Weave
* Sheet type
* MRP
* Selling price
* Short product description

### Pricing treatment

* selling price prominent
* MRP smaller, muted, struck through
* no loud discount badge unless brand specifically wants it later

---

## Features list

Display as luxury bullet list.

### Example feature items

* 300 Thread Count / 400 Thread Count
* 100% Pure Cotton
* Percale or Sateen Weave
* Breathable
* Skin Friendly Fabric
* Luxury Hotel Style Drape
* Flat Sheet
* 2 Pillow Covers Included
* Machine Wash Cold
* Made in India

This list must come from product JSON, not hardcoded in component logic.

---

## Delivery info strip

Display prominently below pricing/details.

Required trust badges:

* 🚚 Delivery in 5–7 business days
* 💵 Cash on Delivery available
* 🔁 7-day return policy

### Design

* horizontal strip on desktop
* stacked cards or compact list on mobile
* must be highly visible but elegant

---

## CTA area

### Required CTAs

1. **Add to Cart**
2. **Buy on WhatsApp**
3. Optional secondary CTA: Inquire Now

### Add to Cart behavior

* no login required
* stores data client-side
* supports quantity increment later from cart
* button feedback: Added to cart

### WhatsApp Buy button

Green CTA button.
Must open WhatsApp with a prefilled message.

#### WhatsApp number

`+91 81309 09414`

#### Required prefilled message template

```text
Hi Viritia! I'm interested in buying:
*[Product Name]*
Collection: [Collection]
Color: [Color]
Size: [Size]
Price: ₹[Price]
Please share availability and order details.
```

### WhatsApp link implementation note

Use encoded URL like:
`https://wa.me/918130909414?text=...encodedMessage`

---

## Additional product content

Optional lower sections depending on design richness:

* Product story
* Fabric and weave explanation
* Care instructions
* Size information
* Shipping/returns note
* Related products carousel

At minimum include:

* care instructions
* size summary
* related products

---

# 8.4 Cart page (`/cart`)

## Goal

Allow browsing users to shortlist products and then continue toward WhatsApp ordering.

## Important constraints

* no login
* no backend
* cart is client-side only
* must persist in session/local storage

## Cart behavior requirements

* add item
* remove item
* update quantity
* clear cart
* survive refresh if localStorage-based persistence is used
* handle empty cart state elegantly

## Cart page sections

1. Page title
2. Cart item list
3. Quantity controls
4. Price summary
5. Clear cart button
6. Continue shopping button
7. WhatsApp checkout button

### Cart item card contents

* image
* product name
* collection
* size
* color
* price
* quantity stepper
* remove action

### Summary panel

* subtotal
* total items
* note that final confirmation happens over WhatsApp

### Cart CTA

Button text example:

* Proceed on WhatsApp

### Cart WhatsApp message behavior

If multiple items exist, generate a formatted cart summary:

```text
Hi Viritia! I'm interested in the following items:
1. [Product Name] | Collection: [Collection] | Color: [Color] | Size: [Size] | Qty: [Qty] | Price: ₹[Price]
2. ...
Please share availability and order details.
```

### Empty cart state

Should include:

* editorial empty state line
* CTA to explore collections

---

# 8.5 About page (`/about`)

## Goal

Build trust, premium perception, craftsmanship legitimacy, and brand desirability.

## Section structure based on mocks

1. Hero banner
2. Brand identity section
3. Viritia difference section
4. Trusted by elite clientele stats section
5. Retail/store availability tags
6. Testimonials section
7. Luxury packaging section
8. Core values dark section
9. CTA close
10. Footer

---

## About hero

### Content

* large luxury background image
* logo in nav
* label like Since 2014
* headline like Our Story of Craftsmanship
* supporting line

### Mood

Warm, dark, sophisticated, cinematic.

---

## Brand identity section

### Left side

* eyebrow like Brand Identity
* headline split like Soft Spaces. Beautiful Living.
* body copy about Viritia history, 12 years, affordable luxury, premium quality without premium complexity

### Right side

* lifestyle bed image
* optional overlaid brand line like Crafted for those who choose elegance.

---

## The Viritia Difference section

Three premium cards from the mock:

* Premium Fabrics
* Design Excellence
* Quality Assurance

Each includes:

* image
* title
* short supporting copy

---

## Stats / elite clientele section

Include cards for:

* 50,000+ bedsheets sold
* 85% repeat customers
* 32 retail partners
* 4.9/5 customer rating

These can remain editable in JSON content.

---

## Retail availability tags

Display tags such as:

* South Delhi
* Gurgaon
* Chandigarh

This is brand/trust positioning, not store locator functionality.

---

## Testimonials section

Three premium testimonial cards.
Each includes:

* quote
* name
* location

---

## Luxury packaging section

### Purpose

Position Viritia as gift-worthy and premium on arrival.

### Content

* heading: Luxury Packaging
* supporting copy
* 3 packaging images

---

## Core values section

Dark background section.
Four cards:

* Quality First
* Customer Centricity
* Sustainability
* Timeless Design

Each card contains short description text.

---

## Final CTA

Example:

* Experience the Viritia difference
* Explore our collections

---

# 8.6 Contact page (`/contact`)

## Goal

Let premium-intent users directly contact the brand.

## Section structure

1. Heading area
2. Contact info panel
3. Inquiry form
4. Post-form explanatory section
5. Footer

---

## Contact heading

* large serif heading like We'd Love to Hear from You
* support line about exclusive inquiries, recommendations, product help

---

## Contact info panel

Required fields:

* Email: `support@viritia.in`
* Location line: `Made with love in India`
* Response time: `Within 24–48 hours`

### Style

Dark card panel with icons and premium typography.

---

## Inquiry form

Fields:

* Full Name *
* Email Address *
* Phone Number
* Product Interest
* Your Message *

### Button

* Send Message

### Form handling for current version

Because backend is out of scope, spec should support either of these frontend-friendly methods later:

* Formspree
* Web3Forms
* Resend API route later
* simple placeholder submit handler in current build

For now, the UI spec should be complete and submission success/error states should be designed.

---

## Exclusive purchases explanation block

Lower informational section that explains:

* Viritia operates on an inquiry-based premium assistance model
* team assists customers in selecting products
* users can also buy via WhatsApp

---

## 9. Functional requirements

# 9.1 Cart functionality

### Requirements

* no authentication required
* cart icon visible in header
* cart count updates instantly
* cart persists in browser
* clear cart button supported
* remove single item supported
* quantity update supported
* duplicate add should merge quantity if same product/size/color combination

### Recommended implementation

Use:

* React Context + reducer, or
* Zustand persisted store

Persistence:

* localStorage recommended over pure session for better revisit continuity

---

# 9.2 Filter functionality

* client-side filtering on collections page
* URL query sync
* default to `All`
* maintain filter state after browser navigation when possible

---

# 9.3 WhatsApp integration

### PDP single-product CTA

Generates one-product message.

### Cart CTA

Generates multi-product inquiry message.

### Contact page optional WhatsApp quick CTA

Can include a secondary link/button for immediate assistance.

---

# 9.4 Header behavior

* fixed top
* transparent over hero
* solid on scroll
* active nav state visible
* mobile menu drawer
* cart icon with badge

---

# 9.5 Footer behavior

* consistent across pages
* includes brand statement and navigation

---

## 10. Content model

Because there is no backend, all core content should be defined in local structured data.

Recommended data files:

* `site-config.json`
* `collections.json`
* `products.json`
* `about-content.json`
* `contact-content.json`
* `image-registry.json`
* `home-content.json`

This makes it possible to change content and images centrally.

---

## 11. Recommended folder structure

```text
src/
  app/
    layout.tsx
    page.tsx
    collections/
      page.tsx
    product/
      [slug]/
        page.tsx
    about/
      page.tsx
    contact/
      page.tsx
    cart/
      page.tsx
  components/
    layout/
      header.tsx
      footer.tsx
      mobile-nav.tsx
      cart-icon.tsx
    home/
      hero-section.tsx
      featured-collections.tsx
      featured-products.tsx
      brand-values.tsx
      testimonials.tsx
      cta-section.tsx
    collections/
      collection-hero.tsx
      collection-filters.tsx
      product-grid.tsx
      product-card.tsx
      size-guide.tsx
    product/
      product-gallery.tsx
      product-info.tsx
      delivery-strip.tsx
      product-features.tsx
      related-products.tsx
      whatsapp-buy-button.tsx
    about/
      about-hero.tsx
      brand-identity.tsx
      viritia-difference.tsx
      stats-section.tsx
      retail-tags.tsx
      testimonials-grid.tsx
      packaging-section.tsx
      core-values.tsx
      about-cta.tsx
    contact/
      contact-hero.tsx
      contact-panel.tsx
      inquiry-form.tsx
      purchase-note.tsx
    cart/
      cart-list.tsx
      cart-summary.tsx
      quantity-stepper.tsx
      empty-cart.tsx
    shared/
      section-heading.tsx
      trust-badge.tsx
      image-carousel.tsx
      rich-button.tsx
      badge.tsx
      price-display.tsx
  data/
    site-config.json
    home-content.json
    collections.json
    products.json
    about-content.json
    contact-content.json
    image-registry.json
  lib/
    cart-store.ts
    whatsapp.ts
    filters.ts
    formatters.ts
    queries.ts
  public/
    images/
      brand/
      home/
      about/
      collections/
      products/
      packaging/
      testimonials/
```

---

## 12. Key implementation guidance for image management

This is one of the most important requirements.

### Goal

The user should be able to:

* replace image files,
* update a JSON key mapping,
* reload the website,
* immediately see the new visuals in the correct sections,
* avoid code rewrites.

### Best approach

Use a central **image registry JSON**.

All content sections and products should reference **image keys**, not raw file paths directly in components.

Components should look up paths from `image-registry.json`.

That way:

* if the file changes, only the registry changes,
* if the section image changes, only the key mapping changes,
* if product galleries change, only product image key arrays change.

---

## 13. JSON scaffold strategy

## 13.1 `image-registry.json`

This file stores the true file paths.

Example:

```json
{
  "brand": {
    "logoPrimary": "/images/brand/viritia-logo-gold.png",
    "logoFooter": "/images/brand/viritia-logo-light.png"
  },
  "home": {
    "heroMain": "/images/home/hero-main.jpg",
    "collectionTimeless": "/images/home/collection-timeless.jpg",
    "collectionPrint": "/images/home/collection-print.jpg",
    "collectionEmbroidery": "/images/home/collection-embroidery.jpg"
  },
  "about": {
    "hero": "/images/about/about-hero.jpg",
    "brandIdentity": "/images/about/brand-identity-bed.jpg",
    "differenceFabrics": "/images/about/difference-fabrics.jpg",
    "differenceDesign": "/images/about/difference-design.jpg",
    "differenceQuality": "/images/about/difference-quality.jpg",
    "packaging1": "/images/about/packaging-1.jpg",
    "packaging2": "/images/about/packaging-2.jpg",
    "packaging3": "/images/about/packaging-3.jpg"
  },
  "products": {
    "cloudBlue_1": "/images/products/cloud-blue/1.jpg",
    "cloudBlue_2": "/images/products/cloud-blue/2.jpg",
    "cloudBlue_3": "/images/products/cloud-blue/3.jpg",
    "sageEmbroidery_1": "/images/products/sage-embroidery/1.jpg",
    "sageEmbroidery_2": "/images/products/sage-embroidery/2.jpg",
    "sageEmbroidery_3": "/images/products/sage-embroidery/3.jpg"
  }
}
```

---

## 13.2 `products.json`

Each product should reference image keys, not hardcoded image paths.

Example:

```json
[
  {
    "id": "prod_cloud_blue_premium_king_flat",
    "slug": "cloud-blue-premium",
    "name": "Cloud Blue Premium",
    "collection": "Timeless Solids",
    "collectionKey": "timeless-solids",
    "sku": "VIR-TS-001",
    "size": "King",
    "dimensions": "108 x 108 inches",
    "color": "Cloud Blue",
    "fabric": "100% Pure Cotton",
    "weave": "Sateen",
    "thread_count": 400,
    "pattern": "Solid",
    "sheet_type": "Flat",
    "mrp": 3499,
    "selling_price": 2499,
    "description": "Premium cotton bedsheet crafted for a refined, soft, hotel-luxury feel.",
    "features": [
      "400 Thread Count",
      "100% Pure Cotton",
      "Sateen Weave",
      "Breathable",
      "Skin Friendly Fabric",
      "Luxury Hotel Style Drape",
      "King Size (108×108 inches)",
      "Flat Sheet",
      "2 Pillow Covers Included",
      "Machine Wash Cold",
      "Made in India"
    ],
    "imageKeys": [
      "cloudBlue_1",
      "cloudBlue_2",
      "cloudBlue_3"
    ],
    "featured": true,
    "active": true
  },
  {
    "id": "prod_sage_embroidery_king_flat",
    "slug": "sage-embroidery",
    "name": "Sage Embroidery",
    "collection": "Soft Embroidery",
    "collectionKey": "soft-embroidery",
    "sku": "VIR-SE-003",
    "size": "King",
    "dimensions": "108 x 108 inches",
    "color": "Sage",
    "fabric": "Percale Cotton",
    "weave": "Percale",
    "thread_count": 300,
    "pattern": "Embroidered",
    "sheet_type": "Flat",
    "mrp": 3999,
    "selling_price": 2999,
    "description": "Sophisticated bedsheet featuring elegant soft embroidered accents, perfect for modern luxury living.",
    "features": [
      "300 Thread Count",
      "100% Pure Cotton",
      "Percale Weave",
      "Breathable",
      "Skin Friendly Fabric",
      "Luxury Hotel Style Drape",
      "King Size (108×108 inches)",
      "Flat Sheet",
      "2 Pillow Covers Included",
      "Machine Wash Cold",
      "Made in India"
    ],
    "imageKeys": [
      "sageEmbroidery_1",
      "sageEmbroidery_2",
      "sageEmbroidery_3"
    ],
    "featured": true,
    "active": true
  }
]
```

---

## 13.3 `home-content.json`

```json
{
  "hero": {
    "eyebrow": "Since 2014",
    "headlineLine1": "Soft Spaces.",
    "headlineLine2": "Beautiful Living.",
    "subtext": "Premium bedsheets crafted for comfort, elegance, and timeless luxury.",
    "primaryCta": {
      "label": "Explore Collections",
      "href": "/collections"
    },
    "secondaryCta": {
      "label": "Shop on WhatsApp",
      "href": "/collections"
    },
    "imageKey": "heroMain"
  }
}
```

---

## 13.4 `about-content.json`

```json
{
  "hero": {
    "eyebrow": "Since 2014",
    "title": "Our Story of Craftsmanship",
    "subtitle": "Celebrating 12 years of excellence in premium bedding",
    "imageKey": "hero"
  },
  "brandIdentity": {
    "eyebrow": "Brand Identity",
    "titleLine1": "Soft Spaces.",
    "titleLine2": "Beautiful Living.",
    "body": [
      "Viritia is a premium bedsheet brand dedicated to transforming how people experience comfort and elegance at home.",
      "Founded in 2014, Viritia emerged from a simple vision: to redefine premium bedding in India.",
      "Today, Viritia stands as a trusted name in premium home furnishings across India."
    ],
    "imageKey": "brandIdentity"
  },
  "stats": [
    { "label": "Bedsheets Sold", "value": "50,000+" },
    { "label": "Repeat Customers", "value": "85%" },
    { "label": "Retail Partners", "value": "32" },
    { "label": "Customer Rating", "value": "4.9/5" }
  ]
}
```

---

## 13.5 `site-config.json`

```json
{
  "brandName": "Viritia",
  "tagline": "Soft Spaces. Beautiful Living.",
  "email": "support@viritia.in",
  "whatsappNumber": "+91 81309 09414",
  "whatsappNumberRaw": "918130909414",
  "responseTime": "Within 24–48 hours",
  "madeIn": "Made with love in India",
  "established": "2014",
  "deliveryInfo": [
    "Delivery in 5–7 business days",
    "Cash on Delivery available",
    "7-day return policy"
  ]
}
```

---

## 13.6 Final recommended asset mapping pattern

The component should never do this:

* hardcode `/images/about/hero.jpg`

The component should do this:

1. read content JSON,
2. get image key,
3. resolve actual path from `image-registry.json`,
4. render via shared helper.

Example logic concept:

* `resolveImage('about', 'hero')`
* or `resolveImageByKey('cloudBlue_1')`

This is the cleanest non-backend way to let the owner swap images quickly.

### Folder structure for Vercel image usage

Because this will be deployed on **Vercel** and there is no backend, the best place for images is the Next.js `public` folder.

Recommended structure:

```text
public/
  images/
    print-story/
      print-story-1/
      print-story-2/
      print-story-3/
    soft-embroidery/
      soft-embroidery-1/
      soft-embroidery-2/
      soft-embroidery-3/
    timeless-solids/
      timeless-solids-1/
      timeless-solids-2/
      timeless-solids-3/
      timeless-solids-4/
      timeless-solids-5/
      timeless-solids-6/
    brand/
    home/
    about/
    packaging/
```

If each product has multiple images, place them inside its own product folder, for example:

```text
public/images/timeless-solids/timeless-solids-2/1.jpg
public/images/timeless-solids/timeless-solids-2/2.jpg
public/images/timeless-solids/timeless-solids-2/3.jpg
```

Then the JSON should point to those files.

### Mapping strategy using the provided image-folder naming

Since your current asset structure appears to be grouped as:

* Print Story 1
* Print Story 2
* Print Story 3
* Soft Embroidery 1
* Soft Embroidery 2
* Soft Embroidery 3
* Timeless Solids 1
* Timeless Solids 2
* Timeless Solids 3
* Timeless Solids 4
* Timeless Solids 5
* Timeless Solids 6

use that structure as the source of truth for the initial product seed. The easiest production-safe convention is to convert spaces to kebab-case and use deterministic folder names.

Recommended final folder names:

* `print-story-1`
* `print-story-2`
* `print-story-3`
* `soft-embroidery-1`
* `soft-embroidery-2`
* `soft-embroidery-3`
* `timeless-solids-1`
* `timeless-solids-2`
* `timeless-solids-3`
* `timeless-solids-4`
* `timeless-solids-5`
* `timeless-solids-6`

This keeps the filesystem Vercel-friendly and avoids path bugs.

---

## 14. Data model adaptation from original brief

The original brief mentioned database entities. Since there is no backend, convert those into frontend data schemas.

### Frontend product schema requirement

Yes — the frontend schema should absolutely manage the product data directly.

The schema should be strong enough to power:

* product cards,
* filters,
* PDP pages,
* WhatsApp message generation,
* cart summaries,
* related products,
* future analytics tagging,
* future backend migration.

### Recommended product schema

```ts
export type Product = {
  id: string;
  slug: string;
  name: string;
  collection: 'Timeless Solids' | 'Print Story' | 'Soft Embroidery';
  collectionKey: 'timeless-solids' | 'print-story' | 'soft-embroidery';
  productSeriesKey: string; // ex: timeless-solids-2
  sku: string;
  size: 'Single' | 'Queen' | 'King';
  dimensions: string;
  color: string;
  fabric: string;
  weave: 'Sateen' | 'Percale';
  thread_count: number;
  pattern: string;
  sheet_type: 'Flat' | 'Fitted';
  mrp: number;
  selling_price: number;
  currency?: 'INR';
  description: string;
  short_description?: string;
  features: string[];
  imageKeys: string[];
  primaryImageKey?: string;
  badgeLabels?: string[];
  featured: boolean;
  active: boolean;
  sortOrder?: number;
  meta?: {
    adLandingReady?: boolean;
    bestseller?: boolean;
    luxuryTier?: 'core' | 'signature' | 'statement';
  };
};
```

### Why this schema is good for the frontend-only build

It supports all current needs without backend:

* route generation by `slug`
* collection filtering by `collectionKey`
* cart display by `id`
* WhatsApp message filling by `name`, `collection`, `color`, `size`, `selling_price`
* visual rendering by `imageKeys`
* future flexibility via `meta`

### Product image schema

Use the image registry as a second layer. Example:

```ts
export type ImageRegistry = Record<string, string>;
```

This means a product stores only keys like:

* `timeless_solids_2_1`
* `timeless_solids_2_2`
* `timeless_solids_2_3`

and the registry resolves them to actual file paths.

### Contact/inquiry schema

For frontend form state only for now:

```ts
export type InquiryForm = {
  name: string;
  email: string;
  phone?: string;
  product_interest?: string;
  message: string;
};
```

No server persistence required in current phase.

---

## 15. Component-level behavior notes

## Header

* sticky
* transparent to solid transition
* active link indicator
* cart count bubble

## ProductCard

* image-first
* collection + type badges
* premium hover
* link to PDP
* optional add-to-cart button

## ImageCarousel

* swipeable
* arrows
* dots
* responsive

## PriceDisplay

* clean two-tier price style
* selling price bold
* MRP muted + strike

## WhatsAppBuyButton

* reads product data
* formats message
* opens WhatsApp link in new tab or app

## CartSummary

* subtotal
* clear cart
* proceed on WhatsApp

---

## 16. UX rules

* Always prioritize visual breathing room
* Never crowd text near images
* Avoid more than 2 primary CTAs in one section
* On mobile, keep CTA visibility strong without overwhelming layout
* Product details must be readable in less than 5 seconds
* WhatsApp CTA must be discoverable on PDP without scrolling too much
* Filters must feel effortless

---

## 17. Performance rules for Meta ads landing traffic

Since this site is for testing Meta ads conversions, performance matters.

### Must do

* compress all images aggressively without visible quality loss
* use `next/image`
* lazy load non-critical sections
* keep fonts optimized
* avoid heavy client bundles
* avoid unnecessary large animation libraries beyond Framer Motion essentials
* keep above-the-fold content fast

### Ad landing recommendations

* match landing imagery closely to ad creative where possible
* land to relevant collection/PDP rather than generic homepage for product-specific ads
* ensure WhatsApp CTA above fold on mobile PDP

---

## 18. Suggested future-ready but not in current scope

Do not build now, but keep architecture open for:

* checkout
* payment gateway
* admin CMS
* inventory sync
* order database
* coupon engine
* user accounts
* analytics dashboard
* abandoned cart recovery
* conversion API integrations

---

## 19. Acceptance criteria

The build should be considered correct when:

1. Site runs cleanly on Vercel using Next.js
2. Home, Collections, About, Contact, Cart, and PDP all exist
3. Collections page uses filters and product cards
4. Product cards open PDP, not modal
5. PDP has multi-image carousel, product details, features, trust strip, Add to Cart, and WhatsApp Buy CTA
6. Cart works without login and persists client-side
7. Cart can be cleared
8. Contact page matches premium look and includes full form structure
9. About page includes hero, story, difference, stats, testimonials, packaging, core values, CTA
10. Size guide exists
11. All images are resolved through JSON/image-key mapping
12. Replacing image file paths or keys updates the site without code rewrites
13. Site visually feels premium and not template-like

---

## 20. Final implementation direction for the build AI

Build this as a **frontend-only Next.js luxury storefront** for Viritia.

### Non-negotiables

* Use **Next.js + React + Tailwind**
* Use **JSON-driven content and image mapping**
* No backend/auth scope for now
* Dedicated **PDP instead of product modal**
* **Cart without login**
* **WhatsApp order flow**
* **Ultra-premium look and feel**
* Optimized for **Meta ads landing traffic and order testing**

---

## 21. Initial product catalog derived from provided screenshots

Below is the initial screenshot-derived product seed list that should be added to the build specification.

### Identified products from screenshots

#### Print Story

1. Sky Blue Marble Dream
2. Peach Marble Luxury
3. Navy Marble Elegance

#### Soft Embroidery

4. Sage Embroidery
5. Royal Blue Embroidery
6. Elegant Cream Embroidery

#### Timeless Solids

7. Greige Elegance
8. Cloud Blue Premium
9. Blush Pink Luxury
10. Emerald Green Luxury
11. Midnight Blue
12. Wine Burgundy Sateen
13. Powder Blue Elegance

### Visible pricing and size information from screenshots

Most visible cards show:

* Size: **King Size (108 x 108 inches)**
* Sheet type: **Flat**

Visible price patterns:

* Several Timeless Solids products: **₹2,499** with **₹3,499** struck through
* Soft Embroidery products: **₹2,999** with **₹3,999** struck through
* One Print Story example visible: **₹1,799** with **₹2,599** struck through

### Important note for build AI

The product list above should be treated as the initial seeded catalog from visual reference. Where data is not fully visible in screenshots, the build should:

* seed the best available visible values,
* keep data editable in JSON,
* never hardcode product text into components.

## 22. Copy-paste ready master JSON scaffold

Below is a single combined scaffold that can be split into multiple files later.

### Important file-path strategy for Vercel

Because this will be deployed on **Vercel** using **Next.js**, the best approach is:

* keep all product and section images inside `public/images/`
* normalize filenames and folder names for clean, web-safe paths
* keep all components dependent on JSON keys, not hardcoded file paths
* use the product names you provided as the source of truth for mapping

### Recommended normalized folder structure in the build

```text
public/
  images/
    brand/
      viritia-logo-transparent.png
    home/
      hero-main.jpg
      cta-background.jpg
    about/
      our-story-hero.jpeg
      premium-fabrics.jpg
      design-excellence.jpg
      quality-assurance.jpg
      brand-identity.jpg
    products/
      print-story/
        sky-blue-marble-dream/
        peach-marble-luxury/
        navy-marble-elegance/
      soft-embroidery/
        elegant-cream-embroidery/
        royal-blue-embroidery/
        sage-embroidery/
      timeless-solids/
        blush-pink-luxury/
        cloud-blue-premium/
        emerald-green-luxury/
        midnight-blue/
        powder-blue-elegance/
        wine-burgundy-sateen/
        greige-elegance/
```

### Source-to-build normalization mapping

Use the provided source assets and copy them into normalized paths like these:

* `VIRITIA_logo_transparent.png` → `/images/brand/viritia-logo-transparent.png`
* `Our Story page Image.jpeg` → `/images/about/brand-identity.jpg`
* Home hero background from URL → `/images/home/hero-main.jpg` or keep as remote URL
* Home CTA background from URL → `/images/home/cta-background.jpg` or keep as remote URL
* Our Story hero background from URL → `/images/about/our-story-hero.jpg` or keep as remote URL
* Our Story feature images from URLs → `/images/about/premium-fabrics.jpg`, `/images/about/design-excellence.jpg`, `/images/about/quality-assurance.jpg`

For product folders, create normalized copies like:

* `Print Story - Sky Blue Marble Dream/Print Story 1. Pic 1.PNG` → `/images/products/print-story/sky-blue-marble-dream/1.png`
* `Timeless Solids - Cloud Blue Premium/Viritia Timeless Solids CB 02 - Pic  1.png` → `/images/products/timeless-solids/cloud-blue-premium/1.png`
* `Soft Embroidery - Sage Embroidery/Soft Embroidery 1.jpeg` → `/images/products/soft-embroidery/sage-embroidery/1.jpeg`

The goal is simple: the build should use clean filenames even if your source asset archive uses mixed names.

```json
{
  "siteConfig": {
    "brandName": "Viritia",
    "tagline": "Soft Spaces. Beautiful Living.",
    "email": "support@viritia.in",
    "whatsappNumber": "+91 81309 09414",
    "whatsappNumberRaw": "918130909414",
    "responseTime": "Within 24–48 hours",
    "madeIn": "Made with love in India",
    "established": "2014",
    "deliveryInfo": [
      "Delivery in 5–7 business days",
      "Cash on Delivery available",
      "7-day return policy"
    ],
    "colors": {
      "gold": "#C5A572",
      "goldLight": "#D4BC94",
      "charcoal": "#2C2C2C",
      "cream": "#FAFAF8",
      "warmGray": "#8A8579",
      "lightBeige": "#F5F3EF",
      "border": "#E8E6E1"
    },
    "fonts": {
      "heading": "Cormorant Garamond",
      "body": "Inter"
    },
    "remoteImageSources": {
      "homeHero": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      "homeCta": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070",
      "aboutHero": "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=2074",
      "aboutPremiumFabrics": "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2058",
      "aboutDesignExcellence": "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=2059",
      "aboutQualityAssurance": "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2127"
    }
  },
  "imageRegistry": {
    "brand": {
      "logoPrimary": "/images/brand/viritia-logo-transparent.png",
      "logoFooter": "/images/brand/viritia-logo-transparent.png"
    },
    "home": {
      "heroMain": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      "ctaBackground": "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070"
    },
    "about": {
      "hero": "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=2074",
      "brandIdentity": "/images/about/brand-identity.jpg",
      "differenceFabrics": "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2058",
      "differenceDesign": "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=2059",
      "differenceQuality": "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2127"
    },
    "products": {
      "sky_blue_marble_dream_1": "/images/products/print-story/sky-blue-marble-dream/1.png",
      "sky_blue_marble_dream_2": "/images/products/print-story/sky-blue-marble-dream/2.png",
      "sky_blue_marble_dream_3": "/images/products/print-story/sky-blue-marble-dream/3.png",
      "sky_blue_marble_dream_4": "/images/products/print-story/sky-blue-marble-dream/4.png",
      "sky_blue_marble_dream_5": "/images/products/print-story/sky-blue-marble-dream/5.png",
      "sky_blue_marble_dream_6": "/images/products/print-story/sky-blue-marble-dream/6.jpeg",
      "sky_blue_marble_dream_7": "/images/products/print-story/sky-blue-marble-dream/7.png",

      "peach_marble_luxury_1": "/images/products/print-story/peach-marble-luxury/1.png",
      "peach_marble_luxury_2": "/images/products/print-story/peach-marble-luxury/2.png",
      "peach_marble_luxury_3": "/images/products/print-story/peach-marble-luxury/3.png",
      "peach_marble_luxury_4": "/images/products/print-story/peach-marble-luxury/4.png",
      "peach_marble_luxury_5": "/images/products/print-story/peach-marble-luxury/5.png",
      "peach_marble_luxury_6": "/images/products/print-story/peach-marble-luxury/6.jpeg",

      "navy_marble_elegance_1": "/images/products/print-story/navy-marble-elegance/1.png",
      "navy_marble_elegance_2": "/images/products/print-story/navy-marble-elegance/2.png",
      "navy_marble_elegance_3": "/images/products/print-story/navy-marble-elegance/3.png",
      "navy_marble_elegance_4": "/images/products/print-story/navy-marble-elegance/4.png",
      "navy_marble_elegance_5": "/images/products/print-story/navy-marble-elegance/5.jpeg",
      "navy_marble_elegance_6": "/images/products/print-story/navy-marble-elegance/6.png",

      "elegant_cream_embroidery_1": "/images/products/soft-embroidery/elegant-cream-embroidery/1.jpeg",
      "royal_blue_embroidery_1": "/images/products/soft-embroidery/royal-blue-embroidery/1.jpeg",
      "sage_embroidery_1": "/images/products/soft-embroidery/sage-embroidery/1.jpeg",

      "blush_pink_luxury_1": "/images/products/timeless-solids/blush-pink-luxury/1.png",
      "blush_pink_luxury_2": "/images/products/timeless-solids/blush-pink-luxury/2.png",
      "blush_pink_luxury_3": "/images/products/timeless-solids/blush-pink-luxury/3.png",
      "blush_pink_luxury_4": "/images/products/timeless-solids/blush-pink-luxury/4.png",
      "blush_pink_luxury_5": "/images/products/timeless-solids/blush-pink-luxury/5.jpg",
      "blush_pink_luxury_6": "/images/products/timeless-solids/blush-pink-luxury/6.jpg",
      "blush_pink_luxury_7": "/images/products/timeless-solids/blush-pink-luxury/7.jpeg",

      "cloud_blue_premium_1": "/images/products/timeless-solids/cloud-blue-premium/1.png",
      "cloud_blue_premium_2": "/images/products/timeless-solids/cloud-blue-premium/2.png",
      "cloud_blue_premium_3": "/images/products/timeless-solids/cloud-blue-premium/3.png",
      "cloud_blue_premium_4": "/images/products/timeless-solids/cloud-blue-premium/4.png",
      "cloud_blue_premium_5": "/images/products/timeless-solids/cloud-blue-premium/5.jpg",
      "cloud_blue_premium_6": "/images/products/timeless-solids/cloud-blue-premium/6.jpg",
      "cloud_blue_premium_7": "/images/products/timeless-solids/cloud-blue-premium/7.jpeg",

      "emerald_green_luxury_1": "/images/products/timeless-solids/emerald-green-luxury/1.jpeg",
      "emerald_green_luxury_2": "/images/products/timeless-solids/emerald-green-luxury/2.png",
      "emerald_green_luxury_3": "/images/products/timeless-solids/emerald-green-luxury/3.jpg",
      "emerald_green_luxury_4": "/images/products/timeless-solids/emerald-green-luxury/4.jpg",
      "emerald_green_luxury_5": "/images/products/timeless-solids/emerald-green-luxury/5.jpeg",

      "midnight_blue_1": "/images/products/timeless-solids/midnight-blue/1.jpeg",
      "midnight_blue_2": "/images/products/timeless-solids/midnight-blue/2.png",
      "midnight_blue_3": "/images/products/timeless-solids/midnight-blue/3.jpg",
      "midnight_blue_4": "/images/products/timeless-solids/midnight-blue/4.jpg",
      "midnight_blue_5": "/images/products/timeless-solids/midnight-blue/5.jpeg",

      "powder_blue_elegance_1": "/images/products/timeless-solids/powder-blue-elegance/1.jpeg",
      "powder_blue_elegance_2": "/images/products/timeless-solids/powder-blue-elegance/2.png",
      "powder_blue_elegance_3": "/images/products/timeless-solids/powder-blue-elegance/3.jpg",
      "powder_blue_elegance_4": "/images/products/timeless-solids/powder-blue-elegance/4.jpg",
      "powder_blue_elegance_5": "/images/products/timeless-solids/powder-blue-elegance/5.jpeg",

      "wine_burgundy_sateen_1": "/images/products/timeless-solids/wine-burgundy-sateen/1.jpeg",
      "wine_burgundy_sateen_2": "/images/products/timeless-solids/wine-burgundy-sateen/2.png",
      "wine_burgundy_sateen_3": "/images/products/timeless-solids/wine-burgundy-sateen/3.jpg",
      "wine_burgundy_sateen_4": "/images/products/timeless-solids/wine-burgundy-sateen/4.jpg",
      "wine_burgundy_sateen_5": "/images/products/timeless-solids/wine-burgundy-sateen/5.jpeg",

      "greige_elegance_1": "/images/products/timeless-solids/greige-elegance/1.png",
      "greige_elegance_2": "/images/products/timeless-solids/greige-elegance/2.png",
      "greige_elegance_3": "/images/products/timeless-solids/greige-elegance/3.png",
      "greige_elegance_4": "/images/products/timeless-solids/greige-elegance/4.png",
      "greige_elegance_5": "/images/products/timeless-solids/greige-elegance/5.jpg",
      "greige_elegance_6": "/images/products/timeless-solids/greige-elegance/6.jpg",
      "greige_elegance_7": "/images/products/timeless-solids/greige-elegance/7.jpeg"
    }
  },
  "collections": [
    {
      "key": "timeless-solids",
      "name": "Timeless Solids",
      "fabric": "100% Pure Cotton",
      "weave": "Sateen",
      "threadCount": 400,
      "imageKey": "collectionTimeless",
      "description": "Elegant solid bedsheets crafted for timeless luxury."
    },
    {
      "key": "print-story",
      "name": "Print Story",
      "fabric": "Glace Cotton",
      "weave": "Percale",
      "threadCount": 300,
      "imageKey": "collectionPrint",
      "description": "Expressive bedding designs with premium comfort."
    },
    {
      "key": "soft-embroidery",
      "name": "Soft Embroidery",
      "fabric": "Percale Cotton",
      "weave": "Percale",
      "threadCount": 300,
      "imageKey": "collectionEmbroidery",
      "description": "Subtle embroidered elegance for refined homes."
    }
  ],
  "products": [
    {
      "id": "prod_timeless_solids_blush_pink_luxury",
      "slug": "blush-pink-luxury",
      "name": "Timeless Solids - Blush Pink Luxury",
      "collection": "Timeless Solids",
      "collectionKey": "timeless-solids",
      "productSeriesKey": "blush-pink-luxury",
      "sku": "VIR-TS-003",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Blush Pink",
      "fabric": "100% Pure Cotton",
      "weave": "Sateen",
      "thread_count": 400,
      "pattern": "Solid",
      "sheet_type": "Flat",
      "mrp": 3499,
      "selling_price": 2499,
      "description": "A soft blush pink bedsheet crafted for warm, graceful, premium bedroom styling.",
      "features": ["400 Thread Count", "100% Pure Cotton", "Sateen Weave", "Breathable", "Super Soft", "Quality Stitch", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["blush_pink_luxury_1", "blush_pink_luxury_2", "blush_pink_luxury_3", "blush_pink_luxury_4", "blush_pink_luxury_5", "blush_pink_luxury_6", "blush_pink_luxury_7"],
      "featured": true,
      "active": true
    },
    {
      "id": "prod_timeless_solids_cloud_blue_premium",
      "slug": "cloud-blue-premium",
      "name": "Timeless Solids - Cloud Blue Premium",
      "collection": "Timeless Solids",
      "collectionKey": "timeless-solids",
      "productSeriesKey": "cloud-blue-premium",
      "sku": "VIR-TS-002",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Cloud Blue",
      "fabric": "100% Pure Cotton",
      "weave": "Sateen",
      "thread_count": 400,
      "pattern": "Solid",
      "sheet_type": "Flat",
      "mrp": 3499,
      "selling_price": 2499,
      "description": "A light cloud blue bedsheet designed to bring softness and polished calm into the bedroom.",
      "features": ["400 Thread Count", "100% Pure Cotton", "Sateen Weave", "Breathable", "Super Soft", "Quality Stitch", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["cloud_blue_premium_1", "cloud_blue_premium_2", "cloud_blue_premium_3", "cloud_blue_premium_4", "cloud_blue_premium_5", "cloud_blue_premium_6", "cloud_blue_premium_7"],
      "featured": true,
      "active": true
    },
    {
      "id": "prod_timeless_solids_emerald_green_luxury",
      "slug": "emerald-green-luxury",
      "name": "Timeless Solids - Emerald Green Luxury",
      "collection": "Timeless Solids",
      "collectionKey": "timeless-solids",
      "productSeriesKey": "emerald-green-luxury",
      "sku": "VIR-TS-004",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Emerald Green",
      "fabric": "100% Pure Cotton",
      "weave": "Sateen",
      "thread_count": 400,
      "pattern": "Solid",
      "sheet_type": "Flat",
      "mrp": 3499,
      "selling_price": 2499,
      "description": "A rich emerald green bedsheet designed for dramatic yet sophisticated luxury styling.",
      "features": ["400 Thread Count", "100% Pure Cotton", "Sateen Weave", "Breathable", "Super Soft", "Quality Stitch", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["emerald_green_luxury_1", "emerald_green_luxury_2", "emerald_green_luxury_3", "emerald_green_luxury_4", "emerald_green_luxury_5"],
      "featured": true,
      "active": true
    },
    {
      "id": "prod_timeless_solids_midnight_blue",
      "slug": "midnight-blue",
      "name": "Timeless Solids - Midnight Blue",
      "collection": "Timeless Solids",
      "collectionKey": "timeless-solids",
      "productSeriesKey": "midnight-blue",
      "sku": "VIR-TS-005",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Midnight Blue",
      "fabric": "100% Pure Cotton",
      "weave": "Sateen",
      "thread_count": 400,
      "pattern": "Solid",
      "sheet_type": "Flat",
      "mrp": 3499,
      "selling_price": 2499,
      "description": "A deep midnight blue bedsheet for bold, high-contrast, premium bedroom interiors.",
      "features": ["400 Thread Count", "100% Pure Cotton", "Sateen Weave", "Breathable", "Super Soft", "Quality Stitch", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["midnight_blue_1", "midnight_blue_2", "midnight_blue_3", "midnight_blue_4", "midnight_blue_5"],
      "featured": true,
      "active": true
    },
    {
      "id": "prod_timeless_solids_powder_blue_elegance",
      "slug": "powder-blue-elegance",
      "name": "Timeless Solids - Powder Blue Elegance",
      "collection": "Timeless Solids",
      "collectionKey": "timeless-solids",
      "productSeriesKey": "powder-blue-elegance",
      "sku": "VIR-TS-007",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Powder Blue",
      "fabric": "100% Pure Cotton",
      "weave": "Sateen",
      "thread_count": 400,
      "pattern": "Solid",
      "sheet_type": "Flat",
      "mrp": 3499,
      "selling_price": 2499,
      "description": "A soft powder blue variant created for airy, elegant, and restful bedroom styling.",
      "features": ["400 Thread Count", "100% Pure Cotton", "Sateen Weave", "Breathable", "Super Soft", "Quality Stitch", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["powder_blue_elegance_1", "powder_blue_elegance_2", "powder_blue_elegance_3", "powder_blue_elegance_4", "powder_blue_elegance_5"],
      "featured": true,
      "active": true
    },
    {
      "id": "prod_timeless_solids_wine_burgundy_sateen",
      "slug": "wine-burgundy-sateen",
      "name": "Timeless Solids - Wine Burgundy Sateen",
      "collection": "Timeless Solids",
      "collectionKey": "timeless-solids",
      "productSeriesKey": "wine-burgundy-sateen",
      "sku": "VIR-TS-006",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Wine Burgundy",
      "fabric": "100% Pure Cotton",
      "weave": "Sateen",
      "thread_count": 400,
      "pattern": "Solid",
      "sheet_type": "Flat",
      "mrp": 3499,
      "selling_price": 2499,
      "description": "A wine-toned sateen bedsheet with premium depth, softness, and indulgent richness.",
      "features": ["400 Thread Count", "100% Pure Cotton", "Sateen Weave", "Breathable", "Super Soft", "Quality Stitch", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["wine_burgundy_sateen_1", "wine_burgundy_sateen_2", "wine_burgundy_sateen_3", "wine_burgundy_sateen_4", "wine_burgundy_sateen_5"],
      "featured": true,
      "active": true
    },
    {
      "id": "prod_timeless_solids_greige_elegance",
      "slug": "greige-elegance",
      "name": "Timeless Solids - Greige Elegance",
      "collection": "Timeless Solids",
      "collectionKey": "timeless-solids",
      "productSeriesKey": "greige-elegance",
      "sku": "VIR-TS-001",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Greige",
      "fabric": "100% Pure Cotton",
      "weave": "Sateen",
      "thread_count": 400,
      "pattern": "Solid",
      "sheet_type": "Flat",
      "mrp": 3499,
      "selling_price": 2499,
      "description": "An understated greige bedsheet designed for timeless, hotel-inspired elegance.",
      "features": ["400 Thread Count", "100% Pure Cotton", "Sateen Weave", "Breathable", "Super Soft", "Quality Stitch", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["greige_elegance_1", "greige_elegance_2", "greige_elegance_3", "greige_elegance_4", "greige_elegance_5", "greige_elegance_6", "greige_elegance_7"],
      "featured": true,
      "active": true
    },

    {
      "id": "prod_print_story_navy_marble_elegance",
      "slug": "navy-marble-elegance",
      "name": "Print Story - Navy Marble Elegance",
      "collection": "Print Story",
      "collectionKey": "print-story",
      "productSeriesKey": "navy-marble-elegance",
      "sku": "VIR-PS-003",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Navy Blue",
      "fabric": "Glace Cotton",
      "weave": "Percale",
      "thread_count": 300,
      "pattern": "Marble Print",
      "sheet_type": "Flat",
      "mrp": 2599,
      "selling_price": 1799,
      "description": "Deep-toned marble expression for customers who prefer bold elegance in premium bedding.",
      "features": ["300 Thread Count", "Glace Cotton", "Percale Weave", "Breathable", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["navy_marble_elegance_1", "navy_marble_elegance_2", "navy_marble_elegance_3", "navy_marble_elegance_4", "navy_marble_elegance_5", "navy_marble_elegance_6"],
      "featured": true,
      "active": true
    },
    {
      "id": "prod_print_story_peach_marble_luxury",
      "slug": "peach-marble-luxury",
      "name": "Print Story - Peach Marble Luxury",
      "collection": "Print Story",
      "collectionKey": "print-story",
      "productSeriesKey": "peach-marble-luxury",
      "sku": "VIR-PS-002",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Peach",
      "fabric": "Glace Cotton",
      "weave": "Percale",
      "thread_count": 300,
      "pattern": "Marble Print",
      "sheet_type": "Flat",
      "mrp": 2599,
      "selling_price": 1799,
      "description": "Warm marble-inspired bedding designed to bring softness and understated glamour to the bedroom.",
      "features": ["300 Thread Count", "Glace Cotton", "Percale Weave", "Breathable", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["peach_marble_luxury_1", "peach_marble_luxury_2", "peach_marble_luxury_3", "peach_marble_luxury_4", "peach_marble_luxury_5", "peach_marble_luxury_6"],
      "featured": true,
      "active": true
    },
    {
      "id": "prod_print_story_sky_blue_marble_dream",
      "slug": "sky-blue-marble-dream",
      "name": "Print Story - Sky Blue Marble Dream",
      "collection": "Print Story",
      "collectionKey": "print-story",
      "productSeriesKey": "sky-blue-marble-dream",
      "sku": "VIR-PS-001",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Sky Blue",
      "fabric": "Glace Cotton",
      "weave": "Percale",
      "thread_count": 300,
      "pattern": "Marble Print",
      "sheet_type": "Flat",
      "mrp": 2599,
      "selling_price": 1799,
      "description": "A statement marble-inspired bedsheet with soft luxury drape and contemporary character.",
      "features": ["300 Thread Count", "Glace Cotton", "Percale Weave", "Breathable", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["sky_blue_marble_dream_1", "sky_blue_marble_dream_2", "sky_blue_marble_dream_3", "sky_blue_marble_dream_4", "sky_blue_marble_dream_5", "sky_blue_marble_dream_6", "sky_blue_marble_dream_7"],
      "featured": true,
      "active": true
    },

    {
      "id": "prod_soft_embroidery_elegant_cream_embroidery",
      "slug": "elegant-cream-embroidery",
      "name": "Soft Embroidery - Elegant Cream Embroidery",
      "collection": "Soft Embroidery",
      "collectionKey": "soft-embroidery",
      "productSeriesKey": "elegant-cream-embroidery",
      "sku": "VIR-SE-003",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Cream White",
      "fabric": "Percale Cotton",
      "weave": "Percale",
      "thread_count": 300,
      "pattern": "Soft Embroidery",
      "sheet_type": "Flat",
      "mrp": 3999,
      "selling_price": 2999,
      "description": "A clean cream-toned embroidered bedsheet designed for serene, premium bedroom styling.",
      "features": ["300 Thread Count", "100% Pure Cotton", "Percale Weave", "Breathable", "Skin Friendly Fabric", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["elegant_cream_embroidery_1"],
      "featured": true,
      "active": true
    },
    {
      "id": "prod_soft_embroidery_royal_blue_embroidery",
      "slug": "royal-blue-embroidery",
      "name": "Soft Embroidery - Royal Blue Embroidery",
      "collection": "Soft Embroidery",
      "collectionKey": "soft-embroidery",
      "productSeriesKey": "royal-blue-embroidery",
      "sku": "VIR-SE-002",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Royal Blue",
      "fabric": "Percale Cotton",
      "weave": "Percale",
      "thread_count": 300,
      "pattern": "Soft Embroidery",
      "sheet_type": "Flat",
      "mrp": 3999,
      "selling_price": 2999,
      "description": "A crisp embroidered bedding set in a royal blue tone, balancing richness and restraint.",
      "features": ["300 Thread Count", "100% Pure Cotton", "Percale Weave", "Breathable", "Skin Friendly Fabric", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["royal_blue_embroidery_1"],
      "featured": true,
      "active": true
    },
    {
      "id": "prod_soft_embroidery_sage_embroidery",
      "slug": "sage-embroidery",
      "name": "Soft Embroidery - Sage Embroidery",
      "collection": "Soft Embroidery",
      "collectionKey": "soft-embroidery",
      "productSeriesKey": "sage-embroidery",
      "sku": "VIR-SE-001",
      "size": "King",
      "dimensions": "108 x 108 inches",
      "color": "Sage",
      "fabric": "Percale Cotton",
      "weave": "Percale",
      "thread_count": 300,
      "pattern": "Soft Embroidery",
      "sheet_type": "Flat",
      "mrp": 3999,
      "selling_price": 2999,
      "description": "Sophisticated bedsheet featuring elegant soft embroidered accents, perfect for modern luxury living.",
      "features": ["300 Thread Count", "100% Pure Cotton", "Percale Weave", "Breathable", "Skin Friendly Fabric", "King Size (108×108 inches)", "Flat Sheet", "2 Pillow Covers Included", "Machine Wash Cold", "Made in India"],
      "imageKeys": ["sage_embroidery_1"],
      "featured": true,
      "active": true
    }
  ],
  "sizeGuide": [
    {
      "size": "Single",
      "bedsheet": "60 x 90 inches",
      "bedsheetMetric": "152 x 228 cm",
      "pillow": "18 x 27 inches",
      "pillowMetric": "46 x 69 cm"
    },
    {
      "size": "Queen",
      "bedsheet": "90 x 100 inches",
      "bedsheetMetric": "228 x 254 cm",
      "pillow": "18 x 27 inches",
      "pillowMetric": "46 x 69 cm"
    },
    {
      "size": "King",
      "bedsheet": "108 x 108 inches",
      "bedsheetMetric": "275 x 275 cm",
      "pillow": "18 x 27 inches",
      "pillowMetric": "46 x 69 cm"
    }
  ],
  "contact": {
    "heading": "We'd Love to Hear from You",
    "subtext": "For exclusive inquiries, personalized recommendations, or any questions about our premium collections, our team is here to assist you.",
    "fields": [
      "full_name",
      "email",
      "phone",
      "product_interest",
      "message"
    ]
  }
}
```

## 23. Final note on product/image maintenance workflow

To update product visuals later, the easiest workflow is:

1. Copy source files into normalized folders under `public/images/...`
2. Keep one folder per product slug
3. Rename the files in simple numeric order like `1.png`, `2.png`, `3.jpg` where possible
4. Update only the `imageRegistry` if file names or counts change
5. Keep `products[].imageKeys` mapped to the correct registry keys
6. Redeploy on Vercel
7. Refresh and verify the new galleries on Home, Collections, and PDP pages

This keeps everything frontend-only, Vercel-safe, and easy to maintain without backend work.
