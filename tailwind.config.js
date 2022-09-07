module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      openSans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      width: {
        '128': '32rem', 
        '148': '37rem'
      },
      colors:{
        bgGrey: '#F5F5F5',
        dbGreyBorder: '#EBEDED',
        thGreyBorder: '#B4BBBC',
        progressBarBlue: '#005CAB',
      },
    },
  },
  plugins: [],
}