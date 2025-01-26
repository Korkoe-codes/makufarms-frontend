/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'opacity': 'opacity',
      },
      transitionDuration: {
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
};