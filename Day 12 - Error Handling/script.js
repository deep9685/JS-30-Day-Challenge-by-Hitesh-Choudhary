// Activity 1 : Basic error Handling
// Task 1: Write a function that basically throw an error and use a try catch block to handle the error and log an approriate message to console.
// Task 2: Create a function that divides two number and throws an error if detominator is zero.
function Dividebyzero(a,b){
    try {
        if(b === 0){
            throw Error("A number cannot be divided by zero.");
        }
        let d = a/b;
        console.log(d);
    } catch (error) {
        console.error(error);
    }
}

Dividebyzero(25,0);

// Activity 2: finally block
// Task 3: Write a script that includes a try-catch block and a finally block. log messages in the try,catch and finally block to observe the execution flow
function printMessage(){
    try {
        throw error;
        console.log("I am in try block.");
    } catch (error) {
        console.log("I am in catch block.");
    } finally{
        console.log("I am in finally block.");
    }
}

printMessage();

// Activity 3: Custom Error Objects
// Task 4: Creates an custom error class that extends the built-in Error class. Throws an instance of this custom error in a function 
// and handle it using try-catch block
class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = 'CustomError';
    }
}

function riskyFunction(){
    throw new CustomError("This is a custom error message");
}

try {
    riskyFunction();
} catch (error) {
    if(error instanceof CustomError){
        console.error("Caught a CustomError : ",error.message);
    }else{
        console.error("An unexpected error occured : ",error);
    }
}

// Task 5: Writes a function that validates user input (e.g. Checking if a sring is not empty) and throws a custom error 
// if the validation fails, handle the custom error using try-catch block
function isEmptyString(str){
    if(str.trim().length === 0){
        throw new CustomError("Input string should not be Empty");
    }else{
        console.log(str);
    }
}

try {
    isEmptyString("");
} catch (error) {
    console.error("Caught an Error : ",error.message);
}

// Activity 4: Error Handling in promises
// Task 6: Creates a promise the randomly resolve or rejects. use .catch() to handle the rejection and log an appropriate message to the console.
function createRandomPromise(){
    return new Promise((resolve,reject) => {
        const isSuccess = Math.random() >= 0.5;
        setTimeout(()=>{
            if(isSuccess){
                resolve("This promise was resolved successfully!");
            }else{
                reject(new Error('This promise was rejected'));
            }
        }, 1000)
    })
}

// createRandomPromise()
//                 .then(message => {
//                     console.log(message);
//                 })

//                 .catch(error => {
//                     console.error("An error occurred : ", error.message);
//                 })

// Task 7: Use a try-catch within an async function to handle errors from a promise that randomly resolve/reject and log the message.
async function HandlePromise(){
    try {
        let message = await createRandomPromise();
        console.log(message);
    } catch (error) {
        console.error("An error occurred : ", error.message);
    }
}

HandlePromise();

// Activity 5: Graceful error handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriae error message to the console
const url = "https://jsonplaceholder.typicode.com/insta";

fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log("Response data : ",data);
    })
    .catch(error => {
        console.error("There has been a error in fetching data : ", error);
    })

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using ry/catch block and log the message.
async function HandleFetch(){
    try {
        const response = await fetch(url);
        if(!response.ok){
                throw new Error('Network response was not ok');
        }
        const data = await response.json();

        console.log("Comments Data : ",data);
    } catch (error) {
        console.error(error)
    }
}

HandleFetch();