const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const basePath = __dirname;

const path = require("path");

module.exports = {
    context: path.join(basePath, "src"),
    entry: {
        app: ["./index.tsx"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name].[ext]",
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
};
