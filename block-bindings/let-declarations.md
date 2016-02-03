# let Declarations

```
'use strict';

function getValue(condition) {
    
    if(condition) {
        let value = "blue";

        // other code

        return value;
    } else {
        //Value doesn't exist here
        
        return null
    }

    // Value does't exist here 

}
```
> This version of the getValue function behaves much closer to how you’d expect it to in other C-based languages. Since the variable value is declared using let instead of var, the declaration isn’t hoisted to the top of the function definition, and the variable value is destroyed once execution flows out of the if block. If condition evaluates to false, then value is never declared or initialized.
