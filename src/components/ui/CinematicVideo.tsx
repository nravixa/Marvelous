import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicVideoProps {
  src: string;
  poster?: string;
  className?: string;
  overlay?: 'dark' | 'light' | 'none';
  overlayOpacity?: number; // 0 to 1
  parallax?: boolean; // if it should have scale/parallax behavior
}

export const CinematicVideo: React.FC<CinematicVideoProps> = ({
  src,
  poster,
  className = '',
  overlay = 'dark',
  overlayOpacity = 0.6,
  parallax = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    // Use IntersectionObserver to lazy load the video source
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            // Once it intersects, we can optionally stop observing if we only want to lazy load once
            // But we might want to pause it when out of view to save CPU. 
            // For now, let's just trigger load on first intersection.
            if (videoRef.current && !videoRef.current.src) {
              videoRef.current.src = src;
              videoRef.current.load();
            }
            if (videoRef.current?.readyState && videoRef.current.readyState >= 3) {
              videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
            }
          } else {
            // Pause video when totally out of view to save CPU/Battery
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        rootMargin: '400px 0px', // start loading 400px before it comes into view
        threshold: 0,
      }
    );

    observer.observe(currentContainer);

    return () => {
      observer.unobserve(currentContainer);
      observer.disconnect();
    };
  }, [src]);

  const handleCanPlay = () => {
    setIsLoaded(true);
    if (isIntersecting && videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
    }
  };

  const handleError = () => {
    console.warn(`Video failed to load: ${src}`);
    setIsLoaded(false); // Force poster to stay
  };

  return (
    <div ref={containerRef} className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {/* Background Poster (Shown while loading) */}
      <AnimatePresence>
        {!isLoaded && poster && (
          <motion.img
            key="poster"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            src={poster}
            alt="Video Poster Loading"
            className={`absolute inset-0 w-full h-full object-cover ${parallax ? 'scale-105' : ''}`}
          />
        )}
      </AnimatePresence>

      {/* The Actual Video */}
      <motion.video
        ref={videoRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        onCanPlay={handleCanPlay}
        onError={handleError}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover will-change-transform ${
          parallax ? 'scale-105' : ''
        }`}
      />

      {/* Cinematic Overlays */}
      {overlay !== 'none' && (
        <div
          className={`absolute inset-0 z-10 ${
            overlay === 'dark' ? 'bg-black' : 'bg-white'
          }`}
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      {/* Gradient Vignette for Extra Cinematic Feel */}
      {overlay === 'dark' && (
        <>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian/40 via-transparent to-transparent opacity-50" />
        </>
      )}
    </div>
  );
};
