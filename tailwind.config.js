/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Nunito:['Nunito'],
      },
      colors:{
        cielo:'#b5d6ff',
      },
      fontSize:{
        resumen:"17px",
      }
    },
  },
  plugins: [],
}
