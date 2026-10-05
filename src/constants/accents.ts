export const accentColors = ["primary", "info", "warning"] as const;
export type AccentColor = (typeof accentColors)[number];

export const getAccent = (index: number): AccentColor =>
  accentColors[index % accentColors.length];
