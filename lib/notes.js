'use strict';

console.log('starting notes.js');
//require an input const something equals new Input


 class Notes {
    constructor(args) {
         //returns random num between 0 and 1 and
    this.id = Math.floor(Math.random() *  100);
    this.text = this.execute(args) ? args.payload : null;
    console.log(args);

    }

//Whatever the command is, is what gets executed
//that executes the correct operation, given the above object
    execute(args) {
        //What method am I trying to run? If add,
        if(args.action === '--add' || args.action === '-a') {
            //reutrn result of this.add
            this.add(args);
            return true;
        } else {
            return false;
        }

    };

    add(args) {
        console.log(`Added note: ${args.payload}`);
    }

};


module.exports = Notes;
