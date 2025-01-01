/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(to bottom, #000, #071E18 35%, #208A65 67%, #35FB88 85%)",
      },
    },
  },
  plugins: [],
}