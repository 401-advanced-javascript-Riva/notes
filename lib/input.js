'use strict';
console.log('Reading input file');


/*
- need an action and a payload
- Input will verify the args (the args are the user input/command)
- Inputs are the commands. So Here I am checking to see if a proper command was given
*/

class Input {
    constructor(args) {
        /*
        - if we add additional actions(delete etc.)then I add  more if statements
        - if no valid actions are found (a valid key, as key will be action bec of minimist),
          then this.action is undefined
        - Object.keys() returns all keys in an object when iterator method is added
        */
        Object.keys(args).forEach(key => {
            if(key === 'a' || key === 'add'){
                //this.action will change depending on action
                //setting the action to add
                this.action = 'add';
                this.payload = args[key]
            } else if(key === 'd' || key === 'delete'){
                this.action = 'delete';
                this.payload = args[key];
            }
        })
    }
// adding a method of valid() that checks if input is valid and if so, returns true otherwise false
// immediately returned the result of the expression rather than if else block to return true or false
    valid() {
        return this.action !== undefined


    }
}


//exporting module so that index.js can use it
module.exports = Input