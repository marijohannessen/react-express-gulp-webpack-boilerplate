const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

gulp.task('styles', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(prefix({
      browsers: ['> 1%', 'last 2 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/dist/css'))
    .pipe(browserSync.stream());
});
