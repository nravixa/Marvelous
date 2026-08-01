import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PinnedHorizontalScrollProps {
  children: React.ReactNode[];
  className?: string;
}

export const PinnedHorizontalScroll: React.FC<PinnedHorizontalScrollProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWrapper = scrollWrapperRef.current;
    
    if (!container || !scrollWrapper) return;

    // Calculate how far to move left based on total panels
    const totalPanels = children.length;
    // We move by (totalPanels - 1) * 100% of a single panel's width
    const xPercent = -100 * (totalPanels - 1) / totalPanels;

    const ctx = gsap.context(() => {
      gsap.to(scrollWrapper, {
        xPercent: xPercent,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          start: 'center center',
          end: () => `+=${scrollWrapper.offsetWidth}`, // The length of the scroll matches the width of the content
        },
      });
    }, container);

    return () => ctx.revert();
  }, [children.length]);

  return (
    <section 
      ref={containerRef} 
      className={`h-screen flex items-center overflow-hidden bg-obsidian-charcoal relative border-y border-white/5 ${className}`}
    >
      <div 
        ref={scrollWrapperRef}
        className="flex h-full will-change-transform"
        style={{ width: `${children.length * 100}vw` }}
      >
        {children.map((child, idx) => (
          <div key={idx} className="w-screen h-full flex items-center justify-center p-6 lg:p-24 relative">
            {child}
          </div>
        ))}
      </div>
      
      {/* Scroll indicator for user */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-50">
        <span className="text-xxs uppercase tracking-widest text-gold font-medium">Scroll to explore</span>
        <div className="w-8 h-[1px] bg-gold" />
      </div>
    </section>
  );
};
