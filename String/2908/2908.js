const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input2908.txt').toString().split(' ');

const num1 = input[0];
const num2 = input[1];
const newNum1 = num1[2] + num1[1] + num1[0];
const newNum2 = num2[2] + num2[1] + num2[0];

if (Number(newNum1) > Number(newNum2)) {
    console.log(Number(newNum1));
} else {
    console.log(Number(newNum2));
}

console.log(Number(newNum1) > Number(newNum2) ? Number(newNum1) : Number(newNum2))