/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nexa-regular': ['NexaRegular'],
        'nexa-light': ['NexaLight'],
        'nexa-bold': ['NexaBold'],
      },
      backgroundColor: {
        "secondary": "#4D5628",
        "primary-1": "#E3E6D5;",
        "primary-2": "rgb(238, 239, 232)",
        "primary-3": "rgb(226, 228, 211)",
        "onSecondary-2": "#D2D5C2",
      },
      colors: {
        "secondary": "#4D5628",
        "onSecondary": "rgba(211, 219, 179, 1)",
        "onSecondary-2": "#D2D5C2",
        "onPrimary-2": "rgba(165, 166, 158, 1)",
        "active-onPrimary":"rgba(77, 86, 40, 1)"
        
      },
      borderColor:{
        "active-onPrimary":"rgba(77, 86, 40, 1)"
      },
      backgroundImage:{
        "home-section-1": "url('/images/png/home-section-1.png')",
        "home-section-1m": "url('/images/png/home-section-1m.png')",
        "e1": "url('/images/png/e1.png')",
        "e2": "url('/images/png/e2.png')",
        "e3": "url('/images/png/e3.png')",
        "e4": "url('/images/png/e4.png')",
        "e5": "url('/images/png/e5.png')",
        "e6": "url('/images/png/e6.png')",
      }
    },
  },
  plugins: [],
}