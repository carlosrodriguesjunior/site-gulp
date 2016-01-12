var gulp = require('gulp');
var paths = require('./paths.json');

require('require-dir')('./build');

gulp.task('dev', ['clean', 'livereload', 'libs', 'html', 'sass', 'js', 'fonts'], function () {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.libs, ['libs']);
  gulp.watch(paths.js, ['js']);
});


gulp.task('release', ['clean','livereload','inject', 'sass','fonts'], function () {
  gulp.watch(paths.html, ['inject']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.libs, ['inject']);
  gulp.watch(paths.js, ['inject']);
});
