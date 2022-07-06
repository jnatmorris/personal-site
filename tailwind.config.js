module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./Components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media",

    theme: {
        extend: {
            backgroundColor: ["dark"],
        },
    },

    plugins: [require("@tailwindcss/typography")],
};
