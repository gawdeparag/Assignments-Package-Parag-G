//1. Implement a RESTful inventory ...... inventory, or a single item.
var express = require('express');
var app = express();
var inventory = [{
        name: "Apples",
        quantity: 3
    },
    {
        name: "Oranges",
        quantity: 7
    },
    {
        name: "Pomegranates",
        quantity: 55
    }
];
//Resources identifiers are assigned as follows:
//a. "/inventory" refers to the entire inventory
app.get('/inventory/', (req, res) => {
    res.send(inventory);
});
//b. "/inventory/Apples" refers to the item named "Apples" in the inventory
app.get('/inventory/:name', (req, res) => {
    var reqProduct = req.params.name;
    var product = inventory.find(product => product.name === reqProduct);
    if (product) {
        res.send(product);
    } else {
        res.send({ message: `Product ${reqProduct} doesn't exist` });
    }
});

//2. Handle HTTP PUT requests as follows:
//a. If resource identifier is "/inventory" ...... in the body of the request.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.put('/inventory/', (req, res) => {
    var newInventory = req.body;
    if (!newInventory) return res.status(404).json({ message: 'Not Found' });
    inventory = newInventory;
    res.send(inventory);
});
//b. If the resource identifier is "/inventory/itemname" ...... in the body of the request.
app.put('/inventory/:name', (req, res) => {
    var itemName = req.params.name;
    var item = inventory.find(item => item.name === itemName);
    if (!item) return res.status(404).json({ message: 'Not Found' });
    if (req.body.name) {
        item.name = req.body.name;
    }
    if (req.body.quantity) {
        item.quantity = req.body.quantity;
    }
    res.json(item);
});

//3. Handle HTTP POST requests as  follows:
//a. If the resource identifier is "/inventory" ...... the item is added to the inventory.
app.post('/inventory/', (req, res) => {
    var newItem = req.body;
    if (newItem) {
        inventory.push(newItem);
        res.send("Item added to inventory successfully.")
    } else {
        res.send("Couldn't add item to inventory");
    }
});

//4. Handle DELETE requests as follows:
//a. If the resource identifier is "/inventory", all items are deleted from the inventory.
app.delete('/inventory/', (req, res) => {
    inventory = [];
    if (inventory === null) {
        res.send("Delete request Failed");
    } else {
        res.send("Successfully deleted all items from the inventory");
    }
});
//b. If the resource identifier is "/inventory/itemname", the named item is deleted.
app.delete('/inventory/:name', (req, res) => {
    const itemName = req.params.name;
    var item = inventory.find(item => item.name === itemName);
    if (!item) return res.status(404).json({ message: 'Not Found' });
    var itemIndex = inventory.indexOf(item);
    inventory.splice(itemIndex, 1);
    res.json(inventory);
});

var PORT = 8081;
app.listen(PORT);
console.log(`Server started at ${PORT}`);