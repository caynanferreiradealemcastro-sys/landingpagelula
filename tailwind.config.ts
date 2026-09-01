import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        paper: "hsl(var(--paper))",
        forest: "hsl(var(--forest))",
        accent: "hsl(var(--accent))",
        gold: "hsl(var(--gold))",
        primary: "hsl(var(--primary))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
      },
      fontFamily: {
        display: ["'Instrument Serif'", "serif"],
        body: ["'Barlow'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
