/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   poppins: ['"Poppins", sans-serif']
    // },
    textColor: {
      orange: '#FF6635',
      blueDark: '#0E2048',
      white: '#fff',
    },
    
    // it will set as default
    extend: {
      // fontFamily: {
      //   poppins: ['"poppins", sans-serif']
      // }
    },
  },
  plugins: [require('daisyui'),],
}

