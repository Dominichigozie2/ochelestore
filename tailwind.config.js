/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          white: "#FFFFFF",
          cream: "#FAFAF8",
          warm: "#F5F4F0",
          sand: "#ECEAE4",
          black: "#0A0A0A",
          dark: "#121212",
          gray: {
            50: "#F9F9FB",
            100: "#F2F2F2",
            200: "#E5E5E5",
            300: "#D4D4D4",
            400: "#A3A3A3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717"
          },
          gold: {
            light: "#EAD49B",
            DEFAULT: "#C8A24D",
            hover: "#D4AF5A",
            dark: "#A38030",
            deep: "#846522",
            subtle: "rgba(200, 162, 77, 0.12)"
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.2em',
        widest: '0.25em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.04)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'gold': '0 10px 25px -5px rgba(200, 162, 77, 0.25)',
      },
      maxWidth: {
        '7xl': '1200px',
        'site': '1200px',
      }
    },
  },
  plugins: [],
}
