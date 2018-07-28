 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack');

 module.exports = {
   entry: {
    polyfills: './src/polyfills.ts',
     app: './src/main.ts',
     css: './src/style.cssx'
   },
   module: {
     rules:[
       {
         test: /\.ts$/,
         use: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: 'tsconfig.json' }
          },
          'angular2-template-loader'
          ],
         exclude: /node_modules/
       },
       {
         test: /\.css$/,
         use: [
            'to-string-loader',
           'css-loader'
         ]
       },
       {
         test: /\.cssx$/,
         use: [
            'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader'
         ]
       },
       {
         test: /\.xml$/,
         use: [
           'xml-loader'
         ]
       },
       {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: ['src/index.html']
        },
        {
            test: /\.less$/,
            use: [{
                loader: "to-string-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
          }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
       name: 'common' // Specify the common bundle's name.
     })
   ],
   output: {
     filename: '[name].[chunkhash].js',
     path: path.resolve(__dirname, 'dist')
   }
 };
