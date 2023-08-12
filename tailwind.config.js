/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      soft_orange: 'hsl(35, 77%, 62%)',
      soft_red: 'hsl(5, 85%, 63%)',
      off_white: 'hsl(36, 100%, 99%)',
      grayish_blue: 'hsl(233, 8%, 79%)',
      dark_grayish_blue: 'hsl(236, 13%, 42%)',
      very_dark_blue: 'hsl(240, 100%, 5%)'
    },
    fontWeight: {
      normal: '400',
      heavy: '700',
      extra_heavy: '800'
    },
    screens: {
      desktop: '800px'
    }
  },
  plugins: [],
}
