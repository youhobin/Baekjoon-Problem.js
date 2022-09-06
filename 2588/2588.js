const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input2588.txt').toString();
input = input.split('\n');  // .map(Number); 하면 숫자됨
console.log(input)

const num1 = Number(input[0]);
const num2 = Number(input[1]);
const num2s = input[1].split('');

const arr = [];
for (let i = 2; i >= 0; i--) {
    arr.push(num1 * Number(num2s[i]));
}
arr.push(num1*num2);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}