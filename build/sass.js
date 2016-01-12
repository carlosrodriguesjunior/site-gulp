var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var paths = require('../paths.json');
var stream = require('./livereload').stream;

gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(paths.css))
        .pipe(stream());
});
