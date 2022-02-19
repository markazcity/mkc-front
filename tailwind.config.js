module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
       '-1': '-1',
       '11': '11',
      }, 
      colors: {
        violet: {
         600:"#AA73AC",
         700:"#985B99"
        },
        butter: {
          600:"#CDCC00",
          700:"#B0B000"
         },
      },
      screens: {
        '3xl': '1600px',
      },
    },
      
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
