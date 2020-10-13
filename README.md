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

### How to initialize/run the application:
**The following software is required to be installed on your system:**
- Node.js
 Install npm: `npm i -g` and then use  `npm init`

 - MongoDB
 - The MongoDB Node.js Driver allows you to easily interact with MongoDB databases from within Node.js applications. You'll need the Driver to connect to your database
 Install MongoDB: `npm install mongodb`
 - The easiest way to get started with MongoDB is to use Atlas, MongoDB’s fully-managed database-as-a-service. Check out the docs [here](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database)

- Install minimist: `npm install minimist`
- Load the minimist module in index.js:
 `const minimist = require('minimist')`
- Confirm that `index.js` as entrypoint for this app

### To run:
- On the command line, run:

`node --add or -a 'New Note'`


###H ow to use your library

### Tests: (To come)

## How do you run tests? (To come)



### Phase1: Application Setup:

```
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
let minimist = require('minimist')

```
