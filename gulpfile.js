var gulp = require('gulp');
var exec = require('child_process').exec;
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('guide', function () {
  exec('styledown src/index.md src/config.md > styleguide/index.html');
});

gulp.task('serve', ['guide'], function() {
  browserSync.init({
    server: {
      baseDir: "styleguide/",
    },
    notify: true,
    reloadDelay: 1000
  });
});

gulp.task('watch', function() {
  gulp.watch(['src/**'], ['guide', reload]);
});

gulp.task('default', ['serve', 'watch']);
