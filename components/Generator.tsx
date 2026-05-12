
import React from 'react';
import type { Style } from '../types';
import { StyleSelector } from './StyleSelector';
import { PROMPT_IDEAS } from '../constants';

interface GeneratorProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  activeStyle: Style;
  setActiveStyle: (style: Style) => void;
  onGenerate: () => void;
  isLoading: boolean;
  error: string | null;
  promptHistory?: string[];
}

const MagicWandIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.293 2.293a1 1 0 011.414 0l.001.001a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L6 12.586l10.293-10.293z" clipRule="evenodd" fillRule="evenodd" opacity=".2"/>
    <path d="M11.5 2.5a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1zM6.5 2.5a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1zM11.5 7.5a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1zM6.5 7.5a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1z" opacity=".2"/>
    <path d="M4 11.5a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 010 3h-9A1.5 1.5 0 014 11.5z"/>
    <path d="M17.293 2.293a1 1 0 011.414 0l.001.001a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L6 12.586l10.293-10.293z" clipRule="evenodd" fillRule="evenodd"/>
  </svg>
);

const HistoryIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const Generator: React.FC<GeneratorProps> = ({
  prompt,
  setPrompt,
  activeStyle,
  setActiveStyle,
  onGenerate,
  isLoading,
  error,
  promptHistory = [],
}) => {
  const handleInspireMe = () => {
    const randomPrompt = PROMPT_IDEAS[Math.floor(Math.random() * PROMPT_IDEAS.length)];
    setPrompt(randomPrompt);
  };
  
  return (
    <div className="bg-dark-surface p-6 rounded-lg shadow-lg border border-dark-border sticky top-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-dark-text-secondary mb-2">
            1. Describe Your Character
          </label>
          <textarea
            id="prompt"
            rows={5}
            className="w-full bg-gray-800 border border-dark-border rounded-md p-3 text-dark-text-primary focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200 resize-none"
            placeholder="e.g., A photorealistic portrait of a woman with freckles and wind-swept red hair"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isLoading}
          />
          <div className="flex justify-between items-start mt-2">
            <button
              onClick={handleInspireMe}
              disabled={isLoading}
              className="text-sm text-brand-secondary hover:text-brand-primary transition-colors duration-200 flex items-center"
            >
              <MagicWandIcon />
              Inspire Me
            </button>
          </div>
          
          {promptHistory.length > 0 && (
            <div className="mt-4">
              <label className="block text-xs font-medium text-dark-text-secondary mb-2 flex items-center">
                <HistoryIcon />
                Recent Prompts
              </label>
              <div className="flex flex-wrap gap-2">
                {promptHistory.map((historyPrompt, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(historyPrompt)}
                    disabled={isLoading}
                    className="text-xs bg-gray-800 hover:bg-gray-700 border border-dark-border text-dark-text-secondary hover:text-dark-text-primary px-2 py-1 rounded-md transition-colors duration-200 truncate max-w-[200px]"
                    title={historyPrompt}
                  >
                    {historyPrompt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-dark-text-secondary mb-2">
            2. Choose a Style
          </label>
          <StyleSelector activeStyle={activeStyle} setActiveStyle={setActiveStyle} />
        </div>

        <div>
           {error && <p className="text-red-400 text-sm mb-4 animate-fade-in">{error}</p>}
          <button
            onClick={onGenerate}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300 flex items-center justify-center text-lg"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              'Generate Character'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
