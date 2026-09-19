import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1E33",
          50: "#EAF0F6",
          100: "#D2E0EC",
          700: "#132C46",
          900: "#0B1E33",
          950: "#071526",
        },
        offwhite: "#FFFFFF",
        graphite: "#3A3F44",
        eublue: "#1F4E8C",
        // Canadian red — now the dominant accent color across the site.
        accent: {
          DEFAULT: "#D52B1E",
          600: "#B82217",
          700: "#961C13",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1360px",
      },
    },
  },
  plugins: [],
};

export default config;
