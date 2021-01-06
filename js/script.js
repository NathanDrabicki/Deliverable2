let rain = window.prompt ("How many inches of rain fell?")

function repeatStringNumTimes (str,){
    return str.repeat(rain)
}
console.log (repeatStringNumTimes("*",rain))

const startBushelYield =50;
let finalYield = null;

let bushelYield = null;
let preFert = ("premium");
let regFert = ("regular");

if (rain >=20){
    bushelYield = (startBushelYield * 0.9)
}
else if (rain < 10){
    bushelYield = (startBushelYield * 0.8);
}
else{
    bushelYield = startBushelYield;
}
let fert = window.prompt("Did you use fertilizer?");
if (fert=="yes") {
    let fertType = window.prompt("Did you use premium or regular fertilizer?");

}
if (fertType = preFert){
    finalYield = bushelYield * 1.15;
}
else if (fertType == preFert){
    finalYield = bushelYield * 1.1;
}
else (fertType==null); {
    finalYield = bushelYield
}
console.log ("The yield should be " +finalYield + "bushels per acre");