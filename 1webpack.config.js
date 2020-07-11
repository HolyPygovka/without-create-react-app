module.exports = {
    mode: 'development',
    module: {
        rules: [

          // file loader
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },

            ],
          },

          // babel loader
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
        ],
    },
    devServer: {
      open: true,
    }
};