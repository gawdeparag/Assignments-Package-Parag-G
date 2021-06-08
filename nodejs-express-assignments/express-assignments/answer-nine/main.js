//9. Write a server that, when ...... with that content to the user.
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/colors', (req, res) => {
    var colors;
    fs.readFile('colors.json', (err, data) => {
        if (err) throw err;
        colors = JSON.parse(data);
        console.log(colors);
    });
    res.send(colors);
});

app.listen(3000);
console.log("Server running at 3000");