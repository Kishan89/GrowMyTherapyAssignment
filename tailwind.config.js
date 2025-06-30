// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#4a4a32",
      },
      fontFamily: {
        lora: ["var(--font-lora)", "serif"],
      },
    },
  },
  plugins: [],
};
