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
        ink: {
          DEFAULT: "#0A0C12",
          50:  "#F9FAFB",
          100: "#F0F2F5",
          200: "#D8DCE6",
          300: "#B0B8CC",
          400: "#7A8499",
          500: "#515B72",
          600: "#374050",
          700: "#242C3D",
          800: "#161C2B",
          900: "#0D1120",
          950: "#070A14",
        },
        cream: {
          DEFAULT: "#F5F2EC",
          50:  "#FDFCFA",
          100: "#F5F2EC",
          200: "#EAE4D8",
          300: "#D9D0BF",
        },
        teal: {
          50:  "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          DEFAULT: "#0F766E",
          600: "#0F766E",
          700: "#0D6B61",
          800: "#0A5249",
          900: "#134E4A",
        },
      },
      fontFamily: {
        sans:  ["var(--font-josefin)", "system-ui", "sans-serif"],
        serif: ["var(--font-cinzel)",  "Georgia",   "serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        hero: ["clamp(2.8rem,7vw,5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
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
        "gold-gradient":    "linear-gradient(135deg, #C9943A 0%, #E2AE4F 50%, #B8832E 100%)",
        "hero-gradient":    "linear-gradient(160deg, #070A14 0%, #0D1120 40%, #0F1629 100%)",
        "teal-gradient":    "linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)",
        "city-krasnodar":   "linear-gradient(135deg, #0D1120 0%, #161C2B 100%)",
        "city-gelendzhik":  "linear-gradient(135deg, #0A1A1F 0%, #0F2D35 100%)",
        "card-gradient":    "linear-gradient(180deg, rgba(7,10,20,0) 40%, rgba(7,10,20,0.92) 100%)",
        "section-dark":     "linear-gradient(180deg, #0A0C12 0%, #0D1120 100%)",
      },
      animation: {
        "fade-up":   "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":   "fadeIn 0.5s ease-out forwards",
        "slide-up":  "slideUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(48px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        "gold-glow":  "0 0 40px -8px rgba(184,131,46,0.45)",
        "gold-glow-lg": "0 0 80px -12px rgba(184,131,46,0.35)",
        "card-hover": "0 24px 80px -12px rgba(0,0,0,0.6)",
        "elevated":   "0 8px 40px -8px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
