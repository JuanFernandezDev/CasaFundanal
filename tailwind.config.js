/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        principal1: "#3C3633", // Marron oscuro
        principal2: "#EAEAEA", // Verde militar
        fondo1: "#E0CCBE", // Peach
        fondo2: "#d8ccc3", // piedra ecdfd5
        letra: "#eeedeb", // Gris
        // ... otros colores personalizados
      },
      screens: {
        mobile: "426px",
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1025px",
        // => @media (min-width: 1024px) { ... }
        tablet: "924px",
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
