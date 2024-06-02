let emp = {
    id: 101,
    name: 'Shubham',
    age: 24
};

let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);

emp.id = 100;
console.log(emp);

