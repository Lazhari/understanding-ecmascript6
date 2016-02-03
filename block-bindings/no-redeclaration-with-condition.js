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
