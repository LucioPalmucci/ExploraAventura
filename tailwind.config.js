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
      },
      keyframes:{
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRT: {
          '0%': { transform: 'translateX(5%) translateY(-2%)', opacity: '0' },
          '100%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
        },
        slideLB: {
          '0%': { transform: 'translateX(-5%) translateY(-5%)', opacity: '0' },
          '100%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(70%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLT: {
          '0%': { transform: 'translateX(-10%) translateY(-15%)', opacity: '0' },
          '100%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
        }
      },
      animation: {
        slideInLeft: 'slideInLeft 2.5s ease-out',
        slideInRight: 'slideInRight 2.5s ease-out',
        slideRT: 'slideRT 2.5s ease-out',
        slideLB: 'slideLB 2.5s ease-out',
        slideInBottom: 'slideInBottom 2.5s ease-out',
        slideLT: 'slideLT 2.5s ease-out',
      },
    },
  },
  plugins: [],
}
