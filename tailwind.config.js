/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        principal1: "#3C3633", // Marron oscuro
        principal2: "#948c86", // Verde militar
        fondo1: "#E0CCBE", // Peach
        fondo2: "#d8ccc3", // piedra ecdfd5
        letra: "#eeedeb", // Gris
        // ... otros colores personalizados
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
