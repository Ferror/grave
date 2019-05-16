'use strict';

var gulp = require('gulp');
var csso = require('gulp-csso');
var cssimport = require('gulp-cssimport');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var stylelint = require('gulp-stylelint');

// Prepare for distribution
gulp.task('release', function () {
    return gulp
        .src('grave.css')
        .pipe(cssimport({matchPattern: '*.css'}))
        .pipe(csso())
        .pipe(rename('grave.min.css'))
        .pipe(gulp.dest('dist'));
});

// Based of .csscomb.json file refactor the *.css files by sorting it properties alphabeticaly
gulp.task('refactor', function () {
  return gulp
    .src(['src/*.css', 'grave.css'])
    .pipe(csscomb())
    .pipe(gulp.dest('src'));
});

//Based of .stylrc.json file check it's codestyle
gulp.task('stylelint', function () {
    var reporters = {
        reporters: [{
            formatter: 'string',
            console: true
        }]
    };

    return gulp
        .src(['src/*.css', 'grave.css'])
        .pipe(stylelint(reporters));
});
