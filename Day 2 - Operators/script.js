// Activity 1 - Arithimetic operator
// Task 1 : write a program to add two numbers and log the results to conslole
let a = 5;
let b = 15;
let c = a+b;
console.log(`Sum of ${a} and ${b} is ${c}`);

// Task 2 :write a program to subtract two numbers and log the results to conslole
let e = 5;
let f = 15;
let g = a-b;
console.log(`Subtraction of ${e} and ${f} is ${g}`);

// Task 3: write a program to multiply two numbers and log the results to conslole
let h = 10;
let i = 20;
let j = h*i;
console.log(`Multiplication of ${h} and ${i} is ${j}`);

// Task 4: write a program to divide two numbers and log the results to conslole
let k = 100;
let l = 20;
let m = k/l;
console.log(`Division of ${k} and ${l} is ${m}`);

// Task 5: write a program to find the remainder
let n = 1234;
let o = 10;
let p = n%o;
console.log(`Reaminder of division ${n}/${o} is ${p}`);

// Activity 2 : Assignment operator
// Task 6: use the += operator to add the number and log it on console
let q = 10;
let r = 2;
q += r;
console.log(`Sum using += is ${q}`);

// Task 7: use the -= operator to subtract the number and log it on console
let u = 10;
let v = 2;
u -= v;
console.log(`Sum using -= is ${u}`);

// Activity 3 : Comparison operator

// Task 8: write a program to compare two number using < , >
let a1 = 5;
let a2 = 10;
console.log(`Comparison of ${a1} and ${a2} using <  is ${a1 < a2}`);
console.log(`Comparison of ${a1} and ${a2} using >  is ${a1 > a2}`);


// Task 9: write a program to compare two number using <= , =>
let b1 = 10;
let b2 = 10;
console.log(`Comparison of ${b1} and ${b2} using <=  is ${b1 <= b2}`);
console.log(`Comparison of ${b1} and ${b2} using >=  is ${b1 >= b2}`);

// Task 10: write a program to compare two number using <= , =>
let c1 = '10';
let c2 = 10;
console.log(`Comparison of ${c1} and ${c2} using ==  is ${c1 == c2}`);
console.log(`Comparison of ${c1} and ${c2} using ===  is ${c1 === c2}`);

// Activity 4 : logical operator
// Task 11 : write a program that use && operator to combine two condition
let d1 = (b1 <= b2) && (c1 === c2);
console.log(`using logical AND : `, d1);

// Task 11 : write a program that use || operator to combine two condition
let d2 = (b1 <= b2) || (c1 === c2);
console.log(`using logical OR : `, d2);

// Task 11 : write a program that use ! negate the condition
let d3 = !(b1 <= b2);
console.log(`using logical ! : `, d3);

// Activity 5: Ternary operator
let e1 = -5;
e1 > 0 ? console.log("e1 is positive") : console.log("e1 is negative");