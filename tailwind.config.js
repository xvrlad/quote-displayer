/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-tight': ['"Inter Tight"', 'sans-serif']
      }
    },
    colors: {
      'dark-green': '#283618',
      'light-green': '#606C38',
      'cream': '#FEFAE0',
      'light-brown': '#DDA15E',
      'dark-brown': '#BC6C25'
    }
  },
  plugins: [],
}
