//6. Calculator
//Calculator Node: Create a app.js that require another file called ...... in calculator.js
var calculator = require('./calculator');
var numberOne = 3,
    numberTwo = 7;
var sum = calculator.sum(numberOne, numberTwo);
var multiplication = calculator.multiplication(numberOne, numberTwo)
console.log(`The sum of ${numberOne} & ${numberTwo} is: ${sum}`);
console.log(`The multiplication of ${numberOne} & ${numberTwo} is: ${multiplication}`);

//Phase 2: Create a folder called operations and create ...... main app.js file
var sum = require('./operations/sum');
var subtraction = require('./operations/subtraction');
var multiplication = require('./operations/multiplication');
var division = require('./operations/division');
console.log(sum(numberOne, numberTwo));
console.log(subtraction(numberOne, numberTwo));
console.log(multiplication(numberOne, numberTwo));
console.log(division(numberOne, numberTwo));

//Phase 3: Install the module moment and ...... of 3 & 7 is: 21
var moment = require('moment');
console.log(`Today is ${moment()}`);