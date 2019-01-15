# html-register
allow .html file require in node.js

# usage
## in nodejs
```js
require('html-register')
// an error will occurred without html-register
const helloWorld = require('./hello-world.html')
console.log(helloWorld)
```

## in mocha
`--require html-register`

# without html-register

in many case, we might need to import/require `.html`file in nodejs, for testing or other, like:

 `hello-world.html`
```html
<p>hello world</p>
```
import/require in js file
`example.js`
```
const helloWorld = require('./hello-world.html')
console.log(helloWorld)
```

an error occurred:
```bash
(function (exports, require, module, __filename, __dirname) { <p>hello world</p>
                                                              ^

SyntaxError: Unexpected token <
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:617:28)
    at Object.Module._extensions..js (module.js:664:10)
    at Module.load (module.js:566:32)
    at tryModuleLoad (module.js:506:12)
    at Function.Module._load (module.js:498:3)
    at Module.require (module.js:597:17)
    at require (internal/module.js:11:18)
```