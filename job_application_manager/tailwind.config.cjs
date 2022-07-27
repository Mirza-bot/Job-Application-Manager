/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.jsx",
    "./src/components/JobForm/JobForm.jsx",
    "./src/components/JobsList/JobsList.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
