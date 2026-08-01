import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Scissors } from 'lucide-react';

export const GlobalPreloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We enforce a minimum load time of 1.5s for the premium feel
    const minTimePromise = new Promise(resolve => setTimeout(resolve, 1500));
    
    // We also wait for the window to fully load (images/fonts)
    const windowLoadPromise = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve(true);
      } else {
        window.addEventListener('load', resolve);
      }
    });

    const ctx = gsap.context(() => {
      // Progress bar animation
      gsap.to(progressRef.current, {
        scaleX: 1,
        duration: 1.5,
        ease: 'power2.inOut',
      });
      
      // Logo pulsing
      gsap.to(textRef.current, {
        opacity: 1,
        duration: 0.8,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut'
      });
    }, containerRef);

    Promise.all([minTimePromise, windowLoadPromise]).then(() => {
      // Reveal animation
      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 1,
        ease: 'power4.inOut',
        onComplete: () => {
          setIsLoading(false);
          // Trigger a custom event so other components know loading finished
          window.dispatchEvent(new Event('preloaderFinished'));
        }
      });
    });

    return () => ctx.revert();
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-obsidian flex flex-col items-center justify-center pointer-events-auto"
    >
      <div className="flex flex-col items-center gap-8" ref={textRef} style={{ opacity: 0 }}>
        <Scissors className="w-12 h-12 text-gold" />
        <h1 className="font-serif text-3xl md:text-4xl text-cream tracking-widest uppercase">
          Marvelous
        </h1>
      </div>

      {/* Geometric Progress Bar */}
      <div className="absolute bottom-24 w-64 h-[1px] bg-white/10 overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-gold w-full origin-left scale-x-0"
        />
      </div>
    </div>
  );
};
