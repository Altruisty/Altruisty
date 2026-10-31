import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#2F4A9F',
          mid: '#4A7DB8',
          cyan: '#72D0E3',
          charcoal: '#5B5B5B',
          ice: '#F4F9FD',
          sky: '#E8F4FA',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'Urbanist', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #2F4A9F 0%, #4A7DB8 50%, #72D0E3 100%)',
        'brand-gradient-vertical': 'linear-gradient(180deg, #2F4A9F 0%, #4A7DB8 50%, #72D0E3 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(47,74,159,0.06) 0%, rgba(74,125,184,0.08) 50%, rgba(114,208,227,0.1) 100%)',
        'mesh-hero': 'radial-gradient(at 10% 20%, rgba(114,208,227,0.22) 0px, transparent 50%), radial-gradient(at 90% 10%, rgba(74,125,184,0.18) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(47,74,159,0.14) 0px, transparent 50%)',
      },
      boxShadow: {
        'glass-sm': '0 4px 20px -2px rgba(47, 74, 159, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'glass-md': '0 12px 32px -4px rgba(47, 74, 159, 0.08), 0 4px 12px -2px rgba(114, 208, 227, 0.08)',
        'glass-lg': '0 20px 48px -6px rgba(47, 74, 159, 0.12), 0 8px 24px -4px rgba(114, 208, 227, 0.14)',
        'glow-cyan': '0 0 25px rgba(114, 208, 227, 0.45)',
        'glow-blue': '0 0 30px rgba(47, 74, 159, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(14px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.98)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

