const gulp = require('gulp');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');

gulp.task('html', () => {
  return gulp.src('app/views/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true
    }))
    .pipe(rename({
      dirname: '',
      basename: 'index'
    }))
    .pipe(gulp.dest('app/dist'))
});
