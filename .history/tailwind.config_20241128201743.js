/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Ensure your JSX/TSX files are included
  ],
  theme: {
    extend: {
      colors: {
        glow: '#2dd4bf',              // Glow color for general use
        customYellow: '#ffd585',      // Custom yellow color
        customGreen: '#2dd4bf',       // Custom green color, same as glow color
        customBlack: '#1c1d24',       // Custom black color
        customBlue: '#2c3e50',        // Custom blue color
      },
      boxShadow: {
        glow: '0 0 10px rgba(45, 212, 191, 0.5)', // Glow shadow effect
        // glow-light: '0 0 10px rgba(45, 212, 191, 0.25)',
        // glow-heavy: '0 0 20px rgba(45, 212, 191, 0.7)',
      },
      ringColor: {
        glow: '#2dd4bf', // Custom ring color for the glow effect
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],   // Default sans-serif font
        serif: ['Spectral', 'serif'],    // Default serif font
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
    require('@codaworks/react-glow/tailwind')  // Integrate with Tailwind for React Glow
  ],
}
