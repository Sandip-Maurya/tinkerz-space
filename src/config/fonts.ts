/**
 * Font Configuration
 * 
 * Centralized font management for the application.
 * Update font families, weights, sizes, and typography scale here.
 */

export const fonts = {
  /**
   * Font Families
   * Primary font and fallback stack
   */
  families: {
    primary: 'Inter',
    fallback: ['system-ui', 'sans-serif'],
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },

  /**
   * Font Weights
   * Available font weights used throughout the application
   */
  weights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  /**
   * Typography Scale
   * Font sizes for different text elements
   */
  sizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },

  /**
   * Line Heights
   * Line height values for different text sizes
   */
  lineHeights: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  /**
   * Letter Spacing
   * Tracking values for different text styles
   */
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  /**
   * Google Fonts Configuration
   * URL and parameters for loading fonts from Google Fonts
   */
  googleFonts: {
    family: 'Inter',
    weights: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    /**
     * Generate Google Fonts URL
     */
    getUrl: () => {
      const weights = fonts.googleFonts.weights.join(';');
      const family = fonts.googleFonts.family.replace(/\s+/g, '+');
      return `https://fonts.googleapis.com/css2?family=${family}:wght@${weights}&display=${fonts.googleFonts.display}`;
    },
  },
} as const;

/**
 * Typography Presets
 * Common typography combinations used throughout the app
 */
export const typography = {
  h1: {
    fontSize: fonts.sizes['7xl'],
    fontWeight: fonts.weights.black,
    lineHeight: fonts.lineHeights.tight,
  },
  h2: {
    fontSize: fonts.sizes['5xl'],
    fontWeight: fonts.weights.black,
    lineHeight: fonts.lineHeights.tight,
  },
  h3: {
    fontSize: fonts.sizes['4xl'],
    fontWeight: fonts.weights.bold,
    lineHeight: fonts.lineHeights.snug,
  },
  h4: {
    fontSize: fonts.sizes['2xl'],
    fontWeight: fonts.weights.bold,
    lineHeight: fonts.lineHeights.snug,
  },
  body: {
    fontSize: fonts.sizes.base,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.relaxed,
  },
  bodyLarge: {
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.relaxed,
  },
  caption: {
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.normal,
    lineHeight: fonts.lineHeights.normal,
  },
} as const;

