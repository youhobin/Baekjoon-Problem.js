const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input15552.txt').toString().split('\n');

const testCase = Number(input[0]);
let answer = '';
for (let i = 1; i <= testCase; i++) {
    const num = input[i].split(' ').map(number => Number(number));
    answer += num[0] + num[1] + '\n';
}
console.log(answer);

//매번 콘솔로그 하면 시간이 오래 걸림 . 더한 값을 빈 문자열에 '\n'과 함께 넣고 answer 을 마지막에 출력.