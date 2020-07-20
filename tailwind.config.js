module.exports = {
  purge: ['./components/*.js', './pages/*.js'],
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
};
