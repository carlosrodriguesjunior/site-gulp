var gulp = require('gulp');
var del = require('del');
var paths = require('../paths.json');

gulp.task('clean', function () {
    del.sync(paths.release);
});
