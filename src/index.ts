import child = require('child_process');
import fs = require('fs');
/**
 * Retrive package version
 * @param {string} packageName Name of the globally installed package
 * @returns {string} Package version
 */
function getPackageVersion(packageName: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        getGlobalDir().then((globalDir) => {
            const path = globalDir + packageName + '/package.json';
            if (fs.existsSync(path)) {
                const packageJson = fs.readFileSync(path, 'utf-8');
                resolve(JSON.parse(packageJson).version);
            } else {
                reject('Failed to find package, are you sure it is installed globally?');
            }
        }).catch(() => {
            reject('Failed to retireve global install directory');
        })
    });
}

function getGlobalDir(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        child.exec('npm config get prefix', (error, stdout) => {
            if (error) {
                reject(error);
            }
            const path = stdout.replace('\n', '') + '/lib/node_modules/';
            resolve(path);
        });
    });
}

export = getPackageVersion;
