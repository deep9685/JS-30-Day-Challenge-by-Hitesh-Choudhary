// Declaring variables of different data types
let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = { name: "Alice", age: 25 };
let arrayVar = [1, 2, 3, 4, 5];
let functionVar = function() { return "I am a function"; };

// Logging the value and type of each variable to the console
console.log("stringVar:", stringVar, "- Type:", typeof stringVar);
console.log("numberVar:", numberVar, "- Type:", typeof numberVar);
console.log("booleanVar:", booleanVar, "- Type:", typeof booleanVar);
console.log("nullVar:", nullVar, "- Type:", typeof nullVar); // Note: typeof null returns "object"
console.log("undefinedVar:", undefinedVar, "- Type:", typeof undefinedVar);
console.log("objectVar:", objectVar, "- Type:", typeof objectVar);
console.log("arrayVar:", arrayVar, "- Type:", typeof arrayVar); // Note: typeof array returns "object"
console.log("functionVar:", functionVar, "- Type:", typeof functionVar);

// Additional check for Array
console.log("arrayVar is Array:", Array.isArray(arrayVar));

// ----------------------------------------------------------------------------------------------------->
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

When you run this script, it will demonstrate the following points:

1.Variables declared with let can be reassigned to new values.
2.Variables declared with const cannot be reassigned to new values.
3.Objects declared with const can have their properties modified, but the reference to the object itself cannot be changed.

--------------------------------------------------------------------------------------------------------------------------------------

To make the properties of an object immutable, you can use Object.freeze(). 
This method freezes an object, preventing new properties from being added to it and 
existing properties from being removed or modified. Here's how you can do it:


// Using 'const' for variable declaration
const constObject = Object.freeze({ key: "value" });
console.log("constObject before modification attempt:", constObject);

// Attempting to modify the properties of the frozen object
try {
    constObject.key = "new value";
} catch (error) {
    console.error("Error when trying to modify constObject:", error.message);
}

// The properties remain unchanged
console.log("constObject after modification attempt:", constObject);

// Attempting to add a new property to the frozen object
try {
    constObject.newKey = "newValue";
} catch (error) {
    console.error("Error when trying to add new property to constObject:", error.message);
}

// The object remains unchanged
console.log("constObject after adding new property attempt:", constObject);
