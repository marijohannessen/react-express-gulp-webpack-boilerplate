const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('scripts', () => {
  const config = require('./webpack.config.js');
  return gulp.src('app/scripts/**/*.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('app/dist/js'));
});
