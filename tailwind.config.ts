import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#2E7D32',
          50: '#ECF7EC',
          100: '#D9F1D9',
          200: '#A6D8A7',
          300: '#76C478',
          400: '#4AA749',
          500: '#2E7D32',
          600: '#236027',
          700: '#1B4C1F',
          800: '#163D1A',
          900: '#122F15'
        },
        secondary: {
          DEFAULT: '#FF9800',
          50: '#FFF1DE',
          100: '#FFE4C0',
          200: '#FFCF89',
          300: '#FFB84D',
          400: '#FFA226',
          500: '#FF9800',
          600: '#E37100',
          700: '#B95A00',
          800: '#8F4400',
          900: '#6F3200'
        },
        accent: '#F4B400',
        background: '#FFFDF8',
        card: '#FFFFFF',
        text: '#1F2937',
        muted: '#6B7280'
      },
      boxShadow: {
        soft: '0 28px 80px rgba(46, 125, 50, 0.08)',
        glass: '0 20px 60px rgba(31, 41, 55, 0.08)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      }
    }
  },
  plugins: []
} satisfies Config;
