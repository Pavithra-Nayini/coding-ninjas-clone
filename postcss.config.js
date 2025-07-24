// postcss.config.js
module.exports = {
  plugins: {
    // For PostCSS 7 compat
    tailwindcss: {}, // This will now pick up the v3 compat
    autoprefixer: {},
  },
};
