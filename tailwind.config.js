/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Color (Trust + Clarity) - Soft Sky Blue
        primary: {
          50: '#E8F4FD',
          100: '#D1E9FB',
          200: '#A3D3F7',
          300: '#75BDF3',
          400: '#5BA3E8', // Main primary
          500: '#7BB8F0', // Light (hover)
          600: '#4A8FD4', // Dark (active)
        },
        // Secondary Color (Energy + Collaboration) - Gentle Lavender
        secondary: {
          50: '#F3F1FC',
          100: '#E7E3F9',
          200: '#CFC7F3',
          300: '#B7ABED',
          400: '#9B8AE8', // Main secondary
          500: '#B5A8F0', // Light (hover)
          600: '#7D6BC4', // Dark (active)
        },
        // Accent Color (Progress/Learning) - Fresh Green
        accent: {
          50: '#E8F8ED',
          100: '#D1F1DB',
          200: '#A3E3B7',
          300: '#75D593',
          400: '#4ECB71', // Main accent
          500: '#6DD88A', // Light (hover)
          600: '#3BA85A', // Dark (active)
        },
        // Neutral Grays
        neutral: {
          light: '#FAFAFA',
          medium: '#6B7280',
          dark: '#1F2937',
          border: '#E5E7EB',
        },
        // Dark Mode
        dark: {
          bg: '#0B0B0D',
          surface: '#1A1A1C',
          text: '#F9FAFB',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '44px', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '36px', fontWeight: '500' }],
        'h4': ['24px', { lineHeight: '32px', fontWeight: '500' }],
        'h5': ['20px', { lineHeight: '28px', fontWeight: '500' }],
        'h6': ['18px', { lineHeight: '26px', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '28px', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 4px 12px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'card': '16px',
        'input': '12px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-up-delayed': 'fadeInUp 0.6s ease-out 0.2s',
        'fade-in-up-delayed-2': 'fadeInUp 0.6s ease-out 0.4s',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
