# Marvelous Salon - Architecture & Design Rules

## 1. Design Philosophy
- **Premium through restraint, not excess.**
- Avoid flashy or distracting animations.
- Every animation must have a purpose: Guide attention, Improve usability, Enhance storytelling.
- If an animation does not improve the user experience, do not implement it.
- Prioritize clarity, elegance, readability, and performance over visual complexity.

## 2. Motion System
- **Framer Motion**: Use for component enter/exit animations, layout animations, page transitions, hover interactions, modal and drawer animations.
- **GSAP**: Use ONLY for ScrollTrigger, SplitText, Parallax, Horizontal scrolling, and Complex timeline animations.
- **Rule**: Do not mix GSAP and Framer Motion on the same element.
- **Accessibility**: Respect `prefers-reduced-motion`.
- **Timing**: Keep all animations between 250ms–800ms unless storytelling requires longer.

## 3. Component Architecture
- **Complete States**: Every UI component MUST support:
  - Loading State
  - Empty State
  - Error State
  - Disabled State (if applicable)
  - Hover State
  - Active State
  - Focus State
  - Mobile Responsiveness
- **Reusability**: Never create one-off components. Components should be reusable across the application.

## 4. Photography & Media
- **Quality**: Images must never be random stock photos. Use only editorial-quality salon photography.
- **Optimization**: Optimize images using AVIF, WebP, srcset, and Lazy Loading. Use blurred placeholders during loading.
- **Videos**: Should feel cinematic. 24–30 FPS, slow camera movement, natural lighting, no flashy transitions, short loops (8–15 seconds), optimized bitrate, lazy loaded.
- **Video Playback**: Do not autoplay multiple videos simultaneously. MUST pause videos outside the viewport.

## 5. Responsive & Layout System
- **Design Mobile First**.
- **Supported Breakpoints**: 320px, 375px, 390px, 414px, 768px, 1024px, 1280px, 1440px, 1728px, 1920px.
- **Constraints**: No horizontal scrolling.
- **Usability**: Touch targets must be a minimum of 44px.
- **Fluidity**: Use fluid typography and fluid spacing using CSS `clamp()`.

## 6. Code Generation & Architecture Constraints
- **Never generate code just to satisfy the prompt.**
- **Before creating any component**:
  1. Search the project using tools like `grep_search`.
  2. Check if a reusable component already exists.
  3. Extend the existing component if possible.
  4. Only create a new component when absolutely necessary.
## 7. Performance Budget
- **Metrics**: Largest Contentful Paint (LCP) < 2.5s; Cumulative Layout Shift (CLS) < 0.1; Interaction to Next Paint (INP) < 200ms.
- **JavaScript**: Minimal unused JavaScript.
- **Animation Performance**: Avoid animation on layout properties. Animate ONLY: `transform`, `opacity`, `filter` (sparingly). Never animate: `width`, `height`, `margin`, `padding`, `top`, `left`.

## 8. Accessibility (Mandatory)
- **Markup**: Use Semantic HTML.
- **Assistive Tech**: ARIA labels, Screen reader support, Alt text for EVERY image.
- **Keyboard**: Full Keyboard navigation support, Visible focus states.
## 9. Search Engine Optimization (SEO)
- **Metadata**: Every page must have a Meta Title, Meta Description, Open Graph tags, Twitter Cards, and Canonical URL.
- **Structured Data**: Implement Local Business Schema and Breadcrumb Schema using JSON-LD.
## 10. Enterprise UX Standards
- **Evaluation**: Before implementing any feature, evaluate whether it aligns with modern enterprise UX standards. Do not add effects simply because they are visually impressive.
- **Value**: Every feature must satisfy at least one of these goals: Improve usability, Improve storytelling, Improve accessibility, Improve performance, Improve brand perception. If a feature does not provide measurable value, omit it.
- **Final Aesthetic**: Emphasize elegance, performance, and maintainability rather than excessive visual effects.

## 11. UI/UX Standards (Mandatory)
- **Layout**: 1440px max width. 1280px container. Generous whitespace.
- **Spacing**: Use an 8px scale (4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120).
- **Border Radius**: Buttons: 12px, Cards: 20px, Images: 24px, Modals: 28px, Inputs: 12px.
- **Shadows**: Soft layered shadows, no harsh blacks. Subtle depth.
- **Colors**: Accent color used sparingly. Restraint over gold.

