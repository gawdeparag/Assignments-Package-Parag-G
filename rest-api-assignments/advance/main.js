//5. A real inventory web service ...... will send a POST request.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

class Main {
    constructor() {
        this.items = [{
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
        this.start();
        this.middleware();
        this.routes();
    }

    middleware() {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    }

    routes() {
        var items = this.items;

        app.get('/inventory/', (req, res) => {
            res.send(items);
        });

        app.get('/inventory/:name', (req, res) => {
            var reqProduct = req.params.name;
            var product = items.find(product => product.name === reqProduct);
            if (product) {
                res.send(product);
            } else {
                res.send({ message: `Product ${reqProduct} doesn't exist` });
            }
        });

        app.put('/inventory/', (req, res) => {
            var newInventory = req.body;
            if (!newInventory) return res.status(404).json({ message: 'Not Found' });
            item = newInventory;
            res.send(item);
        });

        app.put('/inventory/:name', (req, res) => {
            var itemName = req.params.name;
            var item = items.find(item => item.name === itemName);
            if (!item) return res.status(404).json({ message: 'Not Found' });
            if (req.body.name) {
                item.name = req.body.name;
            }
            if (req.body.quantity) {
                item.quantity = req.body.quantity;
            }
            res.json(item);
        });

        app.post('/inventory/', (req, res) => {
            var newItem = req.body;
            if (newItem) {
                inventory.push(newItem);
                res.send("Item added to inventory successfully.")
            } else {
                res.send("Couldn't add item to inventory");
            }
        });

        app.delete('/inventory/', (req, res) => {
            items = [];
            if (items === null) {
                res.send("Delete request Failed");
            } else {
                res.send("Successfully deleted all items from the inventory");
            }
        });

        app.delete('/inventory/:name', (req, res) => {
            const itemName = req.params.name;
            var item = items.find(item => item.name === itemName);
            if (!item) return res.status(404).json({ message: 'Not Found' });
            var itemIndex = items.indexOf(item);
            items.splice(itemIndex, 1);
            res.json(items);
        });
    }

    start() {
        app.listen(8081, () => {
            console.log("Server started at 8081");
        });
    }

}

const main = new Main();