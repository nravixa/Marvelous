import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Testimonial } from '../../data/testimonialsData';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = testimonial.review.length > 140;

  const displayReview = isExpanded 
    ? testimonial.review 
    : isLongText 
      ? `${testimonial.review.slice(0, 130)}...` 
      : testimonial.review;

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
      className="glass-card p-8 text-left h-full flex flex-col justify-between border-t-2 border-t-gold/20 hover:border-t-gold transition-all duration-500 shadow-luxury-sm"
    >
      <div>
        {/* Top Badges / Highlights */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <div className="flex gap-1 text-gold">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>

          {testimonial.badge && (
            <span className="text-[10px] uppercase tracking-widest text-gold border border-gold/30 px-2 py-0.5 rounded-full font-medium">
              {testimonial.badge}
            </span>
          )}

          {testimonial.highlight && (
            <span className="text-[10px] uppercase tracking-widest text-cream/50 font-medium">
              {testimonial.highlight}
            </span>
          )}
        </div>

        {/* Review Text */}
        <div className="text-cream/80 font-light text-sm italic leading-relaxed mb-8 transition-all duration-300">
          &ldquo;{displayReview}&rdquo;
          {isLongText && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gold font-normal hover:underline ml-2 focus:outline-none not-italic text-xs tracking-wider uppercase inline-block"
              aria-label={isExpanded ? "Show less review content" : "Read full review content"}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>

      {/* Author Name */}
      <div>
        <h4 className="font-serif text-base font-medium text-cream tracking-wide">
          {testimonial.name}
        </h4>
        <span className="text-xxs uppercase tracking-widest text-gold/60 mt-1 block">Verified Client</span>
      </div>
    </motion.div>
  );
};
