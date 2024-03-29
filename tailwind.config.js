/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif']
      }
    }
  },
  /* eslint-env node */
  plugins: [require("daisyui")],
}

