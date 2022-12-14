module.exports = function (config) {
  config.addPassthroughCopy("assets");

  return {
    markdownTemplateEngine: "ejs",
    dir: {
      input: "src",
      output: "out",
      includes: "../_includes",
      data: "../_data",
    },
  };
};
