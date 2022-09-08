const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input11720.txt').toString().split('\n');

const count = Number(input[0]);
const number = input[1].split('').map(Number);

const sum = number.reduce((a,c) => a + c);
console.log(sum);