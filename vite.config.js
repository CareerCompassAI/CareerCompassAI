import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/CareerCompassAI/', // 👈 add this line with your repo name
  plugins: [react()],
});
