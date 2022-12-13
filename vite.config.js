const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "node_modules"),
    },
  },
  server: {
    port: process.env.PORT,
    hot: true,
  },
};
