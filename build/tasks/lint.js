'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
const gulpTslint = require('gulp-tslint');
const tslint = require('tslint');
var gulpConfig = require('./../gulp-config');

gulp.task('eslint', ['transpile'], function () {
    return gulp.src(gulpConfig.allJavascript)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('tslint', function () {
    const program = tslint.Linter.createProgram(gulpConfig.typescriptCompilerOptions);

    return gulp.src(gulpConfig.allTypescript)
        .pipe(gulpTslint({
            formatter: 'stylish',
            program: program
        }))
        .pipe(gulpTslint.report({
            summarizeFailureOutput: false
        }));
});