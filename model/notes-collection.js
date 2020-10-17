'use strict'

const Notes = require("../lib/notes");
const NoteModel2 = require('../model/model.js');

//crud operations


 /**This Class constructs an instance of a collection
  *
  */
class NotesCollection {
    constructor(model){
        this.model = model;
    }

    async create(args) {
        // console.log(`Added note: ${args.payload}`);
        let newNote = new this.model({ text: args.payload , category: args.category});
        console.log(newNote);
        return await newNote.save();

    };

    async delete(args) {
        // When something is added into database, ID is automatically added
        // referring back to schema
        return await NoteModel2.findByIdAndDelete(args.id, function (err) {
            if(err) console.log('No deletion made',err);
            // console.log("Successful deletion");
        });
    }

    async get(args) {
        console.log('in if', args);
        if(!args) {
            const noteList2 = await NoteModel.find({});
            return console.log(noteList2);
        } else {
            console.log('category provided', args);
            const noteList = await NoteModel.find({category:args});
            return console.log(noteList);
        }
    }
}
module.exports = NotesCollection;