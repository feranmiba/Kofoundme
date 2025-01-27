/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}" ,
    "./component/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sedan: [ "Nunito", "sans-serif"],
      }
    },
  },
  plugins: [],
}
