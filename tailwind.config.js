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
        lite_green: "#EFF6F1",
        lite_grey: "#B8B8B8",
        grey: "#525C60",
        bg: "F1EFF0",
        borderColor: "#DEDDDD",
        orange: "#FFA858",
      },
      backgroundImage: {
        hero: "url('../images/hero.png')",
        about: "url('../images/home/about.png')",
      },
      boxShadow: {
        btnMain: "4px 4px 5px 2px rgba(212,212,212)",
        item: "0px 0px 13px 0px rgba(212,212,212)",
        itemHover: "0px 0px 13px 0px rgba(39,76,91,0.5)",
      },
    },
  },
  plugins: [],
};
