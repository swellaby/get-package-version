# get-package-version  
Lightweight utility for retrieving the version of globally installed npm packages

[![npm Version Badge][npm-version-badge]][npm-package-url]
[![npm Downloads Badge][npm-downloads-badge]][npm-package-url]
[![License Badge][license-badge]][license-url]  

[![CircleCI Badge][circleci-badge]][circleci-url]
[![AppVeyor Badge][appveyor-badge]][appveyor-url]
[![Test Results Badge][tests-badge]][sonar-tests-url]
[![Codecov Badge][codecov-badge]][codecov-url]
[![Sonar Quality Gate Badge][sonar-quality-gate-badge]][sonar-url]

**Feature Completion Notice**

*Please note that we consider this package to be feature complete. We will continue to maintain and support this package by fixing any bugs discovered, updating dependency versions, etc. We will also consider PRs/Enhancement requests, but we do not have additional development activities planned at this time.*


## CLI
Install the package globally:  
```sh
npm install -g get-pkg-version
```

Use it to retreive to retrieve a package version like this:  
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

[circleci-badge]: https://img.shields.io/circleci/project/github/swellaby/get-package-version.svg?label=linux%20build
[circleci-url]: https://circleci.com/gh/swellaby/get-package-version
[appveyor-badge]: https://img.shields.io/appveyor/ci/swellaby/get-package-version.svg?label=windows%20build
[appveyor-url]: https://ci.appveyor.com/project/swellaby/get-package-version
[tests-badge]: https://img.shields.io/appveyor/tests/swellaby/get-package-version.svg
[codecov-badge]: https://img.shields.io/codecov/c/github/swellaby/get-package-version.svg
[codecov-url]: https://codecov.io/gh/swellaby/get-package-version
[npm-version-badge]: https://img.shields.io/npm/v/get-pkg-version.svg
[npm-downloads-badge]: https://img.shields.io/npm/dt/get-pkg-version.svg
[npm-package-url]: https://www.npmjs.com/package/get-pkg-version
[license-url]: ./LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/get-package-version.svg
[sonar-quality-gate-badge]: https://sonarcloud.io/api/project_badges/measure?project=swellaby%3Aget-package-version&metric=alert_status
[sonar-url]: https://sonarcloud.io/dashboard?id=swellaby%3Aget-package-version
[sonar-tests-url]: https://sonarcloud.io/component_measures?id=swellaby%3Aget-package-version&metric=tests