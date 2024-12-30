import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        orange: "#FF8500",
        white: "#FFFFFF",
        "greyish-white": "#FAF8F5",
        beige: "#F2E7DA",
        "medium-shade": "#A89887",
        brown: "#736250",
        "dark-brown": "#332414",
        lightest: "#CCC8C4",
        dark: "#3B3835",
      },
      backgroundImage: {
        "gradient-orange": "linear-gradient(to right, #FF8500, #CC6102)"
      },
      fontFamily: {
        raleway: ['var(--font-raleway)'], // Updated to use the CSS variable
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '75%': { transform: 'rotate(-3deg)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;