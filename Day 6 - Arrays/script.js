// Activity 1: Array creation and Access
// Task 1: creates an array of numbers from 1 to 5 and log the array to console
let arr = [1,2,3,4,5];
// console.log(arr);
for( val in arr){
    console.log(arr[val]);
}

// Task 2: Access the first and last elements of array loge them to console
let first = arr[0];
let last = arr[4];
console.log(first + " " + last);

// Activity 2: Array method (basic)
// Task 3: Use the push method to add a new number to the end of the array and log updated array
arr.push(7);
console.log(arr);

// Task 4: Use the pop method to remove a new number to the end of the array and log updated array
arr.pop()
console.log(arr);

// Task 5: use the shift method to remove the first element from the array
arr.shift();
console.log(arr);

// Task 6: use the ushift method to add a number to the begining of array
arr.unshift(9);
console.log(arr);

// Activity 3: Array method (intermediate)
// Task 7: use the map method to create a new array where each number is doubled and log the new array
let newArr = arr.map((num) => num*2);
console.log(newArr);

// Task 8: use the filter method to create a new array with only even number
let newArr2 = arr.filter((num) => num%2 == 0);
console.log(newArr2);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result
let sum = arr.reduce((total, num) => total+num);
console.log(sum);


// Activity 4: Array Iteration
// Task 10: Use a for loop to Iterate over the array and log each element to the console
for(let i=0; i<arr.length; i++){
    // console.log(arr[i]);
}

// Task 10: Use a forEach method to Iterate over the array and log each element to the console
arr.forEach(element => {
    // console.log(element);
});

// Activity 5: Multi-Dimensional Array
// Task 11: create a two dimensional array and log it
let arr2 = [[1,2,3],
            [2,3,4],
            [6,7,8]
           ]

arr2.forEach(arr => {
    arr.forEach(ele => {
        console.log(ele);
    })
})

// Task 12: access an individual element in 2D Array
console.log(arr2[2][1]);