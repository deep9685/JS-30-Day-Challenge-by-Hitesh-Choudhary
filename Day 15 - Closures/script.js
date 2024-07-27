// Activity 1 : Understanding closure
// Task 1: Write a function that return another function, where the inner function access a variable from the outer function's scope.
// Call the inner function and log the result
function outer(){
    let a = "I am from Outer Scope";
    function inner(){
        return a;
    };
    return inner;  
}

const myfunc = outer();
console.log(myfunc());

// Task 2: Creae a closure that maintain a private counter. Implement functions to increment and get the current value of counter;
function createCounter(){
    let count = 0;

    function increment(){
        count++;
    }

    function getValue(){
        return count;
    }

    return {
        increment,
        getValue
    };
}

const counter = createCounter();
console.log(`Initial value : ${counter.getValue()}`);

counter.increment();
counter.increment();

console.log(`After increment value : ${counter.getValue()}`);


// Activity 2: Practical Closure
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of last generated ID and increment it with each call
function createIdGenerator(){
    let lastId = 0;

    function generateId(){
        lastId++;
        return `ID_${lastId}`;
    }

    return {
        generateId
    };
}

const idgenerator = createIdGenerator();

console.log(idgenerator.generateId());
console.log(idgenerator.generateId());


// Task 4 : create a closure that capture's a username and return a function that greets the user by name.
function createUser(username){
    
    function greetUser(){
        return `Hello ${username}, Welcome to Our Website`;
    }

    return {
        greetUser
    };
}

const user = createUser("Deepak");
console.log(user.greetUser());

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure
// each function logs the correct index.
const functionArray = [];

for(let i=0; i<5; i++){
    functionArray.push(
        (function(index){
            return function(){
                console.log(`Index: ${index}`);
            };
        })
        (i)
    );
};

functionArray.forEach(func => func());


// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collections of items. Implement methods to add, remove and list items.
function createItemManager(){
    let items = [];

    function addItem(item){
        items.push(item);
        console.log(`Added ${item}`);
    }

    function removeItem(item){
        let index = items.indexOf(item);

        if(index !== -1){
            items.splice(index, 1);
            console.log(`Removed : ${item}`);
        }
        else{
            console.log("Item not found");
        }
    }

    function listItem(){
        if(items.length === 0){
            console.log("No items in the collection");
        }
        else{
            items.forEach(item => console.log(item));
        }
    }

    return {
        addItem,
        removeItem,
        listItem
    };
}

const itemManager = createItemManager();

itemManager.addItem("Apple");
itemManager.addItem("Banana");

itemManager.listItem();

itemManager.removeItem("Banana");

itemManager.listItem();

// Activity 5: Memoization
// Task 7: write a function that memoizes the result of another function. Use a closure to store the results of previous computations
function memoize(fn){
    const cache = new Map();

    return function(...args){

        const key = JSON.stringify(args);

        // check if result is already incache
        if(cache.has(key)){
            console.log(`Fetching from cache for args ${key}`);
            return cache.get(key);
        }

        // compute the result and store it in cache
        const result = fn(...args);
        cache.set(key, result);
        console.log(`computing result for args: ${key}`);
        return result;
    };
}

function add(a,b){
    return a+b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1,2));
console.log(memoizedAdd(1,2));
console.log(memoizedAdd(2,3));
console.log(memoizedAdd(2,3));


// Task 8: create a memoized version of function that calculate the factorial of a number
function factorial(n){
    if(n === 1 || n === 0){
        return n;
    }

    return n * factorial(n-1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));