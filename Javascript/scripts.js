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
//promise all - used to handle multiple promises concurrently
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 1500);
});
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 2000);
});
Promise.all([promise1, promise2, promise3])
.then((results) => {
    console.log(results);
})
.catch((error) => {
    console.error("Error:", error);
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

function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id > 0) {
                resolve({id: id, name: "Fatimah"});
            } else {
                reject("User not found");
            }
        }, 1000);
    }); 
}
fetchUser(1)
.then((user) => {
    console.log(user);
})
.catch((error) => {
    console.error("Error:", error);
});
const promise1 = fetchUser(2);
const promise2 = fetchUser(3);
Promise.all([promise1, promise2])
.then((users) => {
    console.log(users); 
})
.catch((error) => {
    console.error("Error:", error);
});

//using promise all to to fire two network requests concurrently and combine their results
function fetchUserData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({userId: userId, name: "Fatimah"});
        }, 1000);
    });
}
function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{postId: 1, content: "Post 1"}, {postId: 2, content: "Post 2"}]);
        }, 1500);
    });
}
const userId = 1;
Promise.all([fetchUserData(userId), fetchUserPosts(userId)])
.then(([userData, userPosts]) => {
    console.log("User Data:", userData);
    console.log("User Posts:", userPosts);
})
.catch((error) => {
    console.error("Error:", error);
});
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