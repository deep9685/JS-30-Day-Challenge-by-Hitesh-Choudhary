// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number and log the result
function factorial(n){
    if(n <= 1){
        return n;
    }

    return n * factorial(n-1);
}

console.log(factorial(5));
console.log(factorial(7));

// Task 2: Write a function to calculate the nth Fibonacci number. Log the result for few test case
function fibonacci(n){
    if(n === 1){
        return 0;
    }
    if(n === 2){
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(5));
console.log(fibonacci(17));

// .Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in array. Log the result for few of testcases
let arr = [1,2,3,4,5,6,7,8,9];

function sumArray(currSum, arr, index){
    if(index === arr.length){
        return currSum;
    }

    currSum += arr[index];
    
    return sumArray(currSum,arr,++index);
}

console.log(sumArray(0,arr,0));

// Task 4: write a recursive function to find the maximum element in an array. Log the result
let arr2 = [2,5,3,7,9,44,22,56,864,3];

function findMax(arr, index, currMax){
    if(index === arr.length){
        return currMax;
    }

    if(currMax < arr[index]){
        currMax = arr[index];
    }

    return findMax(arr, ++index, currMax);
}

console.log(findMax(arr2, 0, 0));
console.log(findMax(arr, 0, 0));

// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for few testcases
let str = "DavidMiller";

function reverseString(charArray, s, e){
    if(s >= e){
        str =  charArray.join('');
        return ;
    }

    let temp = charArray[s];
    charArray[s] = charArray[e];
    charArray[e] = temp;

    return reverseString(charArray, ++s, --e);
}


let charArray = str.split('');
reverseString(charArray, 0, charArray.length-1);
console.log(str);

// Task 6: Write a recursive function to check if a string is pallindrome. Log the result
let str2 = "racecar";

function checkPallindrome(str, s, e){
    if(s >= e){
        return true;
    }
    else if( str[s] !== str[e]){
        return false;
    }

    return checkPallindrome(str, ++s, --e);
}

console.log(checkPallindrome(str2, 0, str2.length-1));


// Activity 4: Recursive search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element.
let arr3 = [2,4,5,6,7,9,10];

function binarySearch(arr, s, e, target){
    if(s > e){
        return -1;
    }
    
    let  mid = (s+e)/2;

    if(arr[mid] === target){
        return mid;
    }
    else if(arr[mid] < target){
        return binarySearch(arr, mid+1, e, target);
    }
    else{
        return binarySearch(arr, s, mid-1, target);
    }
}

console.log(binarySearch(arr3, 0, arr3.length-1, 5));

// Task 8: write a recursive function to count the occurrences of a target element in an array. Log the index of the target element.
let arr4 = [1,2,3,5,3,5,2,4,7,8,4,2,3];

function countOccurrence(arr, index, count, target){
    if(index === arr.length){
        return count;
    }

    if(arr[index] === target){
        count++;
    }

    return countOccurrence(arr, ++index, count, target);
}

console.log(countOccurrence(arr4, 0, 0, 5));

