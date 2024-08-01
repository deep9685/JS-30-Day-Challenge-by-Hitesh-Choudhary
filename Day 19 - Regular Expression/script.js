// Activity 1 : Basic Regular Expression
// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of word "JavaScript" in a string). Log the matches
function findJavascriptOccurrence(text){
    const regex = /JavaScript/g;
    const matches = text.match(regex);

    if(matches){
        console.log(`Found ${matches.length} occurrences:`);
        matches.forEach((item,index) => console.log(`${index+1} : ${item}`));
    }
    else{
        console.log("No occurrence found.");
    }
}

const exampleText = "JavaScript is a versatile language. Learning JavaScript can be very rewarding. JavaScript is used in many applications.";
findJavascriptOccurrence(exampleText);

// Task 2: Write a regular expression to match all digits in a string. log the matches
function finfDigitOccurrence(str){
    const regex = /\d+/g;
    const matches = str.match(regex);

    if(matches){
        console.log(`Found ${matches.length} occurrences:`);
        matches.forEach((item,index) => console.log(`${index+1} : ${item}`));
    }
    else{
        console.log("No occurrence found.");
    }
}

const str = "Here are some numbers: 123, 4567, and 89. Also, check out 0 and 42.";
finfDigitOccurrence(str);

// Activity 2: Character classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that starts with a capital letter. Log the matches
function findCapitalizedword(text){

    const regex = /\b[A-Z][a-zA-Z]*\b/g;

    const matches = text.match(regex);

    if (matches) {
        console.log(`Found ${matches.length} capitalized word(s):`);
        matches.forEach((match, index) => console.log(`${index + 1}: ${match}`));
    } else {
        console.log("No capitalized words found.");
    }
}

// Example usage:
const text = "Alice and Bob went to Wonderland. They met the Queen of Hearts and the White Rabbit.";
findCapitalizedword(text);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string 
// same as task 2

// Actiity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number froma US phone number format
// (e.g. (123) 456-7890). Log the captures.
function capturePhoneNumberParts(phoneNumber){
    const regex = /\((\d{3})\) (\d{3})-(\d{4})/;
    const matches = phoneNumber.match(regex);

    if (matches) {
        // Log the full match and the captured groups
        console.log("Full match:", matches[0]);
        console.log("Area code:", matches[1]);
        console.log("Central office code:", matches[2]);
        console.log("Line number:", matches[3]);
    } else {
        console.log("No match found.");
    }
}

const examplePhoneNumber = "(123) 456-7890";
capturePhoneNumberParts(examplePhoneNumber);

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the capture
function captureEmailParts(email){
    const regex = /^(\w+)@([\w.]+)$/;
    const match = email.match(regex);

    if (match) {
        // Log the full match and the captured groups
        console.log("Full match:", match[0]);
        console.log("Username:", match[1]);
        console.log("Domain:", match[2]);
    } else {
        console.log("No match found.");
    }   
}

const exampleEmail = "username@example.com";
captureEmailParts(exampleEmail);

// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches
function matchWordAtBegining(text){
    const regex = /^\b\w+\b/;
    const match = text.match(regex);

    if (match) {
        console.log("Matched word at the beginning:", match[0]);
    } else {
        console.log("No match found at the beginning.");
    }
}

const text1 = "Hello world, this is a test.";
matchWordAtBegining(text1);

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches
function matchWordAtEnding(text){
    const regex = /\b\w+\b$/;
    const match = text.match(regex);

    if (match) {
        console.log("Matched word at the ending:", match[0]);
    } else {
        console.log("No match found at the ending.");
    }
}

const text2 = "Hello world, this is a test";
matchWordAtEnding(text2);


// Activity 5: Practical Application
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter,
//  one lower case letter, one digit and one special character). Log whether the password is valid
function validatePassword(password){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
    const isValid = regex.test(password);

    if (isValid) {
        console.log("The password is valid.");
    } else {
        console.log("The password is invalid.");
    }
}

const examplePassword1 = "Password1!";
const examplePassword2 = "password";
const examplePassword3 = "Pass1!";
const examplePassword4 = "ValidPass1@";

validatePassword(examplePassword1);
validatePassword(examplePassword2); 
validatePassword(examplePassword3); 
validatePassword(examplePassword4);

// Task 10: write a regular expression to validate a URL. Log whether the URL is valid. 
function validateURL(url) {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[a-zA-Z0-9#]+)*\/?$/;
    const isValid = regex.test(url); 

    if (isValid) {
        console.log("The URL is valid.");
    } else {
        console.log("The URL is invalid.");
    }
}

// Example usage:
const exampleURL1 = "https://www.example.com";
const exampleURL2 = "http://example.com:8080/path/to/resource";
const exampleURL3 = "www.example.com";
const exampleURL4 = "https://example";

validateURL(exampleURL1);
validateURL(exampleURL2); 
validateURL(exampleURL3); 
validateURL(exampleURL4); 