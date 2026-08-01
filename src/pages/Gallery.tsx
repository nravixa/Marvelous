import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData, GalleryItem } from '../data/galleryData';
import { FadeIn } from '../components/animations/FadeIn';
import { TiltCard } from '../components/animations/TiltCard';
import { CinematicVideo } from '../components/ui/CinematicVideo';
import { LuxuryImage } from '../components/ui/LuxuryImage';
import { PageTransition } from '../components/animations/PageTransition';
import galleryHeroImage from '../components/images/gallery.jpg';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterButtons = [
    { value: 'all', label: 'All Works' },
    { value: 'hair', label: 'Hair Design' },
    { value: 'skincare', label: 'Skincare' },
    { value: 'makeup', label: 'Makeup Artistry' },
  ];

  const filteredItems = filter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  // Lock scrolling when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      import('../hooks/useLenis').then(({ globalLenis }) => globalLenis?.stop());
    } else {
      document.body.style.overflow = 'unset';
      import('../hooks/useLenis').then(({ globalLenis }) => globalLenis?.start());
    }
    return () => {
      document.body.style.overflow = 'unset';
      import('../hooks/useLenis').then(({ globalLenis }) => globalLenis?.start());
    };
  }, [lightboxIndex]);

  // Close lightbox on Escape key, navigate on Left/Right keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleNext = () => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex + 1) % filteredItems.length;
    });
  };

  const handlePrev = () => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex - 1 + filteredItems.length) % filteredItems.length;
    });
  };

  const activeItem: GalleryItem | undefined = lightboxIndex !== null ? filteredItems[lightboxIndex] : undefined;

  return (
    <PageTransition>
      <div className="relative w-full">
        {/* Page Header */}
      <section className="relative pt-40 pb-20 bg-obsidian-slate border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={galleryHeroImage} alt="Our Creative Gallery" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-slate via-obsidian-slate/80 to-obsidian-slate/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="down">
            <span className="text-gold text-xs font-medium uppercase tracking-widest block mb-3">Portfolio Show</span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream tracking-wide mb-6">
              Our Creative Gallery
            </h1>
            <p className="text-cream/60 max-w-xl mx-auto text-sm font-light leading-relaxed">
              Browse professional cuts, makeup designs, clinical skincare treatments, and student collections.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => {
                setFilter(btn.value);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 font-medium ${
                filter === btn.value
                  ? 'bg-gold text-obsidian font-semibold'
                  : 'bg-transparent text-cream/70 border border-white/10 hover:border-gold/40 hover:text-gold'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                  onClick={() => setLightboxIndex(idx)}
                >
                <TiltCard tiltMaxAngleX={12} tiltMaxAngleY={12} className="group relative cursor-pointer overflow-hidden aspect-[4/3] bg-obsidian-charcoal border border-white/5 w-full h-full">
                  {/* Luxury Image with Blur-Up */}
                  <LuxuryImage
                    src={item.imageUrl.replace('&w=800', '&w=1600')}
                    alt={item.title}
                    aspectRatio="aspect-[4/3]"
                    className="h-full w-full opacity-75 group-hover:opacity-90 transition-opacity duration-300"
                  />

                  {/* Overlay Hover card info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                    <span className="text-xxs text-gold uppercase tracking-widest font-semibold mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl text-cream font-medium flex items-center justify-between">
                      <span>{item.title}</span>
                      <Maximize2 className="w-4 h-4 text-cream/60" />
                    </h3>
                    <p className="text-xs-plus text-cream/60 mt-1 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && activeItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-obsidian-dark/95 backdrop-blur-xl"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-10 text-cream/70 hover:text-white p-2 focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 md:left-8 text-cream/70 hover:text-white p-2 focus:outline-none"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 text-cream/70 hover:text-white p-2 focus:outline-none"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Content Card */}
            <div className="bg-obsidian-charcoal w-full max-w-6xl mx-auto flex flex-col md:flex-row relative" onClick={(e) => e.stopPropagation()}>
              {/* Image Section */}
              <div className="md:w-2/3 h-[50vh] md:h-gallery-md overflow-hidden bg-black flex items-center justify-center">
                <motion.img
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  src={activeItem.imageUrl.replace('&w=800', '&w=1600')}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Description Column */}
              <div className="md:w-1/3 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/5">
                <div className="h-full flex flex-col justify-center">
                  <span className="text-xxs text-gold uppercase tracking-widest font-semibold block mb-2">
                    {activeItem.category}
                  </span>
                  <h2 className="font-serif text-2xl text-cream font-medium mb-4">
                    {activeItem.title}
                  </h2>
                  <p className="text-sm text-cream/70 font-light leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>
                
                {/* Meta details */}
                <div className="text-xxs text-cream/40 uppercase tracking-widest border-t border-white/5 pt-6 mt-6">
                  {lightboxIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};
