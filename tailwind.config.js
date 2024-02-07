/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Kaushan Script', 'Times New Roman'],
        'subtitle': ['K2D', 'sans-serif'],
        'body': ['Poppins', 'sans-serif']
      },
      colors : {
        'primary': '#10b981',
        'secondary': '#6ee7b7',
        'strong': '#064e3b',
        'body': '#475569',
      },
    },
  },
  plugins: [],
}