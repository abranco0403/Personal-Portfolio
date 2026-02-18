/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Existing colors (unchanged) */
        customYellow: '#ffd585',
        customGreen: '#2dd4bf',
        customBlack: '#1c1d24',
        customBlue: '#2c3e50',

        /* Custom text colors (added only) */
        text: {
          primary: '#E6E7EB',
          secondary: '#B8BBC4',
          muted: '#8C8F99',
          disabled: '#5F636E',
          accent: '#D0D3DB',
          heading: '#F2F3F7',
        },
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
