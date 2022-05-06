const path = require('path')

module.exports = {
  mode: 'development',
  entry: './App.jsx',
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {}
}
