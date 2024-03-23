import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      wite: '#FFFFFF',
      black: '#000000',
      gray: {
        '0': '#9F9F9F',
        '0.5': '#909090',
        '1': '#818181',
        '1.5': '#737373',
        '2': '#646464',
        '3': '#464646',
        '4': '#292929',
        '5': '#0B0B0B',
        '6': '#090909',
        '7': '#070707',
        '8': '#040404',
        '8.5': '#030303',
        '9': '#020202',
        '10': '#000000',
      },
      purple: {
        '0.5': '#F4EFFD',
        '1': '#E9DFFC',
        '1.5': '#DECFFA',
        '2': '#D3BFF9',
        '3': '#BE9FF6',
        '4': '#A87FF3',
        '5': '#925FF0',
        '6': '#784DC7',
        '7': '#5E3A9E',
        '8': '#432876',
        '8.5': '#361F61',
        '9': '#29154D',
        '9.5': '#1C0C38',
        '10': '#0F0324',
      },
    },
  },
  plugins: [],
};
export default config;
