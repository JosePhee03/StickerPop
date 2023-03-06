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
        alpha: 'url(/public/alpha.jpg)',
        'footer-gradient': 'linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.1) 100%)',
        'bar-gradient': 'repeating-linear-gradient(45deg, transparent, transparent 2.5rem, white 2.5rem, white 5rem)'
      },
      fontFamily: {
        fredoka: 'Fredoka, sans-serif'
      },
      dropShadow: {
        'text-shadow': '0 0 4px 4px #00000'
      },
      animation: {
        'progress-bar': 'slide 4s linear infinite'
      },
      keyframes: {
        slide: {
          from: {
            'background-position-x': '0'
          },
          to: {
            'background-position-x': '113px'
          }
        }
      }
    }
  },
  plugins: []
}
