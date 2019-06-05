const devConfig = require('./webpack.dev.config.js');

let config;

switch (process.env.npm_lifecycle_event) {
  case 'start':
    config = devConfig;
    break;
  case 'build':
    config = devConfig;
    break;
  default:
    config = devConfig;
    break;
}

module.exports = config;
