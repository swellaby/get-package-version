'use strict';

module.exports = {
    extends: '@swellaby/eslint-config/lib/bundles/ts-node',
    overrides: [
        {
            files: ['scripts/**/*.js'],
            rules: {
                quotes: ['off'],
            },
        },
        {
            files: ['{bin,src,test}/*.js'],
            rules: {
                indent: ['off'],
            },
        },
    ],
};
