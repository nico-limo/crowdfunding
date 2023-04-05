/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white-800': '#ebfbff',
        'black-800': '#13131a',
        'black-700': '#1c1c24',
        'black-600': '#2c2f32',
        'black-500': '#3a3a43',
        'gray-600': '#4b5264',
        'gray-500': '#808191',
        'green-600': '#4acd8d',
        'green-700': '#1dc071',
        'purple-600': '#8c6dfd'
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif']
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)'
      },
      // that is animation class
      animation: {
        fade: 'fadeOut 1s ease-in-out',
        wiggle: 'wiggle 1s ease-in-out infinite'
      },

      // that is actual animation
      keyframes: {
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' }
        }
      }
    }
  },
  plugins: []
}
