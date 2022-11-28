let screen = document.getElementById('screen').innerHTML;
let btn = document.querySelectorAll('.btn');

function display(val){
    document.getElementById('screen').innerHTML += val;
    return val;
}

function clearScreen(){
    document.getElementById('screen').innerHTML = "";
}

function solve(){
    let x = document.getElementById('screen').innerHTML;
    let y = eval(x);
    document.getElementById('screen').innerHTML = y;
    return y;
}