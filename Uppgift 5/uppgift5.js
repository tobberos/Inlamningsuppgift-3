function randomDice(){  //Skapar ett tal mellan 1-6 och avrundar
let array = [];
for (let i = 0; i < 1000; i++) {
let number = Math.floor(Math.random() * 6) + 1;  
array.push(number);
}
return array;   
}

function print(){
let randomNumber = randomDice();
let table =[0,0,0,0,0,0];      //Array för att räkna ut frekvenserna
for (let i = 0; i < randomNumber.length; i++) {
   let numb = randomNumber[i];
    switch(numb){
        case 1: table[0]++; break;
        case 2: table[1]++; break;
        case 3: table[2]++; break;
        case 4: table[3]++; break;
        case 5: table[4]++; break;
        case 6: table[5]++; break;
        }
}
console.log("1\t2\t3\t4\t5\t6\n" + table[0] + "\t" + table[1]
        + "\t" + table[2] + "\t" + table[3] + "\t" + table[4] + "\t" + table[5]);
}
print();
