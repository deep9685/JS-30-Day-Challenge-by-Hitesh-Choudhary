// Activity 1: if-else statements
// Task 1: Write a program to check the number is positive, negative or zero
let num = 0;
if(num > 0){
    console.log("Positive");
}else if(num < 0){
    console.log("Negative");
}else{
    console.log("Zero")
}

// Task 2: write a program to check if a person is eligible to vote
let personAge = 19;
if(personAge >= 18){
    console.log("Person is eligible to vote.");
}else{
    console.log("Person is not eligible to vote");
}

// Activity 2: nested if-else
// Task 3: write a program to find largest of three number
let [a,b,c] = [62,33,67];
if(a > b){
    if(a>c){
        console.log(`${a} is greater than ${b} and ${c}`);
    }else{
        console.log(`${c} is greater than ${a} and ${b}`);
    }
}else{
    if(b>c){
        console.log(`${b} is greater than ${a} and ${c}`);
    }else{
        console.log(`${c} is greater than ${a} and ${b}`);
    }
}


// Activity 3: Switch case
// Task 4: write a program that uses a switch case to determine the day of the weekbased on number 1-7
switch(new Date().getDay()){
    case 0:
        console.log("It's a Sunday");
        break;
    case 1:
        console.log("It's a Monday");
        break;
    case 2:
        console.log("It's a Tuesday");
        break;
    case 3:
        console.log("It's a Wednesday");
        break;
    case 4:
        console.log("It's a Thursday");
        break;
    case 5:
        console.log("It's a Friday");
        break;
    case 6:
        console.log("It's a Saturday");
}

// Task 5: write a program that usses a switch case to assign a grade(A,B,C,D) based on score
let score = 44;
switch(true){   // IMP - The only thing necessary is switch(true){...} for your case expressing to evaluate to booleans.
    case score>=60:
        console.log("A");
        break;
    case score>=50:
        console.log('B');
        break;
    case score>=40:
        console.log('C');
        break;
    default:
        console.log('D');
}


// Activity 4:
// Task 6 : write a program that uses the ternary operator to check if a number is even or odd and log the result to console
let n = 25;
n%2 == 0 ? console.log(`${n} is even.`) : console.log(`${n} is odd.`);

// Activity 5: combining condition
let year = 2024;
if((year%4 == 0 && year%100 != 0) || (year%400 == 0)){
    console.log(`${year} is a leap year.`);
}else{
    console.log(`${year} is not a leap year.`);
}