
import React from 'react';
import type { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  onRemix: (character: Character) => void;
  onDelete: (id: string) => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, onRemix, onDelete }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = character.imageUrl;
    link.download = `character-${character.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md border border-dark-border animate-fade-in">
      <img src={character.imageUrl} alt={character.prompt} className="w-full h-full object-cover aspect-square" />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-4">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm text-white line-clamp-3 mb-2">
            <span className="font-bold">{character.style.name}:</span> {character.prompt}
          </p>
          <div className="flex space-x-2">
            <button onClick={handleDownload} className="flex-1 bg-gray-200 text-gray-800 px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-white transition-colors">Download</button>
            <button onClick={() => onRemix(character)} className="flex-1 bg-brand-secondary text-white px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-brand-primary transition-colors">Remix</button>
             <button onClick={() => onDelete(character.id)} className="bg-red-600 text-white p-1.5 rounded-md text-xs font-semibold hover:bg-red-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
