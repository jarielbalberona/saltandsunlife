/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["var(--font-rock_salt)"],
        sans: ["var(--font-montserrat)", "sans-serif"],
        serif: ["var(--font-merriweather)", "serif"],
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
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },

  plugins: ["@tailwindcss/aspect-ratio", require("tw-elements/dist/plugin")],
};
