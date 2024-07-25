import {sum, person} from "./script.js";

// Task 1:
const result = sum(2, 3);
console.log(`The result of adding 2 and 3 is: ${result}`);

// Task 2 -
console.log(person.name);
person.getInfo();

// Task 3:
import { Subtract, Multiply } from "./script.js";
console.log("Subtract - ", Subtract(10,3));
console.log("Multiply = ", Multiply(3,5));

// Task 4 :
import Divide from "./script.js";
console.log("Divide : ",Divide(10,2));

// Task 5:
import * as Mymodule from './script.js'
const radius = 5;

const area = Mymodule.PI * radius * radius;

console.log("area of circle = ",area);

console.log("Reaminder of 14 , 3 = ", Mymodule.remainder(14,3));