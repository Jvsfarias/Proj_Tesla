/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }~

      max800: { max: "800px" },
      // => @media (max-width: 768px) { ... }

      max700: { max: "700px" },
      // => @media (max-width: 700px) { ... }

      max500: { max: "500px" },
      // => @media (max-width: 500px) { ... }

      max350: { max: "350px" },
      // => @media (max-width: 350px) { ... }
    },
  },
  plugins: [],
};
