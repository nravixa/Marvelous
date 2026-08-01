import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;

    if (!container || !image || !overlay) return;

    // Reset initial states
    gsap.set(image, { scale: 1.4 });
    gsap.set(overlay, { xPercent: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.to(overlay, {
      xPercent: 101,
      duration: 1.4,
      ease: 'power4.inOut',
    })
    .to(image, {
      scale: 1,
      duration: 1.6,
      ease: 'power3.out',
    }, '-=1.2'); // overlaps for smooth effect

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
    >
      {/* Sliding reveal mask */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-gold will-change-transform"
      />
      {/* The Image */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover origin-center will-change-transform"
      />
    </div>
  );
};
