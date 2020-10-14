'use strict';

console.log('starting notes.js');
//require an input const something equals new Input


 class Notes {
    constructor(args) {
         //returns random num between 0 and 1 and
    this.id = Math.floor(Math.random() *  100);
    this.text = args.payload;
    }

//Whatever the command is, is what gets executed
//that executes the correct operation, given the above object
    execute(action) {
        //What method am I trying to run? If add,
        if(action === '--add' || action === '-a') {
            //reutrn result of this.add
            return this.add();
        } else {
            console.error('bad action');
        }

    };

    add() {
        console.log('Added note', this.text);
    }

};








module.exports = Notes;
