/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        topRotateIn: 'rotateIn 1s ease-in-out forwards',
        bottomRotateIn: 'rotateOut 1s ease-in-out forwards',
      },
      keyframes: {
        rotateIn: {
          '0%': {transform: 'rotateX(90deg)', opacity: '0'},
          '100%': {transform: 'rotateX(0deg)', opacity: '1'},
        },
        rotateOut: {
          '0%': {transform: 'rotateX(-90deg)', opacity: '0'},
          '100%': {transform: 'rotateX(0deg)', opacity: '1'},
        },
      }
    }
  },
  plugins: [],
}

