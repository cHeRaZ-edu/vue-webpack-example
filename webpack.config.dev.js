require("dotenv").config();
const webpack = require('./webpack.config');
webpack.mode = 'development';
webpack.devtool = 'eval-source-map'; //'source-map' test production
webpack.devServer = {
    host:"localhost",
    port: process.env.PORT || 8080,
    hot: true
};
webpack.target = "web";
module.exports = webpack;