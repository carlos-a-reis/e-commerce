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
      lg: '1400px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      spacing: {
        cmt: '6px',
        mbs: '22px',
        '13': '52px',
        '15': '60px',
        '17': '72px',
        '26': '104px',
        '35': '140px',
        '38': '152px',
        '59': '236px',
        '62': '248px',
        '70': '280px',
        '75': '300px',
        '82': '328px',
        '85': '340px',
        '87': '348px',
        '133': '532px',
        '147': '588px',
        '168': '672px',
        '324': '1296px',
      },
      colors: {
        mainBlue: '#2E5DD4',
        mainGray: '#D9D9D9',
        textGray: '#999999',
        borderGray: '#61677A',
        yellowStar: '#E9B824',
      },
      maxWidth: {
        ss: '180px',
      },
    },
  },
  plugins: [],
}
export default config
