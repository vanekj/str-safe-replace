## How to use
```javascript
let strReplace = require('str-safe-replace');

let result = strReplace.replace({
	replace: 'world',
	with:    'World',
	from:    'Hello world!'
});

console.log(result); // Hello World!
```