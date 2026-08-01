import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  magnetic = true,
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);

  // GSAP Magnetic Effect
  useEffect(() => {
    const btn = buttonRef.current;
    const txt = textRef.current;
    if (!btn || !txt || !magnetic || disabled || isLoading) return;

    // Use quickTo for fluid, cinematic physics
    const xToBtn = gsap.quickTo(btn, "x", { duration: 0.8, ease: "elastic.out(1, 0.3)" });
    const yToBtn = gsap.quickTo(btn, "y", { duration: 0.8, ease: "elastic.out(1, 0.3)" });
    
    const xToTxt = gsap.quickTo(txt, "x", { duration: 0.6, ease: "power3.out" });
    const yToTxt = gsap.quickTo(txt, "y", { duration: 0.6, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = btn.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Heavier resistance for button, lighter for text
      xToBtn(x * 0.2);
      yToBtn(y * 0.2);
      xToTxt(x * 0.1);
      yToTxt(y * 0.1);
    };

    const handleMouseLeave = () => {
      xToBtn(0);
      yToBtn(0);
      xToTxt(0);
      yToTxt(0);
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magnetic, disabled, isLoading]);

  // Luxury styles mapping
  const baseStyles = 'relative inline-flex items-center justify-center font-sans font-semibold uppercase tracking-extreme rounded-sm focus:outline-none focus:ring-2 focus:ring-gold/50 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 ease-out group overflow-hidden will-change-transform';
  
  const variants = {
    primary: 'bg-gold text-obsidian shadow-gold-glow hover:shadow-luxury-sm hover:scale-[1.02]',
    secondary: 'bg-cream text-obsidian shadow-sm hover:shadow-luxury-sm hover:scale-[1.02]',
    outline: 'bg-transparent text-cream border border-gold/40 hover:border-gold hover:bg-gold/5 shadow-luxury-inner hover:shadow-gold-glow hover:scale-[1.02]',
    ghost: 'bg-transparent text-cream hover:bg-white/5 hover:text-gold',
  };

  const sizes = {
    sm: 'h-10 px-6 text-xxs',
    md: 'h-12 px-8 text-xs-plus',
    lg: 'h-14 px-10 text-xs',
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (rippleRef.current && btnVariant !== 'ghost') {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      gsap.fromTo(rippleRef.current, 
        { x, y, scale: 0, opacity: 0.5 },
        { scale: 2, opacity: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  };

  const btnVariant = variants[variant];
  const btnSize = sizes[size];
  const isOutline = variant === 'outline';

  return (
    <button
      ref={buttonRef}
      className={`${baseStyles} ${btnVariant} ${btnSize} ${className}`}
      disabled={disabled || isLoading}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {/* 1px Gradient Border (Only on outline) */}
      {isOutline && (
        <div className="absolute inset-0 rounded-sm p-[1px] bg-gradient-to-br from-gold/80 via-gold/10 to-gold/60 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
      )}

      {/* Ripple Effect Element */}
      <span 
        ref={rippleRef} 
        className={`absolute w-32 h-32 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 ${variant === 'primary' ? 'bg-white' : 'bg-gold'}`} 
        style={{ opacity: 0 }} 
      />

      {/* Text/Content Container */}
      <span ref={textRef} className="relative z-10 flex items-center gap-2 will-change-transform">
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
        <span className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 flex items-center gap-2`}>
          {children}
        </span>
      </span>
    </button>
  );
};
