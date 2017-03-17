'use strict';

var path = require('path');
var srcRoot = './src';
var scriptsRoot = './scripts';
var testRoot = './test';
var typescriptDefinitions = './node_modules/@types/*/index.d.ts';
var tsconfig = './tsconfig.json';

module.exports = {
    packageJSON: path.resolve('package.json'),
    root: srcRoot,
    allJavascript: [
        './**/*.js',
        '!node_modules/**'
    ],
    allTranspiledJavascript: [
        srcRoot + '/**/*.js*',
        testRoot + '/**/*.js*',
        scriptsRoot + '**/*.js*'
    ],
    appTranspiledJavaScript: srcRoot + '/**/*.js',
    javascriptUnitTests: testRoot + '/**/*.js',
    allTypescript: [
        srcRoot + '/**/*.ts',
        testRoot + '/**/*-tests.ts',
        scriptsRoot + '**/*.ts',
        typescriptDefinitions
    ],
    appTypescript: [
        srcRoot + '/**/*.ts',
        testRoot + '/**/*-tests.ts',
        scriptsRoot + '**/*.js*'        
    ],
    jsScripts: scriptsRoot + '/**/*.js',
    jsExecutable: './bin',
    typescriptCompilerOptions: tsconfig
};
