If an identifier has already been defined in a scope, then using the identifier in a let declaration inside that scope causes an error to be thrown. For example:
```
var count = 30;

// Syntax error
let count = 40;
```

```
'use strict';

function getValue (condition) {

    var count = 30;

    // Does not throw an error
    if (condition) {
        let count = 40;
        // more code
        
        return count; 
    } else {
        return null;
    }
}

```
>  This let declaration doesn’t throw an error because it creates a new variable called count within the if statement, instead of creating count in the surrounding block. Inside the if block, this new variable shadows the global count, preventing access to it until execution leaves the block.
