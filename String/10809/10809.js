const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input10809.txt').toString();

const word = input.toUpperCase();
const alphabetArr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));

const arr = [];
for (let i = 0; i < alphabetArr.length; i++) {
    arr.push(word.indexOf(alphabetArr[i]));
}

console.log(arr.join(' '))