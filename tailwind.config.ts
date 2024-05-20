import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "darkPurple": "#533ABA",
        "brightPurple": "#7300FE",
        "orange": "#FFB252",
        "peach": "#FFDBB9",
        "redError": "#D6293E",
        "greenSuccess": "#9BDA4B",
        "white": "#FFF8FF",
        "black": "#0E0E0E",
        "gray": {
          "100": "#E5E5E5",
          "300": "#B4B4B4",
          "500": "#383838",
          "700": "#252525",
          "900": "#1E1E1E",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-ubuntu)"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
