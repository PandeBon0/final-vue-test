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
      spacing:{
        '22': '5.5rem', 
        '100': '27rem',
        '103': '32rem',
        '107': '48rem',
        '120': '80rem',
        '88': '20.5rem',
        '105': '39rem',
        '106': '43rem'
      },
      width: {
        '128': '32rem', 
        '148': '37rem',
        '85': '85rem',
        '29': '29rem',
        
        
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