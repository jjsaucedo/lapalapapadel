/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#059669',
          'green-dark': '#047857',
          'green-darker': '#065f46',
          lime: '#a3e635',
          'lime-dark': '#84cc16',
          forest: '#0f2c25',
          'forest-light': '#2d5a4d',
          footer: '#0a141c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
