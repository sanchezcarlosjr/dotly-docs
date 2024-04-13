import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://sanchezcarlosjr.github.io',
  base: "dotly",
	integrations: [
		starlight({
			title: 'Dotly Docs',
			social: {
				github: 'https://github.com/CodelyTV/dotly'
			}
		})
	],
});
