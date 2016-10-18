'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    browserify = require('gulp-browserify'),
    pug = require('gulp-pug'),
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

// Pug
gulp.task('pug', function () {
    return gulp.src( src + 'pug/index.pug')
        .pipe(pug({
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
    gulp.watch( src + 'scss/*.scss', gulp.series('sass') );
    gulp.watch( [src + 'pug/*.pug', src + 'pug/includes/*.pug'], gulp.series('pug') );
    gulp.watch( src + 'js/**/*.js', gulp.series('bundle-js') );
});

// default
gulp.task('default', gulp.series( 'pug', 'sass', 'bundle-js', 'browser-sync', 'watch' ) );
// gulp.task('default', ['pug', 'sass', 'watch', 'bundle-js', 'browser-sync']);