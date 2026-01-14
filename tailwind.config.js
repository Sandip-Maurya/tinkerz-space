import { fonts } from './src/config/fonts.ts';
import { tailwindColors } from './src/config/colors.ts';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: tailwindColors,
      fontFamily: {
        sans: fonts.families.sans,
      },
    },
  },
  plugins: [],
}

