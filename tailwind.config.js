module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      title: ["Redressed", "sans-serif", "cursive"],
    },
    extend: {
      width: {
        shapel: "calc(45% - 50px)",
        shaper: "calc(70% + 80px)",
      },
      colors: {
        primary: "#070732",
        secondary: "#293A80",
        third: "#537EC5",
        contact: "#030F3F",
      },
      borderWidth: {
        330: "330px solid transparent",
        80: "80px",
      },
    },
  },
  plugins: [],
};
