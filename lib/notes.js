'use strict';

console.log('starting notes.js');
//require an input const something equals new Input
const mongoose = require('mongoose');
const NoteModel = require('../model/notes-schema.js');



/**Creates a Note */
 class Notes {
     /** Constructs a note
      * @param {*} args instance of an Input
      */
    constructor(args) {
         //returns random num between 0 and 1 and
        this.id = args.id,
        this.text = this.execute(args) ? args.payload : null;
        console.log(args);
        this.category = args.category

    }


//Whatever the command is, is what gets executed
//that executes the correct operation, given the above object
    /** execute() is a method that executes a given operation/command provided */
    execute(args) {
        //What method am I trying to run? If add,
        if(args.action === 'add' || args.action === 'a' ) {
            //reutrn result of this.add
            this.add(args);
            return true;
        } else if(args.action === 'delete' || args.action === 'd') {
            this.delete(args);
            return true;
        }else if(args.action === 'list' || args.action === 'l') {
             return this.list(args);

        } else {
            return false;
        }
    };

    async add(args) {
        // console.log(`Added note: ${args.payload}`);
        let newNote = new NoteModel({ text: args.payload , category: args.category});
        console.log(newNote);
        await newNote.save();

    };

    async delete(args) {
        // When something is added into database, ID is automatically added
        // referring back to schema
        await NoteModel.findByIdAndDelete(args.payload, function (err) {
            if(err) console.log('No deletion made',err);
            console.log("Successful deletion");
          });
    }
    list(args) {
        if(!args) {
            console.log(NoteModel.find({}));
        } else {
            console.log(NoteModel.find({category: `${args}`}));
        }
    }
}

module.exports = Notes;


