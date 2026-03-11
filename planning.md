# Viritia — Planning Document

## Project Goal Summary

Build a luxury frontend-only storefront MVP for Viritia, a premium bedsheet brand. The site serves as a high-converting Meta ads landing destination with WhatsApp-led order flow, cart-based browsing without login, and JSON-driven content for easy asset swapping.

## Implementation Assumptions

- Frontend-only, no backend/auth/database
- Next.js App Router with Tailwind CSS deployed on Vercel
- All product data driven from JSON files
- All images referenced via a centralized image registry
- Cart persisted in localStorage via Zustand
- WhatsApp deep links for order flow
- Google Fonts loaded via HTML link tags (Cormorant Garamond + Inter)

## Architecture Decisions

- **Framework:** Next.js 16 with App Router and Turbopack
- **Styling:** Tailwind CSS v4 with custom theme tokens
- **State:** Zustand with persist middleware for cart
- **Images:** Central image-registry.json resolves all image keys to paths
- **Data:** Local JSON files for products, collections, site config, and page content
- **Types:** Centralized TypeScript types in `src/types/`
- **Components:** Domain-organized under `src/components/`

## Route Map

| Route | Page |
|-------|------|
| `/` | Home |
| `/collections` | Collections with filters |
| `/product/[slug]` | Product Detail Page |
| `/about` | Our Story |
| `/contact` | Contact / Inquiry |
| `/cart` | Cart |

## Component Map

- **Layout:** Header, Footer (shared across all pages)
- **Home:** HeroSection, FeaturedCollections, BrandValues, FeaturedProducts, Testimonials, CtaSection
- **Collections:** CollectionHero, CollectionFilters, ProductGrid, ProductCard, SizeGuide
- **Product:** ProductGallery, ProductInfo, DeliveryStrip, RelatedProducts
- **About:** AboutHero, BrandIdentity, ViritiaDifference, StatsSection, TestimonialsGrid, PackagingSection, CoreValues, AboutCta
- **Contact:** ContactHero, ContactPanel, InquiryForm, PurchaseNote
- **Cart:** CartList, CartSummary, QuantityStepper, EmptyCart
- **Shared:** SectionHeading, PriceDisplay, OptimizedImage

## Data Layer Plan

- `src/data/site-config.json` — Brand info, WhatsApp number, delivery info
- `src/data/products.json` — 13 products across 3 collections
- `src/data/collections.json` — 3 collections metadata
- `src/data/image-registry.json` — Central image key to path mapping
- `src/data/home-content.json` — Home page section content
- `src/data/about-content.json` — About page section content
- `src/data/contact-content.json` — Contact page content

## Cart State Plan

- Zustand store with `persist` middleware using localStorage
- Actions: addItem, removeItem, updateQuantity, clearCart
- Duplicate add merges quantity
- Cart survives page refresh

## Image Registry Strategy

- All components reference image keys, not raw paths
- `resolveImage(section, key)` for section images
- `resolveProductImage(key)` for product images
- Remote Unsplash URLs used for hero/about backgrounds
- Local images in `public/images/` for all product photos

## Deployment Plan

- Vercel deployment via Next.js
- Static generation for all product pages via `generateStaticParams`
- Remote images configured in `next.config.ts`
- All assets in `public/` folder

## Known Risks

- Unsplash URLs may change or become unavailable (can be replaced with local images)
- Soft Embroidery products have only 1 image each (single-image carousel gracefully handled)
- Contact form is frontend-only placeholder (no submission handler wired yet)

## Open Issues

- No packaging images provided; using icon placeholder for packaging section
- Home hero and about hero use Unsplash stock images as placeholders
