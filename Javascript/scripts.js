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
const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const success = true;
        if(success) {
            resolve("Operation successful!");
        }
        else {
            reject("Operation failed!");
        }
    }, 1000);
});
promise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})
.finally(() => {
    console.log("Operation completed.");
});

//Taking a function that uses a callback and converting it to return a promise
//Callback version
function getData(callback) {
    setTimout(() => {
        const data = {name: "Fatimah", age: 19};
        callback(data);
    }, 1000);
}
getData((data) => {
    console.log(data);
});
//Promise version
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name: "Fatimah", age: 19};
            resolve(data);
        }, 1000);
    });
}
getData()
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error(error);
})
.finally(() => {
    console.log("Data fetching completed.");
})
// //Async/Await
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data loaded");
//         }, 2000);
//     });
// }
// async function getData() {
//     const result = await fetchData();
//     console.log(result);
// }
// getData();
// //error handling
// async function getData() {
//     try {
//         const result = await fetchData();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }