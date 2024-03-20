const fs = require('fs');
let data = fs.readFileSync('data3.txt').toString().split(' ').map(Number);