const Notes = require('../lib/notes.js');
//mocking out the notes collection
const Collection = jest.createMockFromModule('../model/notes-collection.js').default;

//settting up spy
global.console = {
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn()
  }


describe('Testing if a command was given', () => {
test('If the command and data were both valid, the new note should be added to console.', () => {
  const args = {action: '--add', payload: 'Feed Ragnar'}
  //this test is testing the note calls the collection create method
    const note = new Notes(args);
    expect(Collection.create).toHaveBeenCalledWith(args);
    });
  });
/* About spy:
- spy takes a function and replaces it with a magic function that
allows me to see everything that the function was called with
- By default when you spy on a function, the actual function will not be
executed
- If you want to spy and execute the function you have to specifically say so
*/