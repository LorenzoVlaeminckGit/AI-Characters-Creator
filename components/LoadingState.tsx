
import React, { useState, useEffect } from 'react';

const loadingMessages = [
  "Summoning creative spirits...",
  "Mixing digital paints...",
  "Consulting the AI muse...",
  "Warming up the pixels...",
  "Translating your vision...",
  "This might take a moment, great art needs patience!"
];

interface LoadingStateProps {
  isCompact?: boolean;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ isCompact = false }) => {
  const [message, setMessage] = useState(loadingMessages[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);
  
  const content = (
      <>
        <div className="relative flex justify-center items-center">
            <div className="absolute w-16 h-16 rounded-full border-4 border-dark-border"></div>
            <div className="absolute w-16 h-16 rounded-full border-t-4 border-brand-secondary animate-spin"></div>
        </div>
        <h3 className={`font-semibold mt-4 ${isCompact ? 'text-lg' : 'text-xl'}`}>Generating Your Character</h3>
        <p className="text-dark-text-secondary transition-opacity duration-500">{message}</p>
      </>
  );

  if (isCompact) {
      return (
          <div className="col-span-1 sm:col-span-2 xl:col-span-3 flex flex-col items-center justify-center p-8 text-center h-full">
            {content}
          </div>
      )
  }

  return (
    <div className="flex flex-col items-center justify-center h-96 text-center animate-fade-in">
      {content}
    </div>
  );
};
