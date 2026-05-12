
export interface Style {
  id: string;
  name: string;
  promptPrefix: string;
  promptSuffix: string;
  thumbnail: string;
}

export interface Character {
  id: string;
  prompt: string;
  style: Style;
  imageUrl: string;
  createdAt: string;
}
