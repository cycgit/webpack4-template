const path = require('path');

module.exports = {
  entry: './src/app.js',
  devServer: {
    contentBase: './dist',
    stats: 'minimal',
    port: 9000,
    disableHostCheck: true,
    host: '0.0.0.0',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
    ]
  },
  plugins: [],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
