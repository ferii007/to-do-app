/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-theme-color-success': '#117A7A',
        'default-theme-color-success': '#17A1A1',
        'bg-theme-color-success': '#E3F3F3',
        'focused-theme-color-success': '#B8D7D7',
        'pressed-theme-color-success': '#0F6666',
        'outline-theme-color-success': '#8BD0D0',

        'primary-theme-color-error': '#CC3A55',
        'default-theme-color-error': '#FF486A',
        'bg-theme-color-error': '#FFE9ED',
        'focused-theme-color-error': '#F0C4CC',
        'pressed-theme-color-error': '#B2324A',
        'outline-theme-color-error': '#FFA3B4',

        'primary-theme-color-warning': '#E0740F',
        'default-theme-color-warning': '#FD8311',
        'bg-theme-color-warning': '#FEF0E2',
        'focused-theme-color-warning': '#F6D5B7',
        'pressed-theme-color-warning': '#CC6A0E',
        'outline-theme-color-warning': '#FEC188',

        'primary-color-neutral': '#1D3066',
        'secondary-color-neutral': '#737FA0',
        'ghost-color-neutral': '#A9B0C5',
        'line-color-neutral': '#E3E6EC',
        'bg-color-neutral': '#F6F7F9',
      },

      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

