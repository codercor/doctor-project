/** @type {import('tailwindcss').Config} */
const colors = {
  "primary-light": "#EEEFE8",
  "secondary-light": "#E8EDEE",
  "tertiary-light": "#E8EEE8",
  "quaternary-light": "#FAFBF5",
  "primary": "#E9EDD9",
  "secondary": "#4E929D",
  "tertiary": "#6CAFBA",
  "quaternary": "#80C5D0",
  "primary-flat": "#A9C8CD",
  "secondary-flat": "#98A170",
  "tertiary-flat": "#8C88BB",
  "quaternary-flat": "#3A356B",
  white: {
    default: "#D2D5C2",
    100: "#D2D5C2",
    200: "#D8DACA",
    300: "#DDE0D1",
    400: "#E3E5D9",
    500: "#E9EAE1",
    600: "#EEEFE8",
    700: "#F4F5F0",
    800: "#F9FAF7",
  },
  purple: {
    default: "#E3E2F1",
    100: "#E3E2F1",
    200: "#C7C4E2",
    300: "#ABA7D4",
    400: "#8F8AC5",
    500: "#746DB7",
    600: "#5A52A6",
    700: "#4A4388",
    800: "#3A356B",
    p: "#3C3575",
  },
  black: {
    default: "#DFE2E2",
    100: "#0A0B0B",
    200: "#272B2B",
    300: "#444B4B",
    400: "#616B6B",
    500: "#7F8B8B",
    600: "#9FA8A8",
    700: "#BFC5C5",
    800: "#DFE2E2",
  },
  blue: {
    default: "#E8F2F4",
    100: "#4E929D",
    200: "#5EA4AF",
    300: "#75B1BB",
    400: "#8CBEC6",
    500: "#A3CBD1",
    600: "#BAD8DD",
    700: "#D1E5E8",
    800: "#E8F2F4",
  },
  green: {
    default: "#F1F2EB",
    100: "#8C9761",
    200: "#9BA573",
    300: "#A9B287",
    400: "#B8BF9B",
    500: "#C6CCAF",
    600: "#D4D9C3",
    700: "#E2E5D7",
    800: "#F1F2EB",
  },
  deepgreen: {
    default: "#ECF0DE",
    100: "#4D5628",
    200: "#6A7737",
    300: "#889846",
    400: "#A2B35B",
    500: "#B4C27C",
    600: "#C7D19D",
    700: "#DAE1BD",
    800: "#ECF0DE",
  },
  gray: {
    text: "#8E8E8E",
  }
}
const plugin = require('tailwindcss/plugin')

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-20': {
      transform: 'rotateX(20deg)',
    },
    '.rotate-x-40': {
      transform: 'rotateX(40deg)',
    },
    '.rotate-x-60': {
      transform: 'rotateX(60deg)',
    },
    '.rotate-x-80': {
      transform: 'rotateX(80deg)',
    },
    
  })
})

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-0': {
      transform: 'rotateY(0deg)',
    },
    '.rotate-y-20': {
      transform: 'rotateY(20deg)',
    },
    '.rotate-y-40': {
      transform: 'rotateY(40deg)',
    },
    '.rotate-y-60': {
      transform: 'rotateY(60deg)',
    },
    '.rotate-y-80': {
      transform: 'rotateY(80deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
})

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        none: 'none',
       disc: 'disc',
       decimal: 'decimal',
       square: 'square',
       roman: 'upper-roman',
      },
      gridTemplateColumns: {
        "14": "repeat(14, minmax(50px, 1fr))",
      },
      fontFamily: {
        'nexa-regular': ['NexaRegular'],
        'nexa-light': ['NexaLight'],
        'nexa-bold': ['NexaBold'],
        "montserrat": ["Montserrat"],
      },
      backgroundColor: {
        ...colors,
      },
      colors: {
        ...colors,
      },
      borderColor: {
        ...colors,
      },
      backgroundImage: {
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
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    rotateX,
    rotateY,
  ],
  variants: {
    scrollbar: ['rounded']
  }
}