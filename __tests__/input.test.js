const Input = require('../lib/input.js');



describe('Testing input', () => {
    test('Given good input, The Class’ valid() method returns true and input module creates a new instance with both action and payload properties', () => {
        /*
        -Input expects a minimist formatted set of args
        -This test changed from passing an array of args(process.argv ) to an
        object that looks like what minimist makes
        */
        const input = new Input({ _: [], ad: 'buy groceries' });
        const input2 = new Input({ _: [], add: 'buy groceries' });
        // The commented out examples are the process.argv formatting
        // const input = new Input([ '_', [], '-ad', 'buy groceries' ]);
        // const input2 = new Input([ '_', [], '--add', 'buy groceries' ]);
        expect(input2.valid()).toBeTruthy();
        expect(input.valid()).toBeFalsy();
    });
});