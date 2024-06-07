/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "ht-dark-purple": "#691AFF",
        "ht-purple": "#635BFF",
        "ht-ligth-purple": "#F0E8FF",
        "ht-greem": "#36E28F",
        "ht-ligth-greem": "#50FEAA",
        "ht-black": "#070723",
        "ht-lighter-purple": "#D1B8FF",
        "ht-lighter-gray": "#F6F9FC",
        "ht-gray": "#404968",
      },
      width: {
        container: "90%",
      },
      maxWidth: {
        container: 1280,
      },
      fontFamily: {
        "dm-sans": '"DM Sans", sans-serif',
        "rtk-sans": '"Rethink Sans", sans-serif',
      },
    },
  },
  plugins: [],
};
