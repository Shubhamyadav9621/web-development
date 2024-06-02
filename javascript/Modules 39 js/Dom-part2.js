// Append Child

let title = document.createElement("h1");
title.style.fontSize = "25px";
title.className = "pwskills";
title.textContent = "Pw Skills, Namaste";
console.log(title);
document.body.appendChild(title);

// Remove Child

let ul = document.querySelector("ul");
console.log(ul);

let lists = document.querySelectorAll("li");
console.log(lists);
for(list of lists){
    ul.removeChild(list);
}