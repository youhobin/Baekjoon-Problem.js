const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input2525.txt').toString().split('\n');

let A = Number(input[0].split(' ')[0]);
let B = Number(input[0].split(' ')[1]);
const C = Number(input[1]);

if (C >= 0 && C < 60) {
    B += C;
    if (B >= 60) {
        B = B-60;
        A += 1;   
    }

    if (A >= 24) {
        A = A - 24;
    }

} else if (C >= 60) {
    A += Math.floor(C/60);
    B += C % 60;
    if (B >= 60) {
        B = B-60;
        A += 1;   
    }

    if (A >= 24) {
        A = A - 24;
    }
}

console.log(A, B);