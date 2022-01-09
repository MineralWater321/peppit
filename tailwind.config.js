module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-page': "url('/src/assets/bg_bggenerator_com.png')"
      }
    },
  },

  plugins: [
    require('daisyui'),
  ],
}
