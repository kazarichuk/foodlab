/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#8c8c8c",
          "200": "#262626",
        },
        white: "#fff",
        "white-background": "#f7fcff",
        main: "#549ba7",
        secondary: "#8dbb54",
        "black-main": "#3e3f40",
      },
      fontFamily: {
        "secondary-text": "Rubik",
        inter: "Inter",
        "headline-large": "Montserrat",
      },
      borderRadius: {
        "5xs": "8px",
      },
    },
    fontSize: {
      sm: "14px",
      "mini-1": "14.1px",
      "4xs-5": "8.5px",
      "13xl": "32px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
