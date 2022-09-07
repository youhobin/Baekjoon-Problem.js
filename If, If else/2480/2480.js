const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input2480.txt').toString().split(' ').map(Number);

const [a, b, c] = [input[0], input[1], input[2]];

if (a === b && a === c) {
    console.log(10000 + a * 1000);
} else if (a === b || a === c || b === c) {
    if (a === b || a === c) {
        console.log(1000 + a * 100);
    } else {
        console.log(1000 + b * 100)
    }
} else {
    const maxNum = input.sort();
    console.log(maxNum[2] * 100);
}

 




// const num1 = Number(input.splice(0,1));
// input[0] = Number(input[0]);
// input[1] = Number(input[1]);

// console.log(input.indexOf(num1));

// if (input.indexOf(num1) === -1) {

// } else if (input.indexOf(num1) === 0) {
//     if (input.indexOf(num1,1) === 1) {
//         console.log(10000 + num1 * 1000);
//     } else {
//         console.log(1000 + num1 * 100);
//     }
// }
