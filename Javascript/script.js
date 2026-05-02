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