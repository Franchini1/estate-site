/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fff',
      'dark-green': '#003C3C',
      'mid-green': '#406B6E',
      'light-green': '#62CC90',
      'gray': '#212A21',
      'ash': '#F0F1EC'
    }
  },
  plugins: [],
}