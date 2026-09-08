import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  price?: string;
  duration?: string;
  tag?: string;
  onClick?: () => void;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  price,
  duration,
  tag,
  onClick,
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      className={`glass-card glass-card-hover group relative flex flex-col justify-between overflow-hidden p-6 cursor-pointer ${className}`}
    >
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/40 group-hover:border-gold transition-colors duration-500" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/40 group-hover:border-gold transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/40 group-hover:border-gold transition-colors duration-500" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/40 group-hover:border-gold transition-colors duration-500" />

      <div>
        {/* Image Container */}
        {imageUrl && (
          <div className="relative mb-5 h-56 w-full overflow-hidden bg-obsidian-slate">
            {tag && (
              <span className="absolute top-3 left-3 z-10 bg-gold text-obsidian text-[10px] uppercase tracking-widest font-semibold px-2 py-1">
                {tag}
              </span>
            )}
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
          </div>
        )}

        {/* Tag (if no Image) */}
        {!imageUrl && tag && (
          <span className="inline-block self-start mb-3 bg-gold/10 text-gold text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 border border-gold/20">
            {tag}
          </span>
        )}

        {/* Title */}
        <h3 className="font-serif text-2xl font-medium tracking-wide text-cream group-hover:text-gold transition-colors duration-300 flex items-center justify-between gap-2">
          <span>{title}</span>
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-gold" />
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-cream/70 leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Info Row (Price / Duration) */}
      {(price || duration) && (
        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
          {price && (
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-cream/40">Starts from</span>
              <span className="text-lg font-medium text-gold font-serif">{price}</span>
            </div>
          )}
          {duration && (
            <div className="text-right">
              <span className="block text-[10px] uppercase tracking-widest text-cream/40">Duration</span>
              <span className="text-sm font-medium text-cream/80">{duration}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
