const Notes = require('../lib/notes.js');

//settting up spy
global.console = {
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn()
  }


describe('Testing if a command was given', () => {
test('If the command and data were both valid, the new note should be added to console.', () => {
    const note = new Notes({action: '--add', payload: 'Feed Ragnar'})
    expect(global.console.log).toHaveBeenCalledWith(
        'Added note: Feed Ragnar'
      )
    })
  })
/* About spy:
- spy takes a function and replaces it with a magic function that
allows me to see everything that the function was called with
- By default when you spy on a function, the actual function will not be
executed
- If you want to spy and execute the function you have to specifically say so
*/