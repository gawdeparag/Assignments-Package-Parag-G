//5. Problem Statement: Forms
//This exercise will teach you how ...... the value of str backwards.
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/form', (req, res) => {
    var reversedString = req.body.str.split("").reverse().join("");
    res.send(`String is successfully reversed: ${reversedString}`);
})

app.listen(3000);
console.log("Server running at 3000");