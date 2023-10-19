import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '420px',
      md: '768px',
      lg: '1296px',
    },
    extend: {
      spacing: {
        '15': '60px',
        '17': '72px',
        '35': '140px',
        '75': '300px',
        '82': '328px',
        '85': '340px',
        '133': '532px',
        '324': '1296px',
      },
      colors: {
        mainBlue: '#2E5DD4',
        mainGray: '#D9D9D9',
        textGray: '#999999',
        yellowStar: '#E9B824',
      },
    },
  },
  plugins: [],
}
export default config
