/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '510px',
      md: '768px',
      lg: '1024px',
    },
    extend: {},
  },
  plugins: [],
};
