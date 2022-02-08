module.exports = {

  content: [
    './js/**/*.js',
    '../lib/*_web/**/*.*ex'
  ],
  plugins: [
   
    
    require('daisyui'),
  ],
  

  // config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
