const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));

//create a schema
const customerSchema = new mongoose.Schema({
  name: String,
  email: String
});

//create a model
const Customer = mongoose.model("Customer", customerSchema);

//create a new customer
const newCustomer = new Customer({
  name: "John Doe",
  email: "john.doe@example.com"
}); 
newCustomer.save()
  .then(() => console.log("Customer saved"))
  .catch(err => console.log(err));

//find all customers
Customer.find()
  .then(customers => console.log(customers))
  .catch(err => console.log(err));

