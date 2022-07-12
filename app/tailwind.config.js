module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundColor:{
        Verylightwhite: 'hsl(0, 12%, 94%)',
        VeryDarkBlue : 'hsl(209, 27%, 15%)',
        DarkBlue: 'hsl(209, 23%, 22%)'
      },
      colors:{
        DarkBlue: 'hsl(209, 23%, 22%)',
        VeryDarkBlue : 'hsl(200, 15%, 8%)',
        Verylightwhite: 'hsl(0, 0%, 98%)'
      },
      boxShadow:{
        Custom:"rgba(100, 100, 111, 0.3) 0px 0px 10px 0px"
      }
    },
  },
  plugins: [],
}