// Activity 1: for loop
// Task 1: write a prgram to print number from 1 to 10 using for loop
for(let i=1; i<=10; i++){
    console.log(i);
    // process.stdout.write(i);
}

// Task 2: write a program to print the multiplication table of 5 using for loop
let n = 5;
for(let i=1; i<=10; i++){
    console.log(`${n} * ${i} is ${n*i}`);
}

// Activity 2: While loop
// Task 3: write a program to calculate the sum of numbers from 1 to 10 using while loop
let i = 1;
let sum = 0;
while(i<=10){
    sum += i;
    i++;
}
console.log(sum);

// Task 4: write a program to print numbers from 10 to 1 using a while loop
let j = 10;
while(j>=1){
    console.log(j);
    j--;
}


// Activity 3: do....while loop
// Task 5: write a program to print 1 to 5 using do while 
let k = 1;
do{
    console.log(k);
    k++;
}while(k<=5);

// Task 6: write a program to calculate the factorial of a number using do - while
// let num = prompt("Please enter a number");
let num = 5;
let fac = 1;
do{
    fac *= num;
    num--;
}while(num >= 1);
console.log(fac);

// Activity 4: Nested loop
// Task 7: write a program to print a pattern usin nested fro loop
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        // console.log("*");
        process.stdout.write("*");
    }
    console.log();
}

// Activity 5: Loop Control statement
// Task 8: write a program to print numbers from 1 to 10 but skip 5 using the continue statement
for(let i=1; i<=10; i++){
    if(i == 5){
        continue;
    }
    process.stdout.write(i + " ");
}

console.log()

// Task 9: write a program to print numbers from 1 to 10 but stop loop when num is 7 using break
for(let i=1; i<=10; i++){
    if(i == 7){
        break;
    }
    process.stdout.write(i + " ");
}