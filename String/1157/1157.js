const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input1157.txt').toString();

const inputWord = input.toUpperCase()
const result = Array.from({length:26}, v => 0);

for (let i = 0; i < inputWord.length; i++){
    result[inputWord.charCodeAt(i)-65]++;
}

const max = Math.max(...result);
const index = result.indexOf(max);
console.log(index)

let isSame = false;
for (let j = 0; j < 26; j++) {
  if (result[j] === max && index !== j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));




// const alphabetArr = Array.from({length:26}, (v, i) => String.fromCharCode(i + 65));

// for (let i = 0; i < alphabetArr.length; i++) {
//     let alphabet = alphabetArr.splice(i,1);
//     let count = 0;
//     for (let j = 0; j < inputWord.length; j++){
//         inputWord[j].indexOf(String(alphabet))
//         if (inputWord[j].indexOf(alphabet) !== -1){
//             count++;
//         }
//         alphabetArr.splice(i,0,count);
//     }
//     count = 0;
// }
// console.log(alphabetArr);

