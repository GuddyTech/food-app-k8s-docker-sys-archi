const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

let cart = [];

// Home Page - Add meal to cart
app.post('/add-to-cart', (req, res) => {
    const meal = req.body;
    cart.push(meal);
    res.status(201).json({ message: 'Meal added to cart', cart });
});

// Order Page - Get cart items
app.get('/cart', (req, res) => {
    res.status(200).json(cart);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});