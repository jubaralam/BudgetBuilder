/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6500", // For buttons, highlights
        dark: "#0B192C", // For main background
        section: "#1E3E62", // For cards, navbars
        base: "#000000", // For default text
      },
    },
  },
  plugins: [],
};
