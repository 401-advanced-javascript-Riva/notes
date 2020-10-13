'use strict';

//Require calls/dependencies
console.log('starting index.js ');

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
let minimist = require('minimist')


console.log('minimist', minimist.argv);
console.log(process.argv);


const input = new Input(process.argv[2], process.argv[3]);

const result = input.parseInput(process.argv[2], process.argv[3]);
if(result !== 'Invalid input') {

}
