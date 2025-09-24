/******** Tailwind Config for LN ********/
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        },
        brand: '#0B1B2B',
        surface: '#0F172A',
        muted: '#94A3B8',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
}
