const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input10869.txt').toString();
input = input.split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));
console.log(A % B);