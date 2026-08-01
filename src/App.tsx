import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useLenis } from './hooks/useLenis';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes';
import { GlobalPreloader } from './components/ui/GlobalPreloader';

// Scroll to top helper on page change (crucial for Lenis smooth scroll)
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useLenis();

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen bg-obsidian text-cream antialiased selection:bg-gold selection:text-obsidian overflow-x-hidden">
        <GlobalPreloader />
        {/* Global SEO Management */}
        <Helmet>
          <title>Marvelous Unisex Salon & Academy | Luxury Beauty Services</title>
          <meta name="description" content="Experience premium beauty services, hair styling, skin care, bridal makeup, and professional beauty courses at Marvelous Unisex Salon & Academy." />
          <link rel="canonical" href="https://marvelous-salon-academy.com" />
        </Helmet>

        <ScrollToTop />
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
};
