const mongoose = require('mongoose');
const notesSchema = require('./notes-schema.js');


const Note = mongoose.model('Note', notesSchema);

module.exports = Note;