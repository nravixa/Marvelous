import React, { useState } from 'react';
import './LuminousCard.css';
import { Sparkles } from 'lucide-react';

interface LuminousCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  activeLabel?: string;
  inactiveLabel?: string;
}

export const LuminousCard: React.FC<LuminousCardProps> = ({
  title,
  description,
  icon = <Sparkles className="w-12 h-12 text-gold" />,
  activeLabel = 'Active',
  inactiveLabel = 'Activate'
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="luminous-card-container">
      <div className={`luminous-card ${isActive ? 'active' : ''}`}>
        <div className="luminous-light-layer">
          <div className="luminous-slit"></div>
          <div className="luminous-lumen">
            <div className="min"></div>
            <div className="mid"></div>
            <div className="hi"></div>
          </div>
          <div className="luminous-darken">
            <div className="sl"></div>
            <div className="ll"></div>
            <div className="slt"></div>
            <div className="srt"></div>
          </div>
        </div>
        
        <div className="luminous-icon">
          {icon}
        </div>
        
        <div className="luminous-content">
          <div className="luminous-bottom">
            <h3 className="luminous-title">{title}</h3>
            <p className="luminous-description">{description}</p>
          </div>
          
          <button 
            type="button"
            className="luminous-toggle" 
            onClick={() => setIsActive(!isActive)}
            aria-label="Toggle card light"
          >
            <span className="luminous-toggle-label">
              {isActive ? activeLabel : inactiveLabel}
            </span>
            <div className="luminous-handle"></div>
          </button>
        </div>
      </div>
    </div>
  );
};
