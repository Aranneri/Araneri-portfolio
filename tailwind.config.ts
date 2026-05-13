import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        palm: {
          950: "#0b1d16",
          900: "#0f241b",
          800: "#163325",
          700: "#1c3f2e",
          600: "#245038",
        },
        forest: {
          900: "#13271f",
          800: "#1b3026",
        },
        earth: {
          700: "#4f3820",
          600: "#6b4b2a",
          500: "#835c35",
        },
        sand: {
          200: "#e6dcc4",
          300: "#d9c7a0",
        },
        gold: {
          500: "#b8944b",
        },
        emerald: {
          500: "#1f8a6b",
        },
        butterfly: {
          500: "#3a7ca5",
        },
        amber: {
          500: "#d28c2f",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 10px 30px rgba(10, 20, 16, 0.25)",
      },
      backgroundImage: {
        "palm-glow":
          "radial-gradient(circle at top, rgba(31, 138, 107, 0.18), transparent 55%)",
        "sand-fade":
          "linear-gradient(135deg, rgba(217, 199, 160, 0.16), rgba(31, 138, 107, 0.08))",
      },
    },
  },
  plugins: [],
};

export default config;
