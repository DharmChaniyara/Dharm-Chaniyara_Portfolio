/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          navy: '#2F4156',     // Deep Slate Navy
          teal: '#567C8D',     // Muted Sea Teal
          sky: '#C8D9E6',      // Soft Sky / Ice Blue
          beige: '#F5EFEB',    // Warm Sand / Linen Canvas
          white: '#FFFFFF',    // Crisp Pure White
        },
        surface: {
          50: '#F5EFEB',
          100: '#EAE3DC',
          200: '#C8D9E6',
          300: '#A4BCCF',
          400: '#567C8D',
          500: '#415F6E',
          600: '#2F4156',
          700: '#233243',
          800: '#192430',
          900: '#0F161E',
        },
        brand: {
          primary: '#2F4156',  // Deep Navy
          accent: '#567C8D',   // Muted Teal
          light: '#C8D9E6',    // Sky Blue
          canvas: '#F5EFEB',   // Beige
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'edge-xs': '1px 1px 0px rgba(47, 65, 86, 0.12)',
        'edge': '2px 2px 0px rgba(47, 65, 86, 0.14)',
        'edge-hover': '3px 3px 0px rgba(47, 65, 86, 0.22)',
        'edge-navy': '3px 3px 0px #2F4156',
        'edge-teal': '3px 3px 0px #567C8D',
        'subtle': '0 1px 3px 0 rgba(47, 65, 86, 0.06), 0 1px 2px -1px rgba(47, 65, 86, 0.06)',
      }
    },
  },
  plugins: [],
}
