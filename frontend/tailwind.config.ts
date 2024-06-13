/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app//*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 10s infinite',
      },
    },
  },
  plugins: [],
};