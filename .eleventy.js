const CleanCSS = require("clean-css");
module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });
};
module.exports = function (config) {
    config.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    config.addPassthroughCopy("./src/*.png");
    config.addPassthroughCopy("./src/*.jpeg");
    config.addPassthroughCopy("./src/site.webmanifest");

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
