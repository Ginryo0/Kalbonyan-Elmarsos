const path = require('path'); // imports from node js
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'), // creating absolute path -> From this file - adding / assests / scripts
    publicPath: 'assets/scripts/',
  },
  devtool: 'eval-cheap-module-source-map',
  // devServer: {
  //   contentBase: './',
  // },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
