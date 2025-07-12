/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'miami-teal': '#00f1c5',
        'miami-pink': '#ff4fa3',
        'custom-gray': '#f0f0f0',
        'navy-blue': '#001f3f',
      },
    },
  },
  plugins: [],
};
