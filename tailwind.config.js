/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custome-dark-1": "0 1px 5px 2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
