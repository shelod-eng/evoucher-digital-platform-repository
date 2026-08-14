import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        evoucher: {
          ink: '#1e293b',
          navy: '#083b75',
          blue: '#1457b7',
          cyan: '#20b2aa',
          sky: '#e8f3ff',
          mist: '#fafbfc',
          line: '#e2e8f0',
        },
      },
      boxShadow: {
        enterprise: '0 16px 40px rgba(15, 23, 42, 0.08)',
        card: '0 8px 24px rgba(15, 23, 42, 0.06)',
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'Inter', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
