import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/CareerCompassAI/', // 👈 VERY IMPORTANT for GitHub Pages!
  plugins: [react()],
});
