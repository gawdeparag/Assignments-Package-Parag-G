//8. Sum of integers: Write a nodeJS program that sum all integers saved in other txt file.
var fs = require('fs');
fs.readFile('answer-eight.txt', 'utf8', (err, data) => {
    if (err) throw err;
    var sum = 0;
    data = data.split(" ");
    data.forEach(item => sum += parseInt(item));
    console.log(sum);
});