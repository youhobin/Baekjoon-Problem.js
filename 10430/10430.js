const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input10430.txt').toString();
input = input.split(' ');

const A = +input[0];
const B = +input[1];
const C = +input[2];

console.log((A+B)%C);
console.log(((A%C)+(B%C))%C);
console.log((A*B)%C);
console.log(((A%C)*(B%C))%C);