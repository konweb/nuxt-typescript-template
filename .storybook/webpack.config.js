/**
 * Custom Webpack Config
 * https://storybook.js.org/docs/configurations/custom-webpack-config/
 */
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        scss: 'vue-style-loader!css-loader!sass-loader'
      }
    }
  })
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      appendTsSuffixTo: [/\.vue$/]
    }
  })
  config.module.rules.push({
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]?[hash]'
    }
  })

  return config
}
