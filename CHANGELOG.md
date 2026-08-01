# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-08-01

### Changed
- Updated business name to `Marvelous Unisex Salon & Academy` globally.
- Reengineered the main navigation header into a premium floating pill bar design that transitions to glassmorphism on scroll, hides on scroll down, and features animated hover background pills and active state underlines.
- Updated the founder details on the About page to Umesh Jagtap (Founder & Managing Director) and updated layout and story references accordingly.
- Populated the 7 unisex categories in `servicesData.ts` with comprehensive, detailed service menus (e.g., Luxury Facial, Hydra Facial, Keratin Therapy, Hair Botox, Men's Grooming variants, etc.).
- Fixed Services page (`Services.tsx`) issues: 
  - Restored URL hash routing via `useLocation` to open the correct category from external links.
  - Implemented dynamic, category-specific imagery using the `LuxuryImage` component in the left panel.
  - Fixed category toggle animations by properly binding React keys (`key={activeCategory}`) to the `StaggerContainer` and `FadeIn` wrappers.
  - Enhanced scrolling UX by utilizing `globalLenis` for "Book Category" and tab switching interactions.
- Updated the "Our Core Philosophy" section image on the Home page to use the local `home_1.jpeg` asset.
- Updated the "Our Identity" header poster image on the About page to use the local `about_1.jpeg` asset.
- Updated the "Reimagining Beauty Standards Since 2011" story section poster image on the About page to use the local `about_2.jpeg` asset.
- Updated the "Step Into a World of Refined Beauty" conversion booking banner poster image on the Home page to use the local `home_2.jpeg` asset.
- Updated the "Advanced Skincare" category image on the Services page to use the local `skincare.jpeg` asset.
- Updated the "Couture Makeup" category image on the Services page to use the local `makeup.jpeg` asset.
- Updated the "Specialized Treatments" category image on the Services page to use the local `treatment.jpg` asset.
- Updated the "Young Guests (Kids)" category image on the Services page to use the local `kid.jpg` asset.
- Updated the "Men's Grooming" category image on the Services page to use the local `mens_grooming.jpg` asset.
- Updated the "Women's Styling" category image on the Services page to use the local `women_stylists.jpg` asset.
- Updated the "Hair Design & Styling" category image on the Services page to use the local `home_2.jpeg` asset.
- Updated the Services page hero background (Couture Beauty Treatments) to use the local `service.jpg` asset with a premium dark gradient overlay.
- Updated the Academy page hero background (Marvelous Vocational Academy) to use the local `academy.jpg` asset with a premium dark gradient overlay.
- Updated the "Grand Master Diploma in Cosmetology" course image on the Academy page to use the local `academy_1.jpg` asset.
- Updated the "Advanced Hair Artistry & Color Chemistry" course image on the Academy page to use the local `academy_2.jpg` asset.
- Updated the "Professional Makeup Artistry & Airbrushing" course image on the Academy page to use the local `academy_3.jpg` asset.
- Updated the Gallery page hero background (Portfolio Show / Our Creative Gallery) to use the local `gallery.jpg` asset with a premium dark gradient overlay.
- Updated the Gallery page to feature curated local assets for Hair Design (`haircut.jpg`, `haircut_1.jpg`, `haircut_2.jpg`), Skincare (`skincare1.jpg`, `skincare2.jpg`, `skincare3.jpg`), and Makeup Artistry (`makeup1.jpg`, `makeup2.jpg`, `makeup3.jpg`).
- Updated the Contact page hero background (Get In Touch / Connect With Us) to use the local `contact.jpg` asset with a premium dark gradient overlay.
- Updated the site footer to display the NRAVIXA copyright and link (`https://nravixa.vercel.app/`).
- Removed the "Academy Projects" section and filter from the Gallery page to streamline the visual portfolio.
- Implemented a full-screen mobile menu overlay with staggered luxury entrance animations and custom premium bezier easing.
- Created `TestimonialCard` and `TestimonialCarousel` components to render real customer reviews (Harshad Kamble, Shekhar Lokhande, Suraj Patil, Dheeraj Kamble, Preeti Wagh) with responsive grid layouts, swipe support, keyboard accessibility, and text expansions.
- Reorganized services menu into 7 unisex categories (`hair`, `skin`, `makeup`, `treatments`, `kids`, `men`, `women`) and populated with requested services and premium descriptions.
- Updated working hours to Monday - Sunday, 9:00 AM - 9:00 PM (Daily).
- Updated physical address to `Shop No.36 Kakde Plaza, Opp. Kakade City, Karvenagar, Pune, Maharashtra 411052` globally.
- Updated Instagram links to `https://www.instagram.com/marvelous_unisex_salon_academy/` (@marvelous_unisex_salon_academy).
- Updated Google Maps link to `https://maps.app.goo.gl/JPiLWSQCEqFmpoBE8` (added "Get Directions" buttons).
- Updated Home page hero subtitle and philosophy section with business highlights.
- Added smooth scrolling CTAs to categories on Services page pointing to Reservation Form.
- Refactored Contact page coordinates and added Google Maps and Instagram CTAs.
- Updated contact number to `+91 97307 66355` (and schema telephone value to `+91-97307-66355`) across all pages, forms, footer, and metadata.
- Updated SEO metadata and JSON-LD LocalBusiness Structured Data with the new business coordinates, hours, Tan/Keratin/Spa keywords, and sameAs links.

## [1.0.0] - 2026-08-01

### Added
- Created complete directory configurations and config files (`package.json`, `tsconfig.json`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `index.html`).
- Implemented global styles (`src/styles/index.css`) containing custom scrollbars, glassmorphism card classes, and Lenis scroll bindings.
- Created `src/hooks/useLenis.ts` for smooth scrolling integration with GSAP ScrollTrigger.
- Created UI elements: `Button.tsx` (magnetic dynamics) and `Card.tsx` (glassmorphism hover states).
- Created Animation wrappers: `FadeIn.tsx` (Framer Motion transitions) and `ImageReveal.tsx` (GSAP ScrollTrigger clipping masks).
- Created static databases: `servicesData.ts`, `coursesData.ts`, `galleryData.ts`.
- Developed Layout wrappers: `Header.tsx` (sticky blur effects with mobile drawer) and `Footer.tsx` (structured corporate details).
- Created page containers: `Home.tsx` (parallax hero, testimonials), `About.tsx` (founder stories), `Services.tsx` (pricing tables, reservation form), `Academy.tsx` (syllabus, admissions form), `Gallery.tsx` (filterable layout, keyboard-guided lightbox), `Contact.tsx` (FAQs, contact forms).
- Integrated lazy loading route definitions (`src/routes/index.tsx`) and application core wrapper (`src/App.tsx`).
- Created core documentation (`README.md`).
- **GSAP 60 FPS Optimizations**: Added `force3D: true`, `will-change-transform`, and ScrollTrigger optimizations to `Home.tsx` and `useLenis.ts` for strictly smooth hardware-accelerated parallax.
- **LuminousCard UI Component**: Engineered a highly interactive, 3D lighted VIP membership card using raw CSS geometry (`LuminousCard.css`) and integrated it into `Services.tsx`.
- **Global Background Pattern**: Added a seamless diagonal linear gradient pattern to all `bg-obsidian-charcoal` and `bg-obsidian-slate` regions globally via `index.css`.
- **Premium Shadow Architecture**: Implemented elegant depth layering using subtle base box-shadows for `.glass-card` elements, scrolling drop-shadows for `Header.tsx`, and text-shadows for Hero typography.
- **TiltCard 3D Interaction Engine**: Developed a physics-based 3D tilt component with an interactive cursor glare using Framer Motion springs (`TiltCard.tsx`). Wrapped Gallery grid items and About page profile cards to provide an industry-leading immersive luxury experience.

### Fixed
- Added image asset wildcard module declarations (`.jpeg`, `.jpg`, `.png`, `.svg`) to `src/custom.d.ts` to resolve TypeScript compilation errors during import.
- Resolved type incompatibility error between standard React button properties and Framer Motion's `<motion.button>` element in `Button.tsx`.
- Removed unused imports and variables in `Footer.tsx`, `Academy.tsx`, `Contact.tsx`, `Home.tsx`, and `Services.tsx` to maintain warning-free compilation.
