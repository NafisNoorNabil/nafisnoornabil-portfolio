/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      fontFamily: {
        nunito:["Nunito Sans"],
        oswald:["Oswald"],
        roboto:["Roboto"],
        playfair:["Playfair Display"],
        poppins:["Poppins"],
        sfui: ['SF UI', 'sans-serif']
      },
      letterSpacing:{
        widest:'.3em'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

