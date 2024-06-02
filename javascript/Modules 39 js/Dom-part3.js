// document.addEventListener("click",hello);
document.addEventListener("mouseenter",hello);
function hello(){
    document.getElementById("js").innerText = "Namaste bacho";
}
function hey(){
    document.getElementById("jss").innerText = "Namaste";
    document.getElementById("jss").style.color = "red";
    document.getElementById("jss").style.backgroundColor = "black";

    document.getElementById("jss").style.border = "2px solid yellow";
}