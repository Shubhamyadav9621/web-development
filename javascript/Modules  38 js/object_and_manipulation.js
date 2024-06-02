let obj = {id: 101, name: "Alex", salary: 100000};

let  emp = new Object();
emp.id = 103;
emp.name = "Shubham"
console.log(emp);
console.log(obj);


function Emp(i,n,s){
    this.id = i;
    this.name = n;
    this.salary = s;
}

const e = new Emp(104,"Shubh",120000);
console.log(e);

//
console.log(emp.id);
console.log(emp ['name']);

emp['salary'] = 130000;
emp.id = 13;
emp['name'] = 'mr.sam'

delete emp.id
console.log(emp);