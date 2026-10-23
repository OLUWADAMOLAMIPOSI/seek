import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
          background: "hsl(var(--background) / <alpha-value>)",
          foreground: "hsl(var(--foreground) / <alpha-value>)",
          primary: "hsl(var(--primary) / <alpha-value>)",
          border: "hsl(var(--border) / <alpha-value>)",
          ring: "hsl(var(--ring) / <alpha-value>)",
          "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
          paper: "#F3F6F6",
          ink: "#12263A",
          brand: "#1F4E5F",
          mist: "#E3EBEC",
          sage: "#8DB8AB",
          muted: "#5B6E7C",
      },
      fontFamily: { sans: ["var(--font-main)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
