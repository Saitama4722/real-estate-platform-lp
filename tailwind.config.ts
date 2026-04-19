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
        // Accent — slate blue (Christie's/Sotheby's register)
        accent: {
          DEFAULT: "#1B3A5C",
          50:  "#EEF3F8",
          100: "#D4E2EF",
          200: "#A9C5DF",
          300: "#7EA8CF",
          400: "#3D6E9E",
          500: "#1B3A5C",
          600: "#163150",
          700: "#112743",
          800: "#0C1D33",
          900: "#070E1A",
          dark: "#112743",
          light: "#2A5A8C",
        },
        // Surface / neutral — warm whites and grays
        stone: {
          DEFAULT: "#F8F6F3",
          50:  "#FFFFFF",
          100: "#F8F6F3",
          200: "#EDE8E0",
          300: "#DDD6CC",
          400: "#C4BAB0",
          500: "#9C9188",
          600: "#736B62",
          700: "#4A4540",
          800: "#2E2A26",
          900: "#1C1C1E",
          950: "#0F0F10",
        },
        // Keep gold for backwards compat (used in Contact.tsx class refs)
        gold: {
          50:  "#FDF8EF",
          100: "#FAF0DA",
          200: "#F4DFB0",
          300: "#ECC87D",
          400: "#E2AE4F",
          500: "#C9943A",
          DEFAULT: "#B8832E",
          600: "#B8832E",
          700: "#9A6A22",
          800: "#7D5219",
          900: "#5C3B10",
        },
        // Keep brand for Contact.tsx (uses brand-* classes — DO NOT REMOVE)
        brand: {
          50:  "#f4f7fb",
          100: "#e8eef6",
          200: "#cfdcea",
          300: "#a7bdd4",
          400: "#7a9ab8",
          500: "#567aa0",
          600: "#436184",
          700: "#374f6a",
          800: "#304258",
          900: "#2b394c",
          950: "#1b2433",
        },
        // Keep ink for any surviving references
        ink: {
          DEFAULT: "#1C1C1E",
          50:  "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        cream: {
          DEFAULT: "#F8F6F3",
          50:  "#FFFFFF",
          100: "#F8F6F3",
          200: "#EDE8E0",
          300: "#DDD6CC",
        },
      },
      fontFamily: {
        sans:  ["var(--font-inter)",      "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia",   "serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
      backgroundImage: {
        // Accent gradient for CTA buttons
        "accent-gradient":  "linear-gradient(135deg, #1B3A5C 0%, #2A5A8C 100%)",
        // Dark overlays for city cards / hero
        "card-gradient":    "linear-gradient(180deg, rgba(28,28,30,0) 40%, rgba(28,28,30,0.90) 100%)",
        "hero-overlay":     "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 55%, rgba(255,255,255,0) 100%)",
        // Section tones
        "warm-white":       "linear-gradient(180deg, #FFFFFF 0%, #F8F6F3 100%)",
      },
      animation: {
        "fade-up":  "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":  "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        "card":       "0 1px 3px rgba(28,28,30,0.06), 0 4px 16px rgba(28,28,30,0.06)",
        "card-hover": "0 4px 24px rgba(28,28,30,0.12), 0 16px 48px rgba(28,28,30,0.08)",
        "elevated":   "0 8px 40px rgba(28,28,30,0.10)",
        "panel":      "0 24px 80px rgba(28,28,30,0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
