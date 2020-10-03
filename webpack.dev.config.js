const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./example/src/index.html"),
    filename: "./index.html"
});

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "./example/src/app.js"),
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, "./dist/"),
        filename: "index.js",
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts", ".css"]
    },
    devServer: {
        port: 3000
    }
};