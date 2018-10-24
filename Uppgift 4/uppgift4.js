function sfär(radie){

let volym = (4 * Math.PI * Math.pow(radie,3)) / 3;    
let area = 4 * Math.PI * Math.pow(radie,2);
console.log("Volym: " + volym.toFixed(2) + "\nArea: " + area.toFixed(2));
}

sfär(11);