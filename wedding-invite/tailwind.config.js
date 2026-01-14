module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        champagne: "#F7EFE5",
        blush: "#E6CFC2",
        sage: "#D9E3D4",
        gold: "#C9A24D"
      },
      fontFamily: {
      serif: ['"Playfair Display"', 'serif'],
      body: ['"Cormorant Garamond"', 'serif']
      }
    }
  },
  plugins: []
};
