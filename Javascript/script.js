 function myFunction() {
            document.getElementById("bio").innerHTML = "My name is Fatimah Haruna"
        }
let x = 5;
let y = 10;
let z = x + y;
document.getElementById("calc").innerHTML = z;

// var num1, num2, sum;
// num1 = prompt("Enter first number:");
// num2 = prompt("Enter second number:");
// sum = parseInt(num1) + parseInt(num2);
// document.getElementById("sum").innerHTML = "The sum of " + num1 + " and " + num2 + " is: " + sum;

let age = 18;
console.log(`I am ${age} years old.`);

//array destructuring
const me = ["Fatimah", "Haruna", 18];
const [firstName, lastName, age1] = me;
document.getElementById("destructuring").innerHTML = `My name is ${firstName} ${lastName} and I am ${age1} years old.`;

//object destructuring
const person = {
    name: "Fatimah Haruna",
    email: "fatimah.haruna@example.com"
};
const {name, email} = person;
document.getElementById("objectdestructuring").innerHTML = `My email address is ${email}`;

//spread operators
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr = [...arr1, ...arr2];
document.getElementById("spread").innerHTML = `Combined array: ${arr}`;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj = {...obj1, ...obj2};
document.getElementById("objectspread").innerHTML = `Combined object: ${JSON.stringify(obj)}`;

//rest operators
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(`The sum of 1, 2, and 3 is: ${sum(1, 2, 3)}`);

//callback function
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}
function sayGoodbye(){
    console.log(`Goodbye ${name}!`);
}

console.log(greet("Fatimah", sayGoodbye));

alert("Welcome to JavaScript!");
confirm("Do you want to continue?");
let userInput = prompt("Please enter your name:");