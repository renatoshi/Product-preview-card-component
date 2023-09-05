/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Fraunces: ["Fraunces", "serif"],
      },
      colors: {
        darkcyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        verydarkblue: "hsl(212, 21%, 14%)",
        darkgrayishblue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
