const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input2739.txt').toString();
const number = Number(input);


for (let i = 0; i <=8; i++) {
    console.log(`${number} * ${i + 1} = ${number * (i + 1)}`);
}