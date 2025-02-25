/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    ".src/**/*.{vue,js,ts,jsx,tsx}", 
    "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust based on your project's structure
    "./public/index.html", // If your HTML is in public folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

