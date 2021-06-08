//6. Create a Express server that ...... or another color using CSS.
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
console.log("Server started at 3000");