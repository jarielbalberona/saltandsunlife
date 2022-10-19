/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Rock Salt'],
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: "#162a43",
        blue: {
          50: "#485c75",
          100: "#3e526b",
          200: "#344861",
          300: "#2a3e57",
          400: "#20344d",
          500: "#162a43",
          600: "#0c2039",
          700: "#02162f",
          800: "#000c25",
          900: "#00021b",
        },
      },
    },
  },
  plugins: [],
};
