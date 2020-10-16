'use strict';

console.log('starting notes.js');
//require an input const something equals new Input
const mongoose = require('mongoose');
const NoteModel = require('../model/model.js');
const Collection = require('../model/notes-collection.js');


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
        this.category = args.category;
        this.collection = new Collection(NoteModel);

    }

//Whatever the command is, is what gets executed
//that executes the correct operation, given the above object
    /** execute() is a method that executes a given operation/command provided */
    async execute(args) {
        //What method am I trying to run? If add,
        if(args.action === 'add' || args.action === 'a' ) {
            //reutrn result of this.add
           await this.collection.create(args);
            return true;
        } else if(args.action === 'delete' || args.action === 'd') {
            this.collection.delete(args);
            return true;
        } else if(args.action === 'list' || args.action === 'l') {
            console.log('where are the args', args);
             return this.collection.get(args.category);
        } else {
            return false;
        }
    };

//     async add(args) {
//         // console.log(`Added note: ${args.payload}`);
//         let newNote = new NoteModel({ text: args.payload , category: args.category});
//         console.log(newNote);
//         await newNote.save();

//     };

//     async delete(args) {
//         // When something is added into database, ID is automatically added
//         // referring back to schema
//         await NoteModel.findByIdAndDelete(args.payload, function (err) {
//             if(err) console.log('No deletion made',err);
//             console.log("Successful deletion");
//           });
//     }
//     async list(args) {
//         console.log('in if', args);
//         if(!args) {
//             const noteList2 = await NoteModel.find({});
//              return console.log(noteList2);
//         } else {
//             console.log('category provided', args);
//             const noteList = await NoteModel.find({category:args});
//             return console.log(noteList);
//         }
//     }

}

module.exports = Notes;


