module.exports = function(eleventyConfig) {
	eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});

  eleventyConfig.addPassthroughCopy({ "_src/_rootfiles/": "/" });
  eleventyConfig.addPassthroughCopy({ "_src/img/": "/img" });
  eleventyConfig.addPassthroughCopy({ "_src/js/": "/js" });

    return {
        dir: {
          input: "_src",
          output: "_site",
          includes: "_includes",
          layouts: "_layouts"
        }
      }
};