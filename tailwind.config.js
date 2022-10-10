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
        'nexa-bold': ['NexaBold'],
        'nexa-light': ['NexaLight'],
      }
    },
  },
  plugins: [],
}