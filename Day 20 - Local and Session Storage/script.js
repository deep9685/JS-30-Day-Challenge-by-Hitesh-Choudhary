// Activity 1 : Understanding Localstorage
// Task 1: write a script to save a string value to localStorage and retrieve it. Log the retrieve value
// const key = prompt('Enter the key - ');
// const value = prompt('Enter the value - ');

// localStorage.clear();

const key = 'Deep';
const value = 'Sweety';

localStorage.setItem(key,value);

console.log(`The value for ${key} = ${localStorage.getItem(key)}`);

// Task 2: Write a script to save an object to localStorage by convertiong it to a JSON string. Retrieve and parse the object, then log it
let person = {
    name:"Deepak",
    age:22
}

const myJson = JSON.stringify(person);

localStorage.setItem("testJSON", myJson);

let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);

console.log(obj);

// Activity 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g. name and email) to localStorage when submited. Retrieve and display the saved
// data on page load
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = nameInput.value; 
    const email = emailInput.value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    console.log("Data Saved to localStorage")
});

document.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");

    if(savedName && savedEmail){
        document.getElementById('message').innerHTML = `Name = ${savedName}, Email = ${savedEmail}`;
    }
})

// Task 4: write a script to remove an item from localStorage. Log the localStorage content before and after removal
console.log("Before removal : ");
console.log(`Name : ${localStorage.getItem("name")} , email : ${localStorage.getItem(email)}`);

localStorage.removeItem("name");
localStorage.removeItem("email");

console.log("After removal : ");
console.log(`Name : ${localStorage.getItem("name")} , email : ${localStorage.getItem(email)}`);

// Activity 3 : Understanding Session Storage
// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value
sessionStorage.setItem("age",22);

const age = sessionStorage.getItem("age");
console.log(age);


// Tssk 6: Write a script to save an object to sessionStorage by convertiong it to a JSON string. Retrieve and parse the object, then log it
let obj1 = {
    email:"demo@gmail.com",
    phone:"9682324523"
}

const jsonObj = JSON.stringify(obj1);

sessionStorage.setItem("jsonObj", jsonObj);

let text1 = sessionStorage.getItem("jsonObj");
let obj2 = JSON.parse(text1);

console.log(obj2);

sessionStorage.clear();

// Activity 4: Using SessionStorage
// same as Activity 2

// Activity 5: Comparison LocalStorage and SessionSorage
// The main difference between local storage and session 
// storage is that local storage data persists across browsing sessions,
//  while session storage data is only available for the current session: