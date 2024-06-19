/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bronze: '#CD7F32',
        silver: '#C0C0C0',
        gold: '#FFD700',
        legend: '#FF4500',
    },
  },
  plugins: [],
  }
}