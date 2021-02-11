  var gulp        = require('gulp');
  var browserSync = require('browser-sync').create();
  var sass        = require('gulp-sass');
  const {src, task} = require('gulp');
  const eslint = require('gulp-eslint');
  const jsdoc = require('gulp-jsdoc3');
 
    gulp.task('doc', function (cb) {
        const config = require('./jsdoc.json');
    gulp.src(['./src/**/*.js'], {read: false})
        .pipe(jsdoc(config,cb));
    });
  
  // Static Server + watching scss/html files
  gulp.task('serve', gulp.series['sass'], function() {
  
      browserSync.init({
          server: "./"
      });
  
      gulp.watch("./css/*.scss", gulp.series['sass']);
      gulp.watch("./*.html").on('change', browserSync.reload);
      gulp.watch("./js/*.js").on('change', browserSync.reload);
  });
  
  // Compile sass into CSS & auto-inject into browsers
  gulp.task('sass', function() {
      return gulp.src("./css/*.scss")
          .pipe(sass())
          .pipe(gulp.dest("app/css"))
          .pipe(browserSync.stream());
  });

  gulp.task('sass:watch', function()
  {
    gulp.watch("./css/*.scss", gulp.series['sass']);
  });
  
  task('default', () => {
    return src(['./js/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});




  gulp.task('default', gulp.series['serve']);