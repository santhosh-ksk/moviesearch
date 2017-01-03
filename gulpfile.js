var install = require("gulp-install");
var gulp = require('gulp');
var eslint= require('gulp-eslint');

gulp.src(['./bower.json', './package.json'])
    .pipe(install());

gulp.task('lint', () => {
  return gulp.src(['main.js','!node_modules/**'])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint'], () => {
  gulp.watch('main.js', ['lint']);
});
