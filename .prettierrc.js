'use strict';

module.exports = {
    endOfLine: 'lf',
    bracketSpacing: true,
    tabWidth: 2,
    overrides: [
        {
            files: ['*.js', '*.ts'],
            options: {
                tabWidth: 4
            }
        }
    ]
};
