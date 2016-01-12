var gulp = require('gulp');
var paths = require('../paths.json');
var stream = require('./livereload').stream;

gulp.task('html', function () {
    gulp.src([paths.html, paths.not_html])
        .pipe(gulp.dest(paths.release))
        .pipe(stream());
});
