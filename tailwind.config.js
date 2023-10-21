/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: "Roboto Mono, monospace;", //So Tailwind will overwrite sans with roboto
    },
  },
  plugins: [],
};
