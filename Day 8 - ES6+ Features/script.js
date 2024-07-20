// Activity 1: Template Literals
// Task 1: Use template literals to create a string that include variables for person name and age, and log the string to the console
let person = {
    name:"Deepak",
    age:22
};
console.log(`Hello my name is ${person.name} and age is ${person.age}`);

// Task 2: Create a multi-line string template literal and log it to console
let text = 
`The Quick 
brown fox jump
over the lazy dog`;
console.log(text);

// Activity 2: Array Destructuring
// Task 3: Use array destructuring to extract the first and second element from the array of numbers and log them to console
let arr = [1,2,3,4];
const [a,b] = arr;
console.log("a = ",a,"b = ",b);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to consol
let book = {
    title:"Atomic Habits",
    author:"John C Maxwel"
};

const {author, title} = book;
console.log(title," ",author);

// Activity :3 Spread and Rest operator
// Task 5: Use a spread operator that includes all elements of an existing array plus aditional elements, and log the new array to the console
let arr2 = [...arr, 5,6,7];
console.log(arr2);

// Task 6: Use the rest operator in a function to accept an arbitarary number of arguement, sum them and return the result
function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));

// Activity 4 : Default Parameter
// Task 7: write a function that take s two parameters and return their product, with the second parameter having a default value of 1, log 
// the result of calling this function with or without second parameter
function multiply(a,b=1){
    return a*b;
}

console.log(multiply(5,5));
console.log(multiply(5));

// Activity 5: Enhanced object Literals
// Task 8: Use enhanced object literals to create an object with method and properties and log the result
var name = "Mike";
var age = 3

var bark = function(){
    console.log("Woof woof !");
}

var dog = {name, age, bark};

dog.bark();
console.log(dog);

// Task 9: Create an object with computed property names based on variables and log the object to the console
var propName1 = "firstname";
var propName2 = "lastname";
var propName3 = "age";

var person2 = {
    [propName1] :"John",
    [propName2] :"Cena",
    [propName3] :47
};

console.log(person2);