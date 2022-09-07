const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input10871.txt').toString().split('\n');

const input1 = input[0].split(' ');
const input2 = input[1].split(' ').map(num => Number(num));
const number = Number(input1[0]);
const standard = Number(input1[1]);

let print = '';
for (let i = 0; i <= number -1; i++) {
    if (standard > input2[i]) {
        print += input2[i] + " ";
    }
}

console.log(print.trim());