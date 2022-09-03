const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // Other rules...
  plugins: [new NodePolyfillPlugin()],
  resolve: {
    // ... rest of the resolve config
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
};
