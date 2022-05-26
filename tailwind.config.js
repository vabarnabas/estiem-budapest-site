module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        estiemGreen: "#205e44",
      },
      spacing: {
        halfScreen: "50vh",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
