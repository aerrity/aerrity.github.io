var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var path = require('path');
var browserSync = require('browser-sync').create();

var jsDir = 'js';
var targetJSDir = 'dist/js';
var lessDir = 'less';
var targetCSSDir = 'dist/css';

// Minify JS and save to target JS directory 
gulp.task('minify-js', function () {
    gulp.src(jsDir + '/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest(targetJSDir))
    .pipe(notify('JS minified'));
});

// Compile LESS and save to target CSS directory
gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(notify('CSS minified'));
});

//watch for changes in certain dirs and run tasks
gulp.task('watch', function () {
    gulp.watch(lessDir + '/*.less', ['less']);
    gulp.watch(jsDir + '/*.js', ['minify-js']);
});

// Static browser-sync server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        files: [targetJSDir+'/*.js',targetCSSDir+'/*.css','pages/*.html','kabzy/*.html']
    });
});

// Default tasks to run with gulp
gulp.task('default', ['minify-js', 'less', 'browser-sync', 'watch']);
