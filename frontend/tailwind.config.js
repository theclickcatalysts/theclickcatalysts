/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        primary: ['"Poppins"', "sans-serif"],
        secondary: ["Tinos", 'serif'],
        logoFont: ['"Orbitron"', "sans-serif"],
        headingFont: ['"Cormorant"', "serif"],
      },
      colors: {
        secoundary: "#10323c",
        primary: "#2c85a0",
        btnColor: "#216478",
        btnHover: "#1b5364",
        borderClr: "#374151",
        textColor: "#003366",
        grSt: "#1a2950",
        grEnd: "#33abcc",
        boxGSt: "#9fb1e0",
        boxGEnd: "#47b3d1",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      transform: ['group-hover'],
      rotate: {
        'x-180': '180deg',
      },
    },
  },

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
