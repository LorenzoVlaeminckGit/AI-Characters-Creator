
import React from 'react';

interface OnboardingModalProps {
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-dark-surface rounded-lg shadow-xl max-w-lg w-full p-8 border border-dark-border">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">Welcome to the AI Character Creator!</h2>
        <p className="text-dark-text-secondary mb-6">
          Ready to bring your ideas to life? Here’s a quick guide:
        </p>
        <ul className="space-y-4 text-left">
          <li className="flex items-start">
            <span className="bg-brand-primary text-white rounded-full h-6 w-6 text-sm flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">1</span>
            <div>
              <h3 className="font-semibold">Describe Your Character</h3>
              <p className="text-dark-text-secondary text-sm">Use the text box to describe your character in detail. The more specific you are, the better the result!</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-brand-primary text-white rounded-full h-6 w-6 text-sm flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">2</span>
            <div>
              <h3 className="font-semibold">Choose a Style</h3>
              <p className="text-dark-text-secondary text-sm">Select an artistic style to define the look and feel of your creation.</p>
            </div>
          </li>
           <li className="flex items-start">
            <span className="bg-brand-primary text-white rounded-full h-6 w-6 text-sm flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">3</span>
            <div>
              <h3 className="font-semibold">Generate & Refine</h3>
              <p className="text-dark-text-secondary text-sm">Hit 'Generate' and watch your character appear! Use the 'Remix' button on a creation to reuse its prompt and maintain consistency.</p>
            </div>
          </li>
        </ul>
        <button
          onClick={onClose}
          className="w-full mt-8 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300"
        >
          Let's Create!
        </button>
      </div>
    </div>
  );
};
