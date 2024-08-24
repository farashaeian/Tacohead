import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: 'rgba(255, 200, 87, 0.3)',
          200: 'rgba(255, 200, 87, 1)',
        },
        secondary: {
          100: 'rgba(50, 48, 49, 0.2)',
          200: '#rgba(50, 48, 49, 1)'
        },
        red: '#DB3A34',
        'white-state': {
          100: 'rgba(255, 255, 255, 0.7)',
        }
      },
    },
  },
  plugins: [],
};
export default config;
