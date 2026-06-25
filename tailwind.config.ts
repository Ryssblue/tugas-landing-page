import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        secondary: "#3B82F6",
        accent: "#F59E0B",
        dark: "#0F172A",
        light: "#F8FAFC"
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "system-ui", "sans-serif"],
        script: ["Caveat", "cursive"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(15, 23, 42, 0.12)",
        soft: "0 16px 45px rgba(15, 23, 42, 0.09)",
        glow: "0 18px 55px rgba(14, 165, 233, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
