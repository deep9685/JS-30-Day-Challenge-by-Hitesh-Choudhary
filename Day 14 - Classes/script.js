// Activity 1: Class Definition
// Task 1: Define a class with properties name and age and a method to return a greeting message.
// create a instance of the class and log the greeting message;

class Person{
    
    constructor(name , age){
        this.name = name;
        this.age = age
    }

    greet(){
        return `Hi ${this.name}, Welcome to cyberInstant.`;
    }

    static hello(){
        console.log(`Hello, this is a static method`);
    }
}

const p1 = new Person("Rohan", 23);
console.log(p1.greet());
Person.hello();

// Task 2: Add a method to the Persn class that update the age property and log the updated age.
Person.prototype.updateAge = function(newAge){
    this.age = newAge;
    console.log(`${this.name} , your updated age is = ${this.age}.`);
}

p1.updateAge(25);

// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a prperty studentId and a method to return the StudentId.
// Create an instance student class and log the student id.
class Student extends Person{
    static numberOfStudent = 0;
    constructor(name,age,studentId){
        super(name,age);
        this.studentId = studentId;
        Student.numberOfStudent++;
    }

    getStudentID(){
        return this.studentId;
    }
}

const s1 = new Student("David", 21, 1001);
console.log(`${s1.name} , Your Student ID is ${s1.getStudentID()}`);
console.log(s1.greet());

// Task 4: Override the greeting method in Student class to Include Student id in message. log it
Student.prototype.greet = function(){
    return `Hi ${this.name}, Welcome to cyberInstant. Your Student ID is ${this.studentId}`;
}
console.log(s1.greet());


// Activity 3: Static methods and Properties
// Task 5: Add a static method to the Person class that return a generic greeting message. Call this static method without creating an 
// instance of class and log the message
// In js you cant't directly add a static method to a class externally after the class has been defined. However, You can achieve a similar effect by adding 
// the method to class protototype.
Person.Hi =  function(){
    console.log(`Hello ${this.name}`);
}

Person.Hi();

// Task 6: Add a static property to the Student class to keep the track of the number of students created. 
// Increment this property in constructor and log the total number of students.
// updated code in above student class
const s2 = new Student("Ram", 24, 1002);
console.log(Student.numberOfStudent);

// Activity 4: Getter or Setter
// Task 7: Add a getter method to the Person2 class to return the full name(assume a firsname , lastname property).
// create an instance and log the full name using the getter.
class Person2{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName(){
        return this.firstname+" "+this.lastname;   
    }

    setFullName(fname,lname){
        this.firstname = fname;
        this.lastname = lname;
    }
}

const p2 = new Person2("Shubham", "Patel");
console.log(p2.getFullName());

//Task 8: Add a setter method to the Person2 class to update the name properties. Update the name using the setter and log the updated full name;
p2.setFullName("Jhony", "Depp");
console.log(p2.getFullName());

// Activity 5: Private Fields
// Task 9: Define a class Account with private field for balance and a method to deposit and withdraw money.
// Ensure that balance can only be updated through these method.
class Account{
    #balance = 0;

    constructor(money){
        this.#balance = money;
    }

    deposit(money){
        this.#balance += money;
    }

    withdraw(money){
        this.#balance -= money;
    }

    getBalance(){
        return this.#balance;
    }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods. logging the balance after each operation.
const a1 = new Account(500);
console.log(a1.getBalance());

a1.deposit(400);
console.log(a1.getBalance());

a1.withdraw(200);
console.log(a1.getBalance());

// a1.#balance = 22; not possible as it is a private field
