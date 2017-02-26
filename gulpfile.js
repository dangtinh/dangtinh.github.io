var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost');
    sass = require('gulp-sass');
    browserSync = require('browser-sync');

var paths = {
  cssSource: 'src/css',
  cssDestination: 'dist/css'
};

// gulp.task('styles', function() {
//   return gulp.src(paths.cssSource + '**/*.css')
//     .pipe(sourcemaps.init())
//     .pipe(postcss([
//       lost(),
//       autoprefixer()
//     ]))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest(paths.cssDestination));
// });


gulp.task('styles', function() {
  return gulp.src( 'src/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css'));
});



// gulp.task('sass', function(){
//   return gulp.src('src/lapa.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(gulp.dest('dist/css'))
// });

gulp.watch('src/lost.css', ['styles']);

gulp.task('default', ['styles']);

// gulp.task('watch', function(){
//   gulp.watch('src/**/*.scss', ['sass']); 
//   // Other watchers
// });

// gulp.task('default', ['sass']);