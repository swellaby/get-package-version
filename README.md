# get-package-version  
Lightweight utility for retrieving the version of globally installed npm packages

[![npm Version Badge][npm-version-badge]][npm-package-url]
[![npm Downloads Badge][npm-downloads-badge]][npm-package-url]
[![License Badge][license-badge]][license-url]  

[![Linux CI Badge][linux-ci-badge]][linux-ci-url]
[![Mac CI Badge][mac-ci-badge]][mac-ci-url]
[![Windows CI Badge][windows-ci-badge]][windows-ci-url]  

[![Test Results Badge][tests-badge]][tests-url]
[![Coverage Badge][coverage-badge]][coverage-url]
[![Sonar Quality Gate Badge][sonar-quality-gate-badge]][sonar-url]

**Feature Completion Notice**

*Please note that we consider this package to be feature complete. We will continue to maintain and support this package by fixing any bugs discovered, updating dependency versions, etc. We will also consider PRs/Enhancement requests, but we do not have additional development activities planned at this time.*


## CLI
Install the package globally:  
```sh
npm install -g get-pkg-version
```

Use it to retrieve a package version like this:  
```
get-pkg-version <pkg-name>
```  

For example: `get-pkg-version get-pkg-version`

## API  
Install the package into your project:  
```sh
npm install --save get-pkg-version
```  

Just call the function with the name of the package you want the get the version of:
```typescript
import getPackageVersion = require('get-pkg-version');

getPackageVersion('package-name-you-want-version-of').then((version) => {
    console.log(version);
});
```  


Initially created by this [swell generator][parent-generator-url]!

[parent-generator-url]: https://www.npmjs.com/package/generator-swell

[linux-ci-badge]: https://img.shields.io/azure-devops/build/swellaby/opensource/97/master.svg?label=linux%20build&style=flat-square
[linux-ci-url]: https://dev.azure.com/swellaby/OpenSource/_build/latest?definitionId=97
[mac-ci-badge]: https://img.shields.io/azure-devops/build/swellaby/opensource/94/master.svg?label=mac%20build&style=flat-square
[mac-ci-url]: https://dev.azure.com/swellaby/OpenSource/_build/latest?definitionId=94
[windows-ci-badge]: https://img.shields.io/azure-devops/build/swellaby/opensource/95/master.svg?label=windows%20build&style=flat-square
[windows-ci-url]: https://dev.azure.com/swellaby/OpenSource/_build/latest?definitionId=95
[coverage-badge]: https://img.shields.io/azure-devops/coverage/swellaby/opensource/97/master.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/swellaby/get-package-version/branch/master
[tests-badge]: https://img.shields.io/azure-devops/tests/swellaby/opensource/97/master.svg?label=unit%20tests&style=flat-square
[tests-url]: https://dev.azure.com/swellaby/OpenSource/_build/latest?definitionId=97&view=ms.vss-test-web.build-test-results-tab
[npm-version-badge]: https://img.shields.io/npm/v/get-pkg-version.svg?style=flat-square
[npm-downloads-badge]: https://img.shields.io/npm/dt/get-pkg-version.svg?style=flat-square
[npm-package-url]: https://www.npmjs.com/package/get-pkg-version
[license-url]: ./LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/get-package-version.svg?style=flat-square&color=informational
[sonar-quality-gate-badge]: https://img.shields.io/sonar/https/sonarcloud.io/swellaby:get-package-version/quality_gate.svg?style=flat-square
[sonar-url]: https://sonarcloud.io/dashboard?id=swellaby%3Aget-package-version
