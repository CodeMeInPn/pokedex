/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      primary: "#DC0AD2",
      bug: "#A7B723",
      dark: "#75574C",
      dragon: "#7037FF",
      electric: "#F9CF30",
      fairy: "#E69EAC",
      fighting: "#C12239",
      fire: "#F57D31",
      flying: "#A891EC",
      ghost: "#70559B",
      grass: "#74CB48",
      ground: "#DEC16B",
      ice: "#9AD6DF",
      normal: "#AAA67F",
      poison: "#A43E9E",
      psychic: "#FB5584",
      rock: "#B69E31",
      steel: "#B7B9D0",
      water: "#6493EB",
      white: "#FFFFFF",
    },
    extend: {
      colors: {
        primary: "#DC0A2D",
        gray: {
          100: "#EFEFEF",
          200: "#E0E0E0",
          300: "#666666",
          400: "#212121",
          500: "#1D1D1D",
        },
      },
      boxShadow: {
        inner: "inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25)",
        outer: "0px 1px 3px 1px rgba(0, 0, 0, 0.2)",
      },
    },
  },
};
