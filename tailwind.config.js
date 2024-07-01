const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite', // Adjust the duration here
      }
    }
  },
  plugins: [],
});
