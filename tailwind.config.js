const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/*.js', './pages/*.js'],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '900': '#360f00',
        },
        yellow: {
          ...colors.yellow,
          '500': '#ffc501',
        },
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
};
