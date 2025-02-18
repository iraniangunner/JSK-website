import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "footer-pattern": "url('../../../public/images/footer1.jpg')",
        "contact-pattern": "url('../../../public/images/contact-banner3.jpg')",
        "projects-pattern": "url('../../../public/images/contact-banner2.jpg')",
        "section-2-pattern": "url('../../../public/images/section-2.jpg')",
      },

      keyframes: {
        slideInWithDamping: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "60%": { transform: "translateY(5px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOutWithDamping: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-50px)", opacity: "0" },
        },
      },
      animation: {
        slideIn:
          "slideInWithDamping 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        slideOut:
          "slideOutWithDamping 0.5s cubic-bezier(0.3, 1.2, 0.5, 1) forwards",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
export default config;
