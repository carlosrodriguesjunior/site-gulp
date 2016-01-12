var gulp = require('gulp');
var paths = require('../paths.json');
var templateCache = require('gulp-angular-templatecache');

gulp.task('templateCache', function () {
  return gulp.src([paths.html, paths.not_html])
    .pipe(templateCache({module:'appGulp'}))
    .pipe(gulp.dest(paths.app));
});
