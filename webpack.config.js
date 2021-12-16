const path = require("path");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
    stats: {
        errorDetails: true
    },
    devtool: isDevelopment ? "eval-source-map" : false,
    mode: isDevelopment ? "development" : "production",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    target: "node",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    externals: ["ts-node"],
    externalsType: "commonjs",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }
};
