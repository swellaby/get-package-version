# get-package-version  
Lightwieght utility for retrieving the version of globally installed npm packages

## Globally as a bin  
Install the package globally: `npm install -g get-pkg-version`  
Use it to retreive to retrieve a package version like this: `get-pkg-version <pkg-name>`  
For example: `get-pkg-version get-pkg-version`

## Programatically in node  
Install the package into your proejct: `npm install --save get-pkg-version`  

Import it into your application and pass it a version:  
```  
import getPackageVersion = require('get-pkg-version');
getPackageVersion('package-name-you-want-version-of').then((version) => {
    console.log(version);
});
```  

Initially created by the [swell generator][parent-generator-url]!

[parent-generator-url]: https://github.com/swellaby/generator-swell