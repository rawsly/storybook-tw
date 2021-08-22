const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'tranparent',
      current: 'currentColor',
      primary: {
        50: '#84b2d6',
        100: '#75acd8',
        200: '#66a5d8',
        300: '#569ed8',
        400: '#4999da',
        500: '#3490dc',
        600: '#0073bc',
        700: '#00579c',
        800: '#003c7d',
        900: '#002460',
        DEFAULT: '#3490dc',
      },
      secondary: '#fff',
      white: {
        DEFAULT: '#FFF',
        soft: '#F4FAFF',
      },
      blue: colors.blue,
      red: colors.red,
      gray: colors.gray,
      display: {
        DEFAULT: '#214358',
        light: 'rgba(33, 67, 88, 0.2)'
      },
    },
    extend: {
      fontFamily: {
        body: ["Lato", "Arial", "sans-serif"],
        display: ["Lato", "Arial", "sans-serif"],
        lato: ["Lato"]
      },
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      textColor: theme => ({
        ...theme('colors'),
      }),
      borderColor: theme => ({
        ...theme('colors'),
      }),
      borderWidth: {
        '1': '1px'
      },
      width: {
        '300': '75rem',
        'full': '100vw',
        'max': '100%',
        'camera': '25rem',
      },
      height: {
        '156': '39rem',
        'full': '100vh',
        'max': '100%',
        'camera': '14.0625rem'
      },
      flex: {
        '2': '2 2 0%'
      },
      margin: {
        '18': '4.5rem'
      },
      scale: {
        'reverse-100': '-1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
