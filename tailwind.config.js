/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A", // Deep Slate (Main BG)
        surface: "#1E293B",     // Lighter Slate (Cards)
        primary: "#3B82F6",     // Vibrant Blue
        secondary: "#64748B",   // Muted Slate (Text)
        accent: "#8B5CF6",      // Purple Accent (Gradients)
        "accent-hover": "#7C3AED",
        text: "#F1F5F9",        // Off-white text
        "text-muted": "#94A3B8",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #3B82F6 0deg, #8B5CF6 180deg, #3B82F6 360deg)',
      },
      animation: {
        "blob": "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};