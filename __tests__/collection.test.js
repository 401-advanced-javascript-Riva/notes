'use strict'
const Notes = require('../lib/notes.js');
const supergoose = require('@code-fellows/supergoose');
const NotesCollection = require('../model/notes-collection');



describe('testing collections model get method', () => {
  it('Opon add()schema is returned to user with an object with an ID)', () => {
   return new Notes({ _id: 1, text: 'Added note' }).execute({ action: 'add', payload:'water succulents'}).then(result => {
        expect(result.text).toEqual('water succulents');
    });
  })
})



// describe('testing collections model delete method', () => {
//     it('after doing a delete() user can no longer see the note in a list()', () => {
//         let noteCollection = new Notes({ _id: 1, text: 'Added note' });
//         noteCollection.execute({action: 'delete', payload: 1}).then(result => {
//             noteCollection.get(result).toHaveLength(0);
//         });
//     });
// })