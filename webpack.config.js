module.exports = {
    mode: 'development',
    entry: [
      '@babel/polyfill', 
      './client/app.js'
    ],
    output: {
      path: __dirname + "/public",
      filename: 'bundle.js'
    },
    resolve: {
      extensions: [".js", ".jsx"],
      root: __dirname + "/node_modules",
      modules: ["tone/build/Tone.js"]
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        }
      ]
    }
  }
