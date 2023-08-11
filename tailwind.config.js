/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        30: "7.5rem",
        82: "20.5rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        90: "22.5rem",
        92: "23rem",
        94: "23.5rem",
        98: "24.5rem",
      },
      colors: {
        "mindpeers-sea-green": {
          light: "#e8f6f7",
          mid: "#73cbd0",
          dark: "#16A9B1",
        },
        "mindpeers-june-bud": {
          light: "#f8fbee",
          mid: "#d3e698",
          dark: "#B5D654",
        },
        dark: "#252525",
        "gray-150": "#F5F7FA",
        "ke-icon": "#11BA5D",
        "ke-icon-bg": "#EEFAF4",
        "btn-bg": "#0000FF",
        description: "#7f8a96",
      },
      borderWidth: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
