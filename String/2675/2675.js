const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input2675.txt').toString().split('\n');

// const num1 = input.shift();

// for (let i = 0; i < num1; i++) {
//     let answer = '';
    
//     const [num2, str] = input[i].split(" ");

//     for (let j = 0; j < str.length; j++) {
//         for (let c = 0; c < num2; c++) {
//             answer += str[j];
//   	}
//     }
//     console.log(answer);   
// }


const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
    answer = '';
    const arr = input[i].split(' ');
    for (let j = 0; j < arr[1].length; j++) {
        answer += arr[1][j].repeat(Number(arr[0]));
    }
    console.log(answer);
}




