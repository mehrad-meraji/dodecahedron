/** @type {import('tailwindcss').Config} */
const colors = require("./colors");

module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  darkMode: true,
  theme: {
    extend: {
      colors,
      fontSize: {
        "3xs": "0.625rem",
      },
    },
  },
  plugins: [],
};
