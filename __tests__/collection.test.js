'use strict'
const Notes = require('../lib/notes.js');
const supergoose = require('@code-fellows/supergoose');




describe('testing collections model get method', () => {
  it('Opon add()schema is returned to user with an object with an ID)', () => {
   return new Notes({ _id:1, text: 'Added note' }).execute({ action: 'add', payload:'water succulents'}).then(result => {
        expect(result.text).toEqual('water succulents');
    });
  })
})


//TODO:Implement the test for save

// describe('testing collections model delete method', () => {
//     it('after doing a delete() user can no longer see the note in a list()  ', () => {
//       const notesToSave = new Notes({ action: 'add', payload:args[key]});
//       expect(.length).toEqual(1)
//     })
//   })