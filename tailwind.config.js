module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Anfisa-Grotesk' : ['Anfisa-Grotesk', 'helevitica', 'sans-serif'],
        'Founders-Grotesk-Bold-Italic-Regular' : ['Founders-Grotesk-Bold-Italic-Regular', 'helevitica', 'sans-serif'],
        'Founders-Grotesk-Mono-Bold-Regular' : ['Founders-Grotesk-Mono-Bold-Regular', 'helevitica', 'sans-serif'],
        'Founders-Grotesk-Mono-Light-Regular' : ['Founders-Grotesk-Mono-Light-Regular', 'helevitica', 'sans-serif'],
        'Founders-Grotesk-Mono-Medium-Regular' : ['Founders-Grotesk-Mono-Medium-Regular', 'helevitica', 'sans-serif'],
        'Founders-Grotesk-X-Cond-Bold-Regular' : ['Founders-Grotesk-X-Cond-Bold-Regular', 'helevitica', 'sans-serif'],
        'FoundersGroteskRegular' : ['FoundersGroteskRegular', 'helevitica', 'sans-serif'],
        'ClearfaceStd-BlackItalic' : ['ClearfaceStd-BlackItalic', 'helevitica', 'sans-serif'],
        'ClearfaceStd-Regular' : ['ClearfaceStd-Regular', 'helevitica', 'sans-serif'],
        'ClearfaceStd-Italic' : ['ClearfaceStd-Italic', 'helevitica', 'sans-serif'],
      },
      stroke: theme => ({
        'black': theme('colors.black'),
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'brownish': '#ffecbd',
      }),
      colors:{
        'deepBlue': '#00000c',
        'deepBlueII': '#01011bec',
        'brownish': '#ffecbd',
      },
      fontSize: {
        xxs: ['0.55rem', '0px'],
      },
      fill: theme => ({
        'brownish': theme('colors.brownish'),
      }),
      rotate: {
        '360': '360deg',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
