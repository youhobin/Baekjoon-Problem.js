const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input11021.txt').toString().split('\n');

const testCase = Number(input[0]);
for (let i = 1; i <= testCase; i++) {
    const num = input[i].split(' ').map(number => Number(number));
    console.log(`Case #${i}: ${num[0] + num[1]}`);
}