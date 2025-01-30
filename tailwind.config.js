/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'golden-500': '#FFD700',
        'blue-900': '#1a365d',
        'blue-800': '#2c5282',
        'blue-700': '#2b6cb0',
      }
    },
  },
  plugins: [],
};