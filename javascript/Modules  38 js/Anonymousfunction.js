let x = function () {
console.log("hi");
}

x();
 

// immediate invoke function 

(function exec(){
    console.log("named")
})();

(function (x){
    console.log(x*x);
})(5);