const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input3052.txt').toString().split('\n').map(Number);

arr = [];
input.forEach(x => {
    const num = x % 42;
    if (arr.indexOf(num) === -1) {
        arr.push(num);
    }
})

console.log(arr.length);



// 방법 2 set 이용해서 새로운 객체 만들고 ...arr로 다시 배열
// const remainder = input.map(number => number % 42);
// const set = new Set(remainder);
// const arr = [...set];
// console.log(arr.length);


// 방법 3
// let arr =[];
// let remainder;
// for (let i = 0; i < input.length; i++) {
//     remainder = input[i] % 42;
//     if (arr.indexOf(remainder) === -1) {
//         arr.push(remainder);
//     }
// }

// console.log(arr.length);