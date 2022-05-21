module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#55b060",
        sidebar: "#08275A",
        light: "#f0f7ff",
        hover: "#143261",
        tablehead: "#2384F5",
        tablebody: "#E8F3FF",
        tableregister: "#21BB14",
      },
    },
  },
  plugins: [],
};
