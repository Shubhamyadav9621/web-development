// Function with unlimited number of parameters

function sumOfAllParameters(){
    let sum =0;
    for (var i= 0; i< arguments.length; i++) sum +=arguments[i];
    return sum;
 
}

// Function call

let result = sumOfAllParameters(1,2,3,4,5);
console.log(result);

