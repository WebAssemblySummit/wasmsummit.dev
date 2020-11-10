const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
  trailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/speakers": { page: "/speakers" },
      "/schedule": { page: "/schedule" }
    };

    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(id => {
      paths[`/speakers/${id}`] = {
        page: "/speakers/[id]",
        //query: { id }
      };
    });

    return paths;
  }
});
