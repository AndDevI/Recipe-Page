/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      'title': ['Young-serif'],
      'p': ['Outfit'],
    },
    extend: {
      colors : {
        'stone-100': '#F3E6D8',
        'stone-150': '#E4DED8',
        'stone-600': '#5F574E',
        'stone-900': '#302D2C',
        'brown': '#854632',
        'rose-800': '#7B284F',
        'rose-50': '#FFF5FA',
      },
    },
  },
  plugins: [],
}

