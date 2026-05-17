/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0081C4",
        secondary: "#C42128",
        accent: "#F58220",
        dark: "#0A2540",
        background: "#F8FAFC",
        text: "#1E293B"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
