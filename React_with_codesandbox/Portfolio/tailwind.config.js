/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ssm: "355px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink .9s infinite",
      },
    },
  },
  plugins: [],
};
