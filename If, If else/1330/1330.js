const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input1330.txt').toString().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

if (A > B) {
    console.log('>');
} else if (A < B) {
    console.log('<');
} else if (A === B) {
    console.log('==');
}