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
      'gray-orange': '#db8653'
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
    },
  },
  plugins: [],
}

