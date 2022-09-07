const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input2439.txt').toString();

const num = Number(input);

for (let i = 0; i < num; i++) {
    let stars = '';
    for (let j = num-1; j >= 0; j--){
        stars += j <= i ? '*' : ' ';
    }
    console.log(stars);
}
