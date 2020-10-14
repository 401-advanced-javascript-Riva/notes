'use strict';

'use strict';

//Require calls/dependencies
console.log('starting index.js ');

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const minimist =request('minimist');

// This slices off the first two indexes
let args = minimist(process.argv.slice(2));
const request = new Input(args);
const input = new Input(proces.argv);

//if input action is valid, then create new note
//note has an id and a payload which will be added as text
//
  if(input.action) {
      let note = new Notes(input);
      note.execute(input.action);
  } else {
      throw new Error('invalid action');
  }


