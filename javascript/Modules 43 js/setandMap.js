let emptySet = new Set()

// console.log(emptySet.size);

let myArray = [1,2,3,4,3,2]
let newSet = new Set(myArray)
console.log(newSet);

// Add

// newSet.add(9)
// newSet.add(8)
// console.log(newSet);
// console.log(newSet.has(9));

newSet.add(9) 
newSet.clear()
console.log(newSet);

// Set difference 

function setDifference(setA, setB){
return new Set([...setA].filter(el=> !setB.has(el)))
}

// +++++++++++++++++++++++++++++++++

// MAP 

let map = new Map()
console.log(map.size);
map.set

let arr = [
    [1,"Ajay"],
    [2,"Sanjay"],
    [3,"Piyush"],
    [4,"Vinay"],
    [5,"Shivam"],
];

arr.map((arrayItem)=> map.set(arrayItem[0], arrayItem[1]) )
