import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Custom color palette
      colors: {
        accent: {
          DEFAULT: '#00d4aa',
          dark: '#00b890',
          light: '#33ddb8',
        },
        accent2: {
          DEFAULT: '#0099ff',
          dark: '#0077cc',
          light: '#33adff',
        },
        bg: {
          primary: '#090b10',
          secondary: '#0d1117',
          tertiary: '#131920',
        },
      },
      // Custom fonts
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      // Custom animations
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-reverse': 'float 10s ease-in-out infinite reverse',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
        'pulse-ring': 'pulseRing 2s infinite',
        'gradient': 'gradientShift 4s ease infinite',
        'scan': 'scanLine 3s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(0, 212, 170, 0.4)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 15px rgba(0, 212, 170, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(0, 212, 170, 0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scanLine: {
          '0%': { top: '-100%' },
          '100%': { top: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      // Gradient backgrounds
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #00d4aa 0%, #0099ff 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
      },
      // Box shadows
      boxShadow: {
        'accent': '0 0 30px rgba(0, 212, 170, 0.15)',
        'accent-lg': '0 0 60px rgba(0, 212, 170, 0.25)',
        'accent2': '0 0 30px rgba(0, 153, 255, 0.15)',
      },
      // Border radius
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}

export default config
