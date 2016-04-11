var gulp = require('gulp');
var gulpIf = require('gulp-if');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ['app', 'client']
    }
  });
});

gulp.task('compile-js', function(){
  return browserify({
      entries: './client/app.js',
      debug: true
    })
    .transform("babelify", {presets: ["es2015", "react"], plugins: ["transform-class-properties"]})
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./app/js'));
});

gulp.task('useref', ['compile-js'], function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref'],
    callback
  );
});

gulp.task('watch', ['browserSync', 'sass', 'useref'], function(){
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('client/**/*.js', ['useref']);
  gulp.watch('shared/**/*.js', ['useref']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/css/**/*.css', browserSync.reload);
});

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'useref', 'watch'],
    callback
  );
});