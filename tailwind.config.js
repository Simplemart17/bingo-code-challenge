const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        blue: '1px solid #dddbda',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
