// Activity 1: Understanding Ptomises
// Task 1: create a promises with a message after 2 second timeout and log the message to the console
const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Hey, How are you!");
    }, 5000);
});

myPromise.then(message => {
    console.log(message);
});

// Task 2: create a promise that reject with an error message after 2 second timeout and handle the error using .catch()
// const myPromise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("This is error");
//     }, 2000);
// })

// myPromise2.then(message => {
//     console.log(message);
// }).catch(error =>{
//     console.error(error);
// })

// Activity 2: chaining promise
// Task 3: create a sequence of promises that simulate fetching data from a server, chain the promises to log messages in specific order
function fetchData(data, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(data)
        }, delay);
    });
}

fetchData("Fetching data from server...", 1000)
    .then(message => {
        console.log(message);
        return fetchData("Processing data....", 2000);
    })
    .then(message => {
        console.log(message);
        return fetchData("Data processed successfully!", 1000);
    })
    .then(message => {
        console.log(message);
        console.log("All operations completed.");
    })
    .catch(error => {
        console.log("An error ocured : ", error);
    })

//Activity 3: Using Async/Await
// Task 4: Write a async function that waits for a promise to resolve and then log the resolved value
// Task 5: write an async function that handle a rejected promise using try-catch and log the error message
function simulateAsyncOperation(value, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(value);
            // reject("This is error !!!!");
        }, delay);
    });
}

async function getValue(){
    try {
        const resolvedValue = await simulateAsyncOperation("This is resolved value", 2000);
        console.log(resolvedValue);
    } catch (error) {
        console.error("Error : ",error);
    } 
}

getValue();


// Activity 4: Fetching data from an API
// Task 6: use the fetch API to get data from a public API and log the response data to the console using promises
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        return response.json();
    })
    .then(data => {
        console.log("Response Data : ", data);
    })
    .catch(error => {
        console.error("There has been a error in fetching data : ", error);
    })


// Task 7: use the fetch API to get data from a public API and log the response data to the console using async/await
const apiUrl2 = "https://jsonplaceholder.typicode.com/comments"
async function getData(){
    try {
        const response = await fetch(apiUrl2);
        const data = await response.json();

        console.log("Comments Data : ",data);
    } catch (error) {
        console.log(error);
    }
}
getData();


// Activity 5: Concurrent Promises
// Task 8: Use promise.all to wait for multiple promises to resolve and log all their value
const promise1 = simulateAsyncOperation("Promise 1 resolved", 5000);
const promise2 = simulateAsyncOperation("Promise 2 resolved", 2000);
const promise3 = simulateAsyncOperation("Promise 3 resolved", 1500);

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log("All promises resolved : ");
        values.forEach((value, index) =>{
            console.log(`Promise ${index+1} : ${value}`);
        });
    })
    .catch(error => {
        console.error('One of the promises rejected:', error);
    })

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise1, promise2, promise3])
    .then(value => {
        console.log('First promise resolved', value);
    })
    .catch(error => {
        console.log('First promise rejected : ', error);
    })