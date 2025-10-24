/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{tsx,ts}"],
  darkMode: "class",
  theme: {
    colors: {
      'primary': '#1C3121',
      'secondary': '#DF6620',
      'background': '#132217',
      'slate': '#C0C2C9',
      'gray-green': '#839688',
      'gray-orange': '#db8653',
      'black': '#000000',
    },
    // textColor: {
    //   'primary': '#1f3624',
    //   'secondary': '#fff',
    // },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        arsenal: ['Arsenal', 'sans-serif'],
      },
      boxShadow: {
        'box-primary': '0 0 3px 0 #DF6620',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out forwards',
        'fade-out': 'fade-out 0.2s ease-in forwards',
      },
    },
  },
  plugins: [],
}

