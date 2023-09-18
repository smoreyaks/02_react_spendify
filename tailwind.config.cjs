/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            primary: "Hind Siliguri",
            secondary: ["Lobster", "cursive"],
        },
        container: {
            padding: {
                DEFAULT: "2rem",
                lg: "50px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1170px",
        },
        extend: {
            flex: {
                half: "1 0.5 100%",
            },
            colors: {
                dark: "#292830",
                light: "#BDBDBD",
                accent: "#ef5350",
                accentHover: "#ba3e3f",
                grey: "#F5F5F5",
                logoRed: "#EF5350",
                logoYellow: "#EF5350",
                logoIndigo: "#6e6eff",
                neutral: "#F7F7F7",
            },
            backgroundImage: {
                hero: "url('/src/assets/img/hero/14667909_5516774-rev.jpg')",
                overview: "url('/src/assets/img/hero/14667909_5516774.jpg')",
                cta: "url('/src/assets/img/cta/bg.svg')",
            },
            scale: {
                25: "0.25",
            },
            transitionDuration: {
                "400": "400ms",
            },
        },
    },
    plugins: [],
};
