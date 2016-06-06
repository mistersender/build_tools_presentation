const gulp = require('gulp')
const autoprefixer  = require('gulp-autoprefixer')
const del  = require('del')
const minimist  = require('minimist')
const gutil = require('gulp-util')
const uglify = require('gulp-uglify')

const options = minimist(process.argv.slice(2), {
  default: {
    production: false
  }
});

console.log('is production?', options.production)

// general tasks
gulp.task('default', () => {
  console.log('Hello World!')
})

gulp.task('build', ['css:build', 'js:build', 'html:build'])
gulp.task('watch', ['css:watch', 'js:watch', 'html:watch'])
gulp.task('clean', ['css:clean', 'js:clean', 'html:clean'])

// css
gulp.task('css:build', () => {
  return gulp
    .src('app/**/*.css')
    .pipe(autoprefixer({ browsers: ['last 2 versions', '> 5%'] }))
    .pipe(gulp.dest('dist/'));
})

gulp.task('css:watch', () => {
  gulp.watch(`app/**/*.css`, ['build']);
})

gulp.task('css:clean', () => {
  del([ `dist/**/*.css`]);
})

// js
gulp.task('js:build', () => {
  return gulp
    .src('app/**/*.js')
    .pipe(options.production ? uglify() : gutil.noop())
    .pipe(gulp.dest('dist/'));
})

gulp.task('js:watch', () => {
  gulp.watch(`app/**/*.js`, ['build']);
})

// html
gulp.task('html:build', () => {
  return gulp
    .src('app/**/*.html')
    .pipe(gulp.dest('dist/'));
})

gulp.task('html:watch', () => {
  gulp.watch(`app/**/*.html`, ['build']);
})
