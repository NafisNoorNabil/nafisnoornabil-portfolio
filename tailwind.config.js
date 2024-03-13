/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      dropShadow: {
        '4xl': [
          '1px 0.5px 1px #495057',
        ]
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      fontFamily: {
        nunito: ["Nunito Sans"],
        oswald: ["Oswald"],
        roboto: ["Roboto"],
        playfair: ["Playfair Display"],
        poppins: ["Poppins"],
        sfui: ['SF UI', 'sans-serif']
      },
      letterSpacing: {
        widest: '.3em'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
