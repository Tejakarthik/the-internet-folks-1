/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Source Sans Pro', 'sans-serif'], // Main headings
        'subheading': ['Poppins', 'sans-serif'],      // Subheadings
        'body': ['Open Sans', 'sans-serif'],          // Body text
      },
    },
  },
  plugins: [],
}

