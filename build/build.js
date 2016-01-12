var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var paths = require('../paths.json');
var stream = require('./livereload').stream;

gulp.task('build',['templateCache'], function () {

  return  gulp.src(paths.jsToRelease)
        .pipe(plumber())
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.app_release))
        .pipe(stream());
});
