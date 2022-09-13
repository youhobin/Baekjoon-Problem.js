const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input5622.txt').toString().trim().split('');

let count = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] === 'A' || input[i] === 'B' || input[i] === 'C') {
        count = count + 3;
    } else if (input[i] === 'D' || input[i] === 'E' || input[i] === 'F') {
        count = count + 4;
    } else if (input[i] === 'G' || input[i] === 'H' || input[i] === 'I') {
        count = count + 5;
    } else if (input[i] === 'J' || input[i] === 'K' || input[i] === 'L') {
        count = count + 6;
    } else if (input[i] === 'M' || input[i] === 'N' || input[i] === 'O') {
        count = count + 7;
    } else if (input[i] === 'P' || input[i] === 'Q' || input[i] === 'R' || input[i] === 'S') {
        count = count + 8;
    } else if (input[i] === 'T' || input[i] === 'U' || input[i] === 'V') {
        count = count + 9;
    } else if (input[i] === 'W' || input[i] === 'X' || input[i] === 'Y' || input[i] === 'Z') {
        count = count + 10;
    }
}

console.log(count);