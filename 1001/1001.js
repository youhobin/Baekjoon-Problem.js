//fs.readFileSync(__dirname+'/input.txt').toString(); vs코드에서 이렇게
const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input1001.txt').toString();
input = input.split(' ');

const A = Number(input[0]);
const B = Number(input[1]);
console.log(A-B);