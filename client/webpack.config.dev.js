let path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'), //css package
  HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname), 
  APP_PATH = path.resolve(ROOT_PATH, 'src'), 
  BUILD_PATH = path.resolve(ROOT_PATH, 'dist'), 
  NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules'), 
  ENTRY_FILE = path.resolve(APP_PATH, 'index'), 
  TEMPLATE_FILE = path.resolve(APP_PATH, 'index.html'); 

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ENTRY_FILE
  },
  output: {
    path: BUILD_PATH, 
    filename: 'js/[name].[hash:8].js', 
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            exportAsEs6Default: true,
            minimize: true,
            removeComments: true
          }
        }
      },
      {
        test: /\.css$/,
        exclude: NODE_MODULES_PATH,
        use: ExtractTextPlugin.extract(['css-loader', 'autoprefixer-loader']),
        include: APP_PATH
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract(['css-loader', 'autoprefixer-loader', 'less-loader']),
      },
      {
        test: /\.scss$/,
        exclude: NODE_MODULES_PATH,
        use: ExtractTextPlugin.extract(['css-loader', 'autoprefixer-loader', 'sass-loader']),
        include: APP_PATH
      },
      {
        test: /\.(eot|woff|ttf|woff2)(\?|$)/,
        exclude: NODE_MODULES_PATH,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        },
        include: APP_PATH
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: NODE_MODULES_PATH,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'images/[name].[hash:8].[ext]'
          }
        },
        include: APP_PATH
      },
      {
        test: /\.ts$/,
        exclude: NODE_MODULES_PATH,
        use: [
          'ts-loader',
          {
            loader: 'tslint-loader',
            options: {
              configFile: ROOT_PATH + '/tslint.json'
            }
          }
        ],
        include: APP_PATH
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: BUILD_PATH,
    port: 3000,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({  
      filename: path.resolve(BUILD_PATH, 'index.html'), 
      template: TEMPLATE_FILE, 
      hash: false,
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.less', '.scss', '.css'], 
  }
}
