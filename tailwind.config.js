/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        primaryDark: "var(--primaryDark)",
        primaryMid: "var(--primaryMid)",
        primaryLight: "var(--primaryLight)",
        primaryLightest: "var(--primaryLightest)",
        secondaryDark: "var(--secondaryDark)",
        secondaryMid: "var(--secondaryMid)",
        secondaryLight: "var(--secondaryLight)",
        secondaryLightest: "var(--secondaryLightest)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        h1: [
          "72px",
          {
            lineHeight: "95%",
            letterSpacing: "-2%",
          },
        ],
        h2: [
          "45px",
          {
            lineHeight: "105%",
            letterSpacing: "-1%",
          },
        ],
        h3: [
          "36px",
          {
            lineHeight: "110%",
            letterSpacing: "-1%",
          },
        ],
        h4: [
          "29px",
          {
            lineHeight: "110%",
            letterSpacing: "0%",
          },
        ],
        h5: [
          "23px",
          {
            lineHeight: "120%",
            letterSpacing: "0%",
          },
        ],
        h6: [
          "19px",
          {
            lineHeight: "120%",
            letterSpacing: "0%",
          },
        ],
        p: [
          "15px",
          {
            lineHeight: "130%",
            letterSpacing: "0%",
          },
        ],
        tiny: [
          "13px",
          {
            lineHeight: "130%",
            letterSpacing: "0%",
          },
        ],
      },
    },
  },
  plugins: [],
};
