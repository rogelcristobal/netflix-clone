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
        'excon':["Excon",'sans-serif'],
        'melo':["MeloDrama",'sans-serif' ],
        'clash':["Clash Display",'sans-serif']

      },
      backgroundColor:{
        'color-100':'#FFFFFF',
        'color-200':'#F5F8FA',
        'color-300':'#E1E8ED',
        'color-400':'#AAB8C2',
        'color-500':'#657786',
        'color-black':'#14171A',
        'primary-100':'#E3F2FD',
        'primary-200':'#90CAF9',
        'primary-300':'#2196F3',
        'primary-400':'#1E88E5',
        'primary-500':'#1565C0',
      },textColor:{
        'color-100':'#FFFFFF',
        'color-200':'#F5F8FA',
        'color-300':'#E1E8ED',
        'color-400':'#AAB8C2',
        'color-500':'#657786',
        'color-black':'#14171A',
        'primary-100':'#E3F2FD',
        'primary-200':'#90CAF9',
        'primary-300':'#2196F3',
        'primary-400':'#1E88E5',
        'primary-500':'#1565C0',    
      }
    },
  },
  plugins: [],
}

