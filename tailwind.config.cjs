/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      black: "#000000",
      "cyan-500": "#81D8F7",
      "cyan-300": "#9BE1FB",
      "grey-900": "#121214",
      "grey-800": "#202024",
      "grey-400": "#7C7C8A",
      "grey-200": "#C4C4CC",
      "grey-100": "#E1E1E6",
      white: "#FFFFFF",
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
