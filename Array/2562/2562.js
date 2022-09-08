const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input2562.txt').toString().trim().split('\n');

const input1 = input.map(Number)
const arr = input.map(Number).sort(function (a,b) {return a - b});
const maxNum = arr[arr.length - 1];
const position = input1.indexOf(maxNum);
console.log(`${maxNum}
${position + 1}`);