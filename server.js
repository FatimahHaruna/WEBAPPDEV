const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({'message': 'Welcome to my Blog API'});
}); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 