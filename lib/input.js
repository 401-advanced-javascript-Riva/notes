'use strict';
console.log('Reading input file');


// need an action and a payload
// Input will verify the args (the args are the user input)
//args are action and payload
// Inputs are the commands. So Here I am checking to see if a proper command was given
class Input {
    constructor(args) {
        this.action = this.isValid(args[2]) ? args[2] : null;
        this.payload = args[3];
    }
    isValid(arg) {

        if(arg === '-a' || arg === '--add') {
            //if this is a valid action, return the object
            return true ;

        } else {
            return false;
        }
    }
}


//exporting module so that index.js can use it
module.exports = Input