var path = require('path');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

gulp.task('default',function(){   //no use, simply to test.
console.log("hello");
});
gulp.task('eslint', function() {   //should lint test the js files and report any errors, but the 'eslint' task is giving error.
  return gulp.src(APP_DIR + '/*.js').pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError())
.pipe(gulp.dest('gulpout'));
});
