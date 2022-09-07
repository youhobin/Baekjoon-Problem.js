const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input10950.txt').toString().split('\n');
const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
    const numArr = input[i].split(' ').map(num => Number(num));
    console.log(numArr[0] + numArr[1]);
}

// for (let i = 1; i <= 5; i++) {
//     const numCase = input[i].map(Number);
//     console.log(numCase);
// }