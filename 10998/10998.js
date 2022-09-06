const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input10998.txt').toString();
input = input.split(' ');

console.log(parseInt(input[0]) * parseInt(input[1]));