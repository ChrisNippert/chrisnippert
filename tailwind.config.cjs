/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,md,mdx,js,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
              DEFAULT: '#0C1118',
              soft: '#111923',
              card: '#151E29'
        },
        text: {
              DEFAULT: '#EEF3F9',
              muted: '#AAB7C7'
        },
        accent: {
              DEFAULT: '#7FA6E8',
              soft: '#B6CDF8'
        },
            border: 'rgba(182,205,248,0.16)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
