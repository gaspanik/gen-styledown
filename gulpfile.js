var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  });
var browserSync = require('browser-sync').create();

gulp.task('bs', function() {
  browserSync.init({
    server: {
      baseDir: "dist/styleguide",
      startPath: "/index.html"
    },
    notify: true,
    reloadDelay: 2000
  });
});

gulp.task('guide', function() {
  gulp.src('src/styleguide/**')
    .pipe($.shell([
      'styledown src/styleguide/index.md src/styleguide/config.md > dist/styleguide/index.html'
    ]))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch(['src/styleguide/**'], ['guide']);
});

gulp.task('default', ['bs', 'guide', 'watch']);
