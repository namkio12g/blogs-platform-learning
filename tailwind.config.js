/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "360px",
            sm: "576px",
            md: "960px",
            lg: "1440px",
        },
        extend: {
            colors: {
                "blue-text": "#040433",
                "theme-primary": "var(--theme-primary-color)",
                "theme-secondary": "var(--theme-secondary-color)",
                "theme-third": "var(--theme-third-color)",
                "theme-text-primary": "var(--theme-text-primary)",
                "theme-text-secondary": "var(--theme-text-secondary)",

                "theme-border": "var(--theme-border-color)",
            },
            fontFamily: {
                comic: ['"Comic Relief"', "cursive"],
                playfair: ['"Playfair Display"', "serif"],
                roboto: ['"Roboto"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
