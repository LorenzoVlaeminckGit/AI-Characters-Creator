
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-dark-surface border-b border-dark-border shadow-md">
      <div className="container mx-auto px-4 py-5 text-center">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
          AI Character Creator
        </h1>
        <p className="mt-2 text-lg text-dark-text-secondary">
          Bring your imagination to life. Generate stunning avatars and characters from text.
        </p>
      </div>
    </header>
  );
};
