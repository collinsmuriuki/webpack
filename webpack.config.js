const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    // define whatwebpack needs to do based on the files it encounters
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // tells webpack what loader it needs to run
        // the loader is the helper which converts the code to the actual version
        // here we use babel
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        // note that the order in which we insert loaders is important
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ],
  },
  plugins: [
    // The HtmlWebpackPlugin receives a config object when creating an instance
    // The object takes the template of the file it uses as the starting point
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}