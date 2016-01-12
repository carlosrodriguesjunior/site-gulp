var gulp = require('gulp');
var paths = require('../paths.json');
var stream = require('./livereload').stream;

gulp.task('fonts', function () {
    gulp.src(paths.fonts)
        .pipe(gulp.dest(paths.fonts_release))
        .pipe(stream());
});
