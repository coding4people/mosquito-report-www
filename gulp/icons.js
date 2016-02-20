'use strict';

var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var conf = require('./conf');

var fontName = 'icons'+ Math.round(Math.random() * 10000);
//This task is useful only to update your icons, please do not include in default task
gulp.task('icons', function () {
  return gulp.src('icons/svg/*.svg')
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'icons/icons.scss.template',
      fontPath: '../assets/fonts/' ,
      targetPath: '../../app/icons.scss'
    }))
    .pipe(iconfont({
      fontName: fontName,
      normalize: true
    }))
    .pipe(gulp.dest(conf.paths.src + '/assets/fonts'));
});

