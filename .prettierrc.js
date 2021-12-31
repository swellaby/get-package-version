'use strict';

module.exports = {
    endOfLine: 'lf',
    singleQuote: true,
    bracketSpacing: true,
    overrides: [
        {
            files: ['*.js', '*.ts'],
            options: {
                tabWidth: 4,
            },
        },
    ],
};
