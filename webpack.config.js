const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filemane: './index.html',
});

module.exports = {
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css/,
        use: [
          'style-loader?sourcemap=true',
          'css-loader',
          {
            loader: require.resolve('postcss-loader'),
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract([
          'css-loader',
          'sass-loader',
        ]),
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
  ],
};