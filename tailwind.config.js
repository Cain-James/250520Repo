/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                pinkLight: '#ffe4e6',
                pinkDark: '#fb7185',
            },
            fontFamily: {
                serif: ['Ma Shan Zheng', 'STKaiti', 'KaiTi', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-in forwards',
                'bounce': 'bounce 2s infinite',
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'twinkle': 'twinkle 1.5s ease-in-out infinite',
                'drift': 'drift 4s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%, 100%': { textShadow: '0 0 10px rgba(255, 105, 180, 0.2)' },
                    '50%': { textShadow: '0 0 20px rgba(255, 105, 180, 0.4)' },
                },
                twinkle: {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(0.8)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.2)' },
                },
                drift: {
                    '0%, 100%': { transform: 'translateX(0) translateY(0)' },
                    '25%': { transform: 'translateX(5px) translateY(-5px)' },
                    '50%': { transform: 'translateX(0) translateY(-10px)' },
                    '75%': { transform: 'translateX(-5px) translateY(-5px)' },
                },
            },
            transformStyle: {
                '3d': 'preserve-3d',
            },
            backfaceVisibility: {
                'hidden': 'hidden',
            },
            perspective: {
                '1000': '1000px',
            },
            rotate: {
                'y-180': 'rotateY(180deg)',
            },
        },
    },
    plugins: [],
}; 