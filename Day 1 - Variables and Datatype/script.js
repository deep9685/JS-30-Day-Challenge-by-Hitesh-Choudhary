// Task 1
var number = 22;
console.log(number);

// Task 2
let str = "Hello Dev";
console.log(str);

// Task 3
const bool = true;
console.log(bool);

// Task 4
var num = 23;
var string = "Hello World!";
var b = false;
var obj = {
    firstname:"Deepak",
    lastname:"Namdev"
};
var arr = [1,2,3,4,5];

console.log("Type of num : ", typeof(num));
console.log("Type of string : ", typeof(string));
console.log("Type of b : ", typeof(b));
console.log("Type of obj : ", typeof(obj));

// The problem is that the JavaScript operator typeof returns "object":
console.log("Type of arr : ", typeof(arr));
console.log(Array.isArray(arr));


// Task 5
let i = 5;
console.log("i before reassign : ",i);
i = 15;
console.log("i after reassign : ",i);

// Task 6
const m = "I am constant";
console.log("m before reassign : ",m);
//m = "I am not constant";  // I will give error because reassingning a const is not allowed in js
// console.log("m after reassign : ",m);

// ------------------------------------------------------------------------------------------------------->

// Using 'let' for variable declaration
let letVariable = "Initial value of let";
console.log("letVariable before reassignment:", letVariable);

// Reassigning the 'let' variable
letVariable = "Reassigned value of let";
console.log("letVariable after reassignment:", letVariable);

// Using 'const' for variable declaration
const constVariable = "Initial value of const";
console.log("constVariable before reassignment:", constVariable);

// Attempting to reassign the 'const' variable
try {
    constVariable = "Reassigned value of const";
} catch (error) {
    console.error("Error when trying to reassign constVariable:", error.message);
}

// Showing that const can have its properties changed if it's an object
const constObject = { key: "value" };
console.log("constObject before modification:", constObject);

// Modifying the properties of the object declared with 'const'
constObject.key = "new value";
console.log("constObject after modification:", constObject);

// Attempting to reassign the 'const' object itself
try {
    constObject = { newKey: "newValue" };
} catch (error) {
    console.error("Error when trying to reassign constObject:", error.message);
}
