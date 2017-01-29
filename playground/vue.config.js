const webpack = require('webpack');

module.exports = {

  webpack (defaults) {
    defaults.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          'TRAINER_NAME': JSON.stringify(process.env.TRAINER_NAME),
          'TRAINER_ID': JSON.stringify(process.env.TRAINER_ID)
        }
      })
    );
    return defaults;
  }

};
