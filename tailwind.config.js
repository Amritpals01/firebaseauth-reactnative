/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brown: {
          500: '#cba35c', // Coffee color
        },
        Satin:{
          300:'#f1e9da',
        }
      },
    },
  },
  plugins: [],

}

