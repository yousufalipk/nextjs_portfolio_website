/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        beat: {
          '0%, 100%': {
            opacity: '0.3'
          },
          '50%': {
            opacity: '1'
          }
        },
        slideUpLeftLanding: {
          '0%': {
            transform: 'translateY(20%)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        slideUpRightLanding: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        slideUpLeftIntro: {
          '0%': {
            transform: 'translateX(-30%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        slideUpRightIntro: {
          '0%': {
            transform: 'translateX(30%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        slideUpRightTech: {
          '0%': {
            transform: 'translateY(20%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        beat: 'beat 3s infinite',
        slideUpLeftLanding: 'slideUpLeftLanding 0.5s ease-out forwards',
        slideUpRightLanding: 'slideUpRightLanding 0.5s ease-out 0.5s forwards',
        slideUpLeftIntro: 'slideUpLeftIntro 0.5s ease-out forwards',
        slideUpRightIntro: 'slideUpRightIntro 0.5s ease-out forwards',
        slideUpRightTech: 'slideUpRightTech 0.5s ease-out forwards'
      },
    }
  },
  plugins: [],
};
