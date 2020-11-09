module.exports = function (config) {
  config.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      output: "build",
      includes: "../_includes",
      data: "../_data",
    },
  };
};
