const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3019;

app.use(bodyParser.json());
app.use(cors());

let cartItems = [];

app.get('/cart', (req, res) => {
  res.json(cartItems);
});

app.post('/cart', (req, res) => {
  const { mealId } = req.body;
  console.log('Received order for meal with ID:', mealId);
  const selectedMeal = meals.find(meal => meal.id === mealId);
  if (!selectedMeal) {
    return res.status(404).json({ error: 'Meal not found' });
  }
  cartItems.push(selectedMeal); // Add selected meal to the cart
  res.json({ message: 'Item added to cart' });
});

app.listen(PORT, () => {
  console.log(`Order service is running on port ${PORT}`);
});
