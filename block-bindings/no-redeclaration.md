If an identifier has already been defined in a scope, then using the identifier in a let declaration inside that scope causes an error to be thrown. For example:
```
var count = 30;

// Syntax error
let count = 40;
```
