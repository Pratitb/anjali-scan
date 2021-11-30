module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      container:{
          center:true,
          padding:{
            DEFAULT:'2rem',
            sm:'3rem',
            md:'4rem',
            
          }
      },
    minHeight: {
      0: "0",
      "1/4": "25vh",
      "1/3": "33vh",
      "1/2": "50vh",
      "3/5": "60vh",
      "3/4": "75vh",
      "4/5": "80vh",
      "9/0": "90vh",
      full: "100vh",
    },
    colors: {
      blue: {
        primaryBlue: "#bbdefb",
      },
      white: {
        white: "#fff",
      },
      black: {
        primaryBlack: "#3f3d56",
      },
      green: {
        drkGreen: "#91cac9",
        lightGreen: "#d4ebea",
      },
      yellow: {
        lightYellow: "#e6ed96",
      },
    },
    extend: {
      /* backgroundImage: {
                'hero-pattern': "url('/public/media/wave-03.svg')",
            } */
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
