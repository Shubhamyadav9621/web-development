// Arrow Function 

// 1. One: parameter,and single return statement

 const square = (x) => x*x;

// 2. Multiple parameter, and single return expression

 const sumOfTwoNumbers = (x,y) => x+y;

// 3. Multiple statements in function expression

 const sum = (x,y) => {
    console.log('Adding ${x} and ${y}');
   return x+y;
}

// 4. Returning an object

// const sumAndDifference=(x,y) => ({sum: x+y, difference: x-y});

// calling a function

 let output1 = square(5); 
// let output2 = sumOfTwoNumbers(1,2);
// let output3 = sum(1,2);

// let output4 = sumAndDifference(5,3);

