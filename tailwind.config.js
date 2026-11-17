export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: '#172033',
        body: '#344054',
        muted: '#667085',
        line: '#E4E9F2',
        brand: { DEFAULT: '#2563EB', dark: '#1D4ED8', tint: '#DCE8FF' },
        violet: { DEFAULT: '#7C3AED', tint: '#E9E1FD' },
        mint: { DEFAULT: '#14B8A6', soft: '#EFFBF7' },
        canvas: '#FAFBFC',
        sky: { DEFAULT: '#F2F7FF', deep: '#EAF3FF' },
        lavender: '#F5F2FF',
        footer: '#F5F8FC',
        danger: '#DC2626',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1440px',
      },
    },
  },
  plugins: [],
};
