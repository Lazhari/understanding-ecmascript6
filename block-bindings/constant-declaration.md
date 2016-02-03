> Variables declared using const are considered constants, meaning their values cannot be changed once set.
```
'use strict'

const maxItems = 30;

// Syntax error: missing initialization
const name;
```
> The maxItems variable is initialized, so its const declaration should work without a problem. The name variable, however, would cause a syntax error if you tried to run the program containing this code, because name is not initialized.
