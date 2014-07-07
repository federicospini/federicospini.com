var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
// var uncss = require('gulp-uncss');
var concatcss = require('gulp-concat-css');
var es = require('event-stream');


gulp.task('style', function () {
  var app_files = gulp.src('styles/main.scss')
    .pipe(sass({style: 'expanded'}));

  var reset = gulp.src('styles/reset.css')

  es.concat(app_files, reset)
    .pipe(concatcss('build.css'))
    // .pipe(uncss({
    //   html: ['index.html']
    // }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('build/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function () {
  gulp.watch('styles/*.scss', function () {
    gulp.start('style');
  });
});

gulp.task('default', ['style']);
