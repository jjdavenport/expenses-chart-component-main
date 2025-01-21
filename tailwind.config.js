import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector"],
  content: {
    files: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    extract,
  },
  theme: {
    screens,
    extend: {
      colors: {
        softRed: "hsl(10, 79%, 65%)",
        cyan: "hsl(186, 34%, 60%)",
        darkBrown: "hsl(25, 47%, 15%)",
        mediumBrown: "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        paleOrange: "hsl(33, 100%, 98%)",
      },
      fontFamily: {
        custom: ["dm sans", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), fluid],
};
