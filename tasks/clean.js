const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src('app/dist/**/*.*', {read: false})
         .pipe(clean());
});
