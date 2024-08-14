/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      screens: {
        "2xl": "768px",
      },
    },
    fontFamily: {
      Vibur: ["Vibur"],
      Zenkaku: ["ZenKakuGothicNew"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
