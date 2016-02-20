'use strict';

var gulp = require('gulp');
var replace = require('gulp-replace-task');
var rename = require('gulp-rename');

gulp.task('config', function () {
  var params = require('./parameters.json');
  for (var item in params) {
    if (process.env[item]) {
      params[item] = process.env[item];
    }
  }
  gulp.src('config.js.dist')
    .pipe(replace({
      patterns: [
        {
          json: params
        }
      ]
    }))
    .pipe(rename('config.js'))
    .pipe(gulp.dest('./'));
});

gulp.start('config');
