let x = function () {
    console.log("hi");
    }
    
    x();
     

    // immediate invoke function ko hi self-invoking functions kahate hai 

(function exec(){
    console.log("named")
})();

(function (x){
    console.log(x*x);
})(5);