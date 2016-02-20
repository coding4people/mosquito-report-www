'use strict';

var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');
var conf = require('./conf');
var translate = require('./translate');

gulp.task('partials', function () {
  return gulp.src(path.join(conf.paths.src, '/locales/*.yml'))
    .pipe(translate(
      path.join(conf.paths.src, '/app/{components,sections}/**/*.html'),
      path.join(conf.paths.tmp, '/partials'),
      path.join(conf.paths.src, '/partials/templateCacheHtml.js')))
    .pipe(gulp.dest(conf.paths.tmp + '/serve/app'))
    .pipe(browserSync.reload({ stream: true }));
});
