module.exports = function (config) {
  config.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      output: "out",
      includes: "../_includes",
      data: "../_data",
    },
  };
};
