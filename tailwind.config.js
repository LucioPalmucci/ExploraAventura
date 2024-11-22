/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Nunito:['Nunito'],
        Autor:["Oswald", "Sans-serif"],
        Fuente:["Lato", "Sans-serif"],
      },
      colors:{
        cielo:'#b5d6ff',
        fondo: "#EDEDED",
      },
      fontSize:{
        resumen:"17px",
        dots: "8px",
      },
      width:{
        celularTxt:"40%",
      }
    },
  },
  plugins: [],
}
