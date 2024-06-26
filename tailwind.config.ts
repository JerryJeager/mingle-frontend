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
        "yellow": "#fb8500",
        "dark1": "#1e1e1e",
        "dark2": "#1e1f22",
        "chatBg": "#2b2d31",
        "chatBg2": "#494949",
        "offline": "#f7c213",
        "online": "#62c554",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dark-grid": "url(../public/images/darkgrid.jpg)",
        "dark-grid2": "url(../public/images/darkgrid.jpg)",
        "dark-grid3": "url(../public/images/bg1.jpg)",
        "dark-grid4": "url(../public/images/bg2.jpg)",
        "dark-grid5": "url(../public/images/bg3.jpg)",
        "dark-grid6": "url(../public/images/bg4.jpg)",
      },
    },
  },
  plugins: [],
};
export default config;
