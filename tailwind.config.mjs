/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D9B8E',
        'primary-dark': '#238A7E',
        accent: '#F7B731',
        alert: '#FF6B6B',
        bg: '#FAFBFC',
        text: '#2D3436',
        'text-light': '#636E72',
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
