// array add

let arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);

//  last index remove array

arr.pop();
console.log(arr);

// first index remove array

arr.shift();
console.log(arr);

arr.unshift(9);
console.log(arr);

// two array add

let a1 =[1,2,3,4,5];
let a2 =[3,4,5];
let a3 = a1.concat(a2);
console.log(a1,a2,a3);

// two array string add
  
let s = a3.join("@");
console.log(s);

a3.reverse();
console.log(a3);

console.log(a3.indexOf(75));


let arr1 = [1,2,3,4,5,6];
console.log(arr1.slice(2,5));


arr1.splice(2,1,11)
console.log(arr1);