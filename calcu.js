let display =document.getElementById("display")
function saki(azim){
    display.value += azim;
}
function ac(){
    display.value ="";
}
function onedelete(){
    display.value = display.value.slice(0,-1);
}
function result(){
    let x = display.value;
    let y =eval(x);
    display.value = y;
}