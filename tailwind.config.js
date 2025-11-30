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
        primary: {
          50: '#f0f3f0',
          100: '#d9e0d9',
          200: '#b8c5b8',
          300: '#8fa28f',
          400: '#6b7f6b',
          500: '#556855',
          600: '#4A674A', // Verde Olivo Livoo (Color Principal)
          700: '#3D533D',
          800: '#344334',
          900: '#2a362a',
        },
      },
    },
  },
  plugins: [],
}
