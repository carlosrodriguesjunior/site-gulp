var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('livereload', function () {
    browserSync.init({
        server: {
            baseDir: './release',
            index: 'index.html'
        },
        port: 8000,
        notify: false
    });
});

module.exports = browserSync;
