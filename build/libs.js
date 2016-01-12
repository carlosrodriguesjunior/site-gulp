var gulp = require('gulp');
var paths = require('../paths.json');
var stream = require('./livereload').stream;

gulp.task('libs', function () {
    gulp.src(paths.libs)
        .pipe(gulp.dest(paths.libs_release))
        .pipe(stream());
});
