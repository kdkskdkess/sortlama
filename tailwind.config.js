const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    //   darkMode: 'media', // 'media' or 'class' to enable dark mode support
    theme: {
        colors: {
            "discord-light": "#7289DA",
            "discord-dark": "#23272A",
            "discord-darker": "#1b1e20",
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: colors.blue,
            green: colors.emerald,
            indigo: colors.indigo,
            pink: colors.pink,
            purple: colors.violet,
            red: colors.red,
            yellow: colors.amber,
        },
        extend: {
            "discord-light": "#7289DA",
            "discord-dark": "#23272A",
            "discord-darker": "#1b1e20",
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: colors.blue,
            green: colors.emerald,
            indigo: colors.indigo,
            pink: colors.pink,
            purple: colors.violet,
            red: colors.red,
            yellow: colors.amber,
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
     outline: false,
    },
    plugins: [],
}
