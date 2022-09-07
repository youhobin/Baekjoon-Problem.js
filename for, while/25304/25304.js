const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input25304.txt').toString().split('\n');

const totalPrice = Number(input[0]);
const kindOfThing = Number(input[1]);

let price = 0;
for (let i = 2; i <= (kindOfThing + 1); i++) {
    const buy = input[i].split(' ').map(x => Number(x));
    const totalBuy = buy[0] * buy[1];
    price += totalBuy;
}

if (totalPrice === price) {
    console.log('Yes');
} else {
    console.log('No');
}