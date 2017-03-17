'use strict';

var gulp = require('gulp');
var sourceMaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var header = require('gulp-header');
var chmod = require('gulp-chmod');
var gulpConfig = require('./../gulp-config');

gulp.task('transpile', ['clean'], function() {
    var tsResult = gulp.src(gulpConfig.allTypescript, { base: '.' })
        .pipe(sourceMaps.init())
        .pipe(tsc(gulpConfig.typescriptCompilerOptions))
        .on('error', function(err) {
            throw new Error('TypeScript transpilation error: ' + err);
        });

    return tsResult.js
        .pipe(sourceMaps.write('.', { includeContent: false, sourceRoot: './' }))
        .pipe(gulp.dest(''));
});

gulp.task('add-shebangs', function (){
    return gulp.src(gulpConfig.jsScripts)
        .pipe(header('#!/usr/bin/env node\n'))
        .pipe(chmod(0o755))
        .pipe(gulp.dest(gulpConfig.jsExecutable));
});

