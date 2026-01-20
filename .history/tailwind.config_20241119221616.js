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
      keyframes: {
        barAnimation: {
          '0%': { transform: 'scaleY(0.5)', opacity: '0' },
          '50%': { transform: 'scaleY(1)', opacity: '1' },
          '100%': { transform: 'scaleY(0.5)', opacity: '0' },
        },
        staggerAnimation: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        barAnimation: 'barAnimation 1s infinite ease-in-out',
        staggerAnimation: 'staggerAnimation 1s infinite',
      },
    },
  },
  plugins: [
    require('@codaworks/react-glow/tailwind')
  ],
}