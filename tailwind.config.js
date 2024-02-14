/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#274C5B",
        green: "#7EB693",
        yellow: "#274C5B",
        lite_gray: "#D4D4D4",
        lite_pink: "#F9F8F8",
        lite_grren: "#EFF6F1",
        grey: "#525C60",
        bg: "F1EFF0",
      },
      backgroundImage: {
        hero: "url('../images/hero.png')",
        about: "url('../images/home/about.png')",
      },
    },
  },
  plugins: [],
};
