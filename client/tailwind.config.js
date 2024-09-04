/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./*.{html,js,ts,jsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        extend: {
          grayscale: {
            50: 'hsl(0, 0%, 97.30%)',
            100: 'hsl(0, 0%, 91.80%)',
            200: 'hsl(0, 0%, 84.70%)',
            300: 'hsl(0, 0%, 72.90%)',
            400: 'hsl(0, 0%, 66.70%)',
            500: 'hsl(0, 0%, 60.80%)',
            600: 'hsl(0, 0%, 40.00%)',
            700: 'hsl(0, 0%, 33.70%)',
            800: 'hsl(0, 0%, 27.80%)',
            900: 'hsl(0, 0%, 17.60%)',
            1000: 'hsl(0, 0%, 11.80%)',
            1100: 'hsl(0, 0%, 6.30%)',
          },
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animate')],
};
