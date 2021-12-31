'use strict';

import child = require('child_process');
import fs = require('fs');

/**
 * Gets the global install directory
 * @private
 * @returns {string}
 */
const getGlobalDir = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        child.exec('npm root -g', (error, stdout) => {
            if (error) {
                reject(error);
            }
            const path = stdout.replace('\n', '');
            resolve(path + '/');
        });
    });
};

/**
 * Retrieve package version
 * @param {string} packageName - Name of the globally installed package
 * @returns {string}
 */
const getPackageVersion = (packageName: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        getGlobalDir()
            .then((globalDir) => {
                const path = globalDir + packageName + '/package.json';
                if (fs.existsSync(path)) {
                    const packageJson = fs.readFileSync(path, 'utf-8');
                    resolve(JSON.parse(packageJson).version);
                } else {
                    reject(
                        'Failed to find package, are you sure it is installed globally?'
                    );
                }
            })
            .catch(() => {
                reject('Failed to retrieve global install directory');
            });
    });
};

export = getPackageVersion;
