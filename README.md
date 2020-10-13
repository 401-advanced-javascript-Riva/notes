# LAB 1- CLASS 1
## PROJECT: notes

*Author: Riva Davidowski**

**A terminal based (CLI) application allowing users to easily create and manage a list of categorized notes**

1. As a user, I want to be able to call the application using command line standard syntax, indicating the text of a note I wish to add so that the system will eventually be able to save this note.
2. As a user, I expect that the application will confirm my intent.

-----------------------

### Setup


- PORT - To come
- MONGODB_URI - To come

**How to initialize/run the application:**

- Install npm: `npm install` and use  `npm init`
- Confirm that `index.js` as entrypoint for this app
- Install minimist: `npm install minimist`
- Load the minimist module in index.js:
 `const minimist = require('minimist')`

**To run:**
- On the command line, run:

`node --add or -a 'New Note'`


**How to use your library**

**Tests:** To come

**How do you run tests?**



### Phase1: Application Setup:

```
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
let minimist = require('minimist')

```
