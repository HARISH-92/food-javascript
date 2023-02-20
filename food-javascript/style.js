// var k=document.getElementById("trade").addEventListener();
// k.style="color:green";
// var l=document.getElementById("tra");
// l.style="color:green";
document.getElementById("trade").addEventListener("mouseover",mouseOver);
document.getElementById("trade").addEventListener("mouseout",mouseOut);
function mouseOver(){
    document.getElementById("trade").style.color='green';
}
function mouseOut(){
    document.getElementById("trade").style.color='black';
}
document.getElementById("tra").addEventListener("mouseover",mousein);
document.getElementById("tra").addEventListener("mouseout",mouseOu);
function mousein(){
    document.getElementById("tra").style.color='green';
}
function mouseOu(){
    document.getElementById("tra").style.color='black';
 }
// document.getElementById("home").addEventListener("click",click);
// function click(){
//     document.getElementById("home").innerText= <i class="material-icons">add</i>
// }
var change=document.getElementById("qfd");
console.log(change.innerText);
function fun(){
    change.innerText="Please Order Soon!"
    change.style="color:rgb(255, 68, 0);";
    console.log(change.innerText);
}
setTimeout(fun,6000);
document.getElementById("imb").addEventListener("mouseover",im1);
document.getElementById("imb").addEventListener("mouseout",im2);
function im1(){
    document.getElementById("imb").src="pizza.png";
}
function im2(){
    document.getElementById("imb").src="bur1.png";
}
var food=document.getElementById("im");
console.log(food.innerText);
function food1(){
    food.innerText="Please Order Soon!"
    food.src="chicken.png";
    console.log(food.innerText);
}
setTimeout(food1,6000);
var p=document.getElementById("im1");
console.log(p.innerText);
function key(){
    p.innerText=("changed");
    p:hover="width:50%";
    console.log(p.innerText);
}
