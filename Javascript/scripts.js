//Asynchronous JavaScript
// setTimeout(() => {
//     console.log("This message is displayed after 3 seconds.");
// }, 3000);   

// console.log("Start")
// setTimeout(() => {
//     console.log("This message is displayed after 2 seconds.");
// }, 3000)
// console.log('End');

// //Callbacks
// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data loaded");
//     }, 2000);
// }
// fetchData((data) => {
//     console.log(data);
// });

function greet(name) {
    console.log(`Hello,${name}!`)
}

function greetUser(callback) {
    const name = "Fatimah Haruna";
    callback(name)
}
greetUser(greet)