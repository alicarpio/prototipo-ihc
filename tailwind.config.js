/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'app-red': "A4262C",
                'app-dark': "3E3A3A",
                'app-darker': "242424",
            }
        },
    },
    plugins: [],
}