## 12. Strict Component Architecture
- **Mandate**: NEVER create page-specific UI components unless absolutely necessary.
- **Reuse**: Required reusable components include Button, Card, Section Wrapper, Container, Heading, Badge, Input, Textarea, Select, Modal, Drawer, Skeleton, Tabs, Accordion, Carousel, Gallery, Video Player, Testimonial Card, Service Card, Team Card, CTA Banner, Footer, Navbar.
- **Parameters**: Accept props for customization, avoid hardcoded values, use design tokens.

## 13. Animation & Motion System (Mandatory)
- **Goal**: Create a calm, premium experience inspired by Apple, Aesop, Dior. Motion must communicate quality, not complexity, and never distract.
- **Libraries**: Use GSAP only for ScrollTrigger, SplitText, Timeline, Parallax, horizontal scrolling. Use Framer Motion only for enter/exit, layout, hover, page transitions, modals/drawers. NEVER mix on the same element.
- **Timing Guidelines**: Micro interactions (150–250ms), Small transitions (250–350ms), Section reveals (500–700ms), Hero (700–1200ms), Page transitions (400–600ms). Never exceed 1200ms.
- **Easing**: Use premium easing (easeOut, easeInOut, custom cubic-bezier). No linear.
- **Hero Sequence**: Background fade -> Headline reveal -> Subheading -> Buttons -> Scroll indicator. Do NOT animate simultaneously.
- **Elements**: 
  - **Text**: Split words/mask reveal. Avoid animating every paragraph.
  - **Images**: Mask, opacity, scale, blur removal. NEVER rotate images.
  - **Cards**: Only animate entering viewport. Hover: subtle lift, small scale, shadow increase, border highlight, image zoom.
  - **Buttons**: Hover background transition, arrow movement, small elevation, focus ring. NO flashy effects (no large ripples/heavy magnetic physics).
- **Parallax**: 10-30px movement max. Desktop only. Disable on mobile.
- **Performance**: Animate ONLY transform, opacity, filter. NEVER animate width/height/margin/padding/top/left. Use `will-change` only where required and remove after. Run at 60-120fps with no layout shifts.

## 14. Performance & Optimization Standards (Mandatory)
- **Targets**: Desktop Lighthouse 100, Mobile 95+. LCP < 2.5s, INP < 200ms, CLS < 0.1, FCP < 1.8s. 60-120 FPS.
- **JavaScript**: Route-based code splitting, lazy loading, React.memo(), useMemo, useCallback. No heavy global libraries. Minimize bundle size.
- **Media**: AVIF/WebP with blur placeholders. Lazy load images/videos. Pause videos outside viewport. Optimize bitrate.
- **Fonts**: `font-display: swap`, preload primary fonts.
- **CSS**: Efficient Tailwind, avoid duplicate utilities.
- **GSAP / Framer Motion / Lenis**: Kill timelines on unmount (`gsap.context()`). Destory ScrollTriggers. Pause Lenis for modals/menus. Lightweight motion.
- **Skeleton Loading**: Provide skeletons matching final layouts instead of spinners for Hero, Cards, Gallery, Forms.
- **Memory**: Clear all unused event listeners, timeouts, and observers.

