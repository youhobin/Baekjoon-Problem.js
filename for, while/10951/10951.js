const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input10951.txt').toString().split('\n');


let i = 0;
while(i < input.length -1) {
    let arr = input[i].split(' ').map(num => Number(num));
    const result = arr[0] + arr[1];
    console.log(result);
    i++;
}

// for (let i = 0; i < input.length; i++) {
//     let arr = input[i].split(' ').map(num => Number(num));
//     const result = arr[0] + arr[1];
//     console.log(result);
// }
