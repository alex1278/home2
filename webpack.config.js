const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const WebpackMD5Hash = require('webpack-md5-hash')
const HtmlWebpackPlagin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
  entry: './dev/script.js',
  output: {
    path: path.resolve(__dirname, 'site'),
    filename: 'bundle.[chunkhash].js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'site'),
    host: 'localhost',
    // port:9090

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test:/\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        exclude:'/node_modules/',
        use:{
          loader: 'file-loader',
          options: {
            name: 'images/[name]-[hash].[ext]'
          }
        }

      },
      {
        test: /\.svg$/,
        exclude: '/node_modules/',
        use: [
          'babel-loader',
          'svg-react-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackMD5Hash(),
    new MiniCSSExtractPlugin({
      filename: 'style.[chunkhash].css'
    }),
    // new copyWebpackPlugin([
    //   {
    //     from: path.resolve('./dev/static'),
    //     to: path.resolve('./site')
    //   }
    // ])
    new HtmlWebpackPlagin({
      inject: false,
      template: './dev/template/index.html',
      filename: 'index.html'
    })
  ]
}
