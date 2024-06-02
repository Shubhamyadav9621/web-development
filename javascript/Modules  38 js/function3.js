// Function with a parameter (Single, and Multiple)

// Function with one parameter.

function displayMessage(messageToBeDisplayed){
    console.log(messageToBeDisplayed);
}

// calling in a function.

displayMessage(" I am happy to learn full stack wed developer from pw skills");

displayMessage("I am enjoying the journey of javascrpt");



// Function with default parameter.

function displayMessage(messageToBeDisplayed = "I am a proud student of Pw Skills"){
    console.log(messageToBeDisplayed);
}

// Calling in a function.

displayMessage("I am happy to learn full stack wed developer from pw skills");


displayMessage();


// Function with two parameters.

function sumOfTwoNumbers(num1,num2){
    return num1+num2;
}

// Calling a Function 

let result = sumOfTwoNumbers(10,40);
console.log(result);

// Array as an argument.

function sumOfTwoNumbers(num1,num2){
    return num1+num2;
}

// Calling a Function 

let numbers = [10,40];
let result1 = sumOfTwoNumbers(numbers);
console.log(result1);