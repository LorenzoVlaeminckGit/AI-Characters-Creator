
import React from 'react';
import { ART_STYLES } from '../constants';
import type { Style } from '../types';

interface StyleSelectorProps {
  activeStyle: Style;
  setActiveStyle: (style: Style) => void;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({ activeStyle, setActiveStyle }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {ART_STYLES.map(style => (
        <button
          key={style.id}
          onClick={() => setActiveStyle(style)}
          className={`relative rounded-lg overflow-hidden aspect-square transition-all duration-200 focus:outline-none ${activeStyle.id === style.id ? 'ring-2 ring-brand-primary ring-offset-2 ring-offset-dark-surface' : 'opacity-70 hover:opacity-100'}`}
        >
          <img src={style.thumbnail} alt={style.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <span className="absolute bottom-1.5 left-0 right-0 text-white text-xs font-semibold text-center truncate px-1">
            {style.name}
          </span>
        </button>
      ))}
    </div>
  );
};
