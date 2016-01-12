var gulp = require('gulp');
var paths = require('../paths.json');
var htmlreplace = require('gulp-html-replace');
var stream = require('./livereload').stream;
var inject = require('gulp-inject');

 gulp.task('inject',['build'],function(){
   gulp.src(paths.index_html)
   .pipe(htmlreplace({
       'js': '<script src="app/build.js"></script>'
      }))
     .pipe(gulp.dest(paths.release))
     .pipe(stream());
 });
