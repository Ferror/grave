'use strict';

var gulp = require('gulp');
var csso = require('gulp-csso');
var cssimport = require('gulp-cssimport');
var csscomb = require('gulp-csscomb');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var csslint = require('gulp-csslint');
var stylelint = require('gulp-stylelint');


gulp.task('styles', function () {
    return gulp
        .src('grave.css')
        .pipe(cssimport({matchPattern: '*.css'}))
        .pipe(csso())
        .pipe(rename('grave.min.css'))
        .pipe(gulp.dest('dist'));
});

//Refactor *.css files by sorting it alphabeticaly
gulp.task('csslint', function () {
  return gulp
    .src('src/*.css')
    .pipe(csscomb())
    .pipe(gulp.dest('src'));
});

gulp.task('stylelint', function () {
    var reporters = {
        fix: true,
        reporters: [{
            formatter: 'string',
            console: true
        }]
    };

    return gulp
        .src('src/*.css')
        .pipe(stylelint(reporters))
        .pipe(gulp.dest('src'));
});

/**

.pipe(csso())
.pipe(rename('grave.min.css'))
.pipe(gulp.dest('dist'));
*/

gulp.task('test', function () {
  return gulp
    .src('src/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
});
