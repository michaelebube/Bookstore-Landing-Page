/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
       screens: {
        'xs': '350px',
        '2xs': '450px',
        
        
        
      },
      colors: {
        primaryColor: '#284B63',
        txtColor: '#FCD5CE'
        
      },

      fontFamily: {
        cinzel: ['Cinzel Decorative', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        ephesis :['Ephesis', 'cursive'],
        jakarta: ['Jakarta', 'cursive']
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px rgba(0, 0, 0, 0.05)',
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        'inner-md': 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
        'inner-lg': 'inset 0 10px 15px rgba(0, 0, 0, 0.1)',
        'inner-xl': 'inset 0 20px 25px rgba(0, 0, 0, 0.1)',
      },
    },

  },
  variants: {
    extend: {
      brightness: ['hover', 'focus'],
    },
  },
  plugins: [  require('@tailwindcss/typography'),],
}

