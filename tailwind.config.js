/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      globalFont:  ['Poppins', 'sans-serif'],
      lobster:  ['Lobster', 'sans-serif']
    }
  },
  plugins: [],
  darkMode: 'class',
}
