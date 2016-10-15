'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    browserify = require('gulp-browserify'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify');

//----- Config -----//
var build = './build/',
    src = './app/';

// SASS
gulp.task('sass', function () {
    return gulp.src( src + 'scss/style.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 40 versions'],
            cascade: true
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest( build + 'css/' ));
});

// JADE
gulp.task('jade', function () {
    return gulp.src( src + 'jade/index.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest( build ));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: build
        }
    });
});

gulp.task('bundle-js', function () {
    return gulp.src(src + 'js/index.js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest( build + 'js/' ));
});

// Watch
gulp.task('watch', function() {
    gulp.watch( src + 'scss/*.scss', ['sass']);
    gulp.watch( [src + 'jade/*.jade', src + 'jade/includes/*.jade'], ['jade']);
    gulp.watch( src + 'js/**/*.js', ['bundle-js-custom']);
});

// default
gulp.task('default', ['jade', 'sass', 'watch', 'bundle-js', 'browser-sync']);
