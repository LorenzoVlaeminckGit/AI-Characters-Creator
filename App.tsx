
import React, { useState, useEffect, useCallback } from 'react';
import { Generator } from './components/Generator';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { OnboardingModal } from './components/OnboardingModal';
import { generateImage } from './services/geminiService';
import type { Character, Style } from './types';
import { ART_STYLES } from './constants';

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [prompt, setPrompt] = useState<string>('');
  const [promptHistory, setPromptHistory] = useState<string[]>([]);
  const [activeStyle, setActiveStyle] = useState<Style>(ART_STYLES[0]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedCharacters = localStorage.getItem('characters');
      if (savedCharacters) {
        setCharacters(JSON.parse(savedCharacters));
      }
      
      const savedHistory = localStorage.getItem('promptHistory');
      if (savedHistory) {
        setPromptHistory(JSON.parse(savedHistory));
      }
      
      const hasOnboarded = localStorage.getItem('hasOnboarded');
      if (!hasOnboarded) {
        setShowOnboarding(true);
      }
    } catch (e) {
      console.error("Failed to access localStorage:", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('characters', JSON.stringify(characters));
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }
  }, [characters]);

  useEffect(() => {
    try {
      localStorage.setItem('promptHistory', JSON.stringify(promptHistory));
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }
  }, [promptHistory]);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Prompt cannot be empty.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const fullPrompt = `${activeStyle.promptPrefix} ${prompt}, ${activeStyle.promptSuffix}`;
      const base64Image = await generateImage(fullPrompt);
      const newCharacter: Character = {
        id: Date.now().toString(),
        prompt: prompt,
        style: activeStyle,
        imageUrl: `data:image/jpeg;base64,${base64Image}`,
        createdAt: new Date().toISOString(),
      };
      setCharacters(prev => [newCharacter, ...prev]);
      setPromptHistory(prev => {
        const newHistory = [prompt, ...prev.filter(p => p !== prompt)].slice(0, 10);
        return newHistory;
      });
      setPrompt('');
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemix = useCallback((character: Character) => {
    setPrompt(character.prompt);
    setActiveStyle(character.style);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const handleDelete = useCallback((id: string) => {
    setCharacters(prev => prev.filter(char => char.id !== id));
  }, []);

  const handleCloseOnboarding = () => {
    try {
      localStorage.setItem('hasOnboarded', 'true');
    } catch (e) {
        console.error("Failed to save to localStorage:", e);
    }
    setShowOnboarding(false);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text-primary font-sans">
      {showOnboarding && <OnboardingModal onClose={handleCloseOnboarding} />}
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Generator
              prompt={prompt}
              setPrompt={setPrompt}
              activeStyle={activeStyle}
              setActiveStyle={setActiveStyle}
              onGenerate={handleGenerate}
              isLoading={isLoading}
              error={error}
              promptHistory={promptHistory}
            />
          </div>
          <div className="lg:col-span-8">
            <Gallery 
              characters={characters}
              isLoading={isLoading}
              onRemix={handleRemix}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </main>
      <footer className="text-center py-4 text-dark-text-secondary text-sm">
        <p>Powered by Google Gemini. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
