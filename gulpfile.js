var install = require("gulp-install");
var gulp = require('gulp');
var eslint= require('gulp-eslint');

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
                'indent-width': 2
              }
            }
            ))
            .pipe(htmllint.format())
            .pipe(htmllint.failAfterError());
});

