'use strict';

console.log('starting notes.js');
//require an input const something equals new Input



//payload is the body of the note
function Notes(action, payload) {
    this.action = action;
    this.payload = payload;
};

Notes.prototype.execute = (action, payload) => {
    if(process.argv[2] === '-a' || process.argv[2] === '-add') {
        this.add(payload);
    }
}

Notes.prototype.add = (payload) => {
    console.log(`Added notes: ${payload}`);
}

module.exports = Notes
