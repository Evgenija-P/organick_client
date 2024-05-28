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
        yellow: "#EFD372",
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
        hero: "url('/images/hero.png')",
        about: "url('/images/home/about.png')",
        review: "url('/images/home/reviews.png')",
        friendly: "url('/images/home/whoWe.png')",
        subscribe: "url('/images/subscribe.png')",
        notFound: "url('/images/notFound/bg_not_found.png')",
        contactLocation: "url('/images/contact/location.png')",
        videoSection: "url('/images/services/video-section.png')",
      },
      boxShadow: {
        btnMain: "0px 0px 16px 0px rgba(39,76,91,1)",
        item: "0px 0px 13px 0px rgba(212,212,212)",
        itemHover: "0px 0px 13px 0px rgba(39,76,91,0.5)",
        btnYellow: "0px 0px 22px 0px rgba(239,211,114,1)",
        contactItem: "0 4px 4px rgba(0,0,0,0.25)",
      },
      dropShadow: {
        news: "0 20px 35px rgba(167,167,167,0.25)",
        team: "0 29px 44px rgba(150,150,150,0.25)",
        contactItem: "0 4px 4px rgba(0,0,0,0.25)",
        newsTitle: "0 14px 36px rgba(204,204,204,0.25)",
      },
      gridTemplateColumns: {
        cart: "800px 400px",
        cartItem: "250px 65px 90px 70px 35px",
      },
    },
  },
  plugins: [],
};
