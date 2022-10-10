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
      backgroundColor:{
        "secondary": "#4D5628",
        "primary-1": "#E3E6D5;",
      },
      colors:{
        "secondary": "#4D5628",
        "onSecondary": "rgba(211, 219, 179, 1)",
      }
    },
  },
  plugins: [],
}