var gulp = require('gulp');
var paths = require('../paths.json');
var stream = require('./livereload').stream;

gulp.task('js', function () {
    gulp.src(paths.js)
        .pipe(gulp.dest(paths.js_release))
        .pipe(stream());
});
