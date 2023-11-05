/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        kaushan: ["Kaushan Script", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
