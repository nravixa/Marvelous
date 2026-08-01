/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F4E0A5',
          DEFAULT: '#D4AF37',
          dark: '#AA820A',
          muted: '#C5A862',
        },
        obsidian: {
          light: '#222222',
          DEFAULT: '#0A0A0A',
          dark: '#050505',
          slate: '#121212',
          charcoal: '#1A1A1A',
        },
        cream: {
          light: '#FFFFFF',
          DEFAULT: '#F9F6F0',
          dark: '#F3EFE0',
          muted: '#E6DFD3',
        },
        luxury: {
          brown: '#5E4B3E',
          bronze: '#8C6D58',
          sand: '#D2C1B0',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F4E0A5 0%, #D4AF37 50%, #AA820A 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(212, 175, 55, 0.15), 0 0 30px rgba(212, 175, 55, 0.05)',
        'luxury': '0 20px 40px -5px rgba(0, 0, 0, 0.6), 0 10px 15px -3px rgba(0, 0, 0, 0.4)',
        'luxury-sm': '0 10px 25px -3px rgba(0, 0, 0, 0.5)',
        'luxury-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.05)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      letterSpacing: {
        widest: '0.2em',
        extreme: '0.3em',
      },
      spacing: {
        'micro': '0.25rem',
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
        'section': '8rem',
        'hairline': '1.5px',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        'full': '9999px',
      },
      fontSize: {
        'xxs': '0.625rem',
        'xs-plus': '0.6875rem',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.65, 0, 0.35, 1)',
        'bounce-luxury': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      height: {
        'hero': '95vh',
        'hero-sm': '80vh',
        'gallery-sm': '50vh',
        'gallery-md': '65vh',
        'card': '450px',
      }
    },
  },
  plugins: [],
} // trigger reload
