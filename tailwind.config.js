/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc143c', // Crimson primary color
        secondary: '#8b0000', // Darker crimson for secondary elements
        accent: '#ff6347', // Lighter crimson for accents
        background: '#2f4f4f', // Dark slate gray for background
        'background-dark': '#1a202c', // Even darker background for dark mode
        'text-light': '#ffffff', // White text for dark backgrounds
        'text-dark': '#000000', // Black text for light backgrounds
        'pink50': '#ffe4e1', // Light pink color
        'pink100': '#ffccd5', // Slightly darker pink color
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}