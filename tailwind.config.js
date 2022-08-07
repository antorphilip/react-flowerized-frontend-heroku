/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ibarra: ["'Ibarra Real Nova', 'serif'"],
        Nanum: ["'Nanum Myeongjo', 'serif'"],
        NanumGothic: ["'Nanum Gothic', 'sans-serif'"],
        Cinzel: ["'Cinzel', 'serif'"],
        Roboto: ["'Roboto', 'sans-serif'"],
        KaushanScript: ["'Kaushan Script', 'cursive'"],
        MerriweatherSans: ["'Merriweather Sans', sans-serif'"],
        Lora: ["'Lora', 'serif'"],
        ElMessiri: ["'El Messiri', 'sans-serif;'"],
        Alata: ["'Alata', sans-serif'"],
        Courgette: ["'Courgette', 'cursive'"]
      },
    },
  },
  plugins: [],
};
