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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "success": "#C6F6D5",
        "error": "#FED7D7",
        "warning": "#FEEBC8",
        "info": "#BEE3F8",
      },
      spacing: {
        "nav-bar": '64px',
        "alert": '48px'
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
