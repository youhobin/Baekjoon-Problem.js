const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input1110.txt').toString();

let number = Number(input);
let sum;
let cycle = 0;
while (true) {
    cycle++;
    sum = Math.floor(number/10) + (number % 10);
    number = (number % 10) * 10 + (sum % 10);
    if (Number(input) === number) {
        break;
    }
}
console.log(cycle);