module.exports = function(src) {
  var gulp = require('gulp');
  var path = require('path');
  var conf = require('./conf');
  var through2 = require('through2');
  var File = require('vinyl');

  var templates = '\n';

  return through2.obj(function(file, enc, cb) {
    var fileName = path.relative(file.base, file.path);
    var lang = /.([\w_]+).js$/.exec(fileName)[1];

    templates += 'templates[\'' + lang + '\'] = \'' + fileName + '\';\n';

    cb();
  }, function(cb) {
    var stream = this;

    src
      .pipe(through2.obj(function(file, enc, cb) {
        this.push(new File({
          base: conf.paths.tmp,
          path: path.join(conf.paths.tmp, 'templateCacheHtml.js'),
          contents: new Buffer(file.contents.toString().replace('/* TEMPLATES */', templates))
        }));

        cb();
      }))
      .pipe(gulp.dest(conf.paths.tmp))
      .pipe(through2.obj(function(file, enc, cb) {
        stream.push(file);
        cb();
      }))
      .on('finish', cb);
  });
};
