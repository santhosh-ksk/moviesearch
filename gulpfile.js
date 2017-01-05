var install = require("gulp-install");
var gulp = require('gulp');
var eslint= require('gulp-eslint');
var htmllint= require('gulp-html-lint');

gulp.task('lint', () => {
  return gulp.src('main.js')
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
});
gulp.task('html', () => {
  return gulp.src('index.html')
            .pipe(htmllint({
              'rules': {
                'indent-width': 1
              }
            }
            ))
            .pipe(htmllint.format())
            .pipe(htmllint.failAfterError());
});
gulp.task('default', ['lint','html'], () => {
  //run as default
});

