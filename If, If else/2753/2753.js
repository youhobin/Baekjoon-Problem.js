const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input2753.txt').toString();
const year = Number(input);

if (year % 4 === 0 ) {
    if (year % 100 !== 0 || year % 400 === 0) { 
            console.log(1);
    } else {
        console.log(0);
    }
} else {
    console.log(0);
}