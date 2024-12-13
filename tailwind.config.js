/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('assets/bg-Image/hero-pattern.webp')",
      },
    },
  },
  plugins: [],
};