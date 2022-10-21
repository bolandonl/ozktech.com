/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      dark: '#111111'
    }),
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        cultured: '#F9FAFB',
        quicksilver: '#A8A29E',
        carolinablue: '#1DA1F2',
        starcommandblue: '#1A7DBA',
        lapislazuli: '#175982',
        richblack: '#111111'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
