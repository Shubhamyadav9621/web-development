// Id

let var1 = document.getElementById("one");
console.log(var1.innerText);


// Class

let var2 = document.getElementsByClassName("tech");
// console.log(var2);

// One number

console.log(var2[2].innerText);
// For mainuplate
var2[1].innerText = "Nodejs";

// TagName

let var3 = document.getElementsByTagName("h4");
console.log(var3[1].innerHTML);
var3[2].innerText = "Hello Pwskills";
var3[2].style.color = "red";

// Query Selector
let var4 = document.querySelector(".class");
 console.log(var4);

 // var4.className = "Hello"
 var4.classList = "hello helo hola";
 var4.setAttribute("id","js");