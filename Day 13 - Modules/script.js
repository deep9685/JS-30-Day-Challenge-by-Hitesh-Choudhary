// Activity 1: Creating and Exporting modules
// Task 1: create a module that export a function to add two number.Import and use this module in another script
function sum(a,b){
    return a+b;
}

// export { sum };

// Task 2: Create a module that export an object representing a person with properties and methods. Import and use this module in another script
let person = {
    name:"Deepak Namdev",
    age:22,

    getInfo: function(){
        console.log(`Person name : ${this.name} , age : ${this.age}`);
    }

    // this keyword can not be used within arrow function 
}

// export {person};

// Activity 2: Named and Default exports
// Task 3: Create a module that export multiple function using named exports. Import and use these functions in another script.
function Subtract(a,b){
    return a-b;
}

function Multiply(a,b){
    return a*b;
}

// export {Subtract, Multiply};

// Task 4: create a module that exports a single function using default export. Import and use these functions in another script.
function Divide(a,b){
    return a/b;
}

// export default Divide;

// Activity 3: Importing entire module
// Task 5: Create a module that export multiple constants and function. Import the entire module as an object in another script and use its properties.
const PI = 3.14159;

function remainder(a,b){
    return a%b;
}

// export {remainder, PI};

// Activity 4: Using third party Module
// Task 6: Install a third party module (e.g. lodash) using npm. Import and use a function from this module in a script
// import _ from 'lodash';
const _ = require('lodash');

const inputString = "hello world";
const capitalizedString = _.capitalize(inputString);

console.log(`Original String = ${inputString}`);
console.log(`Capitalized String = ${capitalizedString}`);

// Task 7: Install a third party module (e.g. axios) using npm. Import and use  this module to amke a network request in a script
const axios = require('axios');

async function fetchdata(){
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log("Response data : ", response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
fetchdata();


// Activity 5: Module Bundling
// Task 8: Use a module bundler like a Webpack or Parcel to bundle multiple javascript files into a single file. Write a script to demonstrate the bundling process.
// refer learning.txt file 




