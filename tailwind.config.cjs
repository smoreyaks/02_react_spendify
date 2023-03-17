/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Hind Siliguri',
      secondary: ['Lobster', 'cursive'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        dark: '#292830',
        light: '#BDBDBD',
        accent: '#ef5350',
        accentHover: '#ba3e3f',
        grey: '#F5F5F5',
        logoRed: '#EF5350',
        logoYellow: '#EF5350',
        logoIndigo: '#6e6eff',
      },
      backgroundImage: {
        overview: "url('/src/assets/img/overview/bg.svg')",
        cta: "url('/src/assets/img/cta/bg.svg')",
      },
    },
  },
  plugins: [],
};
