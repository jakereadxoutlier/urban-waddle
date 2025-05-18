import { colors, spacing, fonts } from './tokens';

export const lightTheme = {
  colors: colors.light,
  spacing,
  fonts,
};

export const darkTheme = {
  colors: colors.dark,
  spacing,
  fonts,
};

export type Theme = typeof lightTheme;
