/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        "lr-gray" : {
          light: "#282C33",
          DEFAULT: "#282C33",
          dark: "#fff"
        },
        "lr-pink": {
          light: "#E06B74",
          DEFAULT: "#E06B74",
          dark: "#E06B74",
        },
        "lr-green": {
          light: "#98C379",
          DEFAULT: "#98C379",
          dark: "#98C379",
        },
        "lr-yellow": {
          light: "#E5C07A",
          DEFAULT: "#E5C07A",
          dark: "#E5C07A",
        },
        "lr-blue": {
          light: "#62AEEF",
          DEFAULT: "#62AEEF",
          dark: "#62AEEF",
        },
        "lr-purple": {
          light: "#C778DD",
          DEFAULT: "#C778DD",
          dark: "#C778DD",
        },
        "lr-cyan": {
          light: "#55B6C2",
          DEFAULT: "#55B6C2",
          dark: "#55B6C2",
        },
        "lr-l-gray": {
          light: "#ABB2BF",
          DEFAULT: "#ABB2BF",
          dark: "#ABB2BF",
        }
      },
      backgroundImage: {
        'dots-pattern': "url('../image/bg-dots.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}