/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "bh-primary": "#4A3AFF",
        "bh-secondary": "#F3F1FF",
        "bh-neutrals-100": "#FFFFFF",
        "bh-neutrals-200": "#D9DBE9",
        "bh-neutrals-300": "#EFF0F6",
        "bh-neutrals-400": "#D9DBE9",
        "bh-neutrals-500": "#A0A3BD",
        "bh-neutrals-600": "#6E7191",
        "bh-neutrals-700": "#4E4B66",
        "bh-neutrals-800": "#170F49"
      },
      boxShadow: {
        grid: "0px 4px 10px 1px rgba(46, 29, 171, 0.08)"
      }
    },
  },
  plugins: [],
}
