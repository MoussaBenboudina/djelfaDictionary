/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-color-2": "#212121",
        "dark-color-1": "#030014",
        "main-color-1": "#0bb39f",
        "seconed-color": "rgb(4 157 142 / var(--tw-bg-opacity))",
      },
    },
  },
  plugins: [],
};
