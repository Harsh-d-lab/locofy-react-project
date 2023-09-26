/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#2b262d",
          "200": "rgba(0, 0, 0, 0.7)",
        },
        orange: {
          "100": "#ffb504",
          "200": "#feb005",
        },
        chocolate: "#d05a04",
        gold: "#ffc000",
        forestgreen: "#1f8435",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "11xl": "30px",
        mini: "15px",
      },
    },
    fontSize: {
      xl: "20px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
