/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f5f4',
          100: '#dce3de',
          500: '#4a6350',
          600: '#324433',
          700: '#252f26',
          DEFAULT: '#324433',
        },
      },
    },
  },
  plugins: [],
};
