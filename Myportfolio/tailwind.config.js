/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins'],
        'roboto': ['Roboto'],
        'urbanist': ['Urbanist'],
        'Epilogue': ['Epilogue']
      },
      boxShadow: {
        '3xll': ' 10px 10px 42px rgba(30, 80, 255, 0.5)',
      },
      colors: {
        'regal-blue': '#243c5a',
      },
    },
  },
  plugins: [],
}