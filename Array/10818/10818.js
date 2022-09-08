const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input10818.txt').toString().split('\n');

const num = Number(input[0]);
const arr = input[1].split(' ').map(number => Number(number)).sort(function(a,b) {return a -b});

const minNum = arr[0];
const maxNum = arr[arr.length - 1];
console.log(minNum, maxNum);
