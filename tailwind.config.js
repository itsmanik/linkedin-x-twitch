/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                purpleLogo: "#a970ff",
                lightWhite: "#d7d7d7",
                darkGray: "#3d3d3dcf"
            },
        },
    },
    plugins: [],
};
