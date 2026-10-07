export const accentColors = ["primary", "info", "warning"] as const;
export type AccentColor = (typeof accentColors)[number];

export const getAccent = (index: number): AccentColor =>
  accentColors[index % accentColors.length];

export const duoColors = ["primary", "info"] as const;
export type DuoColor = (typeof duoColors)[number];

export const getDuoColor = (index: number): DuoColor =>
  duoColors[index % duoColors.length];
