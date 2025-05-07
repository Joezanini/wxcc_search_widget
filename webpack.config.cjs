const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.jsx', // Your main entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundled file name
    library: 'MyCustomElement', // Optional: Library name for UMD builds
    libraryTarget: 'umd', // Makes the bundle usable in different environments
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // Use your own index.html template
      inject: true, // Automatically inject the bundle in the HTML
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
  mode: 'production', // Use 'production' for optimized builds
  stats: {
    children: true, // Enable detailed error output from child compilations
  },
};