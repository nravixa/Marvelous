import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy loading page routes for production performance & code splitting
const Home = lazy(() => import('../pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('../pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('../pages/Services').then(m => ({ default: m.Services })));
const Academy = lazy(() => import('../pages/Academy').then(m => ({ default: m.Academy })));
const Gallery = lazy(() => import('../pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('../pages/Contact').then(m => ({ default: m.Contact })));

// A premium gold loader spinner component using Framer Motion
const PageLoader = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="h-[100dvh] w-full flex flex-col items-center justify-center bg-obsidian text-cream"
  >
    <div className="relative flex items-center justify-center w-16 h-16">
      {/* Outer spinning ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="absolute inset-0 border-2 border-gold/10 border-t-2 border-t-gold rounded-full" 
      />
      {/* Inner pulsing ring */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="w-8 h-8 border border-gold/30 rounded-full" 
      />
    </div>
    <motion.span 
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="text-xxs uppercase tracking-widest text-gold/80 mt-8 font-medium"
    >
      Curating Experience...
    </motion.span>
  </motion.div>
);

export const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Suspense fallback={<PageLoader />}><Home /></Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<PageLoader />}><About /></Suspense>
        } />
        <Route path="/services" element={
          <Suspense fallback={<PageLoader />}><Services /></Suspense>
        } />
        <Route path="/academy" element={
          <Suspense fallback={<PageLoader />}><Academy /></Suspense>
        } />
        <Route path="/gallery" element={
          <Suspense fallback={<PageLoader />}><Gallery /></Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<PageLoader />}><Contact /></Suspense>
        } />
        {/* Fallback to Home */}
        <Route path="*" element={
          <Suspense fallback={<PageLoader />}><Home /></Suspense>
        } />
      </Routes>
    </AnimatePresence>
  );
};
