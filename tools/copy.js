'use strict';

const cpy = require('cpy');
const task = require('./task');

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
module.exports = task('copy', cpy(['app/dist/**/*.*'], 'build'));
