const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input2884.txt').toString().split(' ');

const H = Number(input[0]);
const M = Number(input[1]);

if (M >= 45 && M <= 59) {
    console.log(H, M-45);
}else if (M >= 0 && M < 45) {
    if (H === 0) {
        console.log(23, 15 + M);
    } else {
        console.log(H - 1, 15 + M);
    }
}
