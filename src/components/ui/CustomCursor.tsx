import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Detect touch device (we disable custom cursor on touch)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Use GSAP quickTo for ultra-performant 60fps tracking
    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    
    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.4, ease: "power3" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.4, ease: "power3" });

    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      // Center the custom cursors precisely on the mouse pointer
      xToCursor(e.clientX - 4);
      yToCursor(e.clientY - 4);
      
      xToFollower(e.clientX - 20);
      yToFollower(e.clientY - 20);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over an interactive element
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.magnetic-zone') || 
        target.tagName.toLowerCase() === 'input'
      ) {
        if (!isHovering) {
          isHovering = true;
          gsap.to(follower, {
            scale: 1.5,
            borderColor: 'rgba(212, 175, 55, 0.5)', // Gold
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(cursor, { scale: 0, duration: 0.3, ease: "power2.out" });
        }
      } else {
        if (isHovering) {
          isHovering = false;
          gsap.to(follower, {
            scale: 1,
            borderColor: 'rgba(247, 243, 232, 0.3)', // Cream
            backgroundColor: 'transparent',
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Initial appearance animation
    gsap.to([cursor, follower], { opacity: 1, duration: 0.5, delay: 0.5 });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [location.pathname]); // Re-bind slightly on route change if needed

  if (isTouchDevice) return null;

  return (
    <>
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-cream/30 rounded-full pointer-events-none z-[100] opacity-0 mix-blend-exclusion will-change-transform flex items-center justify-center"
      >
        <span className="text-xxs uppercase tracking-widest text-gold opacity-0 font-medium">View</span>
      </div>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-cream rounded-full pointer-events-none z-[100] opacity-0 mix-blend-exclusion will-change-transform"
      />
    </>
  );
};
