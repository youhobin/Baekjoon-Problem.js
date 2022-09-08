const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input1065.txt').toString();

const number = Number(input);

let count = 0;
for (let i = 1; i <= number; i++) {
    let arr = String(i);
    if (i <= 99) {
        count++;
        continue;
    } 

    let A = Number(arr[0]) - Number(arr[1]);
    let B = Number(arr[1]) - Number(arr[2]);
    if (A === B) {
        count++;
    }
}

console.log(count);