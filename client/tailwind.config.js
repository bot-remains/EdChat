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
          primary: '#eff1f5',
          secondary: '#1e66f5',
          hoverSecondary: 'blue',
          error: '#d20f39',
          primaryShade: '#dce0e8',
          text: 'text-gray-900',
          border: 'border-gray-200',
          secondaryText: 'text-gray-600',
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animate')],
};
