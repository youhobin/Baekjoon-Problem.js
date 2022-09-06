const fs = require('fs');
let input = fs.readFileSync(__dirname+'/input9498.txt').toString();
const score = Number(input);

if (score >= 90 && score <= 100) {
    console.log('A');
} else if (score >= 80 && score <= 89) {
    console.log('B');
} else if (score >= 70 && score <= 79) {
    console.log('C');
} else if (score >= 60 && score <= 69) {
    console.log('D');
} else {
    console.log('F');
}
