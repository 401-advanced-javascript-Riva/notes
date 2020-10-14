'use strict';
console.log('Reading input file');


// need an action and a payload
// Input will verify the args (the args are the user input)
//args are action and payload
// Inputs are the commands. So Here I am checking to see if a proper command was given
class Input {
    constructor(args) {
        this.method = this.isValid(args.method) ? args.method : 'GET';
        this.url = args.url
    }
    isValid(arg) {

        if(arg === '-a' || arg === '--add') {
            //if this is a valid action, return the object
            return {
                command: this.action,
                text: this.payload
            }

        } else {
            return new Error('Invalid command');
        }
    }
}






// //http
//  class HTTP {
//      constructor() {
//          this.response = null;
//      }
//  }
//  module.exports = HTTP;
//exporting module so that index.js can use it
module.exports = Input