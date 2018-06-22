# get-package-version  
Lightweight utility for retrieving the version of globally installed npm packages

```
Feature Completion Notice

Please note that we consider this package to be feature complete. We will continue to maintain and support this package by fixing any bugs discovered, updating dependency versions, etc. We will also consider PRs/Enhancement requests, but we do not have additional development activities planned at this time.
```

## Globally as a bin  
Install the package globally: `npm install -g get-pkg-version`  
Use it to retreive to retrieve a package version like this: `get-pkg-version <pkg-name>`  
For example: `get-pkg-version get-pkg-version`

## Programatically in node  
Install the package into your proejct: `npm install --save get-pkg-version`  

Just call the function with the name of the package you want the get the version of:
```typescript
import getPackageVersion = require('get-pkg-version');

getPackageVersion('package-name-you-want-version-of').then((version) => {
    console.log(version);
});
```  

Initially created by this [swell generator][parent-generator-url]!

[parent-generator-url]: https://github.com/swellaby/generator-swell