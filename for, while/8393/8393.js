const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input8393.txt').toString();
const num = Number(input);

let number = 0;
for (let i = 1; i <= num; i ++) {
    number += Number(i);
}

console.log(number);