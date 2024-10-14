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
    fontFamily: {
      iransans: ["iran_sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "footer-pattern": "url('../../public/images/footer1.jpg')",
        "contact-pattern": "url('../../public/images/contact-banner3.jpg')",
        "projects-pattern": "url('../../public/images/contact-banner2.jpg')",
        "section-2-pattern": "url('../../public/images/section-2.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
export default config;
