const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input3003.txt').toString();
input = input.split(' ');

const chess = [1, 1, 2, 2, 2, 8];
let arr = [];
for (let i = 0; i <= 5 ; i++) {
   arr.push(Number(input[i]));
}

for (let i = 0; i <= 5 ; i++) {
    console.log((chess[i]-arr[i]));
}
