const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input2438.txt').toString();

const num = Number(input);
let stars = '';
for (let i = 1; i <= num; i++) {
    stars += '*';
    console.log(stars);
}