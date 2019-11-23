var gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('default',['minify']);

gulp.task('minify', () => {
  return gulp.src('public/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'));
});

