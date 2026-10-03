
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        igbeRed: "#FF0000",
        igbeWhite: "#FFFFFF",
        igbeBlue: "#0000FF",
        igbeYellow: "#FFFF00",
        igbePurple: "#800080",
        igbePink: "#FFC0CB",
        igbeGold: "#FFD700",
      },
    },
  },
  plugins: [],
};

