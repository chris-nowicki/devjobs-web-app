/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    fontFamily: {
        sans: ['var(--font-kumbh)'],
    },
    theme: {
        screens: {
            sm: '375px',
            md: '768px',
            lg: '1440px',
            xl: '4000px',
        },

        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#FFFFFF',
            violet: {
                100: '#939BF4',
                200: '#9e7f66',
            },
            blue: {
                100: '#19202D',
                200: '#121721',
            },
            gray: {
                100: '#F4F6F8',
                200: '#9DAEC2',
                300: '#6E8098',
            },
        },
        extend: {
            lineHeight: {
                4: '1.125rem',
                7: '1.625rem',
                8: '1.813rem',
                9: '2.125rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
