"use strict";

var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./index.js"),
    mode: 'none',
    output: {
        path: path.resolve(__dirname, "./output"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.proto$/,
                loader: "protofiles-loader"
            }
        ]
    }
};
