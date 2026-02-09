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
        accent: "#FF6B35",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Body typography scale
        base: ["1rem", { lineHeight: "1.75", letterSpacing: "0" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75", letterSpacing: "0" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75", letterSpacing: "0" }], // 20px
        // Heading typography scale
        "2xl": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.02em" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.02em" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }], // 36px
        "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.03em" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.04em" }], // 72px
      },
    },
  },
  plugins: [],
};

export default config;
