module.exports = {
  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/speakers": { page: "/speakers" }
    };

    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(id => {
      paths[`/speakers/${id}`] = {
        page: "/speakers/[id]",
        query: { id }
      };
    });

    return paths;
  }
};
