try {
    let x = undefined;
    console.log(x[0]);
} catch (error){
    console.log("error handling in catch")
}finally{
console.log("Finally always gets executed");
}
console.log("end")