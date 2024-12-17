import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: "var(--font-plus-jakarta-sans)",
      },
      fontSize: {
        19: "1.1875rem",
      },
      spacing: {
        12.5: "3.125rem",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      translate: {
        "eye-top": "-15px",
        "eye-bottom": "15px",
      },
    },
  },
  plugins: [],
};
export default config;
