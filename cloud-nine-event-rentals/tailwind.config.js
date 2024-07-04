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
        'mobile-margin': 'calc(2/3 * 100vh)',
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

