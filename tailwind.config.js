/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat-Medium", "sans-serif"],
        "gs-regular": ["Montserrat-Regular", "sans-serif"],
        "gs-semibold": ["Montserrat-SemiBold", "sans-serif"],
        "gs-bold": ["Montserrat-Bold", "sans-serif"],
      },
      colors: {
        "legal-eagle": "#707191",
        "true-blue": "#4A4D60",
      },
    },
  },
  plugins: [],
};
