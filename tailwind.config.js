/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b8070a",
        secondary: "#050402",
        text: "#050505",
        bgGray: "#f1f2f4",
      },
    },
  },
  plugins: [],
};
