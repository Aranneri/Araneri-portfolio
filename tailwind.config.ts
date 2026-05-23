import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2D4F3A",
          secondary: "#52796F",
          brown: "#6B4F3A",
          "soft-brown": "#A67C52",
          accent: "#D4A373",
          bg: "#1B2A21",
          text: "#F4F1EA",
        },
        palm: {
          950: "#1B2A21", // Background Dark
          900: "#2D4F3A", // Primary Green
          800: "#52796F", // Secondary Green
          700: "#52796F",
          600: "#52796F",
        },
        forest: {
          900: "#1B2A21", // Background Dark
          800: "#2D4F3A", // Primary Green
        },
        earth: {
          700: "#6B4F3A", // Primary Brown
          600: "#6B4F3A",
          500: "#A67C52", // Soft Brown
        },
        sand: {
          200: "#F4F1EA", // Text Main
          300: "#A67C52", // Soft Brown
        },
        gold: {
          500: "#D4A373", // Accent Gold
        },
        emerald: {
          500: "#52796F", // Secondary Green (used as accent in old design)
        },
        butterfly: {
          500: "#A67C52", // Soft Brown
        },
        amber: {
          500: "#D4A373", // Accent Gold
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        logo: ["var(--font-logo)", "serif"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "palm-glow": "radial-gradient(circle at top, rgba(45, 79, 58, 0.25), transparent 55%)",
        "sand-fade": "linear-gradient(135deg, rgba(82, 121, 111, 0.15), rgba(27, 42, 33, 0.08))",
      },
    },
  },
  plugins: [],
};

export default config;
