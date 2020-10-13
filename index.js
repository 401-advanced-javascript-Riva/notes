'use strict';

'use strict';

//Require calls/dependencies
console.log('starting index.js ');

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const argv = require('minimist')(process.argv.slice(2));


console.log('minimist', minimist.argv);
console.log(process.argv);


const input = new Input(process.argv[2], process.argv[3]);

const result = input.parseInput(process.argv[2], process.argv[3]);
  if(result !== 'Invalid input') {
     const newNoteAdded =  new Notes(process.argv[2], process.argv[3]);
     newNoteAdded.execute(process.argv[2], process.argv[3]);
  } else {
    console.log('Not a valid command! Try again.');
 }


