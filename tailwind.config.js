/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1a1a2e',
        navyDark: '#16213e',
        heroStart: '#0f0c29',
        heroMid: '#302b63',
        heroEnd: '#24243e',
        primaryPurple: '#a855f7',
        primaryPink: '#ec4899',
        buttonPurple: '#8b5cf6',
        buttonBlue: '#3b82f6',
        buttonPink: '#ec4899',
        buttonGreen: '#10b981',
        textGray: '#9ca3af',
        textLightPurple: '#d8b4fe',
        badgeGreen: '#10b981',
        hoverPurple: '#a855f7',
      },
      boxShadow: {
        'soft-card': '0 24px 60px rgba(0, 0, 0, 0.55)',
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}

