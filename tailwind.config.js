/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {

    screens: {
      md:'768px',
    },

    colors: {
      softBlue: 'hsl(215, 51%, 70%)',
      cyan: 'hsl(178, 100%, 50%)',
      veryDarkBlueM: 'hsl(217, 54%, 11%)',
      veryDarkBlueC: 'hsl(216, 50%, 16%)',
      veryDarkBlueL: 'hsl(215, 32%, 27%)',
      white: 'hsl(0, 0%, 100%)',
    },

    extend: {

      fontFamily: {
        'outfit': ['outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
