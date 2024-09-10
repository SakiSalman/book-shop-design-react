/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b8070a",
        secondary: "#050402",
        text: "#050505",
        box_shadows: "0 4px 20px #ccc",
      },
    },
  },
  plugins: [],
};
