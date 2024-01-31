/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#faaf52',
        'gray-700': '#40424b',
        'black-700': '#1c1d24',
      },
      fontFamily: {
        sans: ['Oswald', 'Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

