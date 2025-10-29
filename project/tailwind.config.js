/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tb-bg': '#f3e6d3',
        'tb-text': '#3b2b22',
        'tb-accent': '#c09a6c',
        'tb-accent-dark': '#a48052',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