## 15. SEO & Accessibility Standards (Mandatory)
- **SEO Strategy**: Every page must have a Unique Title, Meta Description, Canonical URL, Open Graph Tags, Twitter Card Tags, and Favicon. Do not duplicate metadata.
- **Structured Data**: Implement JSON-LD Schema including Local Business, Beauty Salon, Organization, Website, Breadcrumb, FAQ, and Review schemas.
- **Semantic HTML & Headings**: Maintain strict hierarchy (One H1 per page, followed by H2, H3, H4). Use semantic elements (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`). Avoid unnecessary div wrappers.
- **Media Accessibility**: Images require meaningful `alt` text (empty for decorative), width, height, lazy loading, responsive srcset. Videos require poster images, accessible controls, and must pause outside viewport.
- **Links & Forms**: Links must be descriptive (no "Click Here"). External links open in new tab with `rel="noopener noreferrer"`. Forms need visible labels, autocomplete, validation, clear error messaging, and keyboard accessibility.
- **Keyboard Navigation & Focus**: Entire site must be usable without a mouse. Support Tab, Shift+Tab, Enter, Space, Escape. Visible focus ring required. Manage focus on modals/menus.
- **ARIA & Color Contrast**: Use ARIA only when semantic HTML is insufficient. Color contrast must meet WCAG AA standards.
- **Testing Requirements**: Lighthouse Accessibility Score ≥ 95, Lighthouse SEO Score = 100. Validate with axe DevTools and screen readers.

## 16. React Architecture & Project Structure (Mandatory)
- **Architecture**: Use Feature + Shared organization (e.g., `src/app`, `src/features`, `src/components`, `src/hooks`, `src/utils`, `src/constants`).
- **Feature Isolation**: Each feature (e.g., `features/home`) should own its components, hooks, types, and utilities. Do not mix unrelated code.
- **Page Composition**: Pages should only compose sections. Keep business logic outside UI components.
- **Naming Conventions**: Components: PascalCase. Hooks: camelCase (useX). Utilities: camelCase. Constants: UPPER_SNAKE_CASE. Folders: kebab-case/lowercase.
- **Business Logic & State**: Abstract complex logic into hooks, services, and utils. Use Local State or Context; avoid unnecessary global state (no Redux unless required).
- **Imports**: Prefer absolute imports. Avoid deeply nested relative paths using path aliases.
- **Quality Checklist**: Ensure no duplicate logic, strict TypeScript, no circular dependencies, and a perfectly clean folder structure before merging.

## 17. Component Development Standards & Design System (Mandatory)
- **Hierarchy**: Build using Atomic Design principles (Primitives -> UI Components -> Composite Components -> Feature Components -> Page Sections -> Pages).
- **Mandatory States**: Every component must handle loading, empty, error, disabled, hover, active, focus, and mobile responsiveness.
- **Strict Reuse**: Extract all generic UI into `src/components/ui/` (e.g., Button, Card, Section Wrapper, Container, Heading, Badge, Textarea, Select, Modal, Drawer, Skeleton, Tabs, Accordion, Carousel, Gallery, Video Player). DO NOT duplicate.
- **Motion Wrappers**: Centralize animations into reusable wrappers (Fade, Reveal, Stagger, Parallax, Mask, Scale, Slide).
- **Typography & Forms**: Never hardcode font sizes; use reusable Typography components. Ensure forms have accessible labels, validation, and clear error states.
- **Quality Assurance**: Before creating ANY component, check if it exists, extend it if possible, and ensure it supports the entire design system and A11y standards.

## 18. Asset Management Standards (Mandatory)
- **Centralization**: Store all assets inside strict directories in `src/assets/` (e.g., `images/hero`, `videos/academy`, `fonts`, `icons`).
- **Editorial Quality**: Never use generic stock assets. Use only luxury, professional, consistently color-graded salon photography and cinematic video.
- **Optimization**: All images/videos must be compressed, lazy-loaded (with responsive srcset and blur placeholders for images, and metadata preload/poster for videos). 
- **Typography & Icons**: Stick to Cormorant Garamond, Inter, and Manrope. Use `font-display: swap`. Use ONLY Lucide React icons.
- **Brand Identity**: Avoid cartoon illustrations and oversaturated colors. Use warm neutrals and soft contrast.

## 19. State Management & Data Flow Standards (Mandatory)
- **Philosophy**: State should be predictable, minimal, and localized. Avoid unnecessary global state. Keep state as close to the component as possible.
- **Shared State**: Use Context only for application-wide concerns (Theme, Navigation, Settings). Do not store page-specific state in Context.
- **Hooks & Derived State**: Extract reusable logic into hooks (e.g., `useScroll`, `useIntersectionObserver`). Never duplicate derived values; use `useMemo`.
- **Data Architecture**: Use one-way data flow. Prepare for future APIs by separating fetching, transformation, caching, and presentation. Abstract external integrations into `src/services/`.
- **Configuration**: Store reusable configuration in `src/constants/` (Business Hours, Contact, Routes). Never hardcode API Keys/URLs; use `.env`.

## 20. Error Handling & User Feedback Standards (Mandatory)
- **Mandatory States**: Every interactive feature must have gracefully handled Loading, Success, Error, and Empty states. Never expose raw JavaScript errors.
- **Loading & Empty**: Use Skeleton UI over generic spinners. Provide informative empty states with illustrations and suggested next actions when data is missing.
- **Fallbacks**: Images must have graceful placeholders if they fail; Videos require poster images/fallback content; Maps require fallback addresses with external links.
- **Form Feedback**: Validation must occur inline before submission. Buttons must support loading/disabled states to prevent double submission.
- **Accessibility & Toasts**: Announce errors and success messages via ARIA live regions. Use toast notifications sparingly without stacking them.
- **404 Page**: Design a premium custom 404 page with elegant illustrations, helpful messaging, and navigation fallbacks.

## 21. Testing Standards & Quality Assurance (Mandatory)
- **Definition of Done**: A task is complete only when there are zero TS errors, zero ESLint warnings, no console errors, and Lighthouse targets (Desktop 100, Mobile 95+) are met.
- **Responsive Testing**: Layouts must be verified across 12 distinct breakpoints (320px to 1920px) with no horizontal scrolling or overlapping content.
- **Cross-Browser Verification**: Functionality must be verified on Chrome, Edge, Firefox, and Safari.
- **Animation & Performance**: Verify smooth animations (no layout shifts, proper GSAP cleanup) and ensure lazy-loaded assets resolve without CLS.
- **Final Release Checklist**: Every feature must pass rigorous visual regression, accessibility, responsive, and error-handling tests before being marked complete.

## 22. Git Workflow & Documentation Standards (Mandatory)
- **Git Commits**: Use semantic commit messages (`feat:`, `fix:`, `refactor:`, `perf:`). Avoid vague messages like "update" or "changes". Keep commits focused on a single purpose.
- **Documentation**: Maintain only documentation that provides long-term value (`README.md`, `CHANGELOG.md`). Do not create documentation for every task.
- **Code Cleanup**: Remove unused imports, variables, console logs, and commented code before finalizing tasks.
- **Dependencies**: Avoid duplicate libraries. Prefer lightweight, actively maintained packages. Remove unused dependencies.

## 23. Deployment & CI/CD Standards (Mandatory)
- **Hosting & Environment**: Primary platform is Vercel. Never commit `.env` files or hardcode secrets. 
- **Build Quality**: Every build must compile successfully with zero TS/ESLint warnings, generate optimized/minified assets, and utilize tree-shaking and chunk splitting.
- **Security & Caching**: Implement strict security headers (CSP, X-Frame-Options) and aggressively cache immutable static assets.
- **Monitoring**: Prepare integrations for Vercel Analytics, Speed Insights, and GA4.
- **Pre-Deployment Gates**: Code cannot be merged/deployed unless it clears 100 Desktop / 95+ Mobile Lighthouse scores, flawless responsive layouts, and zero console errors.

## 24. Master AI Operating Rules (Mandatory)
- **Analyze First**: Read the request, search the project, identify reusable components, and create a plan BEFORE writing code.
- **Preserve Functionality**: Never rewrite working code without reason. Minimal, safe changes only.
- **Reuse Before Creating**: Always search for existing components, hooks, or styles to extend before duplicating functionality.
- **Senior Engineer Mindset**: Ensure all code respects the design system, animation system, and accessibility guidelines. Every feature must be scalable, performant, and production-ready.
- **Final Quality Gate**: Never mark a task complete until it is responsive, accessible, SEO optimized, performant, has zero build errors, zero ESLint/TS errors, and is thoroughly tested.

## 25. Design System & UI Governance (Mandatory)
- **Strict Tokens**: All visual properties (Colors, Typography, Spacing, Shadows, Border Radius, Motion Durations) must be driven by centralized design tokens (`tailwind.config.js` or CSS variables). Never hardcode values.
- **Semantic Mapping**: Use semantic color tokens (`Primary`, `Secondary`, `Surface`, `Muted`, `Error`) instead of raw hex values.
- **Component Variants**: Expose variants within reusable components (`Primary`, `Outline`, `Ghost`) rather than creating multiple separate component files.
- **Design Review**: Before introducing new UI patterns, search the project. Consistency is valued above creativity.

## 26. Security Standards & Best Practices (Mandatory)
- **Environment & Secrets**: Never hardcode API Keys, Secrets, or DB URLs. Access strictly through `.env.local` or `.env.production`. Never commit `.env` files.
- **Validation & Sanitization**: Validate all inputs (length, characters, email format) and sanitize inputs before rendering to prevent XSS.
- **Security Headers**: Configure CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy in production.
- **Safe Linking & Logging**: Use `rel="noopener noreferrer"` for external links. Never log passwords, tokens, or personal information. Remove dev logs before production.

## 27. Analytics & Monitoring Standards (Mandatory)
- **Platforms**: Utilize Google Analytics 4 (GA4) and Vercel Analytics/Speed Insights. Load analytics only after hydration.
- **Event Tracking**: Use `lowercase_snake_case` (e.g., `book_appointment`, `gallery_filter`). Track meaningful interactions (CTAs, Forms, Video plays). Do not duplicate tracking.
- **Privacy & Consent**: Never collect PII, IP addresses, or sensitive info. Analytics MUST NOT load until a Cookie Consent banner (Accept/Reject/Preferences) is granted.
- **Error & Performance Monitoring**: Prepare infrastructure for Sentry and continuously track Web Vitals (LCP, CLS, INP, FCP) without exposing data.

## 28. Content Strategy & CMS Guidelines (Mandatory)
- **Brand Voice & SEO**: Content must be Luxury, Warm, Confident, and Professional. Avoid clickbait, keyword stuffing, or generic placeholders. Every page must have unique H1s and metadata.
- **Asset Naming**: Enforce SEO-friendly filenames for media (e.g., `bridal-makeup.webp` instead of `IMG001.jpg`).
- **CMS Readiness**: Separate Text, Images, Videos, and Metadata from components. Avoid hardcoding content deeply inside UI components to prepare for future CMS integration (Contentful/Sanity).

## 29. Internationalization (i18n) & Localization Standards (Mandatory)
- **i18n Readiness**: Separate all user-facing strings into translation files (e.g. `src/locales/en/common.json`, `home.json`, etc.) or central dictionary structures to prevent hardcoding text in JSX.
- **Font & Layout Support**: Ensure chosen fonts (Cormorant Garamond, Inter, Manrope) render correctly for target locales (Marathi/Hindi), and design layouts to support dynamic lengths and future RTL reading flows.
- **Localization Helpers**: Ensure date, currency, phone numbers, and SEO metadata are dynamically configured for future localization routing.

## 30. Production Launch Checklist (Mandatory)
- **UI & Responsive gates**: Spacing must follow the 8px system. Spacing and typography must be responsive down to 320px with no horizontal scroll or overlapping elements.
- **Browser & Accessibility**: Test layout on Chrome/Edge/Firefox/Safari. Accessibility targets include full keyboard navigation, visible focus indicators, screen reader support, and WCAG AA contrast.
- **Lighthouse & SEO targets**: Desktop Lighthouse score must be 100, Mobile 95+. LCP < 2.5s, CLS < 0.1, INP < 200ms. Every page requires unique SEO titles, descriptions, breadcrumbs, sitemaps, and robots.txt.
- **Verification & Analytics**: Verify GA4, Vercel Analytics, and Speed Insights events. Cookie consent must gate all analytics tracking. Build validation requires zero TS warnings/errors, and complete documentation in README/CHANGELOG.md.

## 31. Post-Launch Maintenance & Operations Guide (Mandatory)
- **Long-term Stability**: Treat the site as a long-term product. Weekly, monthly, and quarterly audits for availability, form validation, SEO indexation, security vulnerabilities, and package compatibility must be set up.
- **Backup & Release Strategy**: Tag Git releases before major dependency updates. Ensure Vercel deployment rollbacks are verified and never push untracked hotfixes directly to production.
- **Success Metrics**: Maintain 99.9% uptime, Lighthouse Performance targets (100 Desktop / 95+ Mobile), zero console errors, zero TS errors, and zero ESLint warnings.
