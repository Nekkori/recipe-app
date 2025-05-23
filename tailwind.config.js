/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9eb',
          100: '#dcefcc',
          200: '#bde0a2',
          300: '#9ad079',
          400: '#7dc152',
          500: '#64af3c', // Base green
          600: '#4c8e2e',
          700: '#3d6f25',
          800: '#355721',
          900: '#2e4a1e',
        },
        accent: {
          yellow: {
            light: '#fff8e1',
            DEFAULT: '#ffd54f',
            dark: '#ffb300',
          },
          green: {
            light: '#e8f5e9',
            DEFAULT: '#66bb6a',
            dark: '#43a047',
          },
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        white: "#ffffff",
        black: "#000000",
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'soft-md': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'layered': '0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right bottom, #e0f7fa, #f0f4c3, #fffde7)',
      },
    },
  },
  plugins: [],
} 