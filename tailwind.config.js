/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ibarra: ["'Ibarra Real Nova', 'serif'" ],
        Nanum: ["'Nanum Myeongjo', 'serif'" ],
        NanumGothic: ["'Nanum Gothic', 'sans-serif'" ],
        Cinzel: ["'Cinzel', 'serif'" ],
       },
    },
  },
  plugins: [],
}
