/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#ffd585',
        customGreen: '#2dd4bf',
        customBlack: '#1c1d24',
        customBlue: '#2c3e50',
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
        serif: ['Spectral', 'serif'],
      },
    },
  },
  plugins: [],
}