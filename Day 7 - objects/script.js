// Activity 1: Object creation and Access
// Task 1: create an object representing a book with properties like title,author, and year and log the object to console
let book = {
    title:"Atomic Habits",
    author:"John C Maxwel",
    year:1994
};

console.log(book);

// Task 2: Access and log the title and author property of book
console.log(book.author);
console.log(book.title);

// Activity 2: Objects Method
// Task 3: add a method to the book object that return a string with a book's title and author and log the result by calling this method
book.read = function() {
    return book.title + " " + book.author;
}

console.log(book.read());

// Task 4: Add a method to the book object that takes a parameter(year) and update the book's year property then log the updated object
book.setYear = function(year){
    this.year = year;
}

book.setYear(2001);
console.log(book);

// Activity 3: Nested object
// Task 5: create a nested object representing a library with properties like name and books (an array of book object)
// and log the library object to the console
const library = {
    name:"City Library",
    address:"123 Main St, USA",
    books:[book]
}
console.log(library);

// Define the new book object
const newBook = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813
};

library.books.push(newBook);

// Task 6: Access and log the name of the library and the titles of all the books in the library
console.log(library.name);
library.books.forEach((book) => console.log(book.title));

// Activity 4: The 'this' keyword
// Task 7: add a method to the book object that uses 'this' keyword to return a string with the book's title and year, and log  the result by calling this method
book.getInfo = function(){
    return this.title + " " + this.year;
}

console.log(book.getInfo());

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value
console.log("for in loop : ");
for(key in book){
    console.log(`${key} = ${book[key]}`);
}

// Task 9: Use the Object.keys and Object.values method to log all the keys and values of book 
console.log(Object.keys(book));
console.log(Object.values(book));

