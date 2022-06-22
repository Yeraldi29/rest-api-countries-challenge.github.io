module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundColor:{
        Verylightwhite: 'hsl(0, 0%, 98%)',
        VeryDarkBlue : 'hsl(207, 26%, 17%)',
        DarkBlue: 'hsl(209, 23%, 22%)'
      },
      colors:{
        VeryDarkBlue : 'hsl(200, 15%, 8%)'
      },
      boxShadow:{
        Custom:"rgba(100, 100, 111, 0.2) 0px 0px 10px 0px"
      }
    },
  },
  plugins: [],
}