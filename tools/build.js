'use strict';

const task = require('./task');

module.exports = task('build', () => Promise.resolve()
  .then(() => require('./clean'))
  .then(() => require('./copy'))
  .then(() => require('./bundle'))
);
