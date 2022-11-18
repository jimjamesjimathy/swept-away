/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#053245",
        lightBlue: "#136290",
        gold: "#AE823D",
        lightGold: "#CAA468",
        maroon: "#773E33",
        brown: "#AF603D",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        calig: ["Calligraffitti", "cursive"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};