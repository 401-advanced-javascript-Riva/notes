'use strict'

const Notes = require("../lib/notes");
const NoteModel = require('../model/model.js');

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

    async delete(id) {
        // When something is added into database, ID is automatically added
        // referring back to schema
        console.log('attempting to delete not with id', id)
        return await NoteModel.findByIdAndDelete(id, function (err) {
            if (err) {
                console.log('No deletion made',err);
            } else {
                console.log('no error on delete');
            }
        });
    }

    async get(args) {
        if(!args) {
            const noteList2 = await NoteModel.find({});
            return noteList2;
        } else {
            console.log('category provided', args);
            const noteList = await NoteModel.find({category:args});
            return noteList;
        }
    }
}
module.exports = NotesCollection;