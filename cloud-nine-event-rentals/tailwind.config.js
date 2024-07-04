/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '5/6vh': 'calc(5/6 * 100vh)',
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

