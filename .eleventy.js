module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/posts/*.md").reverse();
  });

  eleventyConfig.addFilter("dateDisplay", (date) => {
    return new Date(date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
  });

  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
