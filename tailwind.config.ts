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
        brand: {
          50: "#f4f7fb",
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
        accent: {
          DEFAULT: "#2563eb",
          soft: "#eff6ff",
          dark: "#1d4ed8",
        },
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
          DEFAULT: "#111827",
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
          DEFAULT: "#F7F4EF",
          50:  "#FDFCFA",
          100: "#F7F4EF",
          200: "#EDE8DF",
          300: "#DDD5C8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
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
        "gold-gradient": "linear-gradient(135deg, #C9943A 0%, #E2AE4F 50%, #B8832E 100%)",
        "hero-gradient": "linear-gradient(160deg, #0A0E1A 0%, #0F1629 40%, #152040 100%)",
        "city-krasnodar": "linear-gradient(135deg, #1A2744 0%, #243460 50%, #1E2D55 100%)",
        "city-gelendzhik": "linear-gradient(135deg, #0D3B52 0%, #145C7A 50%, #0F4D6B 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(10,14,26,0) 50%, rgba(10,14,26,0.85) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
