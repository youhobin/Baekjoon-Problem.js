const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input4344.txt').toString().trim().split('\n');

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
    const testScore = input[i].split(' ').map(Number);
    const studentNumber = testScore.shift();
    const total = testScore.reduce((a,b) => a + b, 0);
    const average = total/studentNumber;
    
    let count = 0;
    for (let j = 0; j < studentNumber; j++) {
        if (testScore[j] > average) {
            count++;
        }
    }

    const result = ((count/studentNumber)*100).toFixed(3);
    console.log(`${result}%`);
}
// const goodStudent = testScore.filter(score => score > average);
    // console.log(`${((goodStudent.length / (testScore.length - 1))*100).toFixed(3)}%`) 
