// Activity 1 - Sorting Algorithm
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. log the sorted arr;
let arr = [10,2,4,8,5,7];

function bubbleSort(arr){
    let n = arr.length;

    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}

// console.log(arr);
// bubbleSort(arr);
// console.log(arr);

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. log the sorted arr;
function selectionSort(arr){
    let n = arr.length;

    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}

console.log(arr);
selectionSort(arr);
console.log(arr);

// Task 3: Implement the Quick sort algorithm to sort an array of numbers in ascending order. log the sorted arr;

// Activity 2: Searching
// Task 4: Implement a linear search value to find the target value in an array. Log the index value of target value.
let arr2 = [2,4,6,8,5,3,1,43,21];

function linearSearch(arr,target){
    for(let i=0; i<arr2.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr2,8));

// Task 5: Implement the Binary Search algorithm to find a target value in a sorted array. log the index of target
function BinarySearch(arr,s,e,target){
    if(s > e){
        console.log(`s = ${s} and e = ${e}`);
        return -1;
    }

    let mid = Math.round((s+e)/2);

    if(arr[mid] === target){
        return mid;
    }
    else if(arr[mid] < target){
        return BinarySearch(arr, mid+1, e, target);
    }
    else{
        return BinarySearch(arr, s, mid-1, target);
    }
}

let s = 0;
let end = arr.length-1;
console.log(arr,s,end);
console.log(BinarySearch(arr, s, end, 5));

// Activity 3: String Algorithm
// Task 6: Write a function to count the occurrence of each character in a string. Log the character counts
function countCharacterOccurrence(str){
    const charCount = {};

    for(const char of str){
        if(charCount[char]){
            charCount[char]++;
        }else{
            charCount[char] = 1;
        }
    }

    // log the character counts
    for(const [char, count] of Object.entries(charCount)){
        console.log(`Charcter: ${char} = ${count}`);
    }
}

let str = "hello world";
countCharacterOccurrence(str);

// Task 7: Write a function to find the longest sunbtring without repeating characters in a string. log the length of substring
function longestUniqueSubstring(str){
    let start = 0;
    let maxLength = 0;
    let charIndexMap = new Map();

    for(let end = 0; end < str.length; end++){
        const char = str[end];

        if(charIndexMap.has(char)){
            start = Math.max(charIndexMap.get(char)+1, start);
        }

        charIndexMap.set(char, end);

        maxLength = Math.max(maxLength, end - start + 1);
    }
    console.log(`Length of the longest substring without repeating characters: ${maxLength}`);
}

const exampleString = "abcabcbb";
longestUniqueSubstring(exampleString);  

// Activity 4 : Array Algorithm
// Task 8: Write a function to rotate an array by k positions. Log the rotated array
let arr3 = [1,2,3,4,5,6,7];
let k = 3;

for(num of arr3){
    console.log(num);
}

for(let i=k; i>0; i--){
    let temp = arr3.pop();
    arr3.unshift(temp);
}

console.log("After rotating : ");

for(num of arr3){
    console.log(num);
}

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged Array
let arr4 = [2,5,7,9];
let arr5 = [1,3,5,6,7,8,9];
let arr6 = [];

function mergeSortedArr(arr1,arr2,arr3){
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            arr3.push(arr1[i]);
            i++;
        }
        else{
            arr3.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        arr3.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        arr3.push(arr2[j]);
        j++;
    }
}

mergeSortedArr(arr4,arr5,arr6);

console.log(arr6);