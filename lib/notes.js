'use strict';

console.log('starting notes.js');
//require an input const something equals new Input



//
function Notes(action, payload) {
    this.action = action;
    this.payload = payload;
};
//that executes the correct operation, given the above object
//Whatever the command is, is what gets executed

Notes.prototype.execute = function(action, payload)  {
    if(process.argv[2] === '-a' || process.argv[2] === '-add') {
        this.add(payload);
    }
}
// Add command
Notes.prototype.add = function(payload)  {
    console.log(`Added notes: ${payload}`);
}

module.exports = Notes
