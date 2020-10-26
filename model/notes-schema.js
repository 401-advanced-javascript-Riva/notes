'use strict';

const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    // When this is stored, each obj in array will be key value pair
    // The key will be the index and the value will be the string
    text: { type: String, required: true},
    category: { type: String , required: false, default: 'uncategorized'}
});

module.exports = notesSchema;