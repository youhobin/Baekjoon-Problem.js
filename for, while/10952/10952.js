const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input10952.txt').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(' ').map(num => Number(num));
    let result = arr[0] + arr[1];
    if (result === 0) {
        break;
    } else {
        console.log(result);
    }
}
