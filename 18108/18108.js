const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input18108.txt').toString();
input = input.split(' ');

const year = Number(input);
console.log(year - 543);