function sfär(radie){   //Räknar ut volymen och arean av en sfär.

let volym = (4 * Math.PI * Math.pow(radie,3)) / 3;    // V = 4 * PI * r^3 / 3
let area = 4 * Math.PI * Math.pow(radie,2);          // 4 * PI * r^2
console.log("Volym: " + volym.toFixed(2) + "\nArea: " + area.toFixed(2));
}

sfär(11);