const fs = require('fs');
let data = fs.readFileSync('data3.txt').toString().split(' ').map(Number);

console.log(data);

const newArr = [];

for (let i = 0; i < data.length; i++) {
    if (i === 0) {
        newArr.push(((data[i] + data[i + 1]) / 2).toFixed(1));
    } else if (i === data.length - 1) {
        newArr.push(((data[i] + data[i - 1]) / 2).toFixed(1));
    } else {
        newArr.push(((data[i - 1] + data[i] + data[i + 1]) / 3).toFixed(1));
    }
}

console.log(newArr);