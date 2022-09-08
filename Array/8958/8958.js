const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input8958.txt').toString().trim().split('\n');

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
    let count = 0;
    let sum = 0;

    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === 'O') {
            count++
        } else {
            count = 0;
        }
        
        sum += count;
    }
    console.log(sum);
}

// const n = Number(input[0]);
// for(let i=1; i<=n; i++){
//     let count = 1;
//     let sum = 0;
    
//     for(let j=0; j<input[i].length; j++){
//         if(input[i][j]==="O"){
//             sum+=count;
//             count++;
//         }else{
//             count = 1;
//         }
//     }
//     console.log(sum);
// }