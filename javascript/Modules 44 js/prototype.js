let myHeros = ["thor" ,"spiderman"]
 let dcHeros = ["batman","flash","spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",
    getSpidermanPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.shubham = function(){
    console.log(`Shubham is present in all object`);
}

console.log(myHeros.shubham());
console.log(heropower.shubham());


Array.prototype.heyShubham = function(){
    console.log(`Shubham says hi`);
}

console.log(myHeros.heyShubham());
// console.log(heropower.heyShubham());

// inheritance

const User = {
    name: "top name",
    email: "top@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAAssistant = {
    makeAssignment: "JS Assignment",
    fulltime: true,
    __proto__: TeachingSupport
}

Object.setPrototypeOf(TeachingSupport,Teacher)
console.log(TAAssistant.isAvailable)

String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`);
}

"shubham.    ".truelength()
"shivam.     ".truelength()