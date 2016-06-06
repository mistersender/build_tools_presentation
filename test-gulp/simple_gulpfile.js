const gulp = require('gulp')
const autoprefixer  = require('gulp-autoprefixer')

gulp.task('default', () => {
  console.log('Hello World!')
})

gulp.task('build', () => {
  return gulp
    .src('app/**/*')
    .pipe(autoprefixer({ browsers: ['last 2 versions', '> 5%'] }))
    .pipe(gulp.dest('dist/'));
})

gulp.task('watch', () => {
  gulp.watch(`app/**/*`, ['build']);
})