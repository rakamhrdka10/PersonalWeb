/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    "neutral": "#2a323c",
  },
  plugins: [require("daisyui")],
};
