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
      // orangeGradient: {
      //   background: "linear-gradient(to right, #911a80, #d42b45)",
      //   backgroundClip: "text",
      //   color: 'transparent'
      // },
      blueDark: '#0E2048',
      white: '#fff',
      gray: '#5a5a5a'
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

