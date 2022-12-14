const path = require("path");
import { defineConfig } from "vite";

export default defineConfig({
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "node_modules"),
    },
  },
  server: {
    port: 8000,
    hot: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        about: path.resolve(__dirname, "src/about.html"),
        contact: path.resolve(__dirname, "src/contact.html"),
        product: path.resolve(__dirname, "src/product.html"),
      },
    },
  },
});
