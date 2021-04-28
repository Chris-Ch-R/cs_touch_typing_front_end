// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        keyframes:{
          "pulse-faster" :{
            '0%': {
              opacity: '1'
            },
            '50%': {
              opacity: '.5'
            },'100%':{
              opacity: '1'
            }
          }
        },
        animation: {
          "pulse-faster": "pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
    
  }