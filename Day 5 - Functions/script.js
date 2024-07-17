// Activity 1: Function Declaration
// Task 1: write a function to check if a number is even or odd
function EvenOROdd(num){
    if(num%2 == 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

EvenOROdd(10);

//Task 2: write a function to calculate the square of a number and return its result
function square(num){
    return num*num;
}

console.log(square(4));

// Activity 2: Function Expression
// Task 3: write a function expression to find the maximum of two number
let maxNum = function(a,b){
    if(a>b){
        console.log(`${a} is greater than ${b}`);
    }else{
        console.log(`${b} is greater than ${a}`);
    }
}

maxNum(42,53);

// Task 4: write a function expression to concanate two strings and return the result
let concanateString = function concanate(x,y){
    return x+y
};

console.log(concanateString("Deepak ", "Namdev"));

// Activity 3: Arrow function
// Task 5: write a Arrow function to calculate the sum of two numbers and return result
let Sum = (a, b) => {
    return a+b;
}
console.log(Sum(5, 17));

// Task 6: write a arrow function to check if a string contain a specific character and return a boolean
let CheckChar = (str, ch) => {
    return str.includes(ch);
}
console.log(CheckChar("Hello", 'e'));

// Activity 4: Function Parameter and Default value
// Task 7: write a function that takes two parameters and return their product. Provide a default value for second parameter
function product(a, b=10){
    return a*b;
};

console.log(product(5));

// Task 8: write a function that takes a person name and age and return a greeting message. please provide a default value of age;
function greeting(name, age = 18){
    return `Hello ${name}, welcome to our club, Your age is ${age}`;
}

console.log(greeting("Shivam", 23));

// Activity 5: Higher order function
// Task 9: Write a higher order function that takes a function and a number and call the function that many times.
function operate(func, num){
    while(num > 0){
        func();
        num--;
    }
}

function greet(){
    console.log("Hello");
}

operate(greet, 5);

// Task 10: write a higher order function that takes two function and a value, applies the first function to the value 
// and then applies the second function to the result.
function HigherOrder(func1, func2, val){
    let result = func1(val);

    return func2(result);
} 

function add(a, b=5){
    return a+b;
}

function mult(a, b=5){
    return a*b;
}

console.log(HigherOrder(add, mult, 6));