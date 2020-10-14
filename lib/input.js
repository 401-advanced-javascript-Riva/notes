'use strict';
console.log('Reading input file');


// need an action and a payload
// Input will verify the args (the args are the user input)
//args are action and payload
// Inputs are the commands. So Here I am checking to see if a proper command was given
class Input {
    constructor(args) {
        //if we add additional actions(delete etc.)then I add  more if statements
        //if no valid actions are found (a valid key), then this.action is undefined
        Object.keys(args).forEach(key => {
            if(key === 'a' || key === 'add'){
                //this.action will change depending on action
                this.action = 'add';
                this.payload = args[key]
            }
        })
    }

    valid() {
        if(this.action !== undefined) {
         return true ;
        } else {
            return false;
        }
    }
}


//exporting module so that index.js can use it
module.exports = Input