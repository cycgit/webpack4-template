const path = require('path');

module.exports = {
  entry: './src/app.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
    ]
  },
  plugins: [],
  output: {
    libraryTarget: 'umd',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: {
    // react: 'React',
    // 'react-dom': 'ReactDom',
  },
  mode: 'production',
};
