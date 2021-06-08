//8. Pug Template Engine: Create an Express.js app ...... format without the time.
var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    var date = new Date()
    res.render('index', { date: date.toDateString() });
})

app.listen(3000);
console.log("Server running at 3000");