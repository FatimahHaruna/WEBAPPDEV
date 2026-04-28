const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// In-memory data for demonstration (replace with database in production)
const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Phone', price: 599.99 }
];

app.get('/', (req, res) => {
  res.json({'message': 'Welcome to my Blog API'});
});

// Route to display all customers
app.get('/customers', (req, res) => {
  res.json(customers);
});

// Route to display all products
app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

