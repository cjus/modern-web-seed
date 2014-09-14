// Include gulp
var gulp = require('gulp');

var outputDir = './';

// Include Our Plugins
var jshint = require('gulp-jshint')
  , sass = require('gulp-sass')
  , uglify = require('gulp-uglify')
  , clean = require('gulp-clean')
  , connect = require('gulp-connect')
  , usemin = require('gulp-usemin')
  , minifyHtml = require('gulp-minify-html')
  , minifyCss = require('gulp-minify-css')
  , ngAnnotate = require('gulp-ng-annotate')
  , rev = require('gulp-rev')
  , imagemin = require('gulp-imagemin')
  , pngcrush = require('imagemin-pngcrush');


gulp.task('lint', function() {
  'use strict';
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
  'use strict';
  return gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('clean', function() {
  'use strict';
  return gulp.src(['dist/*'], {read: false})
    .pipe(clean());
});

gulp.task('copy', function() {
  'use strict';
  var filesToCopy = [
    './fonts/**/*.*',
    './js/iebs/**/*.*.'
  ];
  return gulp.src(filesToCopy, { base: './' })
    .pipe(gulp.dest('dist'));
});

gulp.task('image', function() {
  'use strict';
  return gulp.src('./images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        {removeViewBox: false}
      ],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('dist', ['lint', 'clean', 'sass', 'copy', 'image'], function() {
  'use strict';
  gulp.src(['./views/*.html'])
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      html: [minifyHtml({empty: true})],
      js: [ngAnnotate(), uglify(), rev()]
    }))
    .pipe(gulp.dest('dist/views'));
  gulp.src('./*.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      html: [minifyHtml({empty: true})],
      js: [ngAnnotate(), uglify(), rev()]
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('reload', function() {
  'use strict';
  return gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  'use strict';
  gulp.watch('./scss/*.scss', ['sass', 'reload']);
  gulp.watch('./index.html', ['reload']);
  gulp.watch('./views/**/*.html', ['reload']);
  gulp.watch('./js/**/*.js', ['reload']);
});

gulp.task('connect', function() {
  'use strict';
  return connect.server({
    root: [outputDir],
    port: 8080, // optional
    livereload: true
  });
});

gulp.task('default', ['watch', 'connect']);
