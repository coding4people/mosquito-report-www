'use strict';

var gulp = require('gulp');
var path = require('path');
var through2 = require('through2');
var File = require('vinyl');
var yaml = require('js-yaml');
var angularTemplatecache = require('gulp-angular-templatecache');

module.exports = function(srcFiles, partialsDest) {
  var mask = '.tpl';
  var reg = /\{\{[\s]*[\"\']?([\w\.]+)[\"\']?[\s]*\|[\s]*translate[\s]*\}\}/g;

  function replace(strings, ext) {
    return through2.obj(function(src, enc, cb) {
      this.push(new File({
        cwd: src.cwd,
        base: src.base,
        path: path.join(src.base, path.relative(src.base, src.path).replace(mask, ext)),
        contents: new Buffer(
          src.contents.toString().replace(reg, function (match, capture) {
            return capture.split('.').reduce(function(obj, key){
              return obj[key] || '';
            }, strings);
          }))
      })); cb();
    });
  }

  var translate = through2.obj(function(file, enc, cb) {
    var localeExt = '.' + path.relative(file.base, file.path).replace(/\..+$/, '');

    gulp.src(srcFiles)
      .pipe(replace(yaml.load(file.contents).mosquito, localeExt))
      .pipe(through2.obj(function(file, enc, cb) {
        translate.push(file);
        this.push(file.clone());
        cb();
      }))
      .pipe(angularTemplatecache('templateCacheHtml' + localeExt + '.js', {
        module: 'mosquito',
        root: 'app'
      }))
      .pipe(gulp.dest(partialsDest))
      .on('finish', cb);
  });

  return translate;
};
