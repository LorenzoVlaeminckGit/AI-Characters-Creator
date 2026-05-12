
import type { Style } from './types';

export const ART_STYLES: Style[] = [
  {
    id: 'photorealistic',
    name: 'Photorealistic',
    promptPrefix: 'Ultra-realistic, 8k photograph of a character, cinematic lighting,',
    promptSuffix: 'detailed skin texture, sharp focus',
    thumbnail: 'https://picsum.photos/seed/photorealistic/200'
  },
  {
    id: 'anime',
    name: 'Anime/Manga',
    promptPrefix: 'Vibrant anime art style, clean linework, cel-shaded,',
    promptSuffix: 'dynamic pose, trending on pixiv',
    thumbnail: 'https://picsum.photos/seed/anime/200'
  },
  {
    id: 'fantasy',
    name: 'Fantasy Art',
    promptPrefix: 'Epic fantasy painting, digital art,',
    promptSuffix: 'magical, mythical, dramatic lighting, by Greg Rutkowski',
    thumbnail: 'https://picsum.photos/seed/fantasy/200'
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    promptPrefix: 'Cyberpunk art, neon-lit, dystopian, futuristic,',
    promptSuffix: 'gritty, high-tech, Blade Runner aesthetic',
    thumbnail: 'https://picsum.photos/seed/cyberpunk/200'
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    promptPrefix: 'Beautiful watercolor painting of a character,',
    promptSuffix: 'soft edges, bleeding colors, textured paper',
    thumbnail: 'https://picsum.photos/seed/watercolor/200'
  },
  {
    id: 'street_art',
    name: 'Street Art',
    promptPrefix: 'Graffiti street art style, spray paint, stencil,',
    promptSuffix: 'bold colors, urban background, mural',
    thumbnail: 'https://picsum.photos/seed/street_art/200'
  },
];

export const PROMPT_IDEAS: string[] = [
  "A wise old wizard with a long white beard and a staff that glows with celestial light.",
  "A cheerful anime-style magical girl with sparkling pink hair and a star-shaped wand.",
  "A gritty cyberpunk hacker with neon tattoos and augmented reality glasses in a rainy city.",
  "An ethereal elven queen with silver hair and a crown of woven branches, standing in an ancient forest.",
  "A photorealistic portrait of an astronaut looking at Earth from their helmet visor.",
  "A brave knight in gleaming armor, holding a banner with a dragon sigil.",
  "A stealthy rogue cloaked in shadows, perched on a gothic rooftop.",
];
