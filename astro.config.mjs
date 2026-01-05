// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// For GitHub Pages deployment:
// 1. Update 'site' with your GitHub username
// 2. Update 'base' with your repository name (or remove if using custom domain)
export default defineConfig({
	integrations: [tailwind()],
	output: 'static',
	// Uncomment and update these for GitHub Pages:
	// site: 'https://yourusername.github.io',
	// base: '/tinkerz-space', // Use '/' if repo name is 'yourusername.github.io'
});
