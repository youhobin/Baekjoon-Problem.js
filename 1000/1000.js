const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();//'/input1000.txt'
input = input.split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);

