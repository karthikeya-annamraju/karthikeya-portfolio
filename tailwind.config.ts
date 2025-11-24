import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sun-inspired color palette
        primary: {
          50: '#fffbeb',   // Lightest cream
          100: '#fef3c7',  // Light cream
          200: '#fde68a',  // Pale yellow
          300: '#fcd34d',  // Light yellow
          400: '#fbbf24',  // Yellow
          500: '#f59e0b',  // Amber
          600: '#d97706',  // Dark amber
          700: '#b45309',  // Orange brown
          800: '#92400e',  // Dark orange
          900: '#78350f',  // Deep brown
        },
        sunset: {
          orange: '#FF6B35',
          coral: '#FF8C42',
          peach: '#FFA552',
          cream: '#FFEAA7',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
