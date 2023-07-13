/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        sign: 'url(./assets/imgs/signbg.png)',
        signMini: 'url(./assets/imgs/signbgmini.png)',
        'dash-light': 'url(./assets/imgs/Bitmap.jpg)',
        'dash-dark': 'url(./assets/imgs/Bitmap-2.jpg)',
      },
      colors: {
        primary: '#D375B9',
        secondary: '#697386',
        tertiary: '#494C6B',
        'dark-1': '#241229',
        'dark-2': '#25273D',
        'dark-3': '#404363',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};
