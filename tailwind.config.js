/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
      }
    },
  },
  plugins: [],
}