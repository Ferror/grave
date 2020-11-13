'use strict';

const gulp = require('gulp');
const csso = require('gulp-csso');
const cssimport = require('gulp-cssimport');
// var csscomb = require('gulp-csscomb');
const rename = require('gulp-rename');
const stylelint = require('gulp-stylelint');

// Prepare for distribution
gulp.task('release', function () {
    if (process.argv[3] === '--light') {
        return gulp
            .src('grave-light.css')
            .pipe(cssimport({matchPattern: '*.css'}))
            .pipe(csso())
            .pipe(rename('grave-light.min.css'))
            .pipe(gulp.dest('dist'));
    }

    if (process.argv[3] === '--dark') {
        return gulp
            .src('grave-dark.css')
            .pipe(cssimport({matchPattern: '*.css'}))
            .pipe(csso())
            .pipe(rename('grave-dark.min.css'))
            .pipe(gulp.dest('dist'));
    }

    return gulp
        .src('grave.css')
        .pipe(cssimport({matchPattern: '*.css'}))
        .pipe(csso())
        .pipe(rename('grave.min.css'))
        .pipe(gulp.dest('dist'));
});

// Based of .csscomb.json file refactor the *.css files by sorting it properties alphabeticaly
// gulp.task('refactor', function () {
//   return gulp
//     .src(['src/*.css', 'grave.css'])
//     .pipe(csscomb())
//     .pipe(gulp.dest('src'));
// });

//Based of .stylrc.json file check it's codestyle
gulp.task('stylelint', function () {
    var reporters = {
        reporters: [{
            formatter: 'string',
            console: true
        }]
    };

    return gulp
        .src([
            'src/*.css',
            'src/form/*.css',
            'src/form/input/*.css',
            'src/structure/*.css',
            'src/text/*.css',
            'src/vendor/*.css',
            'grave.css',
            'grave-dark.css',
            'grave-light.css'
        ])
        .pipe(stylelint(reporters));
});
