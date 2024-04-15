module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      // 'bgPrimary': '#ffffff',
      // 'bgSecondary': '#fdeeeb',
      // 'bgAccent': '#f04637',
      // 'textPrimary': '#fce8f3',
      // 'textSecondary': '#848d97',
      // 'white':'#ffffff',
      // 'bgTertiary':'#FE7D5D',
      // 'BorderCol':'#57606a',
      // 'divider': '#30363d',
      // 'bgPrimary': '#0d0d0d',
      // 'bgSecondary': '#1a1a1a',
      // 'bgAccent': '#cef144',
      // 'textPrimary': '#ffffff',
      // 'textSecondary': '#848d97',
      // 'white':'#0d0d0d',
      // 'bgTertiary':'#dff976',
      // 'BorderCol':'#57606a',
      // 'divider': '#30363d',
      // 'bgPrimary': "rgba(218, 224, 2, 0.8)",

      'bgPrimary': "rgb(var(--color-bg) / <alpha-value>)",
      'bgSecondary': "rgb(var(--color-bg2) / <alpha-value>)",
      'bgQuadrary': "rgb(var(--color-bg3) / <alpha-value>)",
      'textPrimary': "rgb(var(--color-primary) / <alpha-value>)",
      'textSecondary': "rgb(var(--color-ascent4) / <alpha-value>)",
      'placehold': "rgb(var(--color-placehold) / <alpha-value>)",
      'bgAccent': "rgb(var(--color-ascent1) / <alpha-value>)",
      'bgTertiary': "rgb(var(--color-ascent2) / <alpha-value>)",
      'divider': "rgb(var(--color-bgBorder) / <alpha-value>)",
      'borderCol': "rgb(var(--color-bgBorder) / <alpha-value>)",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif', "Segoe UI Emoji"],
      serif: ['Merriweather', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', "Segoe UI Emoji"]
    },
    screens: {
      xsm: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}