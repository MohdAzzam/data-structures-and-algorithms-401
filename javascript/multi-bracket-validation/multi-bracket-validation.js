
const Stack = require('../stack-and-queue/stacks-and-queues').stacks;

function multiBracketValidation(input) {
    if (/^[A-Za-z0-9]+$/.test(input)) {
        return 'You Did Not Entered Any Of [](){}';
    } else {
        const myStack = new Stack();
        let arrayOfInput = input.split('');
        let leftVal = /[\[\(\{]/g;
        let left = '';
        for (let i = 0; i < arrayOfInput.length; i++) {
            if (arrayOfInput[i].match(leftVal)) {
                myStack.push(arrayOfInput[i]);
                left = arrayOfInput[i];
            } else if ((arrayOfInput[i] === '}' && left === '{') || (arrayOfInput[i] === ']' && left === '[') || (arrayOfInput[i] === ')' && left === '(')) {
                myStack.pop();
                left = myStack.peek();the 
            } else if (arrayOfInput[i] === '}' || arrayOfInput[i] === ']' || arrayOfInput[i] === ')') {
                return false;
            }
        }
        return myStack.isEmpty();

    }
}

//()
// S (
module.exports = multiBracketValidation;