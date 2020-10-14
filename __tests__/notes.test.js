const Input = require('../lib/input.js');

global.console = {
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn()
  }


describe('Testing if a command was given', () => {
test('If the command and data were both valid, the new note should be added to console.', () => {
    console.log('New Note: Buying groceries')
    expect(global.console.log).toHaveBeenCalledWith(
        'My test is working with console.log'
      )
    })
  })
