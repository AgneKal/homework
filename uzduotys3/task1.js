const fs = require('fs');
let data = fs.readFileSync('data1.txt').toString().split(' ').map(Number);

let even = [];
let odd = [];

for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
        even.push(data[i]);
    } else {
        odd.push(data[i]);
    }
}

console.log(`Lyginiai skaičiai: ${even.join(' ')} \nNelyginiai skaičiai: ${odd.join(' ')}`);