const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input1546.txt').toString().trim().split('\n');

const subject = Number(input[0]);
const score = input[1].split(' ').map(Number);
const highScore = score.sort((a,b) => (b - a))[0];
const changeScore = score.map((number) => ((number/highScore)*100))

let scoreSum = 0;
for (let i = 0; i < subject; i++) {
    scoreSum += changeScore[i];
}
console.log(scoreSum/subject);

// const num = input[0] * 1;
// const score = input[1].split(" ");

// const max = Math.max(...score);
// console.log(max)
// let sum = 0;

// for (let i = 0; i < num; i++) {
//     sum += score[i] / max * 100;
// }

// console.log(sum / num);