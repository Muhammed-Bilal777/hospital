/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      color :{
        hoverColor : "#FFC000",
        brightColor : "#dd8036",
        backgroundColor : "#36ae9a",
      },
    },
  },
  plugins: [],
}

