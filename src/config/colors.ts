/**
 * Color Configuration
 * 
 * Centralized color management for the application.
 * Update brand colors, semantic tokens, and color palette here.
 */

/**
 * Base Color Palette
 * Raw color values in hex format
 */
export const baseColors = {
  'dark-blue': {
    DEFAULT: '#0a1929',
    light: '#1a2f4a',
  },
  cyan: {
    DEFAULT: '#00d4ff',
    light: '#4fc3f7',
  },
  white: '#ffffff',
  black: '#000000',
} as const;

/**
 * Semantic Color Tokens
 * Map semantic names to base colors for consistent usage
 */
export const semanticColors = {
  // Brand Identity Colors
  primary: baseColors.cyan.DEFAULT,
  'primary-light': baseColors.cyan.light,
  secondary: baseColors['dark-blue'].DEFAULT,
  'secondary-light': baseColors['dark-blue'].light,
  accent: baseColors.cyan.DEFAULT,

  // Background Colors
  background: baseColors['dark-blue'].DEFAULT,
  'background-light': baseColors['dark-blue'].light,
  surface: baseColors['dark-blue'].light,
  'surface-dark': baseColors['dark-blue'].DEFAULT,

  // Text Colors
  // Note: Opacity is handled via Tailwind's opacity modifiers (e.g., text-white/80)
  text: baseColors.white,
  'text-primary': baseColors.white,
  'text-secondary': baseColors.white, // Use with /80 opacity modifier
  'text-muted': baseColors.white,     // Use with /50 opacity modifier
  'text-accent': baseColors.cyan.DEFAULT,
  'text-on-primary': baseColors['dark-blue'].DEFAULT, // Text color when on primary background

  // Border Colors
  // Note: Opacity is handled via Tailwind's opacity modifiers (e.g., border-cyan/30)
  border: baseColors.cyan.DEFAULT,    // Use with /30 opacity modifier
  'border-light': baseColors.cyan.DEFAULT, // Use with /20 opacity modifier
  'border-accent': baseColors.cyan.DEFAULT, // Use with /50 opacity modifier
  divider: baseColors.cyan.DEFAULT, // Use with /20 opacity modifier

  // Status Colors (for future use)
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: baseColors.cyan.DEFAULT,
} as const;

/**
 * Color Opacity Variants
 * Common opacity values used throughout the app
 */
export const colorOpacity = {
  full: '100',
  high: '90',
  medium: '80',
  low: '50',
  veryLow: '30',
  minimal: '20',
  transparent: '00',
} as const;

/**
 * Gradient Definitions
 * Common gradient combinations
 */
export const gradients = {
  'primary-to-light': `from-${baseColors.cyan.DEFAULT} to-${baseColors.cyan.light}`,
  'dark-to-light': `from-${baseColors['dark-blue'].DEFAULT} via-${baseColors['dark-blue'].light} to-${baseColors['dark-blue'].DEFAULT}`,
  'cyan-to-dark': `from-cyan/20 to-${baseColors['dark-blue'].light}`,
} as const;

/**
 * Tailwind Color Configuration
 * Format compatible with Tailwind CSS theme.extend.colors
 */
export const tailwindColors = {
  ...baseColors,
  // Add semantic colors as Tailwind utilities
  primary: {
    DEFAULT: semanticColors.primary,
    light: semanticColors['primary-light'],
  },
  secondary: {
    DEFAULT: semanticColors.secondary,
    light: semanticColors['secondary-light'],
  },
  accent: semanticColors.accent,
  background: {
    DEFAULT: semanticColors.background,
    light: semanticColors['background-light'],
  },
  surface: {
    DEFAULT: semanticColors.surface,
    dark: semanticColors['surface-dark'],
  },
  text: {
    DEFAULT: semanticColors.text,
    primary: semanticColors['text-primary'],
    secondary: semanticColors['text-secondary'],
    muted: semanticColors['text-muted'],
    accent: semanticColors['text-accent'],
    'on-primary': semanticColors['text-on-primary'],
  },
  border: {
    DEFAULT: semanticColors.border,
    light: semanticColors['border-light'],
    accent: semanticColors['border-accent'],
  },
  divider: semanticColors.divider,
  success: semanticColors.success,
  warning: semanticColors.warning,
  error: semanticColors.error,
  info: semanticColors.info,
} as const;

