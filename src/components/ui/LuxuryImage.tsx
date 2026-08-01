import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LuxuryImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  parallax?: boolean;
}

export const LuxuryImage: React.FC<LuxuryImageProps> = ({
  src,
  alt,
  aspectRatio = 'aspect-[4/3]',
  className = '',
  parallax = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Lazy loading observer
  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Only need to trigger once for loading
        }
      },
      { rootMargin: '200px 0px', threshold: 0 }
    );

    observer.observe(currentContainer);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Parallax effect
  useEffect(() => {
    if (!parallax || !containerRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [parallax]);

  // Construct a low-res blurred URL for Unsplash (if it's an Unsplash URL)
  // This gives an instant dominant-color blurred placeholder while loading.
  const isUnsplash = src.includes('images.unsplash.com');
  const blurPlaceholderUrl = isUnsplash
    ? src.replace(/&w=\d+/, '&w=50').concat('&blur=50')
    : undefined;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden group bg-obsidian-charcoal ${aspectRatio} ${className}`}
    >
      {/* Background Low-Res Placeholder */}
      {blurPlaceholderUrl && !isLoaded && (
        <img
          src={blurPlaceholderUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60"
          aria-hidden="true"
        />
      )}

      {/* Actual High-Res Image */}
      {isIntersecting && (
        <motion.img
          ref={imageRef}
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            filter: isLoaded ? 'blur(0px)' : 'blur(10px)',
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform ${
            parallax ? 'scale-110' : ''
          }`}
        />
      )}

      {/* Cinematic Overlays (Optional, baked into layout) */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-[inherit]" />
    </div>
  );
};
