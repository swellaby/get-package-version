# get-package-version  
Lightwieght utility for retrieving the version of globally installed npm packages

## Globally as a bin  
Coming soon

## Programatically in node  
Install the package into your proejct `npm install --save get-package-version`  

Import it into your application and pass it a version:  
```  
import getPackageVersion = require('get-package-version');
getPackageVersion('package-name-you-want-version-of').then((version) => {
    console.log(version);
});
```  

Initially created by the [swell generator][parent-generator-url]!

[parent-generator-url]: https://github.com/swellaby/generator-swell