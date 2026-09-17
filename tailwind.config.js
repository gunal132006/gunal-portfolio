/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#fdfbf7',
          sheet: '#f4f1ea',
          card: '#ffffff',
        },
        ink: {
          DEFAULT: '#2f2f2f',
          dark: '#2d2a26',
          muted: '#545454',
          subtle: '#888888',
        },
        marker: {
          red: '#e44242',
          redDark: '#e35642',
          blue: '#264de4',
          blueprint: '#26347f',
        },
        highlight: {
          yellow: '#fff2008d',
          solid: '#fffb7d',
        },
        sticky: {
          orange: '#FFD6A5',
          blue: '#A7E6FF',
          green: '#C8F7C5',
          purple: '#E8C4F7',
          yellow: '#ffeb7f',
        },
      },
      fontFamily: {
        marker: ['"Permanent Marker"', 'cursive', 'sans-serif'],
        hand: ['"Patrick Hand"', '"Caveat"', 'cursive', 'sans-serif'],
        sketch: ['"Architects Daughter"', 'cursive', 'sans-serif'],
        reenie: ['"Reenie Beanie"', 'cursive', 'sans-serif'],
        caveat: ['"Caveat"', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'paper': '0 10px 40px #00000014',
        'paper-lift': '0 15px 45px #00000022',
        'note': '2px 4px 12px rgba(0, 0, 0, 0.08)',
        'tape': '0 1px 3px rgba(0, 0, 0, 0.15)',
        'polaroid': '0 10px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'hand-1': '255px 15px 225px 15px / 15px 225px 15px 255px',
        'hand-2': '250px 5px 200px 30px / 20px 220px 15px 230px',
        'hand-3': '240px 15px 225px 20px / 10px 230px 25px 210px',
      },
    },
  },
  plugins: [],
}
