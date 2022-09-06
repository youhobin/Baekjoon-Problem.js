// const fs = require('fs');    //  fs 는 런타임 에러
// let input = fs.readFileSync(__dirname+'/input14681.txt').toString().split('\n');

// const x = Number(input[0]);
// const y = Number(input[1]);

// if (x > 0 && y > 0) {
//     console.log(1);
// } else if (x > 0 && y < 0) {
//     console.log(4);
// } else if (x < 0 && y > 0) {
//     console.log(2);
// } else if (x < 0 && y < 0) {
//     console.log(3);
// } 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];
rl.on('line', function (line) {
    input.push(parseInt(line));
}).on('close', function() {
    const X = input[0];
    const Y = input[1];
    
    if (X > 0 && Y > 0) {
        console.log(1);
    } else if (X > 0 && Y < 0) {
        console.log(4);
    } else if (X < 0 && Y > 0) {
        console.log(2);
    } else if (X < 0 && Y < 0) {
        console.log(3);
    }
    process.exit();
});
