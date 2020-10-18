'use strict';

console.log('starting notes.js');
//require an input const something equals new Input
const mongoose = require('mongoose');
const NoteModel = require('../model/model.js');
const Collection = require('../model/notes-collection.js');


const noteCollection = new Collection(NoteModel);
/**Creates a Note */
 class Notes {
     /** Constructs a note
      * @param {*} args instance of an Input
      */
     constructor(args) {
         //returns random num between 0 and 1 and
        this.id = args.id,
        //promise here when it is instiantiated
        this.text =  args.payload ? args.payload : null;
        console.log(args);
        this.category = args.category;
        this.collection = noteCollection
    }

    //Whatever the command is, is what gets executed
    //that executes the correct operation, given the above object
    /** execute() is a method that executes a given operation/command provided */
    async execute(args) {
        //What method am I trying to run? If add,
        if(args.action === 'add' || args.action === 'a' ) {
            //return result of this.add
           return await this.collection.create(args);

        } else if(args.action === 'delete' || args.action === 'd') {
            console.log('deleting note with args', args);
             return await this.collection.delete(args.payload);

        } else if(args.action === 'list' || args.action === 'l') {
            console.log('where are the args', args);
             return await this.collection.get(args.category);
        } else {
            return await Promise.reject('No args!');
        }
    };



}

module.exports = Notes;



