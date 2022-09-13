const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input1152.txt').toString().trim().split(' ');

console.log(input[0] === ''? 0 : input.length);