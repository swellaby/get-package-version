'use strict';

import getVersion = require('../src/index');

function usage() {
    console.log('Usage: get-pkg-version <package-name>');
}

if (!process.argv[2]) {
    usage();
    process.exit(1);
}

getVersion(process.argv[2]).then((version) => {
    console.log(version);
}).catch((err) => {
    console.error(err);
});