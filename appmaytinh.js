let x= +document.getElementById("o1").value;
let y= +document.getElementById("o2").value;
function hamcong(){
    let x= +document.getElementById("o1").value;
    let y= +document.getElementById("o2").value;
    let z=x+y;
    document.getElementById("ResultDivision").innerHTML="ResultDivision: "+ z +" Donvi";
}
function hamtru(){
    let x= +document.getElementById("o1").value;
    let y= +document.getElementById("o2").value;
    let z=x-y;
    document.getElementById("ResultDivision").innerHTML="ResultDivision: "+ z+ " Donvi";
}
function hamnhan() {
    let x= +document.getElementById("o1").value;
    let y= +document.getElementById("o2").value;
    let z = x * y;
    document.getElementById("ResultDivision").innerHTML = "ResultDivision: " + z + " Donvi";
}
function hamchia() {
    let x= +document.getElementById("o1").value;
    let y= +document.getElementById("o2").value;
    let z = x/y;
    document.getElementById("ResultDivision").innerHTML = "ResultDivision: " + z+ " Donvi";
}