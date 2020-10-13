'use strict';
console.log('Reading input file');



//parsing prototype
Input.prototype.parseInput = (action, payload) => {

    if(process.argv[2] === '-a' || process.argv[2] === '-add') {
        return new Input(action, payload);
    } else {
        return 'Invalid input';
    }
}

//constructor here with minimist with action and payload (for the input)
//will have prototypes that will return actions and payload and validation
//parsing input would happen in here

function Input(action, payload) {

this.action = action;
this.payload = payload;

}

module.exports = Input