'use strict';
console.log('Reading input file');



//parsing prototype
// Inputs are the commands. So Here I am checking to see if a proper command was given
Input.prototype.parseInput = (action, payload) => {

    if(process.argv[2] === '-a' || process.argv[2] === '--add') {
        //if valid, send the object
        return new Input(action, payload);
    } else {
        return 'Invalid input';
    }
}

//constructor function
function Input(action, payload) {

this.action = action;
this.payload = payload;

}
//exporting module so that index.js can use it
module.exports = Input