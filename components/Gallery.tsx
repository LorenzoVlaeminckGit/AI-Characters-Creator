
import React from 'react';
import type { Character } from '../types';
import { CharacterCard } from './CharacterCard';
import { LoadingState } from './LoadingState';

interface GalleryProps {
  characters: Character[];
  isLoading: boolean;
  onRemix: (character: Character) => void;
  onDelete: (id: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ characters, isLoading, onRemix, onDelete }) => {
  return (
    <div className="bg-dark-surface p-6 rounded-lg shadow-lg border border-dark-border min-h-[500px]">
      <h2 className="text-2xl font-bold mb-4 text-dark-text-primary">Your Creations</h2>
      {isLoading && characters.length === 0 && <LoadingState />}
      {!isLoading && characters.length === 0 && (
        <div className="flex flex-col items-center justify-center h-96 text-center text-dark-text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-xl font-semibold">Your gallery is empty</h3>
          <p>Use the panel on the left to generate your first character!</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {isLoading && characters.length > 0 && <LoadingState isCompact={true} />}
        {characters.map(character => (
          <CharacterCard 
            key={character.id} 
            character={character}
            onRemix={onRemix}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
