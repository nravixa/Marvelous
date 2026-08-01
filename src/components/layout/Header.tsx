import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '../ui/Button';
import { globalLenis } from '../../hooks/useLenis';
import logoImage from '../images/logo.png';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const location = useLocation();
  const { scrollY } = useScroll();

  // Scroll detection logic for Glassmorphism & Hide/Show
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Glassmorphism trigger
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Mobile Menu Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      globalLenis?.stop();
    } else {
      document.body.style.overflow = 'unset';
      globalLenis?.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      globalLenis?.start();
    };
  }, [isOpen]);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Academy', path: '/academy' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Outer Floating Wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 pointer-events-none">
        <motion.header
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -100, opacity: 0 },
          }}
          initial="visible"
          animate={isHidden ? "hidden" : "visible"}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-6xl pointer-events-auto"
        >
          <div
            className={`w-full flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 ${
              isScrolled
                ? 'bg-obsidian/85 backdrop-blur-md border-white/10 shadow-luxury-lg'
                : 'bg-transparent border-transparent'
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="Marvelous Home">
              <img
                src={logoImage}
                alt="Marvelous Unisex Salon Logo"
                className="h-8 w-8 md:h-10 md:w-10 transition-transform duration-500 group-hover:rotate-12"
              />
              <span className="font-serif text-base md:text-lg font-bold uppercase tracking-[0.25em] text-cream group-hover:text-gold transition-colors duration-300">
                MARVELOUS
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-2 relative">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`text-xxs uppercase tracking-widest transition-colors duration-300 focus:outline-none relative py-2 px-3 rounded-full ${
                    location.pathname === link.path ? 'text-gold font-medium' : 'text-cream/80 hover:text-cream'
                  }`}
                >
                  {/* Floating Hover Background Pill */}
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="hoverNavPill"
                      className="absolute inset-0 bg-white/5 rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {/* Active Link Underline */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-1 left-3 right-3 h-hairline bg-gold z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </nav>

            {/* Call To Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/services">
                <Button variant="outline" size="sm" magnetic>
                  Book Appointment
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-cream hover:text-gold transition-colors focus:outline-none z-50 relative p-2"
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Drawer Menu (Full-screen Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-obsidian-dark/98 backdrop-blur-2xl flex flex-col justify-between px-8 py-20 h-[100dvh] w-screen overflow-hidden"
          >
            {/* Staggered Navigation Links */}
            <nav className="flex flex-col gap-8 text-left mt-16 max-w-md mx-auto w-full">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: idx * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-serif text-4xl tracking-widest block py-2 border-b border-white/5 transition-all hover:text-gold ${
                      location.pathname === link.path ? 'text-gold italic font-medium' : 'text-cream/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md mx-auto flex flex-col gap-6 text-center items-center mt-auto pb-8"
            >
              <Link to="/services" className="w-full" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full" magnetic={false}>
                  Book Appointment
                </Button>
              </Link>
              <Link to="/services" className="w-full" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full" magnetic={false}>
                  Explore Services <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
