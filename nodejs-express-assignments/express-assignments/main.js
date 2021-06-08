//1. Make a hello world Express program that will display "Hello, world!" at the root URL:/
var express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send("Hello, world!");
});
app.listen(3000);
console.log("Server started at 3000");

//2. Tell the year you were born: Make an ...... you were born in 1984.
app.get('/year', (req, res) => {
    var age = req.query.age;
    var currentDate = new Date();
    var birthYear = currentDate.getFullYear() - age;
    res.send(`You were born in the year ${birthYear}`);
});

//3. Create an Express.js app that outputs ...... application, ie. process.argv[2]
var port = process.argv[2] || 3000;
app.get('/', (req, res) => {
    res.send("Hello, world!");
})
app.listen(port);
console.log(`Server started at port ${port}`);

//7. Shopping List: We will be building ...... your items in the shopping list.
var items = [{
        id: 1,
        name: "Apples",
        price: 80
    },
    {
        id: 2,
        name: "Oranges",
        price: 90
    },
    {
        id: 3,
        name: "Mangoes",
        price: 500
    },
    {
        id: 4,
        name: "Bananas",
        price: 70
    }, {
        id: 5,
        name: "Grapes",
        price: 50
    }
];

app.get('/items', (req, res) => {
    res.send(items);
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/items', (req, res) => {
    var item = req.body;
    items.push(item);
    res.send("Item added successfully");
});

app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(item => item.id === itemId);
    if (item) {
        res.send(item);
    } else {
        res.send({ message: `Item ${itemId} doesn't exist` });
    }
});

app.patch('/items/:id', (req, res) => {
    var item = items.find(item => item.id == req.params.id);
    if (!item) return res.status(404).json({ message: 'Not Found' });
    if (req.body.name) {
        item.name = req.body.name;
    }
    if (req.body.price) {
        item.price = req.body.price;
    }
    res.json(item);
});

app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    var item = items.find(item => item.id === itemId);
    if (!item) return res.status(404).json({ message: 'Not Found' });
    var itemIndex = items.indexOf(item);
    items.splice(itemIndex, 1);
    res.json(items);
});