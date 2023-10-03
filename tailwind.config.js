/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#d5fbf1",
          foreground: "#d7fbf1"
        },
        secondary: "#e9e9eb",
        destractive: "#c3814b",
        danger: "#ff5e24",
        success: "#008001",
      }
    },
  },
  plugins: [],
}
