import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": 'url("/assets/home/desktop/image-hero.jpg")',
        "pattern-circles": 'url("/assets/home/desktop/pattern-circles.svg")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "button-primary": "#D87D4A",
        "button-secondary": "#FBAF85",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
