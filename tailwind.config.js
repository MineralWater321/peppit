module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-page': "url('/src/assets/bg_bggenerator_com.png')"
      },
      spacing: {
        '128': '32rem'
      }
    },
  },

  plugins: [
    require('daisyui'),
  ],
}
