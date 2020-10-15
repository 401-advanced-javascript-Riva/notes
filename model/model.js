const mongoose = require('mongoose');
const notesSchema = require('../model/notes-schema.js');


const Note = mongoose.model('Note', notesSchema);

module.exports = Note;