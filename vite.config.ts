import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.js'],
	},
	css: {
		preprocessorOptions: {
			sass: {
				additionalData: `
          @import '$lib/sass/global.scss';
        `,
			},
		},
	},
});
