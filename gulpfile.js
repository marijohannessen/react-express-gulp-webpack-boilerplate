'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir')('./gulptasks');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('build', ['styles', 'scripts', 'html']);

gulp.task('watch', () => {
  gulp.watch('app/scripts/*.js', ['scripts', reload]);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/views/*.html', [reload]);
});
