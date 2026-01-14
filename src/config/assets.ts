/**
 * Asset Configuration
 * 
 * Centralized asset management for images, backgrounds, and icons.
 * Update image paths, alt text, and metadata here.
 */

// Import assets for static optimization (Astro will handle these)
import astroLogo from '../assets/astro.svg';
import backgroundSvg from '../assets/background.svg';

/**
 * Asset Registry
 * Organized by category for easy management
 */
export const assets = {
  /**
   * Background Images
   * Hero backgrounds, section backgrounds, pattern images
   */
  backgrounds: {
    hero: {
      type: 'pattern', // 'pattern' | 'image' | 'gradient'
      description: 'Network pattern background for hero section',
      // Pattern is defined in CSS, no image path needed
    },
    networkPattern: {
      type: 'pattern',
      description: 'Animated network pattern used in hero and sections',
      // Defined in global.css as .network-pattern class
    },
    default: backgroundSvg,
  },

  /**
   * Icons and Logos
   * Logo, favicon, icon sets
   */
  icons: {
    logo: {
      src: '/images/logo.svg',
      alt: 'Tinkerz Space Logo',
      description: 'Main logo/icon for the site',
    },
    favicon: {
      src: '/favicon.svg',
      alt: 'Tinkerz Space Favicon',
      description: 'Favicon for browser tab',
    },
    astro: {
      src: astroLogo,
      alt: 'Astro Logo',
      description: 'Astro framework logo (for reference)',
    },
  },

  /**
   * Content Images
   * Section-specific images organized by component
   * Supports responsive images for mobile, tablet, and laptop breakpoints
   */
  content: {
    vision: {
      mobile: {
        src: '/images/vision-mobile.png',
        aspectRatio: '9/16',
      },
      tablet: {
        src: '/images/vision-tablet.png',
        aspectRatio: '2/3',
      },
      laptop: {
        src: '/images/vision-laptop.png',
        aspectRatio: '3/2',
      },
      alt: 'Student working on electronics',
      description: 'Image for Vision section showing students working',
      placeholder: false,
    },
    problem: {
      mobile: {
        src: '/images/problem-mobile.png',
        aspectRatio: '9/16',
      },
      tablet: {
        src: '/images/problem-tablet.png',
        aspectRatio: '1/1',
      },
      laptop: {
        src: '/images/problem-laptop.png',
        aspectRatio: '3/2',
      },
      alt: 'Hands-on robotics project',
      description: 'Image for Problem section showing robotics',
      placeholder: false,
    },
    whoWeAre: {
      mobile: {
        src: '/images/who-we-are-mobile.png',
        aspectRatio: '16/9',
      },
      tablet: {
        src: '/images/who-we-are-tablet.png',
        aspectRatio: '16/9',
      },
      laptop: {
        src: '/images/who-we-are-laptop.png',
        aspectRatio: '16/9',
      },
      alt: 'Maker Space Environment',
      description: 'Image for Who We Are section showing maker space',
      placeholder: false,
    },
    facilities: {
      mobile: {
        src: '/images/facilities-mobile.png',
        aspectRatio: '9/16',
      },
      tablet: {
        src: '/images/facilities-tablet.png',
        aspectRatio: '2/3',
      },
      laptop: {
        src: '/images/facilities-laptop.png',
        aspectRatio: '16/9',
      },
      alt: 'State-of-the-art facilities',
      description: 'Image for Facilities section',
      placeholder: false,
    },
    whatStudentsLearn: {
      mobile: {
        src: '/images/what-students-learn-mobile.png',
        aspectRatio: '9/16',
      },
      tablet: {
        src: '/images/what-students-learn-tablet.png',
        aspectRatio: '1/1',
      },
      laptop: {
        src: '/images/what-students-learn-laptop.png',
        aspectRatio: '2/3',
      },
      alt: 'Hands-on learning experience',
      description: 'Image for What Students Learn section',
      placeholder: false,
    },
  },

  /**
   * Helper function to get asset path
   * Handles both static imports and public paths
   */
  getPath: (asset: string | { src: any } | null): string | null => {
    if (!asset) return null;
    if (typeof asset === 'string') return asset;
    if (asset.src && typeof asset.src === 'string') return asset.src;
    if (asset.src && asset.src.src) return asset.src.src; // Handle Astro static imports
    return null;
  },

  /**
   * Helper function to get alt text
   */
  getAlt: (asset: { alt?: string } | null, fallback: string = ''): string => {
    if (!asset || typeof asset !== 'object') return fallback;
    return asset.alt || fallback;
  },
} as const;

/**
 * Asset Categories for Organization
 */
export const assetCategories = {
  backgrounds: 'backgrounds',
  icons: 'icons',
  content: 'content',
} as const;

/**
 * Type definitions for better TypeScript support
 */
export type AssetType = 'pattern' | 'image' | 'gradient';
export type AssetCategory = keyof typeof assetCategories;

export interface AssetMetadata {
  src?: string | { src: string } | null;
  alt?: string;
  description?: string;
  placeholder?: boolean;
  type?: AssetType;
  dimensions?: {
    width?: number;
    height?: number;
  };
}

