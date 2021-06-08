//4. Make a Node.js program named ...... node express-hello-world.js.
var express = require('express');
var app = express();
const PORT = process.env.PORT || process.argv[2] || 8080;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/time', (req, res) => {
    res.send(new Date());
});

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});