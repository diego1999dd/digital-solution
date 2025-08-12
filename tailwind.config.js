/** @type {import('tailwindcss').Config} */
module.exports = { // Adicione o sinal de igual (=) aqui
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                tertiary: 'var(--color-tertiary)',
                accent: 'var(--color-accent)',
                background: 'var(--color-background)',
                alternative: 'var(--color-alternative)',
                alternative2: 'var(--color-alternative2)',
            },
            fontFamily: {
                sans: ['"DM Sans"', 'sans-serif'],
                kanit: ['"Kanit"', 'sans-serif'],
                gallery: ['"Gallery Modern"', 'sans-serif'],
                jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}