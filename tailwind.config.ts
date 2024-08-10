import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d7d0c7",
        secondary: "#21130b",
        tertiary: "#c1bca3",
        "brown-color": "var(--brown-color)",
        "light-brown": "var(--lightBrown)",
        toned: "var(--toned)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
