# Marvelous Salon & Academy

A premium, luxury-focused web application for **Marvelous Salon & Academy**, a high-end beauty sanctuary and professional vocational training institute located in Beverly Hills, CA.

## Technology Stack

This application is built exclusively using the following selected technologies:

- **React.js** (v18)
- **Vite** (v5)
- **TypeScript** (v5)
- **Tailwind CSS** (v3)
- **React Router DOM** (v6)
- **GSAP** & **ScrollTrigger** (v3)
- **Framer Motion** (v11)
- **Lenis Smooth Scroll** (v1)
- **Lucide React Icons** (v0.363)
- **React Hook Form** (v7)
- **React Helmet Async** (v2)

---

## Folder Structure

The codebase is organized following a production-ready, modular architecture:

```text
src/
 ├── assets/        # Media assets, SVGs, and brand logo
 ├── components/    # Reusable UI widgets and layout modules
 │     ├── animations/  # GSAP/Framer motion wrappers (FadeIn, ImageReveal)
 │     ├── layout/      # Core frames (Header, Footer)
 │     └── ui/          # Primitives (Button, Card)
 ├── data/          # Static business databases (services, courses, gallery)
 ├── hooks/         # Custom React hooks (useLenis)
 ├── pages/         # Page containers (Home, About, Services, Academy, Gallery, Contact)
 ├── routes/        # Lazy load routing configurations
 ├── styles/        # Global style overrides and Tailwind entries
 └── App.tsx        # Main App core wrapper
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or above recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone or copy the project files to your desktop.
2. In the project directory, install the required node dependencies:
   ```bash
   npm install
   ```

### Available Development Scripts

In the project root, you can execute the following commands:

#### Run Development Server
```bash
npm run dev
```
Launches the local Vite server at [http://localhost:3000](http://localhost:3000) with automatic Hot Module Replacement (HMR).

#### Build Production Bundle
```bash
npm run build
```
Type checks the application via TypeScript (`tsc`) and compiles the assets into static HTML/CSS/JS bundles in the `dist/` directory, optimized with code-splitting chunks.

#### Preview Production Build
```bash
npm run preview
```
Runs the locally compiled production bundle to verify load speeds and route chunks.

---

## Core Engineering & Styling Guidelines

- **Typography**: Cora/Serif fonts for luxury styling paired with clean Inter-based sans-serif text for readable interface metadata.
- **Color Theme**: Obsidian (`#0A0A0A`), Gold (`#D4AF37`), Cream (`#F9F6F0`), and Slate Black (`#121212`).
- **Smooth Scroll & Animation**: Enabled via a global `useLenis` hook synchronized directly with GSAP's `ScrollTrigger` and `Framer Motion` elements to prevent layout shifts.
- **Accessibility (WCAG)**: Uses HTML5 semantic tags (`header`, `main`, `footer`), explicit `aria-label` hooks, keyboard navigation listeners, and contrasting typography ratios.
- **SEO & Meta Systems**: Helmet manages dynamic og-image tags, site canonical links, sitemaps, and standard LD+JSON structured data (BeautySalon scheme).
