 function myFunction() {
            document.getElementById("bio").innerHTML = "My name is Fatimah Haruna"
        }
let x = 5;
let y = 10;
let z = x + y;
document.getElementById("calc").innerHTML = z;

var num1, num2, sum;
num1 = prompt("Enter first number:");
num2 = prompt("Enter second number:");
sum = parseInt(num1) + parseInt(num2);
document.getElementById("sum").innerHTML = "The sum of " + num1 + " and " + num2 + " is: " + sum;