# LAB 1- CLASS 1
## PROJECT: notes

*Author: Riva Davidowski**

**A terminal based (CLI) application allowing users to easily create and manage a list of categorized notes**

**Phase 1 Requirements:**

1. As a user, I want to be able to call the application using command line standard syntax, indicating the text of a note I wish to add so that the system will eventually be able to save this note.
2. As a user, I expect that the application will confirm my intent.

**Phase 2 Requirements:**

1. As a user, I want to be able to call the application using command line standard syntax, indicating the text of a note I wish to add so that the system will eventually be able to save this note.
2. As a user, I expect that the application will confirm my intent.

-----------------------

## Setup


- PORT - To come
- MONGODB_URI - To come

### How to initialize/run the application:
**The following software is required to be installed on your system:**
- Node.js

 Install npm: `npm i -g` and then use  `npm init`

 - MongoDB

The MongoDB Node.js Driver allows you to easily interact with MongoDB databases from within Node.js applications. You'll need the Driver to connect to your database

 Install MongoDB: `npm install mongodb`

 The easiest way to get started with MongoDB is to use Atlas, MongoDB’s fully-managed database-as-a-service. Check out the docs [here](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database)

- Minimist

Install minimist: `npm install minimist`

- Jest (for testing)
`node install  --save-dev jest`

- Load the minimist module:

 `const minimist = require('minimist');`

 The MongoDB module exports MongoClient, and that’s what we’ll use to connect to a MongoDB. Import MongoClient

 `const {MongoClient} = require('mongodb');`


### To run:
- On the command line, run:

`node --add or -a 'New Note'`


### How to use your library

### Tests:

**To Run tests, run the commands:**

`npm test input.test.js`
`npm test notes.test.js`

**Add the following section to your package.json:**

```
{
  "scripts": {
    "test": "jest"
  }
}

```


