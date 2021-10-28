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

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
