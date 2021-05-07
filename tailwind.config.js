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
          },
          
          'fade-in-down': {
            '0%': {
              opacity: '0',
              transform: 'translateY(-10px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
        animation: {
          "pulse-faster": "pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          'fade-in-down': 'fade-in-down 0.3s ease-out',
        }
      },
    },
    variants: {
      extend: {},
      animation: ['responsive', 'hover', 'focus'],
    },
    plugins: [],
    
  }