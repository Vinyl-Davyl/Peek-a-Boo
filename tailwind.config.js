module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#72ddf7',
          200: '#00a6fb'
        },
        secondary: '#FF693A'
      }
    },
  },
  variants: {
  },
  plugins: [],
}
