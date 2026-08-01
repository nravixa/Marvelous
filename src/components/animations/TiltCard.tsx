import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareEnable?: boolean;
  tiltReverse?: boolean;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glareEnable = true,
  tiltReverse = false,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tracking mouse position
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for fluid, premium movement
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Calculate rotation based on mouse position (0 to 1) mapped to angles
  const reverseMultiplier = tiltReverse ? -1 : 1;
  const rotateX = useTransform(smoothY, [0, 1], [tiltMaxAngleX * reverseMultiplier, -tiltMaxAngleX * reverseMultiplier]);
  const rotateY = useTransform(smoothX, [0, 1], [-tiltMaxAngleY * reverseMultiplier, tiltMaxAngleY * reverseMultiplier]);

  // Glare position calculation
  const glareX = useTransform(smoothX, [0, 1], [-100, 100]);
  const glareY = useTransform(smoothY, [0, 1], [-100, 100]);
  const glareOpacity = useTransform(smoothY, [0, 1], [0, 0.4]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the element (0 to 1)
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to center
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-2xl overflow-hidden [transform-style:preserve-3d] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* The 3D glare effect */}
      {glareEnable && (
        <motion.div
          className="absolute inset-0 z-50 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), transparent 50%)',
            opacity: isHovered ? glareOpacity : 0,
            x: glareX,
            y: glareY,
          }}
          transition={{ duration: 0.2 }}
        />
      )}
      
      {/* Content wrapper with a slight Z-translation for 3D depth */}
      <div className="w-full h-full [transform:translateZ(30px)]">
        {children}
      </div>
    </motion.div>
  );
};
