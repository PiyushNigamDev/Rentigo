/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-blue-600","bg-blue-700","text-blue-600",
    "bg-green-600","bg-green-700","text-green-600",
    "bg-red-600","bg-red-700","text-red-600",
    "bg-purple-600","bg-purple-700","text-purple-600"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
