/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"],
 theme: {
  colors: {
   "ht-purple": "#635BFF",
   "ht-ligth-purple": "#F0E8FF",
   "ht-dark-greem": "#36E28F",
   "ht-ligth-greem": "#50FEAA",
   "ht-black": "#070723",
  },
  width: {
   container: "80%",
  },
  maxWidth: {
   container: 1280,
  },
  fontFamily: {
   "dm-sans": '"DM Sans", sans-serif',
  },
  extend: {},
 },
 plugins: [],
};
