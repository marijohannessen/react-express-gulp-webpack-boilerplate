'use strict';

const webpack = require('webpack');
const task = require('./task');
const config = require('./webpack-config');

module.exports = task('bundle', new Promise((resolve, reject) => {
  const bundler = webpack(config);
  const run = (err, stats) => {
    if (err) {
      reject(err);
    } else {
      console.log(stats.toString(config.stats));
      resolve();
    }
  };
  bundler.run(run);
}));
