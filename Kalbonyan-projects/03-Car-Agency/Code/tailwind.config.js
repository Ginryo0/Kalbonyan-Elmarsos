/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/bg.png')",
        services: "url('/src/assets/ctabg.png')",
      },
      colors: {
        primary: '#12273D',
        secondary: '#741906',
        tertiary: '#EBEBEB',
      },
      fontFamily: {
        lora: ['"Lora"', 'sans-serif'],
        noto: ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
