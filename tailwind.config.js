// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       gridTemplateColumns: {
//         // Adds a new grid template named 'custom'
//         custom: "repeat(3, minmax(0, 1fr))", // 3 equal-width columns
//       },
//       columns: {
//         "4xs": "14rem",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;

// import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modals/**/*.{js,ts,jsx,tsx,mdx}",
    "./assests/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          700: "#AE003A",
          500: "#B63661",
          300: "#AB4869",
          200: "#AB5B75",
          100: "#B07287",
        },
        secondary: {
          700: "#351f7b",
          500: "#42317a",
          300: "#51447d",
          200: "#635b7f",
          100: "#6a647e",
        },
        tertiary: {
          700: "#c05a09",
          500: "#f57f20",
          300: "#f57f20",
          200: "#f79b51",
          100: "#f8a969",
        },
        dark: {
          100: "#1e1f1f",
          200: "#323434",
          300: "#464949",
          400: "#5A5E5E",
          500: "#787D7D",
        },
        light: {
          900: "#FFFFFF",
          800: "#BBB4B4",
          850: "#A89F9F",
          700: "#8B7E7E",
          500: "#766B6B",
          400: "#605757",
        },
        "accent-blue": "#1DA1F2",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
