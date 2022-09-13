const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input2941.txt').toString().trim();

let croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

// function solution(input) {
//   for (let alphabet of croatia) {
//     input = input.split(alphabet).join("A");
//   }

//   return input.length; 
// }

// console.log(solution(input));

for (let alphabet of croatiaAlphabet) {
    input = input.split(alphabet).join("A");
}

console.log(input.length);
