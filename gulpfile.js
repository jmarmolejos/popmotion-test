var gulp = require('gulp');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var browserify = require('browserify')

gulp.task('sass', function () {
// gulp.src('./sass/**/*.scss')
  gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('browserify', function() {
  return browserify('./src/js/app.js').bundle()
    // vinyl-source-stream makes the bundle compatible with gulp
    .pipe(source('bundle.js')) // Desired filename
    // Output the file
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', function() {
  // place code for your default task here
});
