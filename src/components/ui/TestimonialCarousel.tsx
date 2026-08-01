import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../../data/testimonialsData';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update visible cards based on responsive viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(3); // Desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = testimonialsData.length;
  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  // Keyboard navigation event handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  // Drag/Swipe handler for mobile touch gestures
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  const visibleTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  // If slicing wraps around (not strictly necessary but keeps layout full if current index shifts)
  const paddedIndex = Math.min(currentIndex, maxIndex);

  return (
    <div 
      className="relative w-full overflow-hidden py-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Customer Reviews Slider. Use left and right arrow keys to navigate."
    >
      {/* Slider Window */}
      <motion.div 
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        className="w-full cursor-grab active:cursor-grabbing"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch min-h-[250px]">
          <AnimatePresence mode="popLayout">
            {testimonialsData.slice(paddedIndex, paddedIndex + itemsPerPage).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex"
              >
                <div className="w-full flex-grow">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-cream hover:text-gold hover:border-gold/50 hover:bg-white/5 transition-all outline-none focus:ring-2 focus:ring-gold/50"
          aria-label="Previous Review"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-xs uppercase tracking-widest text-cream/40 font-light select-none">
          {paddedIndex + 1} – {Math.min(paddedIndex + itemsPerPage, totalItems)} of {totalItems}
        </span>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-cream hover:text-gold hover:border-gold/50 hover:bg-white/5 transition-all outline-none focus:ring-2 focus:ring-gold/50"
          aria-label="Next Review"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
