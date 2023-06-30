/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: {
        DEFAULT: "#599BFF",
        darkest: "#061A38",
        dark: "#23467C",
        medium: "#638BC8",
        light: "#D9E6FA",
        lightest: "#F4F8FD",
      },
      red: "#e33232",
      black: "#000000",
      white: "#ffffff",
      gray: {
        dark: "#414141",
        medium: "#999999",
        light: "#CCCCCC",
        lightest: "#F7F7F7",
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "32px"],
      xl: ["24px", "32px"],
      "2xl": ["32px", "36px"],
      "3xl": ["48px", "64px"],
    },
    extend: {}
  },
  plugins: []
}
