import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: {
            DEFAULT: '#0a0e1a',
            50: '#0d1117',
            100: '#0f1520',
            200: '#131a2b',
            300: '#182035',
            400: '#1e2840',
            500: '#25324e',
          },
          pastel: {
            DEFAULT: '#bae6fd', // sky-200
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#cbd5e1', // slate-300
            500: '#94a3b8', // slate-400
          },
          highlight: {
            DEFAULT: '#0ea5e9', // sky-500
            50: '#38bdf8',  // sky-400
            100: '#0ea5e9', // sky-500
            200: '#0284c7', // sky-600
            300: '#06b6d4', // cyan-500
            400: '#8b5cf6', // violet-500 accent
            500: '#f472b6', // pink-400 accent
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
