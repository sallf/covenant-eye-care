const path = require('path');

// PLUGINS
const HtmlWebpackPlugin = require('html-webpack-plugin'); // simplifies HTML files for webpack (really connects to the index.ejs file)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // remove/clean your build folder(s)
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Copies assets which aren't required (like pdfs)
const SitemapPlugin = require('sitemap-webpack-plugin').default; // Build a sitemap

const resolveConfig = require('./webpack.config.resolve');

module.exports = (env, argv) => {
  // MODE
  const { mode } = argv;
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  // RESOLVE
  const contextPath = path.resolve(__dirname, 'src');
  const outputPath = path.resolve(__dirname, 'public');

  console.info(
    `Environment: ${env} - Mode: ${mode}`,
  );

  // Plugins
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: `Covenant Eye Care ${isProd ? '| Comprehensive Eye Care in Gastonia, NC' : 'WEBDEV'}`,
    template: './index.ejs',
    inject: true, // Inject all files that are generated by webpack
    minify: false,
  });

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: isDev ? '[name].css' : '[name].[contenthash].css',
  });

  const cleanWebpackPlugin = new CleanWebpackPlugin();

  const copyWebpackPlugin = new CopyWebpackPlugin([
    {
      from: 'assets/pdfs',
      to: 'assets/pdfs',
    },
  ]);

  // Sitemap
  const paths = [
    '/',
    '/services',
    '/patient-center',
    '/providers',
    '/contact',
  ];

  const sitemapPlugin = new SitemapPlugin('https://app.musiquest.com', paths);

  const plugins = [

    miniCssExtractPlugin,
    htmlWebpackPlugin,
    copyWebpackPlugin,
  ];

  if (isProd) {
    plugins.push(
      cleanWebpackPlugin,
      sitemapPlugin,
    );
  }

  return ({
    context: contextPath,
    devtool: isDev ? 'inline-sourcemap' : false,
    entry: {
      'src/index.jsx': [
        path.join(__dirname, './src/index.jsx'),
      ],
    },
    resolve: {
      alias: {
        ...resolveConfig.resolve.alias,
        config: path.resolve(__dirname, 'config', env),
      },
      extensions: ['.js', '.json', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'tests'),
          ],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          // Import all non component/container scss as global
          test: /\.scss$/,
          exclude: /(components|containers).*\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          // Import container and component styles.scss as local CSS Modules
          test: /\.scss$/,
          include: /(components|containers).*\.scss$/,
          loader: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: `${isDev ? '[local]___' : ''}[hash:base64:5]`,
                },
                sourceMap: isDev,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDev,
              },
            },
          ],
        },
        {
          test: /\.(jpg|png|svg)$/,
          include: path.resolve(__dirname, 'src/assets/images'),
          loader: 'file-loader',
          options: {
            // https://webpack.js.org/loaders/file-loader/#esmodule
            esModule: false,
          },
        },
      ],
    },
    output: {
      path: outputPath,
      filename: '[name].js',
      publicPath: '/',
    },
    plugins,
    devServer: {
      historyApiFallback: true,
      contentBase: './src',
    },
  });
};
