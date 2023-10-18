import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: '#2E5DD4',
        mainGray: '#D9D9D9',
        yellowStar: '#E9B824'
      }
    },
  },
  plugins: [],
}
export default config
