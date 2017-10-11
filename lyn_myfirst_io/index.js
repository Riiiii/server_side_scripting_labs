let fs = require('fs');
let num = fs.readFileSync(process.argv[2]);
let input = num.toString().split('\n').length - 1;
console.log(input);