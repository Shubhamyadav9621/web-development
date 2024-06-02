 function h(x, fn){
    // h -> is a hof(higher order function)
    // fn -> callback
   console.log(x*x);
    // fn();
   // fn(x*x)
}
// h(10,function(){
 //  console.log("done with callback")
// })

 h(10,exec)
 function exec(n){
    console.log("squared value is",n)
 }
console.log("start");
 setTimeout(function f() {
    console.log("timer done");
 },100);

 
 setTimeout(function f() {
    console.log("timer done");
 },0);

 console.log("end");
  for(let i=0;i<10000000000000; i++){}
