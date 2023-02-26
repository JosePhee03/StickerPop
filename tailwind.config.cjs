/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#0095FF',
        'pastel-light-blue': '#3AB0FF',
        'pastel-gray': '#EEEEEE',
        'pastel-cyan': '#30E3DF',
        'pastel-dark-cyan': '#30BEBB'
      },
      backgroundImage: {
        alpha: 'url(/public/alpha.jpg)'
      },
      fontFamily: {
        fredoka: 'Fredoka, sans-serif'
      },
      dropShadow: {
        'text-shadow': '0 0 4px 4px #00000'
      }
    }
  },
  plugins: []
}
