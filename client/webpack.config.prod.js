let path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'), 
  HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname), 
  APP_PATH = path.resolve(ROOT_PATH, 'src'), 
  BUILD_PATH = path.resolve(ROOT_PATH, 'dist'), 
  NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules'), 
  ENTRY_FILE = path.resolve(APP_PATH, 'index'), 
  TEMPLATE_FILE = path.resolve(APP_PATH, 'index.html'); 


module.exports = {
  entry: {
    app: ENTRY_FILE,
    vendor: [
      "angular",
      '@uirouter/angularjs'
    ]
  },
  output: {
    path: BUILD_PATH, 
    filename: 'js/[name].[hash:8].js', 
    chunkFilename: 'js/[name].[chunkhash:8].js'
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
        use: ExtractTextPlugin.extract(['css-loader?minimize=true', 'autoprefixer-loader']),
        include: APP_PATH
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract(['css-loader?minimize=true', 'autoprefixer-loader', 'less-loader']),
      },
      {
        test: /\.scss$/,
        exclude: NODE_MODULES_PATH,
        use: ExtractTextPlugin.extract(['css-loader?minimize=true', 'autoprefixer-loader', 'sass-loader']),
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
        use: 'ts-loader',
        include: APP_PATH
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production') 
      }
    }),
    new HtmlWebpackPlugin({  
      filename: path.resolve(BUILD_PATH, 'index.html'), 
      template: TEMPLATE_FILE, 
      hash: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false, 
      },
      compress: {
        warnings: false,
        drop_console: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].[hash:8].js'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.less', '.scss', '.css'] 
  }
};
