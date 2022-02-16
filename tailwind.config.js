module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgGreen: '#6B705C',
        medGreen: '#A5A58D',
        lightGreen: '#B7B7A4',
        darkCoral: '#CB997E',
        medCoral: '#DDBEA9',
        lightCoral: '#FFE8D6'
      },
      fontFamily: {
        'Lora' : ['Lora', 'serif'],
        'Nunito' : ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}
