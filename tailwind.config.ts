import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: "var(--surface)",
          raised: "var(--surface-raised)",
          border: "var(--surface-border)",
        },
        accent: {
          DEFAULT: "#2F7DFF",
          hover: "#1B6AE5",
          muted: "rgba(47, 125, 255, 0.12)",
          subtle: "rgba(47, 125, 255, 0.06)",
          glow: "rgba(47, 125, 255, 0.35)",
        },
        electric: {
          50: "#EEF5FF",
          100: "#E0ECFF",
          200: "#B9D5FF",
          300: "#7EACFF",
          400: "#3D7EFF",
          500: "#2F7DFF",
          600: "#175CE6",
          700: "#1347BF",
          800: "#143C99",
          900: "#153578",
        },
        dark: {
          950: "#07070A",
          900: "#0D0E15",
          850: "#12141F",
          800: "#181A29",
          700: "#24273C",
          600: "#383D58",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["var(--font-display)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        acrylic: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
        "acrylic-light": "0 8px 30px rgba(0, 0, 0, 0.06)",
        glow: "0 0 40px -10px rgba(47, 125, 255, 0.4)",
        "glow-lg": "0 0 80px -15px rgba(47, 125, 255, 0.5)",
        elevation: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "radar-ping": "radar 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        radar: {
          "75%, 100%": {
            transform: "scale(2.2)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
