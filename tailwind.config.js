/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#00856F",
        "brand-green-light": "#DCE9E2",
        "gray-headline": "#212529",
        "gray-paragraph": "#495057",
      },
    },
  },
  plugins: [],
};
