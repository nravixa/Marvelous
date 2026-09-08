import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: keyof JSX.IntrinsicElements;
  animationType?: 'words' | 'chars';
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  el: Wrapper = 'div',
  animationType = 'words',
  delay = 0,
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get the animated elements based on type
    let elementsToAnimate: NodeListOf<Element> | HTMLElement[] = [];
    
    if (animationType === 'words') {
      elementsToAnimate = container.querySelectorAll('.anim-word-inner');
    } else if (animationType === 'chars') {
      elementsToAnimate = container.querySelectorAll('.anim-char-inner');
    }

    if (elementsToAnimate.length === 0) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(elementsToAnimate, { yPercent: 110, rotateZ: 3, opacity: 0 });

      gsap.to(elementsToAnimate, {
        yPercent: 0,
        opacity: 1,
        rotateZ: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: animationType === 'chars' ? 0.02 : 0.05,
        delay: delay,
        scrollTrigger: {
          trigger: container,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    }, container);

    return () => ctx.revert();
  }, [animationType, delay]);

  // Helper to split text into words and wrap them for overflow hiding
  const renderWords = () => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="inline-block overflow-hidden mr-[0.25em] align-bottom pb-1">
        <span className="anim-word-inner inline-block transform will-change-transform opacity-0 origin-bottom-left">
          {word}
        </span>
      </span>
    ));
  };

  // Helper to split text into characters
  const renderChars = () => {
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return <span key={index} className="inline-block w-[0.25em]">&nbsp;</span>;
      }
      return (
        <span key={index} className="inline-block overflow-hidden align-bottom pb-1">
          <span className="anim-char-inner inline-block transform will-change-transform opacity-0 origin-bottom-left">
            {char}
          </span>
        </span>
      );
    });
  };

  const Component = Wrapper as any;

  return (
    <Component ref={containerRef} className={`${className} flex flex-wrap`}>
      {animationType === 'words' ? renderWords() : renderChars()}
    </Component>
  );
};
