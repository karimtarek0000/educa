/** @type {import('tailwindcss').Config} */

const withOpacity = (colorVar) => {
  return ({ opacityValue }) => {
    if (opacityValue) return `rgba(var(--${colorVar}),${opacityValue})`;
    return `rgba(var(--${colorVar}))`;
  };
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: withOpacity("color-primary"),
        secondary: withOpacity("color-secondary"),
        third: withOpacity("color-third"),
        fourth: withOpacity("color-fifth"),
        fifth: withOpacity("color-sixth"),
        sixth: withOpacity("color-eighth"),
        icon: {
          one: "var(--color-icon-one)",
          two: "var(--color-icon-two)",
          three: "var(--color-icon-three)",
        },
      },
      fontFamily: "var(--font-poppins)",
      fontSize: {
        11: "0.6875rem",
        12: "0.75rem",
        14: "0.875rem",
        15: "0.9375rem",
        18: "1.125rem",
        24: "1.5rem",
        28: "1.75rem",
        30: "1.875rem",
        42: "2.625rem",
        85: "5.3125rem",
        100: "6.25rem",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
      colors: {
        primary: withOpacity("color-fourth"),
        secondary: withOpacity("color-fifth"),
        seventh: withOpacity("color-seventh"),
      },
      borderColor: {
        primary: 'var("--color-sixth")',
      },
      gridTemplateColumns: {},
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "90rem", // 1440px
      },
    },
  },
  plugins: [],
};
