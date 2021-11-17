module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      screens: {
        sm: "480px",
        // => @media (min-width: 640px) { ... }

        md: "547px",
        // => @media (min-width: 768px) { ... }

        lg: "768px",
        // => @media (min-width: 1024px) { ... }

        xl: "1024px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1680px",
        // => @media (min-width: 1536px) { ... }
      },
      height: {
        "8rem": "8rem",
      },
      fontSize:{
        'xs': '.75rem',

        'sm': '.875rem',
 
        'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
 
        '3xl': '1.875rem',
 
        '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
 
        '7xl': '5rem',
      }
    },
    extend: {
      colors: {
        primaryOrange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
