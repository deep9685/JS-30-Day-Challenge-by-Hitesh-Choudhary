// Activity 1: Two Sum
// Task 1: solve the Two Sum problem on leetcode
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
    return -1;
};      

// Activity 2: Reverse Integer
// Task 2: Solve the 'Reverse Integer' problem on Leetcode
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let temp = x;

    if(x < 0){
         temp = Math.abs(temp);
    }

    let newDigit = 0;

    while(temp > 0){
        let rem = temp%10;
        newDigit = newDigit*10 + rem;
        console.log("newDigit = ",newDigit);
        if(temp < 10){
            temp = 0;
        }else{
            temp = Math.floor(temp/10);
        }
        console.log("temp = ", temp);
    }

    if(newDigit < -(2 ** 31) || newDigit > ((2**31) -1))
    {
        return 0;
    }

    if(x<0){
        newDigit = newDigit*(-1);
        return newDigit;
    }

    return newDigit;
};

// Activity 3 : Pallindrome Number
// Task 3: Solve the 'Pallindrome Number' problem on Leetcode
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }

    let temp = x;
    let rev = 0;
    while(temp > 0){
        let digit = temp%10;
        rev = rev*10 + digit;
        temp = Math.floor(temp/10);
    }

    if(rev === x){
        return true;
    }
    return false;
};

// Activity 4 : Merged Two Sorted List on Leetcode
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let curr = dummy;
 
    while(list1 && list2){
         if(list1.val < list2.val){
             curr.next = list1;
             list1 = list1.next;
             curr = curr.next;
         }
         else{
             curr.next = list2;
             list2 = list2.next;
             curr = curr.next;
         }
    }
 
    if(list1){
     curr.next = list1;
    }
    else if(list2){
     curr.next = list2;
    }
 
    return dummy.next;
 };

//  Activity 5: Solve 'Valid Parenthesis' problem on Leetcode
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];

    for(let i=0; i<s.length; i++){
        let ch = s[i];
        if(ch == '(' || ch == '[' || ch == '{'){
            arr.push(ch);
        }
        else{
            if(arr.lenght != 0){
                let topch = arr.pop();

                if(!((topch == '(' && ch == ')') || (topch == '[' && ch == ']') || (topch == '{' && ch == '}'))){
                    return false;
                }
            }
            else{
                return false;
            }
        }
    }

    if(arr.length === 0){
        return true;
    }else{
        return false;
    }
};