'use strict';

'use strict';

//Require calls/dependencies
console.log('starting index.js ');

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const minimist = require('minimist');

// This slices off the first two indexes and is the method for minimist
let args = minimist(process.argv.slice(2));

console.log(args);
//args is an object that holds whatever command and arguments are passed in
const input = new Input(args);

//if input action is valid, then create new note
//note has an id and a payload which will be added as text

  if(input.valid()) {
     new Notes(input);
  } else {
      throw new Error('invalid action');
  }


