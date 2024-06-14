
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        accent: '#e3342f',
      },
      boxShadow: {
        neumorphism: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
      },
    },
  },
  plugins: [],
};
