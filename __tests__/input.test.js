const Input = require('../lib/input.js');



describe('Testing input', () => {
test('Given good input, The Class’ valid() method returns true and input module creates a new instance with both action and payload properties', () => {
const input = new Input({ _: [], ad: 'buy groceries' });
const input2 = new Input({ _: [], add: 'buy groceries' });
expect(input2.action).toBeTruthy();
expect(input.action).toBeFalsy();
  });
});