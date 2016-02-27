var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  });
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('bs', function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    notify: true,
    xip: false
  });
});


gulp.task('guide', function() {
  gulp.src('src/styleguide/*.md')
    .pipe($.shell([
      'styledown src/styleguide/index.md src/styleguide/config.md > dist/styleguide/index.html'
    ]));
});

gulp.task('watch', function() {
  gulp.watch(['src/styleguide/**'], ['guide']);
  gulp.watch(['dist/styleguide/index.html']).on("change", reload);
});

gulp.task('default', ['bs', 'guide', 'watch']);
