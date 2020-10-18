'use strict'
const Notes = require('../lib/notes.js');
const supergoose = require('@code-fellows/supergoose');
const NotesCollection = require('../model/notes-collection');



describe('testing collections model get method', () => {
  it('Opon add()schema is returned to user with an object with an ID)', () => {
   return new Notes({ _id: 1, text: 'Added note' }).execute({ action: 'add', payload:'water succulents'}).then(result => {
        expect(result.text).toEqual('water succulents');
    });
  });
});



describe('testing collections model delete method', () => {
    it('after doing a delete() user can no longer see the note in a list()', (done) => {
        // a new string will be made when we run the test, this string will have a timestamp at the end
        const text = 'Feed Ragnar ' + Date.now();
        // instianting a note
        let note = new Notes({ _id: 1, text: 'Added note' });
        //executed add and added a note
        return  note.execute({ action: 'add', payload:text, category: 'plantcare' }).then(result => {
            // waiting for the execution to finish to get list of all the plantcare notes
            return note.execute({ action: 'list', payload: 'plantcare' }).then(listOne => {
                //grabbing the last note which should be the most recently added(at end of list)
                const addedNote = listOne.pop();
                //expecting the last note to match the note I just created
                expect(addedNote.text).toEqual(text);
                // deleting the note that matches the given id
                return note.execute({action: 'delete', payload: addedNote.id }).then(() => {
                    //now I am getting the list of the plantcare notes again
                    return note.execute({ action: 'list', payload: 'plantcare' }).then(listTwo => {
                        //grabbing the last one in the list again, but this time it should have a different id
                        const lastNote = listTwo.pop();
                        //expecting this note to NOT match the one I created above!
                        expect(lastNote.text).not.toEqual(text);
                        done();
                    });
                });
            });

        });
    });
});