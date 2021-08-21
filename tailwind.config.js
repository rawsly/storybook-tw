module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#fff',
        'transparent': 'rgba(0,0,0,0)',
        'white': '#fff',
        'red': '#f56565',
        'blue': '#3490dc'
      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#fff',
        'secondary': '#3490dc',
        'red': '#f56565',
        'blue': '#3490dc',
        'white': '#fff'
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#fff',
        'transparent': 'rgba(0,0,0,0)',
        'white': '#fff',
        'red': '#f56565',
        'blue': '#3490dc'
      }),
      borderWidth: theme => ({
        ...theme('colors'),
        '1': '1px'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
