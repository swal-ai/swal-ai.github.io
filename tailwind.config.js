/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,php}"],
  theme: {
    extend: {
      fontFamily: {
        'suisse-regular': ['SuisseIntl-Regular', 'sans-serif'],
        'suisse-medium': ['SuisseIntl-Medium', 'sans-serif'],
        'suisse-book': ['SuisseIntl-Book', 'sans-serif'],
        'oceanic-book': ['OceanicText-Book', 'sans-serif']
      },
      colors: {
        primary: '#002424',
        secondary: '#86FFD9',
        // tertiary: '#081511',
        // quaternary: '#478874'
      },
    }
  },
  plugins: [],
}
