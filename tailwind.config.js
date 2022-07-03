/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
      preflight: false,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      fontFamily:{
        'supreme':['Supreme',"sans-serif"],
        'outfit':["Outfit",'sans-serif'],
        'excon':["Excon",'sans-serif']
      },backgroundColor:{
        'primary':'#03a9f4',    
        'extralight':'#F5F8FA',
        'light':'#E1E8ED',
        'gray':'#AAB8C2',
        'lightgray':'#657786',
        'dark':'#14171A',

      },textColor:{
        'primary':'#03a9f4',    
        'extralight':'#F5F8FA',
        'light':'#E1E8ED',
        'gray':'#AAB8C2',
        'lightgray':'#657786',
        'dark':'#14171A',
      }
    },
  },
  plugins: [],
}
