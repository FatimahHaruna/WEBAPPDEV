//Asynchronous JavaScript
setTimeout(() => {
    console.log("This message is displayed after 3 seconds.");
}, 3000);   

console.log("Start")
setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000)
console.log('End');

// //Callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 2000);
}
fetchData((data) => {
    console.log(data);
});

function greet(name) {
    console.log(`Hello,${name}!`)
}

function greetUser(callback) {
    const name = "Fatimah Haruna";
    callback(name)
}
greetUser(greet)

//Promises
const promise = new Promise((resolve, reject) => {
    const success = true;
    if(success){
        resolve("Successful");
    }
    else{        
        reject("Failed");
    }
}) 

.then(result => console.log(result))
.catch(error => console.error(error));

//Async/Await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });
}
async function getData() {
    const result = await fetchData();
    console.log(result);
}
getData();
//error handling
async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}